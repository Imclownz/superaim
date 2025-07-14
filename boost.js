// FPS and Visual Boost Script
let body = $response.body;

try {
  let data = JSON.parse(body);
  data.fpsLimit = 120;
  data.fpsBoostEnabled = true;
  data.graphicsQuality = "ultra-low";
  data.textureFiltering = "low";
  data.resolutionScale = 0.75;
  data.renderDistance = "short";
  data.disableParticles = true;
  data.optimizedShaders = true;
  body = JSON.stringify(data);
} catch (e) {
  console.log("Boost error:", e);
}

$done({ body });
