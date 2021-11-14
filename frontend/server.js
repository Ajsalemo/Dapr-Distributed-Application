const express = require("express");
const path = require("path");
const axiosInstance = require("./src/config/axiosInstance");
const app = express();

const port = process.env.PORT || 8080;
const daprPort = process.env.DAPR_HTTP_PORT || 3500;

const daprUrl = `http://localhost:${daprPort}/v1.0/invoke`;
const secretsUrl = `http://localhost:${daprPort}/v1.0/secrets`;

// Serve static files
app.use(express.static(path.join(__dirname, "/build")));

// Get all bikes
app.get("/bikes", async (_, res) => {
  try {
    const { data } = await axiosInstance.get(
      `${daprUrl}/daprbackend/method/v1/api/bikes/all`
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Call the secret store
app.get("/secret", async (_, res) => {
  try {
    /*
      Check if the environment is running in Kubernetes
      If it is, pull from the default Kube secret store (for this project)
      Else, pull from the 'local' secret store configured in self-hosted mode (Docker-compose)
    */
    if (process.env.KUBERNETES_SERVICE_HOST) {
      const {
        data: { build: kubeBuildVar },
      } = await axiosInstance.get(`${secretsUrl}/kubernetes/build`);

      res.status(200).json({ build: kubeBuildVar });
    } else {
      const {
        data: { build: localBuildVar },
      } = await axiosInstance.get(`${secretsUrl}/local/build`);

      res.status(200).json({ build: localBuildVar });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error });
  }
});

// For all other requests, route to React client
app.all("*", function (_, res) {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
