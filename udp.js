// Enhanced UDP Optimization Script
let body = $response.body;

try {
  let data = JSON.parse(body);
  data.useUDP = true;
  data.udpPriority = 1;
  data.udpBufferSize = 1024;
  data.udpKeepAlive = true;
  data.udpAcceleration = true;
  body = JSON.stringify(data);
} catch (e) {
  console.log("UDP Boost error:", e);
}

$done({ body });
