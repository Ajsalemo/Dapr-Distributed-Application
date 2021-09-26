from flask import Flask, jsonify

from config import database_config
from models import Inventory

app = Flask(__name__)
session = database_config()

# SQL Alchemy connection string

@app.route("/")
def hello_world():
    return jsonify({ "message": "Dapr-Distributed-Application | Flask" })


@app.route("/v1/api/bikes/all")
def get_all_bikes():
    inventory = session.query(Inventory).all()
    bikes = [
        {
            "id": inv.id,
            "model": inv.model,
            "price": inv.price,
            "image": inv.image
        }
    for inv in inventory]  
    session.close()
    return jsonify({ "message": bikes })


@app.route("/health")
def health():
    return jsonify({ "message": "OK" })


    