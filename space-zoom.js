window.onload = function() {

    var items = [

        {
            name: "Atom",
            size: 20,
            text: "Atoms are the tiny building blocks of everything around you."
        },

        {
            name: "Human Cell",
            size: 40,
            text: "Your body contains trillions of microscopic cells."
        },

        {
            name: "Ant",
            size: 60,
            text: "Tiny creatures capable of carrying many times their weight."
        },

        {
            name: "Human",
            size: 100,
            text: "You are standing on a giant planet flying through space."
        },

        {
            name: "House",
            size: 140,
            text: "Homes feel large to us but are tiny compared to cities."
        },

        {
            name: "Mountain",
            size: 220,
            text: "Massive natural giants formed over millions of years."
        },

        {
            name: "Earth",
            size: 320,
            text: "A tiny blue dot floating through the universe."
        },

        {
            name: "Jupiter",
            size: 450,
            text: "The largest planet in our solar system."
        },

        {
            name: "Sun",
            size: 650,
            text: "A massive burning star powering life on Earth."
        },

        {
            name: "Solar System",
            size: 850,
            text: "A giant system of planets orbiting the Sun."
        },

        {
            name: "Galaxy",
            size: 1100,
            text: "Billions of stars grouped together across space."
        }

    ];


    var container =
    document.getElementById("spaceContainer");


    for (var i = 0; i < items.length; i++) {

        var item =
        document.createElement("div");

        item.className =
        "space-item";


        var circle =
        document.createElement("div");

        circle.className =
        "space-circle";

        circle.style.width =
        items[i].size + "px";

        circle.style.height =
        items[i].size + "px";


        var title =
        document.createElement("h2");

        title.innerHTML =
        items[i].name;


        var text =
        document.createElement("p");

        text.innerHTML =
        items[i].text;


        item.appendChild(circle);

        item.appendChild(title);

        item.appendChild(text);

        container.appendChild(item);

    }

};