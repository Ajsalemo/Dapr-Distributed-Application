import os

from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

load_dotenv()

Base = declarative_base()

# Postgres environment variables
POSTGRES_USERNAME = os.environ.get('POSTGRES_USERNAME')
POSTGRES_HOST = os.environ.get('POSTGRES_HOST')
POSTGRES_PORT = os.environ.get('POSTGRES_PORT')
POSTGRES_DATABASE = os.environ.get('POSTGRES_DATABASE')
POSTGRES_PASSWORD = os.environ.get('POSTGRES_PASSWORD')

def database_config():
    engine = create_engine(
        f"postgresql://{POSTGRES_USERNAME}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/{POSTGRES_DATABASE}",
        pool_pre_ping=True
    )

    Session = sessionmaker(bind=engine)
    session = Session()
    return session
    
