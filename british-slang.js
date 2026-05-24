var inputText =
document.getElementById("inputText");

var outputBox =
document.getElementById("outputBox");

var translateBtn =
document.getElementById("translateBtn");

var randomFact =
document.getElementById("randomFact");


/* SLANG DICTIONARY */

var slangWords = {

    "hello":"wagwan",
    "hi":"yo",
    "friend":"mandem",
    "friends":"mandem",
    "bro":"bruv",
    "brother":"bruv",
    "girl":"ting",
    "girls":"tings",
    "man":"bloke",
    "money":"peas",
    "food":"scran",
    "crazy":"mad",
    "very":"bare",
    "really":"proper",
    "good":"peng",
    "cool":"calm",
    "awesome":"peng",
    "bad":"dead",
    "angry":"vexed",
    "sad":"gutted",
    "leave":"dash",
    "go":"skrrt",
    "walk":"pattern",
    "talk":"chat",
    "phone":"blower",
    "party":"motive",
    "tired":"finished",
    "lie":"cap",
    "police":"feds",
    "fight":"scrap",
    "strange":"sus",
    "best":"elite",
    "small":"tiny little",
    "huge":"massive",
    "yes":"safe",
    "no":"allow it"

};


/* RANDOM ENDINGS */

var endings = [

    "still 😭",
    "you get me",
    "innit",
    "fam",
    "blud",
    "lowkey",
    "no cap",
    "respectfully",
    "allow it 😭",
    "absolute scenes"

];


/* RANDOM FACTS */

var facts = [

    "London slang level: dangerous.",
    "You are now legally a roadman.",
    "The queen is confused.",
    "Certified UK nonsense generated.",
    "Someone in Birmingham probably says this.",
    "Your sentence has been bri’ishified.",
    "Massive roadman energy detected.",
    "This translator runs on tea and chaos."

];


/* TRANSLATE */

translateBtn.onclick = function () {

    var text =
    inputText.value.toLowerCase();

    if (text.trim() === "") {

        outputBox.innerHTML =
        "Type something first bruv.";

        return;

    }

    var words =
    text.split(" ");

    for (var i = 0; i < words.length; i++) {

        if (slangWords[words[i]]) {

            words[i] =
            slangWords[words[i]];

        }

    }

    var finalSentence =
    words.join(" ");

    var ending =
    endings[Math.floor(
    Math.random() * endings.length
    )];

    finalSentence =
    finalSentence + " " + ending;

    outputBox.innerHTML =
    finalSentence;

    randomFact.innerHTML =
    facts[Math.floor(
    Math.random() * facts.length
    )];

};


/* ENTER KEY */

inputText.addEventListener(
"keydown",
function(e){

    if (e.key === "Enter" &&
        !e.shiftKey) {

        e.preventDefault();

        translateBtn.click();

    }

});