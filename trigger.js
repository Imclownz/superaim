// Enhanced Trigger Bot Script
let body = $response.body;

try {
  let data = JSON.parse(body);
  data.triggerBot = true;
  data.triggerDelay = 60;
  data.fireOnSight = true;
  data.reactionTime = "fast";
  data.targetValidation = true;
  body = JSON.stringify(data);
} catch (e) {
  console.log("Trigger error:", e);
}

$done({ body });
