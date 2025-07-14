// FPS Boost + Input Delay Reducer
let body = $response.body;

try {
  let data = JSON.parse(body);
  data.fpsLimit = 144;
  data.fpsBoostEnabled = true;
  data.inputDelayReduction = true;
  data.renderAheadLimit = 0;
  data.lowLatencyMode = true;
  data.graphicsQuality = "ultra-low";
  data.uiAnimations = false;
  data.resolutionScale = 0.65;
  body = JSON.stringify(data);
} catch (e) {
  console.log("Boost error:", e);
}

$done({ body });
