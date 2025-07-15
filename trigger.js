// Zero Delay Trigger v4.0
let body = $response.body;

try {
    let data = JSON.parse(body);
    
    data.triggerSystem = {
        activation: "on_target_acquire",
        delay: 0, // Zero delay
        validation: "instant_check",
        fireMode: "headshot_only",
        burstControl: "perfect_rhythm"
    };

    body = JSON.stringify(data);
} catch (e) {
    console.log("Trigger Error:", e.message.substring(0,15));
    body = $response.body;
}

$done({body});
