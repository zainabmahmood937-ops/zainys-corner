window.onload = function () {

    var cards = document.querySelectorAll(".card");

    for (var i = 0; i < cards.length; i++) {

        cards[i].style.opacity = "0";

        cards[i].style.transform = "translateY(40px)";

        animateCard(cards[i], i);

    }


    // WEBSITE MEMORY

    var visits =
    localStorage.getItem("visits");

    var coffees =
    localStorage.getItem("coffees");


    // FIRST VISIT

    if(visits == null){

        visits = 1;

    }

    else{

        visits = parseInt(visits) + 1;

    }


    // SAVE VISITS

    localStorage.setItem("visits", visits);


    // FIRST COFFEE VALUE

    if(coffees == null){

        coffees = 0;

        localStorage.setItem("coffees", coffees);

    }


    // SHOW MEMORY MESSAGE

    document.getElementById("memory-text").innerText =
    "welcome back. visits: " +
    visits +
    " | coffees consumed: " +
    coffees;


    // COFFEE EASTER EGG

    var drinks = 0;

    var coffee = document.getElementById("coffee");

    coffee.addEventListener("click", function () {

        drinks++;

        if (drinks == 1) {

            document.getElementById("message").innerText =
            "sip...";

        }

        else if (drinks == 2) {

            document.getElementById("message").innerText =
            "almost empty";

        }

        else if (drinks == 3) {


            // SAVE COFFEE COUNT

            coffees++;

            localStorage.setItem("coffees", coffees);


            // RANDOM EVENT NUMBER

            var random = Math.random();


            // RESET PAGE

            document.body.style.filter = "none";

            document.body.style.transform = "none";

            document.body.classList.remove("glitch");


            // RESET SPINNING CARDS

            var allCards =
            document.querySelectorAll(".card");

            for(var i = 0; i < allCards.length; i++){

                allCards[i].classList.remove("spin");

            }


            // NORMAL CONFETTI

            confetti({

                particleCount: 150,

                spread: 90,

                origin: { y: 0.6 }

            });


            // ACHIEVEMENT

            if(random < 0.35){

                document.getElementById("message").innerText =
                "🏆 Achievement Unlocked: you finished my coffee";

                document.getElementById("coffee").innerText =
                "🥤";

            }


            // RAINBOW MODE

            else if(random < 0.60){

                document.body.style.filter =
                "hue-rotate(180deg)";

                document.getElementById("message").innerText =
                "🌈 RAINBOW COFFEE ACTIVATED";

                document.getElementById("coffee").innerText =
                "🌈";

            }


            // EXTRA CONFETTI

            else if(random < 0.80){

                confetti({

                    particleCount: 500,

                    spread: 180,

                    origin: { y: 0.6 }

                });

                document.getElementById("message").innerText =
                "🎉 CONFETTI CHAOS";

                document.getElementById("coffee").innerText =
                "🥤";

            }


            // COFFEE STAR

            else if(random < 0.90){

                document.getElementById("coffee").innerText =
                "⭐";

                document.getElementById("message").innerText =
                "THE COFFEE ASCENDED";

            }


            // COFFEE EXPLOSION

            else if(random < 0.97){

                document.getElementById("coffee").innerText =
                "💥";

                document.getElementById("message").innerText =
                "THE COFFEE EXPLODED";

            }


            // VERY RARE EVENT

            else{

                document.body.style.transform =
                "rotate(180deg)";

                document.getElementById("message").innerText =
                "👁️ the coffee broke reality";

                document.getElementById("coffee").innerText =
                "☕";

            }


            // UPDATE MEMORY TEXT

            document.getElementById("memory-text").innerText =
            "welcome back. visits: " +
            visits +
            " | coffees consumed: " +
            coffees;

        }

    });


    // CHILL TIMER

    var seconds = 0;

    setInterval(function(){

        seconds++;

        document.getElementById("timer-text").innerText =
        "you have been chilling here for " +
        seconds +
        " seconds";

    }, 1000);


    // SPARKLE CURSOR

    document.addEventListener("mousemove", function(e){

        var sparkle = document.createElement("div");

        sparkle.classList.add("sparkle");


        // POSITION

        sparkle.style.left = e.clientX + "px";

        sparkle.style.top = e.clientY + "px";


        // RANDOM COLORS

        var colors = [

            "#ffffff",
            "#f9a8d4",
            "#c084fc",
            "#fde68a"

        ];

        sparkle.style.background =
        colors[Math.floor(Math.random() * colors.length)];


        // ADD TO PAGE

        document.body.appendChild(sparkle);


        // REMOVE AFTER FADE

        setTimeout(function(){

            sparkle.remove();

        }, 800);

    });


    // DAY / NIGHT MODE

    var hour = new Date().getHours();


    // RANDOM DAY MESSAGES

    var dayMessages = [

        "☀️ go have breakfast.",

        "📚 time to study mate.",

        "67",

        "☕ i js had coffee but im so tired",

        "🌤️ rise and shine lil bro.",

        ":D"

    ];


    // RANDOM NIGHT MESSAGES

    var nightMessages = [

        "🌙 bro go to sleep.",

        "🦇 dude i get it you are batman.",

        "😭 shouldnt you be in bed rn?",

        "💤 sweet dreams after you put the device down",

        ">:)",

        "🌌 the coffee sees all"

    ];


    // NIGHT MODE

    if(hour >= 18 || hour < 6){

        document.body.style.background =
        "linear-gradient(135deg, #0f172a, #1e1b4b, #312e81)";


        var randomNightMessage =
        nightMessages[Math.floor(Math.random() *
        nightMessages.length)];

        document.getElementById("time-message").innerText =
        randomNightMessage;

    }


    // DAY MODE

    else{

        var randomDayMessage =
        dayMessages[Math.floor(Math.random() *
        dayMessages.length)];

        document.getElementById("time-message").innerText =
        randomDayMessage;

    }


// DO NOT PRESS BUTTON

var chaosButton =
document.getElementById("chaos-btn");

if(chaosButton){

    chaosButton.addEventListener("click", function(){

        var randomChaos = Math.random();

        var allCards =
        document.querySelectorAll(".card");


        // RESET EVERYTHING

        document.body.classList.remove("glitch");

        document.body.style.filter = "none";

        document.body.style.transform = "none";


        for(var i = 0; i < allCards.length; i++){

            allCards[i].style.animation = "none";

            allCards[i].style.transform = "";

        }


        // RAINBOW MODE

        if(randomChaos < 0.15){

            document.body.style.filter =
            "hue-rotate(180deg)";

            document.getElementById("chaos-message")
            .innerText =
            "🌈 rainbow chaos activated";

        }


        // SPINNING CARDS

        else if(randomChaos < 0.30){

            for(var i = 0; i < allCards.length; i++){

                allCards[i].style.animation =
                "spin 2s linear infinite";

            }

            document.getElementById("chaos-message")
            .innerText =
            "🌀 cards have lost control";

        }


        // FAKE ERROR

        else if(randomChaos < 0.45){

            alert(
            "⚠️ ERROR 404: sanity not found");

            document.getElementById("chaos-message")
            .innerText =
            "💀 you pressed the forbidden button";

        }


        // UPSIDE DOWN

        else if(randomChaos < 0.60){

            document.body.style.transform =
            "rotate(180deg)";

            document.getElementById("chaos-message")
            .innerText =
            "🙃 gravity has been reversed";

        }


        // GLITCH MODE

        else if(randomChaos < 0.75){

            document.body.classList.add("glitch");

            document.getElementById("chaos-message")
            .innerText =
            "👁️ reality corruption detected";

        }


        // X-RAY MODE

        else if(randomChaos < 0.90){

            document.body.style.filter =
            "grayscale(100%) contrast(200%)";

            document.getElementById("chaos-message")
            .innerText =
            "☢️ x-ray vision enabled";

        }


        // TOTAL CHAOS

        else{

            document.body.style.filter =
            "invert(1)";

            document.body.style.transform =
            "rotate(720deg)";

            confetti({

                particleCount: 800,

                spread: 360

            });

            document.getElementById("chaos-message")
            .innerText =
            "💥 TOTAL WEBSITE COLLAPSE";

        }

    });

}


// CLOSE WINDOW.ONLOAD

};


function animateCard(card, index) {

    setTimeout(function () {

        card.style.transition = "0.6s ease";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    }, index * 150);

}