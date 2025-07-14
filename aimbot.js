// Enhanced Aimbot Script for Free Fire
let body = $response.body;

try {
  let data = JSON.parse(body);
  data.autoAim = true;
  data.aimAssistLevel = "pro";
  data.aimSensitivity = 1.2;
  data.aimFov = 30;
  data.aimSnap = true;
  data.aimTarget = "head";
  data.aimSmoothness = 0.85;
  data.aimPredictMovement = true;
  body = JSON.stringify(data);
} catch (e) {
  console.log("Aimbot error:", e);
}

$done({ body });
