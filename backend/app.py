from flask import Flask, jsonify, Response
from config import database_config
from models import Inventory
import sqlalchemy
import logging


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
    except sqlalchemy.exc.OperationalError as e:
        logging.error(e)
        session.close()
        return Response(str(e), status=500)
    except Exception as ex:
        logging.error(ex)
        session.close()
        raise
 

@app.route("/health")
def health():
    return jsonify({ "message": "OK" })


    