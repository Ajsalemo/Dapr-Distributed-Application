const express = require("express");
const path = require("path");
const request = require("request");

const app = express();

const port = 8080;
const daprPort = process.env.DAPR_HTTP_PORT || 3500;

const daprUrl = `http://localhost:${daprPort}/v1.0/invoke`;

// Get all bikes
app.get("/bikes", async (req, res) =>
  req.pipe(request(`${daprUrl}/daprbackend/method/v1/api/bikes/all`)).pipe(res)
);

// Serve static files
app.use(express.static(path.join(__dirname, "/build")));

// For all other requests, route to React client
app.get("*", function (_req, res) {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});

app.listen(process.env.PORT || port, () =>
  console.log(`Server is listening on port ${port}`)
);
