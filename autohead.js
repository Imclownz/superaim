// Enhanced Auto Headshot Script
let body = $response.body;

try {
  let data = JSON.parse(body);
  data.headshotBias = 1.5;
  data.autoTargetHead = true;
  data.bulletCurve = "linear";
  data.hitRateBoost = 1.25;
  data.aimCorrection = true;
  data.headHitboxEnlarged = true;
  body = JSON.stringify(data);
} catch (e) {
  console.log("Auto headshot error:", e);
}

$done({ body });
