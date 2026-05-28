var startBtn =
document.getElementById("startBtn");

var chaosArea =
document.getElementById("chaosArea");

var notifications =
document.getElementById("notifications");

var thought =
document.getElementById("thought");

var tabs =
document.getElementById("tabs");

var videos =
document.getElementById("videos");

var productivity =
document.getElementById("productivity");

var sanityBar =
document.getElementById("sanity-bar");

var virus =
document.getElementById("virus");

var ending =
document.getElementById("ending");

var jumpscare =
document.getElementById("jumpscare");

var notifSound =
document.getElementById("notifSound");

var glitchSound =
document.getElementById("glitchSound");

var notesIcon =
document.getElementById("notesIcon");

var gameIcon =
document.getElementById("gameIcon");

var musicIcon =
document.getElementById("musicIcon");

var notesWindow =
document.getElementById("notesWindow");

var gameWindow =
document.getElementById("gameWindow");

var musicWindow =
document.getElementById("musicWindow");

var cookieBtn =
document.getElementById("cookieBtn");

var cookieCount =
document.getElementById("cookieCount");

var nextSong =
document.getElementById("nextSong");

var songName =
document.getElementById("songName");

var clock =
document.getElementById("clock");


var songs = [

    "lofi beats",

    "sad music at 3am",

    "panic playlist",

    "songs to fail exams to",

    "minecraft soundtrack"

];


var popupMessages = [

    "You opened YouTube.",

    "You watched a conspiracy documentary.",

    "You checked TikTok.",

    "You forgot what you were studying.",

    "You opened another tab.",

    "You watched cat videos.",

    "You searched random shower thoughts."

];


var notificationTexts = [

    "Your friend sent 27 reels.",

    "FLASH SALE ENDS IN 2 MINUTES!",

    "Mom: are you studying?",

    "NEW VIDEO UPLOADED.",

    "Discord missed call."

];


var thoughts = [

    "What if penguins had knees?",

    "One more video won’t hurt.",

    "Maybe tomorrow.",

    "I should fix my sleep schedule.",

    "Do fish get thirsty?"

];


var tabCount = 1;

var videoCount = 0;

var productivityLevel = 100;

var sanity = 100;

var cookies = 0;

var started = false;


/* START */

startBtn.onclick = function(){

    if(started === false){

        started = true;

        startChaos();

    }

};


/* CHAOS */

function startChaos(){

    createRain();

    updateClock();

    createPopup();

    createNotification();

    showThought();

    updateStats();


    setInterval(createPopup, 700);

    setInterval(createNotification, 2500);

    setInterval(showThought, 3500);

    setInterval(updateStats, 1800);

}


/* RAIN */

function createRain(){

    for(var i = 0; i < 120; i++){

        var drop =
        document.createElement("div");

        drop.classList.add("drop");

        drop.style.left =
        Math.random() * window.innerWidth + "px";

        drop.style.animationDuration =
        0.5 + Math.random() + "s";

        drop.style.opacity =
        Math.random();

        document
        .getElementById("rain")
        .appendChild(drop);

    }

}


/* CLOCK */

function updateClock(){

    setInterval(function(){

        var now = new Date();

        clock.innerHTML =
        now.toLocaleTimeString([], {

            hour:'2-digit',
            minute:'2-digit'

        });

    }, 1000);

}


/* POPUPS */

function createPopup(){

    var popup =
    document.createElement("div");

    popup.classList.add("popup");

    popup.innerHTML =
    popupMessages[
        Math.floor(
            Math.random() *
            popupMessages.length
        )
    ];


    popup.style.left =
    Math.random() *
    (window.innerWidth - 300)
    + "px";


    popup.style.top =
    Math.random() *
    (window.innerHeight - 250)
    + "px";


    if(Math.random() > 0.5){

        popup.innerHTML +=
        "<br><br><img src='https://picsum.photos/300/180?random=" +
        Math.random() +
        "'>";

    }


    chaosArea.appendChild(popup);


    if(document.querySelectorAll(".popup").length > 40){

        chaosArea.removeChild(
            chaosArea.firstChild
        );

    }

}


/* NOTIFICATIONS */

function createNotification(){

    var notification =
    document.createElement("div");

    notification.classList.add("notification");

    notification.innerHTML =
    notificationTexts[
        Math.floor(
            Math.random() *
            notificationTexts.length
        )
    ];

    notifications.appendChild(notification);

    notifSound.currentTime = 0;

    notifSound.play();


    setTimeout(function(){

        notification.remove();

    }, 5000);

}


/* THOUGHTS */

function showThought(){

    thought.innerHTML =
    thoughts[
        Math.floor(
            Math.random() *
            thoughts.length
        )
    ];

    thought.style.opacity = "1";


    setTimeout(function(){

        thought.style.opacity = "0";

    }, 2500);

}


/* STATS */

function updateStats(){

    tabCount +=
    Math.floor(Math.random() * 8);

    videoCount +=
    Math.floor(Math.random() * 5);

    productivityLevel -=
    Math.floor(Math.random() * 6);

    sanity -=
    Math.floor(Math.random() * 5);


    if(productivityLevel < 0){

        productivityLevel = 0;

    }


    if(sanity < 0){

        sanity = 0;

    }


    tabs.innerHTML = tabCount;

    videos.innerHTML = videoCount;

    productivity.innerHTML = productivityLevel;

    sanityBar.style.width =
    sanity + "%";


    if(sanity < 70){

        sanityBar.style.background =
        "yellow";

    }


    if(sanity < 40){

        sanityBar.style.background =
        "orange";

    }


    if(sanity < 20){

        sanityBar.style.background =
        "red";

        document.body.classList.add(
            "shake"
        );

        virusMode();

    }


    if(sanity < 10){

        jumpscareNow();

    }


    if(sanity <= 0){

        ending.style.opacity = "1";

        ending.style.pointerEvents = "all";

    }

}


/* VIRUS */

function virusMode(){

    virus.style.opacity = "1";

    glitchSound.currentTime = 0;

    glitchSound.play();


    setTimeout(function(){

        virus.style.opacity = "0";

    }, 800);

}


/* JUMPSCARE */

function jumpscareNow(){

    jumpscare.style.opacity = "1";

    glitchSound.currentTime = 0;

    glitchSound.play();


    setTimeout(function(){

        jumpscare.style.opacity = "0";

    }, 150);

}


/* WINDOWS */

notesIcon.onclick = function(){

    notesWindow.style.display = "block";

};

gameIcon.onclick = function(){

    gameWindow.style.display = "block";

};

musicIcon.onclick = function(){

    musicWindow.style.display = "block";

};


/* COOKIE CLICKER */

cookieBtn.onclick = function(){

    cookies++;

    cookieCount.innerHTML = cookies;

};


/* SONG BUTTON */

nextSong.onclick = function(){

    songName.innerHTML =

    songs[
        Math.floor(
            Math.random() *
            songs.length
        )
    ];

};