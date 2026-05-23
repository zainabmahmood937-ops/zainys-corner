function calculateMoney(){

    var monthly =
    document.getElementById("monthlyMoney").value;

    var years =
    document.getElementById("yearsMoney").value;

    var total =
    monthly * 12 * years;

    var yearly =
    monthly * 12;

    var daily =
    Math.floor(monthly / 30);

    document.getElementById("totalMoney").innerHTML =
    "$" + total;

    document.getElementById("dailySaving").innerHTML =
    "$" + daily;

    document.getElementById("yearlySaving").innerHTML =
    "$" + yearly;

    var comparison = "";

    if(total < 1000){

        comparison =
        "Enough for a nice gaming setup.";

    }

    else if(total < 10000){

        comparison =
        "Enough for a dream vacation.";

    }

    else if(total < 50000){

        comparison =
        "You could buy a car.";

    }

    else if(total < 100000){

        comparison =
        "You could make a house down payment.";

    }

    else{

        comparison =
        "You're entering millionaire mindset territory.";

    }

    document.getElementById("comparisonText").innerHTML =
    comparison;

}