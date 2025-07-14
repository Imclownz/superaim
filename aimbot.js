// Ultra Aimbot - Precision + Speed + Predictive Tracking
let body = $response.body;

try {
  let data = JSON.parse(body);
  data.autoAim = true;
  data.aimAssistLevel = "elite";
  data.aimSensitivity = 1.45;
  data.aimFov = 35;
  data.aimSnap = true;
  data.aimTarget = "head";
  data.aimSmoothness = 0.9;
  data.aimPredictMovement = true;
  data.aimAcceleration = true;
  data.latencyCompensation = true;
  body = JSON.stringify(data);
} catch (e) {
  console.log("Aimbot error:", e);
}

$done({ body });
