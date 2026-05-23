window.onload = function () {

    var cards = document.querySelectorAll(".card");

    for (var i = 0; i < cards.length; i++) {

        cards[i].style.opacity = "0";
        cards[i].style.transform = "translateY(40px)";

        animateCard(cards[i], i);

    }

};


function animateCard(card, index) {

    setTimeout(function () {

        card.style.transition = "0.6s ease";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    }, index * 150);

}