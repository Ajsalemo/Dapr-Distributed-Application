FROM python:3.9-slim

WORKDIR /app
COPY requirements.txt /app/

RUN pip install -r /app/requirements.txt
COPY . /app/

EXPOSE 8000
CMD [ "gunicorn", "-b", "0.0.0.0:8000", "--timeout", "600", "app:app" ]