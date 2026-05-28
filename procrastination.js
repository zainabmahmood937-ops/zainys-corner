var startBtn =
document.getElementById("startBtn");

var chaosArea =
document.getElementById("chaosArea");

var notificationArea =
document.getElementById("notification-area");

var thought =
document.getElementById("thought");

var searches =
document.getElementById("searches");

var discordMessages =
document.getElementById("discord-messages");

var floatingTabs =
document.getElementById("floating-tabs");

var spotifyPlayer =
document.getElementById("spotify-player");

var virusScreen =
document.getElementById("virus-screen");

var endingScreen =
document.getElementById("ending-screen");

var jumpscare =
document.getElementById("jumpscare");

var sanityBar =
document.getElementById("sanity-bar");

var blurOverlay =
document.getElementById("blur-overlay");

var tabs =
document.getElementById("tabs");

var videos =
document.getElementById("videos");

var productivity =
document.getElementById("productivity");

var clock =
document.getElementById("clock");

var notificationSound =
document.getElementById("notificationSound");

var glitchSound =
document.getElementById("glitchSound");

var clockSound =
document.getElementById("clockSound");


/* WINDOWS */

var homeworkWindow =
document.getElementById("homework-window");

var gamesWindow =
document.getElementById("games-window");

var notesWindow =
document.getElementById("notes-window");


/* ICONS */

var homeworkIcon =
document.getElementById("homework-icon");

var gamesIcon =
document.getElementById("games-icon");

var notesIcon =
document.getElementById("notes-icon");

var spotifyIcon =
document.getElementById("spotify-icon");


/* SPOTIFY */

var nextSong =
document.getElementById("next-song");

var songName =
document.getElementById("song-name");


var songs = [

    "lofi beats to avoid responsibilities to",

    "sad music at 3am",

    "songs to fail assignments to",

    "studying for 12 hours straight playlist",

    "minecraft music while panicking",

    "doomed final exam mix"

];


/* RANDOM IMAGES */

var randomImages = [

    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400",

    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400",

    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400",

    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400",

    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400"

];


var tabCount = 1;

var videoCount = 0;

var productivityLevel = 100;

var sanity = 100;

var started = false;


/* POPUPS */

var messages = [

    "You opened YouTube.",

    "You checked TikTok.",

    "You watched a 3 hour iceberg documentary.",

    "You searched 'how to focus instantly'.",

    "You suddenly needed to clean your room.",

    "You opened Spotify.",

    "You watched cat videos for 48 minutes.",

    "You opened another tab.",

    "You searched random shower thoughts.",

    "You forgot what you were studying."

];


/* THOUGHTS */

var thoughts = [

    "What if penguins had knees?",

    "One more video won’t hurt.",

    "I should become famous.",

    "Why am I like this?",

    "Maybe tomorrow.",

    "Do fish get thirsty?",

    "I should fix my sleep schedule."

];


/* NOTIFICATIONS */

var notifications = [

    "Your friend sent 47 reels.",

    "FLASH SALE ENDS IN 2 MINUTES!",

    "Mom: are you studying?",

    "Your battery is at 9%.",

    "You spent 8 hours online today.",

    "Someone liked your old post.",

    "NEW VIDEO UPLOADED."

];


/* GOOGLE SEARCHES */

var fakeSearches = [

    "how to study in one night",

    "how to stop procrastinating",

    "why am i tired all the time",

    "how rich is mrbeast",

    "do successful people procrastinate",

    "what happens if i dont sleep"

];


/* DISCORD */

var discordTexts = [

    "bro get online",

    "u studying again 💀",

    "JOIN VC NOW",

    "we are playing minecraft",

    "bro disappeared"

];


/* START */

startBtn.onclick = function(){

    if(started === false){

        started = true;

        startChaos();

    }

};


/* MAIN CHAOS */

function startChaos(){

    createPopup();

    createNotification();

    showThought();

    createSearch();

    createDiscord();

    createFloatingTab();

    createRain();

    updateStats();

    startSpotify();

    startClock();

    moveButton();

    setupDesktop();

    clockSound.volume = 0.15;

    clockSound.play();


    setInterval(createPopup, 500);

    setInterval(createNotification, 2200);

    setInterval(showThought, 3500);

    setInterval(createSearch, 3000);

    setInterval(createDiscord, 4000);

    setInterval(createFloatingTab, 1200);

    setInterval(updateStats, 1800);

}


/* POPUPS */

