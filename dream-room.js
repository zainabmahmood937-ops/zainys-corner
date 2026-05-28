var wall =
document.getElementById("wall");

var room =
document.getElementById("room");

var ledStrip =
document.getElementById("ledStrip");

var rainContainer =
document.getElementById("rain-container");

var starsContainer =
document.getElementById("stars-container");

var plant =
document.getElementById("plant");

var cat =
document.getElementById("cat");

var poster1 =
document.getElementById("poster1");

var poster2 =
document.getElementById("poster2");

var monitor =
document.getElementById("monitor");

var messageBox =
document.getElementById("messageBox");

var roomMood =
document.getElementById("roomMood");

var ambientAudio =
document.getElementById("ambientAudio");

var brightnessSlider =
document.getElementById("brightnessSlider");


/* STATES */

var rainEnabled = false;

var starsEnabled = false;

var musicEnabled = false;

var ledsEnabled = false;


/* THEMES */

function setTheme(theme){

    if(theme == "cozy"){

        wall.style.background =
        "linear-gradient(180deg,#312e81,#111827)";

        roomMood.innerHTML =
        "mood: cozy night";

    }


    else if(theme == "pink"){

        wall.style.background =
        "linear-gradient(180deg,#831843,#be185d)";

        roomMood.innerHTML =
        "mood: pink dream";

    }


    else if(theme == "cyber"){

        wall.style.background =
        "linear-gradient(180deg,#0f172a,#1d4ed8)";

        roomMood.innerHTML =
        "mood: cyber city";

    }


    else if(theme == "dark"){

        wall.style.background =
        "linear-gradient(180deg,#09090b,#18181b)";

        roomMood.innerHTML =
        "mood: rainy midnight";

    }


    messageBox.innerHTML =
    "theme changed successfully ✨";

}


/* LEDS */

function toggleLights(){

    ledsEnabled = !ledsEnabled;


    if(ledsEnabled){

        ledStrip.style.opacity = "1";

        messageBox.innerHTML =
        "LED lights turned on";

    }

    else{

        ledStrip.style.opacity = "0";

        messageBox.innerHTML =
        "LED lights turned off";

    }

}


/* STARS */

function toggleStars(){

    starsEnabled = !starsEnabled;

    starsContainer.innerHTML = "";


    if(starsEnabled){

        for(var i = 0; i < 80; i++){

            var star =
            document.createElement("div");

            star.classList.add("star");

            star.style.left =
            Math.random() * 100 + "%";

            star.style.top =
            Math.random() * 60 + "%";

            star.style.animationDelay =
            Math.random() * 3 + "s";

            starsContainer.appendChild(star);

        }


        messageBox.innerHTML =
        "stars added to your room";

    }

    else{

        messageBox.innerHTML =
        "stars removed";

    }

}


/* RAIN */

function toggleRain(){

    rainEnabled = !rainEnabled;

    rainContainer.innerHTML = "";


    if(rainEnabled){

        for(var i = 0; i < 120; i++){

            var rain =
            document.createElement("div");

            rain.classList.add("rain-drop");

            rain.style.left =
            Math.random() * 100 + "%";

            rain.style.animationDuration =
            0.5 + Math.random() + "s";

            rain.style.opacity =
            Math.random();

            rainContainer.appendChild(rain);

        }


        messageBox.innerHTML =
        "rain mode enabled";

    }

    else{

        messageBox.innerHTML =
        "rain mode disabled";

    }

}


/* MUSIC */

function toggleMusic(){

    musicEnabled = !musicEnabled;


    if(musicEnabled){

        ambientAudio.volume = 0.3;

        ambientAudio.play();

        messageBox.innerHTML =
        "ambient sound playing";

    }

    else{

        ambientAudio.pause();

        messageBox.innerHTML =
        "ambient sound stopped";

    }

}


/* PLANT */

function togglePlant(){

    plant.classList.toggle("hidden");

}


/* POSTERS */

function togglePosters(){

    poster1.classList.toggle("hidden");

    poster2.classList.toggle("hidden");

}


/* PC */

function togglePC(){

    if(monitor.style.boxShadow){

        monitor.style.boxShadow = "";

        monitor.style.transform = "scale(1)";

    }

    else{

        monitor.style.boxShadow =
        "0 0 30px #3b82f6";

        monitor.style.transform =
        "scale(1.04)";

    }

}


/* CAT */

function toggleCat(){

    cat.classList.toggle("hidden");

}


/* BRIGHTNESS */

brightnessSlider.oninput = function(){

    room.style.filter =
    "brightness(" +
    brightnessSlider.value +
    "%)";

};


/* RANDOMIZER */

function randomizeRoom(){

    var themes =
    ["cozy","pink","cyber","dark"];

    var randomTheme =
    themes[Math.floor(Math.random() * themes.length)];

    setTheme(randomTheme);


    if(Math.random() > 0.5){

        toggleLights();

    }


    if(Math.random() > 0.5){

        toggleStars();

    }


    if(Math.random() > 0.5){

        toggleRain();

    }


    plant.classList.remove("hidden");

    poster1.classList.remove("hidden");

    poster2.classList.remove("hidden");

    cat.classList.remove("hidden");


    messageBox.innerHTML =
    "random dream room generated ✨";

}