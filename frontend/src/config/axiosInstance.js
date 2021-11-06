const axios = require("axios").default;
const Agent = require("agentkeepalive");
const HttpsAgent = require("agentkeepalive").HttpsAgent;
const os = require("os");

const numOfCoresForConnections = () => {
  if (os.cpus().length > 1 && os.cpus().length < 128) {
    const val = 128 / os.cpus().length;
    return Math.ceil(val);
  } else {
    return 128;
  }
};
// Create a reusable connection instance
const keepAliveAgent = new Agent({
  maxSockets: numOfCoresForConnections(),
  maxFreeSockets: numOfCoresForConnections(), 
  timeout: 60000, // active socket keepalive for 60 seconds
  freeSocketTimeout: 30000, // free socket keepalive for 30 seconds
});

// HTTPS agent
const httpsKeepAliveAgent = new HttpsAgent({
    maxSockets: numOfCoresForConnections(),
    maxFreeSockets: numOfCoresForConnections(), 
    timeout: 60000, // active socket keepalive for 30 seconds
  freeSocketTimeout: 30000, // free socket keepalive for 30 seconds
});

const axiosInstance = axios.create({
  // Create an agent for both HTTP and HTTPS
  httpAgent: keepAliveAgent,
  httpsAgent: httpsKeepAliveAgent,
});

module.exports = axiosInstance;
