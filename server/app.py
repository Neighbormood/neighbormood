# app.py
from flask import Flask, request, jsonify
from config import Config
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.automap import automap_base

app = Flask(__name__)
app.config.from_object(Config)
engine = create_engine(app.config['SQLALCHEMY_DATABASE_URI'])
connection = engine.connect()

# A welcome message to test our server
@app.route('/')
def index():
    return engine.execute("SELECT * FROM users").fetchall()[0][0]

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)
