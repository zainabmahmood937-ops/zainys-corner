function calculateScreenTime() {

    var hours =
    document.getElementById("hoursInput").value;

    var age =
    document.getElementById("ageInput").value;


    var totalHours =
    hours * 365 * age;

    var totalDays =
    Math.floor(totalHours / 24);

    var totalYears =
    (totalDays / 365).toFixed(1);


    document.getElementById("hoursResult").innerHTML =
    totalHours;

    document.getElementById("daysResult").innerHTML =
    totalDays;

    document.getElementById("yearsResult").innerHTML =
    totalYears;


    var comparison = "";


    if (totalYears < 1) {

        comparison =
        "You have spent less than a year on screens.";

    }

    else if (totalYears < 3) {

        comparison =
        "That is enough time to replay hundreds of games.";

    }

    else if (totalYears < 6) {

        comparison =
        "Screens have taken YEARS of your life.";

    }

    else {

        comparison =
        "Digital life has become a huge part of your existence.";

    }


    document.getElementById("comparisonText").innerHTML =
    comparison;


    var bars =
    document.getElementById("timelineBars");

    bars.innerHTML = "";


    for (var i = 0; i < age; i++) {

        var bar =
        document.createElement("div");

        bar.className = "bar";


        var randomHeight =
        Math.floor(Math.random() * 250) + 40;


        bar.style.height =
        randomHeight + "px";


        bars.appendChild(bar);

    }

}