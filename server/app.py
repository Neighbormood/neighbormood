# app.py
from flask import Flask, request, jsonify
from config import Config
from sqlalchemy import create_engine
from sqlalchemy.ext.automap import automap_base

app = Flask(__name__)
app.config.from_object(Config)
engine = create_engine(app.config['SQLALCHEMY_DATABASE_URI'])
connection = engine.connect()
# /me
# /me/groups
# /users/ /
@app.route('/groups/<group_name>/mood')
def group_mood(group_name):
    return str(engine.execute(f"""SELECT AVG(recent_mood) FROM (
SELECT u.id, (SELECT mood FROM mood WHERE "user"=u.id ORDER BY timestamp ASC LIMIT 1) AS recent_mood FROM "user" AS u
WHERE EXISTS (SELECT * FROM tag_user JOIN tag ON tag_user.tag = tag.id WHERE tag_user."user"=u.id AND tag.name='{group_name}')) xyz;""").fetchone()[0])


# A welcome message to test our server
@app.route('/users/<user_id>/')
def index():
    return str(engine.execute(f"""SELECT timestamp,mood from mood where "user"=1 ORDER BY timestamp ASC;"""))

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)


"""
SELECT AVG(recent_mood) FROM (
SELECT u.id, (SELECT mood FROM mood WHERE "user"=u.id ORDER BY timestamp ASC LIMIT 1) AS recent_mood FROM "user" AS u) xyz;

SELECT u.id, recent_mood SELECT mood FROM mood WHERE "user"=u.id ORDER BY timestamp ASC LIMIT 1) FROM "user" AS u WHERE EXISTS (SELECT * FROM tag_user WHERE "user"=u.id AND tag=1);

SELECT AVG(recent_mood) FROM (
SELECT u.id, (SELECT mood FROM mood WHERE "user"=u.id ORDER BY timestamp ASC LIMIT 1) AS recent_mood FROM "user" AS u
WHERE EXISTS (SELECT * FROM tag_user WHERE "user"=u.id AND tag=1)
) xyz;

SELECT AVG(recent_mood) FROM (
SELECT u.id, (SELECT mood FROM mood WHERE "user"=u.id ORDER BY timestamp ASC LIMIT 1) AS recent_mood FROM "user" AS u
WHERE EXISTS (SELECT * FROM tag_user JOIN tag ON tag_user.tag = tag.id WHERE tag_user."user"=u.id AND tag.name='CS 101')) xyz;
"""
