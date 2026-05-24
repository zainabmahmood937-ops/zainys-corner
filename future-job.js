function predictJob() {

    var jobs = [

        "Professional Meme Archaeologist",
        "AI Therapist",
        "Space Cafe Owner",
        "Professional Overthinker",
        "Cyber City Architect",
        "Professional Nap Tester",
        "Moon Real Estate Agent",
        "TikTok Historian",
        "Robot Fashion Designer",
        "Digital Ghost Hunter",
        "Gaming Tournament Commentator",
        "Professional Conspiracy Researcher",
        "Alien Language Translator",
        "Dream Vacation Reviewer",
        "Internet Drama Analyst",
        "Professional Playlist Curator",
        "Cat Cafe CEO",
        "Future City Designer",
        "Virtual Reality Teacher",
        "Professional Doomscroller"

    ];


    var comments = [

        "Honestly this career suits your chaotic energy perfectly.",

        "Your future salary is either $5 or $5 million.",

        "There is a 72% chance you accidentally become famous.",

        "AI may try replacing you but probably fail.",

        "Your future coworkers are terrified of your power.",

        "This career definitely comes with sleep deprivation.",

        "Your future office probably exists on the moon.",

        "You were born for weird futuristic jobs.",

        "Your future LinkedIn profile will confuse historians.",

        "Scientists still cannot explain your career path."

    ];


    var salaries = [

        "$12,000",
        "$89,000",
        "$900,000",
        "$1",
        "$450,000",
        "$72,000",
        "$999,999"

    ];


    var danger = [

        "Low",
        "Medium",
        "High",
        "Extremely Chaotic",
        "Mentally Questionable"

    ];


    var randomJob =
    jobs[Math.floor(Math.random() * jobs.length)];

    var randomComment =
    comments[Math.floor(Math.random() * comments.length)];

    var randomSalary =
    salaries[Math.floor(Math.random() * salaries.length)];

    var randomDanger =
    danger[Math.floor(Math.random() * danger.length)];


    document.getElementById("resultBox").innerHTML =

    "Your future job is:<br><br>" +

    "<span style='font-size:50px; color:#ffffff;'>" +

    randomJob +

    "</span><br><br>" +

    "Estimated Salary: " +

    randomSalary +

    "<br><br>" +

    "Danger Level: " +

    randomDanger +

    "<br><br>" +

    randomComment;

}