function createPopup(){

    var popup =
    document.createElement("div");

    popup.classList.add("popup");

    popup.innerHTML =
    messages[Math.floor(Math.random() * messages.length)];

    popup.style.left =
    Math.random() * (window.innerWidth - 320) + "px";

    popup.style.top =
    Math.random() * (window.innerHeight - 250) + "px";


    if(Math.random() > 0.4){

        var randomImage =
        randomImages[Math.floor(Math.random() * randomImages.length)];

        popup.innerHTML +=
        "<br><br><img src='" + randomImage + "'>";

    }


    chaosArea.appendChild(popup);


    if(document.querySelectorAll(".popup").length > 45){

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
    notifications[Math.floor(Math.random() * notifications.length)];

    notificationArea.appendChild(notification);


    notificationSound.currentTime = 0;

    notificationSound.play();


    setTimeout(function(){

        notification.remove();

    }, 5000);

}


/* THOUGHTS */

function showThought(){

    thought.innerHTML =
    thoughts[Math.floor(Math.random() * thoughts.length)];

    thought.style.opacity = "1";


    setTimeout(function(){

        thought.style.opacity = "0";

    }, 2500);

}


/* SEARCHES */

function createSearch(){

    var search =
    document.createElement("div");

    search.classList.add("search-box");

    search.innerHTML =
    "🔍 " +
    fakeSearches[Math.floor(Math.random() * fakeSearches.length)];

    searches.appendChild(search);


    setTimeout(function(){

        search.remove();

    }, 6000);

}


/* DISCORD */

function createDiscord(){

    var discord =
    document.createElement("div");

    discord.classList.add("discord-msg");

    discord.innerHTML =
    "Discord: " +
    discordTexts[Math.floor(Math.random() * discordTexts.length)];

    discordMessages.appendChild(discord);


    setTimeout(function(){

        discord.remove();

    }, 5000);

}


/* FLOATING TABS */

function createFloatingTab(){

    var tab =
    document.createElement("div");

    tab.classList.add("floating-tab");

    tab.innerHTML =
    "📄 random_tab_" +
    Math.floor(Math.random() * 999);

    tab.style.left =
    Math.random() * window.innerWidth + "px";

    tab.style.animationDuration =
    4 + Math.random() * 4 + "s";

    floatingTabs.appendChild(tab);


    setTimeout(function(){

        tab.remove();

    }, 10000);

}


/* RAIN */

function createRain(){

    for(var i = 0; i < 120; i++){

        var drop =
        document.createElement("div");

        drop.classList.add("rain-drop");

        drop.style.left =
        Math.random() * window.innerWidth + "px";

        drop.style.animationDuration =
        0.4 + Math.random() + "s";

        drop.style.opacity =
        Math.random();

        document
        .getElementById("rain-container")
        .appendChild(drop);

    }

}


/* STATS */

function updateStats(){

    tabCount += Math.floor(Math.random() * 12);

    videoCount += Math.floor(Math.random() * 6);

    productivityLevel -= Math.floor(Math.random() * 12);

    sanity -= Math.floor(Math.random() * 8);


    if(productivityLevel < 0){

        productivityLevel = 0;

    }


    if(sanity < 0){

        sanity = 0;

    }


    tabs.innerHTML = tabCount;

    videos.innerHTML = videoCount;

    productivity.innerHTML = productivityLevel;

    sanityBar.style.width = sanity + "%";


    if(sanity < 70){

        sanityBar.style.background = "yellow";

    }


    if(sanity < 40){

        sanityBar.style.background = "orange";

        blurOverlay.classList.add("blur-active");

    }


    if(sanity < 20){

        sanityBar.style.background = "red";

        document.body.classList.add("shake");

        startVirusMode();

    }


    if(sanity < 10){

        document.body.classList.add("three-am");

        jumpscareNow();

    }


    if(sanity <= 0){

        endingScreen.style.opacity = "1";

        endingScreen.style.pointerEvents = "all";

    }

}


/* BUTTON ESCAPES */

function moveButton(){

    document.addEventListener("mousemove", function(e){

        var rect =
        startBtn.getBoundingClientRect();

        var distanceX =
        e.clientX - rect.left;

        var distanceY =
        e.clientY - rect.top;


        if(distanceX < 150 &&
           distanceY < 80 &&
           sanity < 60){

            startBtn.style.position = "absolute";

            startBtn.style.left =
            Math.random() * (window.innerWidth - 200) + "px";

            startBtn.style.top =
            Math.random() * (window.innerHeight - 100) + "px";

        }

    });

}


/* SPOTIFY */

function startSpotify(){

    spotifyPlayer.style.opacity = "1";

}


nextSong.onclick = function(){

    var randomSong =
    songs[Math.floor(Math.random() * songs.length)];

    songName.innerHTML =
    randomSong;

};


/* CLOCK */

function startClock(){

    setInterval(function(){

        var now =
        new Date();

        clock.innerHTML =
        now.toLocaleTimeString([], {

            hour:'2-digit',

            minute:'2-digit'

        });

    }, 1000);

}


/* VIRUS MODE */

function startVirusMode(){

    virusScreen.style.opacity = "1";

    glitchSound.currentTime = 0;

    glitchSound.play();


    setTimeout(function(){

        virusScreen.style.opacity = "0";

    }, 1800);

}


/* JUMPSCARE */

function jumpscareNow(){

    jumpscare.style.opacity = "1";

    glitchSound.currentTime = 0;

    glitchSound.play();


    setTimeout(function(){

        jumpscare.style.opacity = "0";

    }, 250);

}


/* DESKTOP ICONS */

function setupDesktop(){

    homeworkIcon.onclick = function(){

        homeworkWindow.style.display = "block";

    };


    gamesIcon.onclick = function(){

        gamesWindow.style.display = "block";

    };


    notesIcon.onclick = function(){

        notesWindow.style.display = "block";

    };


    spotifyIcon.onclick = function(){

        spotifyPlayer.style.opacity = "1";

    };

}