var space =

document.getElementById("space");


var canvas =

document.getElementById("lines");


var ctx =

canvas.getContext("2d");


var constellations = [[]];


resizeCanvas();


window.onresize = resizeCanvas;


space.onclick = createStar;


document.getElementById("clearBtn").onclick = clearSky;

document.getElementById("undoBtn").onclick = undoStar;

document.getElementById("newConstellationBtn").onclick = newConstellation;


function resizeCanvas() {

    canvas.width = space.offsetWidth;

    canvas.height = space.offsetHeight;

    drawLines();

}


function createStar(event) {

    var rect =

    space.getBoundingClientRect();


    var x =

    event.clientX - rect.left;


    var y =

    event.clientY - rect.top;


    var star =

    document.createElement("div");


    star.className = "star";


    star.style.left =

    (x - 7) + "px";


    star.style.top =

    (y - 7) + "px";


    space.appendChild(star);


    var currentConstellation =

    constellations[constellations.length - 1];


    currentConstellation.push({

        x:x,
        y:y,
        element:star

    });


    drawLines();

    updateMessage();

}


function drawLines() {

    ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
    );


    ctx.strokeStyle =

    "rgba(255,255,255,0.8)";


    ctx.lineWidth = 2;


    for (var c = 0; c < constellations.length; c++) {

        var stars = constellations[c];


        for (var i = 0; i < stars.length - 1; i++) {

            ctx.beginPath();

            ctx.moveTo(
            stars[i].x,
            stars[i].y
            );

            ctx.lineTo(
            stars[i + 1].x,
            stars[i + 1].y
            );

            ctx.stroke();

        }

    }

}


function newConstellation() {

    constellations.push([]);


    document.getElementById("message").innerHTML =

    "Started a new constellation.";

}


function clearSky() {

    for (var c = 0; c < constellations.length; c++) {

        for (var i = 0; i < constellations[c].length; i++) {

            constellations[c][i].element.remove();

        }

    }


    constellations = [[]];


    drawLines();


    document.getElementById("message").innerHTML =

    "The galaxy has been cleared.";

}


function undoStar() {

    var currentConstellation =

    constellations[constellations.length - 1];


    if (currentConstellation.length == 0) {

        return;

    }


    var lastStar =

    currentConstellation.pop();


    lastStar.element.remove();


    drawLines();


    document.getElementById("message").innerHTML =

    "Last star removed.";

}


function updateMessage() {

    var name =

    document.getElementById("constellationName").value;


    if (name == "") {

        name = "Unnamed Constellation";

    }


    document.getElementById("message").innerHTML =

    "You created: " + name;

}