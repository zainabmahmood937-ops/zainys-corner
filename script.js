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


            // NORMAL CONFETTI

            confetti({

                particleCount: 150,

                spread: 90,

                origin: { y: 0.6 }

            });


            // ACHIEVEMENT

            if(random < 0.35){

                document.getElementById("message").innerText =
                "ðŸ† Achievement Unlocked: you finished my coffee";

                document.getElementById("coffee").innerText =
                "ðŸ¥¤";

            }


            // RAINBOW MODE

            else if(random < 0.60){

                document.body.style.filter =
                "hue-rotate(180deg)";

                document.getElementById("message").innerText =
                "ðŸŒˆ RAINBOW COFFEE ACTIVATED";

                document.getElementById("coffee").innerText =
                "ðŸŒˆ";

            }


            // EXTRA CONFETTI

            else if(random < 0.80){

                confetti({

                    particleCount: 500,

                    spread: 180,

                    origin: { y: 0.6 }

                });

                document.getElementById("message").innerText =
                "ðŸŽ‰ CONFETTI CHAOS";

                document.getElementById("coffee").innerText =
                "ðŸ¥¤";

            }


            // COFFEE STAR

            else if(random < 0.90){

                document.getElementById("coffee").innerText =
                "â­";

                document.getElementById("message").innerText =
                "THE COFFEE ASCENDED";

            }


            // COFFEE EXPLOSION

            else if(random < 0.97){

                document.getElementById("coffee").innerText =
                "ðŸ’¥";

                document.getElementById("message").innerText =
                "THE COFFEE EXPLODED";

            }


            // VERY RARE EVENT

            else{

                document.body.style.transform =
                "rotate(180deg)";

                document.getElementById("message").innerText =
                "ðŸ‘ï¸ the coffee broke reality";

                document.getElementById("coffee").innerText =
                "â˜•";

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

        "â˜€ï¸ go have breakfast.",

        "ðŸ“š time to study mate.",

        "67",

        "â˜• i js had coffee but im so tired",

        "ðŸŒ¤ï¸ rise and shine lil bro.",

        ":D"

    ];


    // RANDOM NIGHT MESSAGES

    var nightMessages = [

        "ðŸŒ™ bro go to sleep.",

        "ðŸ¦‡ dude i get it you are batman.",

        "ðŸ˜­ shouldnt you be in bed rn?",

        "ðŸ’¤ sweet dreams after you put the device down",

        ">:)",

        "ðŸŒŒ the coffee sees all"

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

};


function animateCard(card, index) {

    setTimeout(function () {

        card.style.transition = "0.6s ease";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    }, index * 150);

}