var sentences = [

    "The universe is bigger than anything we can imagine.",

    "Typing quickly takes practice and patience every day.",

    "Small projects can become amazing with creativity.",

    "Web development combines logic design and imagination.",

    "Games become more fun when they challenge your skills."

];

var currentSentence = "";

var timer = 60;

var countdown;


window.onload = function () {

    startGame();

};


function startGame() {

    clearInterval(countdown);

    timer = 60;


    document.getElementById("timer").innerHTML =
    timer;

    document.getElementById("wpm").innerHTML =
    "0";

    document.getElementById("accuracy").innerHTML =
    "100%";

    document.getElementById("inputBox").value =
    "";


    document.getElementById("resultMessage").innerHTML =
    "Finish typing then press the button.";


    var randomIndex =
    Math.floor(Math.random() * sentences.length);

    currentSentence =
    sentences[randomIndex];


    document.getElementById("sentence").innerHTML =
    currentSentence;


    countdown = setInterval(function () {

        timer--;

        document.getElementById("timer").innerHTML =
        timer;


        if (timer <= 0) {

            clearInterval(countdown);

            document.getElementById("resultMessage").innerHTML =
            "Time is up. Try again.";

        }

    }, 1000);

}


function checkTyping() {

    var input =
    document.getElementById("inputBox").value;


    var words =
    input.split(" ").length;


    var wpm =
    words * 2;


    document.getElementById("wpm").innerHTML =
    wpm;


    var correct = 0;


    for (var i = 0; i < input.length; i++) {

        if (input.charAt(i) ==
        currentSentence.charAt(i)) {

            correct++;

        }

    }


    var accuracy = 100;


    if (input.length > 0) {

        accuracy =
        Math.floor((correct / input.length) * 100);

    }


    document.getElementById("accuracy").innerHTML =
    accuracy + "%";

}


function finishGame() {

    var input =
    document.getElementById("inputBox").value;


    if (input != currentSentence) {

        document.getElementById("resultMessage").innerHTML =
        "The sentence is not complete yet.";

        return;

    }


    clearInterval(countdown);


    var wpm =
    document.getElementById("wpm").innerHTML;


    var message = "";


    if (wpm < 20) {

        message =
        "Good try. Practice more to improve speed.";

    }

    else if (wpm < 40) {

        message =
        "Nice work. Your typing is getting better.";

    }

    else if (wpm < 60) {

        message =
        "Great typing speed. Impressive.";

    }

    else {

        message =
        "Insane typing speed. You are a typing machine.";

    }


    document.getElementById("resultMessage").innerHTML =
    message;

}