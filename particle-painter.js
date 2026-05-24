var canvas =
document.getElementById("paintCanvas");

var ctx =
canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

var particles = [];

var rainbowMode = false;
var gravityMode = false;
var drawMode = false;

document.getElementById("rainbowBtn").onclick = toggleRainbow;
document.getElementById("gravityBtn").onclick = toggleGravity;
document.getElementById("clearBtn").onclick = clearCanvas;
document.getElementById("drawModeBtn").onclick = toggleDrawMode;

canvas.onmousemove = createParticles;
canvas.onclick = explosion;


function createParticles(event) {

    var rect = canvas.getBoundingClientRect();

    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    for (var i = 0; i < 4; i++) {

        particles.push({

            x: x,
            y: y,

            size: Math.random() * 8 + 2,

            speedX: Math.random() * 4 - 2,
            speedY: Math.random() * 4 - 2,

            alpha: 1,

            color: getColor(),

            sticky: drawMode

        });

    }
}


function explosion(event) {

    var rect = canvas.getBoundingClientRect();

    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    for (var i = 0; i < 50; i++) {

        particles.push({

            x: x,
            y: y,

            size: Math.random() * 10 + 3,

            speedX: Math.random() * 10 - 5,
            speedY: Math.random() * 10 - 5,

            alpha: 1,

            color: getColor(),

            sticky: drawMode

        });

    }

    document.getElementById("message").innerHTML =
    "Cosmic burst created ✨";
}


function getColor() {

    if (rainbowMode) {

        var colors = [
            "#ff66cc",
            "#c084fc",
            "#60a5fa",
            "#34d399",
            "#fde047",
            "#fb7185",
            "#ffffff"
        ];

        return colors[Math.floor(Math.random() * colors.length)];
    }

    return document.getElementById("colorPicker").value;
}


function animateParticles() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < particles.length; i++) {

        var p = particles[i];

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (!p.sticky) {

            p.x += p.speedX;
            p.y += p.speedY;

            if (gravityMode) {
                p.speedY += 0.08;
            }

            p.alpha -= 0.01;
        }
    }

    var newParticles = [];

    for (var i = 0; i < particles.length; i++) {

        if (particles[i].sticky || particles[i].alpha > 0) {
            newParticles.push(particles[i]);
        }
    }

    particles = newParticles;

    requestAnimationFrame(animateParticles);
}

animateParticles();


function toggleRainbow() {

    rainbowMode = !rainbowMode;

    document.getElementById("message").innerHTML =
    rainbowMode ? "Rainbow mode ON 🌈" : "Rainbow mode OFF";
}


function toggleGravity() {

    gravityMode = !gravityMode;

    document.getElementById("message").innerHTML =
    gravityMode ? "Gravity ON 🌍" : "Gravity OFF";
}


function toggleDrawMode() {

    drawMode = !drawMode;

    document.getElementById("message").innerHTML =
    drawMode ? "Draw Mode ON ✏️ (particles stay)" : "Draw Mode OFF";
}


function clearCanvas() {

    particles = [];

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    document.getElementById("message").innerHTML =
    "Canvas cleared 🧹";
}