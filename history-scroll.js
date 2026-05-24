/* PROGRESS BAR */

window.onscroll =
function () {

    var scrollTop =
    document.documentElement.scrollTop;

    var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    var scrolled =
    (scrollTop / height) * 100;

    document.getElementById("progressBar")
    .style.width =
    scrolled + "%";

};


/* FLOATING COMMENTS */

var comments = [

    "humans really invented taxes",
    "bro discovered fire and cooked mammoth",
    "history is just chaos with documentation",
    "the romans would LOVE social media",
    "humanity survived ice ages somehow",
    "someone really invented homework",
    "we went from caves to doomscrolling",
    "history lore goes hard",
    "dinosaurs never paid bills lucky them",
    "someone definitely lost a war argument badly"

];

function randomComment() {

    var random =
    comments[Math.floor(
    Math.random() * comments.length
    )];

    document.getElementById("floatingComment")
    .innerHTML = random;

}

setInterval(randomComment,4000);


/* FACT ANIMATION */

var facts =
document.querySelectorAll(".fact");

function revealFacts() {

    for (var i = 0; i < facts.length; i++) {

        var windowHeight =
        window.innerHeight;

        var top =
        facts[i]
        .getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            facts[i].style.opacity = "1";

            facts[i].style.transform =
            "translateY(0px)";

        }

    }

}

for (var i = 0; i < facts.length; i++) {

    facts[i].style.opacity = "0";

    facts[i].style.transform =
    "translateY(50px)";

    facts[i].style.transition =
    "0.8s";

}

window.addEventListener(
"scroll",
revealFacts
);

revealFacts();