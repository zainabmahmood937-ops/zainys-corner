function calculateRare() {

    var score = 0;


    for (var i = 1; i <= 15; i++) {

        var value =
        document.getElementById("q" + i).value;

        if (value == "Yes") {

            score++;

        }

    }


    var rarity =
    Math.floor(Math.random() * 50) + score * 4;


    var message = "";


    if (rarity < 20) {

        message =
        "You are pretty common.<br><br>" +
        "You probably fit into most groups easily and have a very relatable personality.";

    }


    else if (rarity < 40) {

        message =
        "You are somewhat rare.<br><br>" +
        "You have a few personality traits that make you stand out.";

    }


    else if (rarity < 60) {

        message =
        "You are VERY rare.<br><br>" +
        "You probably think differently from most people around you.";

    }


    else if (rarity < 80) {

        message =
        "You are extremely rare.<br><br>" +
        "Your personality combination is unusual in the best way possible.";

    }


    else {

        message =
        "You are one of the rarest people alive.<br><br>" +
        "Scientists may need to study your existence immediately.";

    }


    document.getElementById("resultBox").innerHTML =

    "Your rarity score is:<br><br>" +

    "<span style='font-size:60px;'>" +

    rarity +

    "%</span><br><br>" +

    message;

}