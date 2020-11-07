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
@app.route('/groups/<group_id>/mood')
def group_mood(group_id):


# A welcome message to test our server
@app.route('/users/<user_id>/')
def index():
    return engine.execute("SELECT group,AVG() FROM user").fetchall()[0][0]

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)


"""
SELECT u.id, (SELECT mood FROM mood WHERE "user"=u.id ORDER BY timestamp ASC LIMIT 1) FROM "user" AS u;

SELECT u.id, AVG(SELECT mood FROM mood WHERE "user"=u.id ORDER BY timestamp ASC LIMIT 1) FROM "user" AS u WHERE EXISTS (SELECT * FROM tag_user WHERE "user"=u.id AND tag=1);
"""