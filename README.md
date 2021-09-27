# Dapr-Distributed-Application

A [Dapr](https://dapr.io/) application made up of a React/Express front-end and a Flask back-end in self-hosted mode with Docker-Compose. 
Currently developed to be ran in self-hosted mode.

Project structure:
- `frontend`: 
  - A React application which utilizes Express to serve it's static files and run server side calls to make use of its Dapr sidecar.
  - Uses Daprs [service invocation](https://docs.dapr.io/reference/api/service_invocation_api/) which calls to Daprs `frontend` sidecar. This call invokes the associated endpoint on the `backend` service which is used to retrieve a list of bikes from Azure Database for PostgreSQL.
  - Uses Daprs [secrets API](https://docs.dapr.io/reference/api/secrets_api/) to retrieve secrets for a local environment Secret Store(.env file).
- `backend`:
  - A Flask application which retrieves data from Azure Database for PostgreSQL and returns this to the `frontend` to be displayed.
- `components`:
  - Dapr components are defined in this location.
  - `config.yaml` is defined to utilize [Dapr distributed tracing with Zipkin](https://docs.dapr.io/operations/monitoring/tracing/setup-tracing/#zipkin-in-self-hosted-mode)
  - `localsecretstore.yaml` is defined to utilize the local environment variable secret store.

![Imgur](https://imgur.com/WUCzN9T.png)

<br>

![Imgur](https://imgur.com/zjUyQB4.png)
