var buttons =
document.querySelectorAll(".answer-btn");

for (var i = 0; i < buttons.length; i++) {

    buttons[i].onclick = function () {

        var parent =
        this.parentElement;

        var allBtns =
        parent.querySelectorAll(".answer-btn");

        for (var j = 0; j < allBtns.length; j++) {

            allBtns[j].classList.remove("selected");

        }

        this.classList.add("selected");

    };

}


document.getElementById("scanBtn").onclick =
function () {

    var loading =
    document.getElementById("loadingText");

    var resultBox =
    document.getElementById("resultBox");

    resultBox.style.display = "none";

    var messages = [

        "Reading your thoughts...",
        "Scanning brainwaves...",
        "Detecting chaos levels...",
        "Opening hidden memories...",
        "Calculating your vibe...",
        "Machine is judging you..."
    ];

    var index = 0;

    loading.innerHTML = messages[index];

    var interval = setInterval(function () {

        index++;

        if (index < messages.length) {

            loading.innerHTML =
            messages[index];

        } else {

            clearInterval(interval);

            loading.innerHTML =
            "Scan complete.";

            showResult();

        }

    }, 1000);

};


function showResult() {

    var resultBox =
    document.getElementById("resultBox");

    var results = [

        "🧠 You are 87% chaos. The machine fears you.",

        "🌙 Your brain has 42 tabs open right now.",

        "💀 You definitely create fake scenarios before sleeping.",

        "✨ You are super niche twin I like you.",

        "🚨 The machine detected severe overthinking.",

        "👁️ You probably say 'it's fine' when it is NOT fine.",

        "🪐 You give mysterious main character energy.",

        "🔥 You would lowk cross the 67 kid I fw u more.",

        "🧃 You act calm but your thoughts are a battlefield.",

        "🌌 Your vibe is oddly comforting yet concerning.",

        "🎧 You probably get emotionally attached to songs.",

        "🛰️ The machine predicts 3AM motivation bursts.",

        "💅 You're either iconic or a complete disaster.",

        "👀 Your FBI agent is deeply entertained.",

        "⚡ You radiate chaotic gremlin energy.",

        "🫠 You overthink texts for absolutely no reason.",

        "🌠 You belong in a late-night neon city aesthetic.",

        "🧍 You pretend to be normal. It almost works."

    ];

    var randomResult =
    results[Math.floor(Math.random() * results.length)];

    resultBox.style.display = "block";

    resultBox.innerHTML = randomResult;

}