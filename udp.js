// UDP Accelerated Gaming Mode
let body = $response.body;

try {
  let data = JSON.parse(body);
  data.useUDP = true;
  data.udpPriority = 2;
  data.udpKeepAlive = true;
  data.udpAcceleration = true;
  data.packetOrderFix = true;
  data.socketBufferTune = true;
  body = JSON.stringify(data);
} catch (e) {
  console.log("UDP Boost error:", e);
}

$done({ body });
