// Trigger Bot - Fast Reactive Fire
let body = $response.body;

try {
  let data = JSON.parse(body);
  data.triggerBot = true;
  data.triggerDelay = 35;
  data.fireOnSight = true;
  data.reactionTime = "ultra-fast";
  data.targetValidation = true;
  body = JSON.stringify(data);
} catch (e) {
  console.log("Trigger error:", e);
}

$done({ body });
