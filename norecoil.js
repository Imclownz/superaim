// Ultra No Recoil + Anti Spread
let body = $response.body;

try {
  let data = JSON.parse(body);
  data.recoil = 0;
  data.recoilPattern = "none";
  data.spread = 0;
  data.randomKick = false;
  data.weaponStabilization = true;
  body = JSON.stringify(data);
} catch (e) {
  console.log("No Recoil error:", e);
}

$done({ body });
