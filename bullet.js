// 🚀 ADVANCED BULLET PHYSICS v5.0 - Precision Headshot at All Ranges
let body = $response.body;
const bulletToken = `BULLET_${Math.random().toString(36).substring(2, 9)}_${Date.now()}`;

try {
    let data = JSON.parse(body);
    
    // **CORE BULLET CONTROL**
    data.bulletConfig = {
        version: "5.0",
        mode: "adaptive_headshot", // Tự động điều chỉnh theo khoảng cách
        magnetism: "dynamic_lock", // Lực hút thông minh
        precision: 99.9, // Độ chính xác headshot
        smoothAim: true, // Tâm ngắm mượt trước khi khóa
        stickyLock: true // Dính chặt sau khi trúng
    };

    // **DISTANCE-BASED SETTINGS** (Tự điều chỉnh theo mét)
    data.distanceSettings = {
        closeRange: { // 0-30m
            bulletSpeed: 1.8, // Đạn siêu nhanh
            magnetism: 1.5, // Lực hút vừa phải
            smoothness: 0.7, // Mượt khi ngắm
            hitboxSize: 1.6 // Hitbox phóng to
        },
        midRange: { // 30-100m
            bulletSpeed: 1.3,
            magnetism: 2.0, // Lực hút mạnh hơn
            smoothness: 0.8,
            hitboxSize: 1.4
        },
        longRange: { // 100m+
            bulletSpeed: 1.0, // Đạn chuẩn
            magnetism: 2.5, // Lực hút cực đại
            smoothness: 0.9, // Mượt nhất
            hitboxSize: 1.2 // Hitbox chuẩn
        }
    };

    // **AIM SMOOTHNESS CONTROL** (Kiểm soát tâm ngắm)
    data.aimBehavior = {
        preLock: { // Trước khi khóa
            smoothness: 0.9, // Chuyển động mượt
            acceleration: "gentle", // Tăng tốc từ từ
            microAdjustments: true // Vi chỉnh liên tục
        },
        postLock: { // Sau khi khóa
            stickiness: 0.99, // Dính chặt 99%
            recoilCompensation: "full", // Bù giật hoàn toàn
            shakeReduction: 100 // Không rung
        }
    };

    // **ANTI-DETECTION**
    data.security = {
        patternRandomizer: true,
        checksum: crypto.createHash('sha3-256').update(bulletToken).digest('hex'),
        timestamp: Date.now()
    };

    body = JSON.stringify(data);
} catch (e) {
    console.log("Bullet Control Error:", e.message.substring(0, 15));
    body = $response.body;
}

$done({ body });
