from flask import Flask, jsonify

from config import database_config
from models import Inventory

app = Flask(__name__)
session = database_config()


@app.route("/")
def hello_world():
    return jsonify({ "message": "Dapr-Distributed-Application | Flask" })


@app.route("/v1/api/bikes/all")
def get_all_bikes():
    try:
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
    except Exception as e:
        print(e)
        session.close()
        return str(e)


@app.route("/health")
def health():
    return jsonify({ "message": "OK" })


    