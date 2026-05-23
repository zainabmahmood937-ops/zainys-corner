function generateLife() {

    var age =
    document.getElementById("ageInput").value;

    var grid =
    document.getElementById("lifeGrid");

    grid.innerHTML = "";

    var totalWeeks = 90 * 52;

    var livedWeeks = age * 52;

    var leftWeeks =
    totalWeeks - livedWeeks;

    var percent =
    Math.floor((livedWeeks / totalWeeks) * 100);

    document.getElementById("weeksLived").innerHTML =
    livedWeeks;

    document.getElementById("weeksLeft").innerHTML =
    leftWeeks;

    document.getElementById("lifePercent").innerHTML =
    percent + "%";


    for (var i = 0; i < totalWeeks; i++) {

        var week =
        document.createElement("div");

        week.className = "week";


        if (i < livedWeeks) {

            week.className =
            "week lived";

        }


        grid.appendChild(week);

    }

}