from sqlalchemy import Column, String, Integer, Float

from config import Base


class Inventory(Base):
    __tablename__ = 'inventory'

    id = Column(Integer, primary_key=True)
    model = Column(String)
    price = Column(Float)
    image = Column(String)


    def __init__(self, model, price, image):
        self.model = model
        self.price = price
        self.image = image