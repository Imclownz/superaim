// Advanced Auto Headshot - Stability + Extended Hitbox
let body = $response.body;

try {
  let data = JSON.parse(body);
  data.headshotBias = 1.8;
  data.autoTargetHead = true;
  data.bulletCurve = "linear";
  data.hitRateBoost = 1.35;
  data.aimCorrection = true;
  data.headHitboxEnlarged = true;
  data.predictiveLineup = true;
  body = JSON.stringify(data);
} catch (e) {
  console.log("Auto headshot error:", e);
}

$done({ body });
