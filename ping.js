// Latency Optimization Script
let body = $response.body;

try {
  let data = JSON.parse(body);
  data.latency = 15;
  data.networkType = "udp";
  data.packetDelay = 0;
  data.packetLossCompensation = true;
  data.jitterControl = true;
  data.retransmissionControl = true;
  body = JSON.stringify(data);
} catch (e) {
  console.log("Ping optimization error:", e);
}

$done({ body });
