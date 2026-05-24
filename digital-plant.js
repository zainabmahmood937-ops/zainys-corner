var water = 50;

var sunlight = 50;

var happiness = 50;

var energy = 50;

var plantSize = 120;

var movePosition = 50;


updateStats();

updateSky();


safeButton("waterBtn", waterPlant);

safeButton("sunBtn", giveSun);

safeButton("loveBtn", lovePlant);

safeButton("musicBtn", playMusic);

safeButton("medicineBtn", giveMedicine);

safeButton("moveBtn", movePlant);

safeButton("resetBtn", resetPlant);


function safeButton(id, action) {

    var button = document.getElementById(id);

    if (button) {

        button.onclick = action;

    }

}


function waterPlant() {

    water += 15;

    happiness += 5;

    plantSize += 15;

    updatePlant();

    updateStats();

    setMessage(
    "Your plant absorbed the water happily."
    );

}


function giveSun() {

    sunlight += 15;

    happiness += 5;

    plantSize += 15;

    updatePlant();

    updateStats();

    setMessage(
    "Your plant is glowing in the sunlight."
    );

}


function lovePlant() {

    happiness += 20;

    plantSize += 20;

    updatePlant();

    updateStats();


    var messages = [

        "Your plant feels appreciated.",

        "The plant radiates happiness.",

        "Your plant now trusts you.",

        "Your plant thinks you are cool.",

        "The plant is emotionally thriving."

    ];


    var randomMessage =

    messages[Math.floor(Math.random() * messages.length)];


    setMessage(randomMessage);

}


function playMusic() {

    happiness += 15;

    energy += 15;

    plantSize += 10;

    updatePlant();

    updateStats();

    setMessage(
    "Your plant is vibing to the music."
    );

}


function giveMedicine() {

    energy += 25;

    happiness += 10;

    updatePlant();

    updateStats();

    setMessage(
    "Your plant feels refreshed and healthy."
    );

}


function movePlant() {

    movePosition += 15;


    if (movePosition > 80) {

        movePosition = 20;

    }


    var plant =

    document.getElementById("plant");


    if (plant) {

        plant.style.left =
        movePosition + "%";

    }


    setMessage(
    "Your plant changed spots near the window."
    );

}


function resetPlant() {

    water = 50;

    sunlight = 50;

    happiness = 50;

    energy = 50;

    plantSize = 120;

    movePosition = 50;


    var plant =

    document.getElementById("plant");


    if (plant) {

        plant.style.left = "50%";

    }


    updatePlant();

    updateStats();

    setMessage(
    "Your plant has been reset."
    );

}


function updatePlant() {

    var plant =

    document.getElementById("plant");


    if (!plant) {

        return;

    }


    if (plantSize > 320) {

        plantSize = 320;

    }


    plant.style.fontSize =

    plantSize + "px";


    if (happiness < 80) {

        plant.innerHTML = "🌱";

    }

    else if (happiness < 160) {

        plant.innerHTML = "🌿";

    }

    else {

        plant.innerHTML = "🌳";

    }

}


function updateStats() {

    setText(
    "waterText",
    "Water: " + water
    );

    setText(
    "sunText",
    "Sunlight: " + sunlight
    );

    setText(
    "loveText",
    "Happiness: " + happiness
    );

    setText(
    "energyText",
    "Energy: " + energy
    );

}


function setText(id, text) {

    var element =

    document.getElementById(id);


    if (element) {

        element.innerHTML = text;

    }

}


function setMessage(text) {

    var message =

    document.getElementById("message");


    if (message) {

        message.innerHTML = text;

    }

}


function updateSky() {

    var hour =

    new Date().getHours();


    var sky =

    document.getElementById("sky");


    var sunMoon =

    document.getElementById("sunMoon");


    if (!sky || !sunMoon) {

        return;

    }


    if (hour >= 6 && hour < 18) {

        sky.style.background =

        "linear-gradient(#93c5fd, #dbeafe)";


        sunMoon.innerHTML = "☀️";

    }

    else {

        sky.style.background =

        "linear-gradient(#0f172a, #312e81)";


        sunMoon.innerHTML = "🌙";

    }

}