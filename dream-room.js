function setWallpaper(style) {

    var wallpaper =
    document.getElementById("wallpaper");


    if (style == "pink") {

        wallpaper.style.background =
        "#be185d";

    }

    else if (style == "blue") {

        wallpaper.style.background =
        "#1d4ed8";

    }

    else if (style == "purple") {

        wallpaper.style.background =
        "#581c87";

    }

    else {

        wallpaper.style.background =
        "#111827";

    }


    document.getElementById("messageBox").innerHTML =
    style + " wallpaper applied.";

}



function addEffect(effect) {

    var effects =
    document.getElementById("effects");


    if (effect == "stars") {

        for (var i = 0; i < 80; i++) {

            var star =
            document.createElement("div");

            star.className =
            "star";

            star.style.left =
            Math.random() * 100 + "%";

            star.style.top =
            Math.random() * 100 + "%";

            effects.appendChild(star);

        }

    }


    else if (effect == "led") {

        var led =
        document.createElement("div");

        led.className =
        "led";

        led.style.top =
        "0px";

        effects.appendChild(led);

    }


    else if (effect == "grid") {

        var grid =
        document.createElement("div");

        grid.className =
        "grid";

        effects.appendChild(grid);

    }


    else if (effect == "clouds") {

        for (var j = 0; j < 5; j++) {

            var cloud =
            document.createElement("div");

            cloud.className =
            "cloud";

            cloud.style.left =
            Math.random() * 80 + "%";

            cloud.style.top =
            Math.random() * 40 + "%";

            effects.appendChild(cloud);

        }

    }


    else if (effect == "hearts") {

        for (var k = 0; k < 40; k++) {

            var heart =
            document.createElement("div");

            heart.className =
            "heart";

            heart.innerHTML =
            "♥";

            heart.style.left =
            Math.random() * 100 + "%";

            heart.style.top =
            Math.random() * 100 + "%";

            effects.appendChild(heart);

        }

    }


    else if (effect == "moon") {

        var moon =
        document.createElement("div");

        moon.className =
        "moon";

        effects.appendChild(moon);

    }


    document.getElementById("messageBox").innerHTML =
    effect + " effect added.";

}



function resetRoom() {

    document.getElementById("effects").innerHTML =
    "";

    document.getElementById("wallpaper").style.background =
    "#312e81";


    document.getElementById("messageBox").innerHTML =
    "Room reset.";

}