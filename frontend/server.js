const express = require("express");
const path = require("path");
const request = require("request");
const axios = require("axios").default;

const app = express();

const port = 8080;
const daprPort = process.env.DAPR_HTTP_PORT || 3500;

const daprUrl = `http://localhost:${daprPort}/v1.0/invoke`;
const secretsUrl = `http://localhost:${daprPort}/v1.0/secrets`;

// Serve static files
app.use(express.static(path.join(__dirname, "/build")));

// Get all bikes
app.get("/bikes", async (_, res) => {
  const { data } = await axios.get(`${daprUrl}/daprbackend/method/v1/api/bikes/all`)
  res.json(data);
});

// Call the secret store
app.get("/secret", async (_, res) => {
  const { data: { BUILD } } = await axios.get(`${secretsUrl}/local/BUILD`);
  res.status(200).json({ build: BUILD });
});

// For all other requests, route to React client
app.all("*", function (_, res) {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});

app.listen(process.env.PORT || port, () =>
  console.log(`Server is listening on port ${port}`)
);
