# app.py
import json
from flask import Flask, request, jsonify
from config import Config
from sqlalchemy import create_engine
from sqlalchemy.ext.automap import automap_base
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)
engine = create_engine(app.config['SQLALCHEMY_DATABASE_URI'])
connection = engine.connect()


@app.route('/groups/<group_name>/mood')
def group_mood(group_name):
    return str(engine.execute(f"""SELECT AVG(recent_mood) FROM (
SELECT u.id, (SELECT mood FROM mood WHERE "user"=u.id ORDER BY timestamp ASC LIMIT 1) AS recent_mood FROM "user" AS u
WHERE EXISTS (SELECT * FROM tag_user JOIN tag ON tag_user.tag = tag.id WHERE tag_user."user"=u.id AND tag.name='{group_name}')) xyz;""").fetchone()[
                   0])


@app.route('/users/<user_id>/')
def index(user_id):
    # object = engine.execute(f"""SELECT timestamp,mood from mood where "user"='{user_id}' ORDER BY timestamp ASC;""").fetchall()
    object = engine.execute(
        f"""SELECT timestamp,mood from mood where "user"={user_id} and timestamp <= current_timestamp - interval '30 day' ORDER BY timestamp ASC;""").fetchall()
    returnobj = []
    for datetime, mood in object:
        returnobj.append({'datetime': str(datetime), 'mood': mood})
    return json.dumps(returnobj)


@app.route('/users/<user_id>/groups')
def user_groups(user_id):
    object = engine.execute(
        f"""SELECT tag.name FROM tag_user JOIN tag ON tag_user.tag = tag.id WHERE tag_user."user"={user_id}""").fetchall()
    returnobj = []
    for name in object:
        returnobj.append(name[0])
    return json.dumps(returnobj)


# TODO: figure out if user_id inside json or as part of url
@app.route('/users/<user_id>/add_mood', methods=["PUT"])
def add_mood(user_id):
    json = request.json
    engine.execute(
        f"""INSERT INTO mood("user",timestamp,mood) VALUES ({json['uid']}, '{json['date'] + " " + json['time']}', {json['mood']})""")
    return jsonify({'result': True})


@app.route('/sign_user', methods=["POST"])
def login_user():
    json = request.json
    result = engine.execute(f"""SELECT "user" FROM google2user WHERE id={json["google_id"]}""").fetchall()
    if not len(result):
        user_id = \
        engine.execute(f"""INSERT INTO "user" VALUES ((SELECT max(id+1) FROM "user")) returning id;""").fetchone()[0]
        engine.execute(f"""INSERT INTO google2user VALUES ({json['google_id']}, {user_id})""")
    else:
        user_id = result[0][0]
    return jsonify({"uid": user_id})


if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)
