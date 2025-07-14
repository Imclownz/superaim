// Smart Weapon Detection AI v2
let body = $response.body;

try {
  let data = JSON.parse(body);
  data.weaponAIEnabled = true;
  data.smartDetection = true;
  data.weaponTypeAdapt = true;
  data.recoilProfileSync = true;
  data.autoAdjustHandling = true;
  body = JSON.stringify(data);
} catch (e) {
  console.log("Weapon AI error:", e);
}

$done({ body });
