var score = 0;

var timeLeft = 30;

var gameRunning = false;

var starSpawner;

var gameTimer;


document.getElementById("startBtn").onclick = startGame;


function startGame() {

    score = 0;

    timeLeft = 30;

    gameRunning = true;


    document.getElementById("score").innerHTML =
    "Score: " + score;

    document.getElementById("timer").innerHTML =
    "Time: " + timeLeft;

    document.getElementById("message").innerHTML =
    "Catch the stars quickly!";


    document.getElementById("gameArea").innerHTML = "";


    clearInterval(starSpawner);

    clearInterval(gameTimer);


    starSpawner = setInterval(makeStar, 700);

    gameTimer = setInterval(updateTime, 1000);

}


function makeStar() {

    if (gameRunning == false) {

        return;

    }


    var gameArea =
    document.getElementById("gameArea");


    var star =
    document.createElement("div");


    star.className = "star";

    star.innerHTML = "⭐";


    var randomX =
    Math.floor(Math.random() * 90);


    star.style.left =
    randomX + "%";


    star.style.top = "-40px";


    gameArea.appendChild(star);


    var position = -40;


    var fallSpeed =
    Math.floor(Math.random() * 5) + 3;


    var falling =
    setInterval(function () {


        position += fallSpeed;


        star.style.top =
        position + "px";


        if (position > 500) {

            clearInterval(falling);

            if (star.parentNode) {

                star.remove();

            }

        }


    }, 30);


    star.onclick = function () {

        score++;

        document.getElementById("score").innerHTML =
        "Score: " + score;

        clearInterval(falling);

        star.remove();

    };

}


function updateTime() {

    timeLeft--;


    document.getElementById("timer").innerHTML =
    "Time: " + timeLeft;


    if (timeLeft <= 0) {

        endGame();

    }

}


function endGame() {

    gameRunning = false;


    clearInterval(starSpawner);

    clearInterval(gameTimer);


    var ending = "";


    if (score < 10) {

        ending =
        "You caught " + score +
        " stars.<br><br>" +
        "The galaxy expected more from you.";

    }


    else if (score < 20) {

        ending =
        "You caught " + score +
        " stars.<br><br>" +
        "Pretty impressive star reflexes.";

    }


    else if (score < 35) {

        ending =
        "You caught " + score +
        " stars.<br><br>" +
        "You are officially a space guardian.";

    }


    else {

        ending =
        "You caught " + score +
        " stars.<br><br>" +
        "The universe fears your power.";

    }


    document.getElementById("message").innerHTML =
    ending;

}