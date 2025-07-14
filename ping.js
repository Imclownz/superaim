// Network Optimizer - Ultra Low Ping Simulation
let body = $response.body;

try {
  let data = JSON.parse(body);
  data.latency = 5;
  data.packetLoss = 0;
  data.networkType = "udp";
  data.packetJitter = 0;
  data.jitterControl = true;
  data.packetFlush = true;
  data.priorityMode = "realtime";
  body = JSON.stringify(data);
} catch (e) {
  console.log("Ping optimization error:", e);
}

$done({ body });
