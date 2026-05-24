/* WINDOW CANVAS */

var windowCanvas =
document.getElementById("windowCanvas");

var windowCtx =
windowCanvas.getContext("2d");

windowCanvas.width =
windowCanvas.offsetWidth;

windowCanvas.height =
windowCanvas.offsetHeight;


/* PAPER CANVAS */

var paperCanvas =
document.getElementById("paperCanvas");

var paperCtx =
paperCanvas.getContext("2d");

paperCanvas.width =
paperCanvas.offsetWidth;

paperCanvas.height =
paperCanvas.offsetHeight;


/* WINDOW FOG */

windowCtx.fillStyle =
"rgba(255,255,255,0.18)";

windowCtx.fillRect(
0,
0,
windowCanvas.width,
windowCanvas.height
);


/* DRAW WINDOW */

var drawingWindow = false;

windowCanvas.onmousedown =
function () {

    drawingWindow = true;

};

windowCanvas.onmouseup =
function () {

    drawingWindow = false;

    windowCtx.beginPath();

};

windowCanvas.onmousemove =
function (e) {

    if (!drawingWindow) return;

    var rect =
    windowCanvas.getBoundingClientRect();

    var x =
    e.clientX - rect.left;

    var y =
    e.clientY - rect.top;

    windowCtx.globalCompositeOperation =
    "destination-out";

    windowCtx.lineWidth = 25;

    windowCtx.lineCap = "round";

    windowCtx.lineTo(x,y);

    windowCtx.stroke();

    windowCtx.beginPath();

    windowCtx.moveTo(x,y);

};


/* CLEAR WINDOW */

document.getElementById("clearWindowBtn").onclick =
function () {

    windowCtx.globalCompositeOperation =
    "source-over";

    windowCtx.clearRect(
    0,
    0,
    windowCanvas.width,
    windowCanvas.height
    );

    windowCtx.fillStyle =
    "rgba(255,255,255,0.18)";

    windowCtx.fillRect(
    0,
    0,
    windowCanvas.width,
    windowCanvas.height
    );

};


/* DRAW PAPER */

var drawingPaper = false;

paperCanvas.onmousedown =
function () {

    drawingPaper = true;

};

paperCanvas.onmouseup =
function () {

    drawingPaper = false;

    paperCtx.beginPath();

};

paperCanvas.onmousemove =
function (e) {

    if (!drawingPaper) return;

    var rect =
    paperCanvas.getBoundingClientRect();

    var x =
    e.clientX - rect.left;

    var y =
    e.clientY - rect.top;

    paperCtx.globalCompositeOperation =
    "source-over";

    paperCtx.lineWidth = 3;

    paperCtx.lineCap = "round";

    paperCtx.strokeStyle =
    "#111827";

    paperCtx.lineTo(x,y);

    paperCtx.stroke();

    paperCtx.beginPath();

    paperCtx.moveTo(x,y);

};


/* CLEAR PAPER */

document.getElementById("clearPaperBtn").onclick =
function () {

    paperCtx.clearRect(
    0,
    0,
    paperCanvas.width,
    paperCanvas.height
    );

};


/* CLOCK */

function updateClock() {

    var now =
    new Date();

    var hours =
    now.getHours();

    var minutes =
    now.getMinutes();

    var ampm =
    hours >= 12 ? "PM" : "AM";

    hours =
    hours % 12;

    if (hours === 0) {

        hours = 12;

    }

    if (minutes < 10) {

        minutes = "0" + minutes;

    }

    document.getElementById("clockTime").innerHTML =
    hours + ":" + minutes + " " + ampm;

    var options = {

        weekday:"long",
        month:"long",
        day:"numeric"

    };

    document.getElementById("clockDate").innerHTML =
    now.toLocaleDateString(
    "en-US",
    options
    );

}

updateClock();

setInterval(updateClock,1000);


/* SMOOTH RAIN */

var rainContainer =
document.getElementById("rainContainer");

for (var i = 0; i < 120; i++) {

    var drop =
    document.createElement("div");

    drop.classList.add("raindrop");

    drop.style.left =
    Math.random() * 100 + "%";

    drop.style.top =
    Math.random() * -800 + "px";

    drop.style.height =
    Math.random() * 60 + 20 + "px";

    drop.style.animationDuration =
    Math.random() * 1.5 + 1 + "s";

    drop.style.animationDelay =
    Math.random() * 2 + "s";

    rainContainer.appendChild(drop);

}


/* LIGHTNING */

function lightningFlash() {

    var flash =
    document.getElementById("lightning");

    flash.style.opacity = "0.8";

    setTimeout(function(){

        flash.style.opacity = "0";

    },120);

}

setInterval(function(){

    if (Math.random() > 0.95){

        lightningFlash();

    }

},3000);


/* RESIZE */

window.onresize =
function () {

    windowCanvas.width =
    windowCanvas.offsetWidth;

    windowCanvas.height =
    windowCanvas.offsetHeight;

    paperCanvas.width =
    paperCanvas.offsetWidth;

    paperCanvas.height =
    paperCanvas.offsetHeight;

};