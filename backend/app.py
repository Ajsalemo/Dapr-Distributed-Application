import logging

import requests
from flask import Flask, jsonify
from sqlalchemy import create_engine

app = Flask(__name__)
parsed_postgres_str = None
# SQL Alchemy connection string
# engine = create_engine()

@app.route("/")
def hello_world():
    return jsonify({ "message": "Dapr-Distributed-Application | Flask" })


@app.route("/health")
def health():
    return jsonify({ "message": "OK" })


    