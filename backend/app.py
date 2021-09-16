from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def hello_world():
    return jsonify({ "message": "Dapr-Distributed-Application | Flask"})

@app.route("/health")
def health():
    return jsonify({ "message": "OK"})