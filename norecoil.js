// No Recoil & Spread Script
let body = $response.body;

try {
  let data = JSON.parse(body);
  data.recoil = 0;
  data.spread = 0;
  data.recoilPattern = "none";
  data.recoilMultiplier = 0;
  data.shake = false;
  data.randomKick = false;
  body = JSON.stringify(data);
} catch (e) {
  console.log("No Recoil error:", e);
}

$done({ body });
