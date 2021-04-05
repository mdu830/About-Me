$(document).ready(function(){

    var article = $("#appendElements");
    

    $("#appendElements").empty()
    // event.preventDefault();
    // about-me
    function loadAboutMe() {

        var media = $("<div>");
        media.attr("class", "media-body bord");
        article.append(media).fadeIn();
    
        var container = $("<div>");
        container.attr("class", "container");
        media.append(container);
    
        var row = $("<div>");
        row.attr("class", "row");
        container.append(row);
    
        var col1 = $("<div>");
        col1.attr("class", "col-md-4 mt-3 mb-3")
        row.append(col1);
    
        var col2 = $("<div>");
        col2.attr("class", "col-md-8 mt-5");
        row.append(col2);
    
        var title = $("<h5>");
        title.text("About Me");
        col1.append(title);
    
        var image = $("<img>");
        image.attr("src", "assets/image/small.jpg");
        image.attr("class", "img-fluid img-thumbnail h-auto");
        col1.append(image).hide(50).show("slow");
    
        var description1 = $("<p>");
        var description2 = $("<p>");
        var description3 = $("<p>");
        var description4 = $("<p>");
        description1.attr("class", "mt-4");
        description1.text("I am a student in the UNC Programming Bootcamp course.");
        description2.text("I currently design, build, fly and sell drones online. It is one of the most rewarding feelings to fly your projects after they have been completed.");
        description3.text("Along with building drones, I also enjoy 3D Printing my autocad designs.");
        description4.text("I also work on various other electronic devices includes: PC repair, Iphone and Android repair, and Network penetration testing.");
        col2.append(description1, description2, description3, description4).hide(150).show(1000);

    }

    // Portfolio
    function loadportfolio() {

        var mediaBody = $("<div>");
        mediaBody.attr("class", "media-body bord p-4");
        article.append(mediaBody).fadeIn();;

        var row1 = $("<div>");
        row1.attr("class", "row");
        mediaBody.append(row1);

        col1Row1 = $("<div>");
        col1Row1.attr("class", "col-sm-12");
        row1.append(col1Row1);

        var title = $("<h5>");
        title.attr("class", "mt-2 ml-2");
        title.text("Portfolio")
        col1Row1.append(title);

        portfolioItems = [
            {
                image: "assets/image/passwordGen.png",
                pTag1: "This is a random password generator I made with vanilla Javascript, HTML, and CSS",
                pTag2: "Here is a link to the ",
                link:  "https://mdu830.github.io/Password-Gen/",
                linkText: "Password Generator",
                pTag3: "Github repository: ",
                github: "https://github.com/mdu830/Password-Gen"
            },
            {
                image: "assets/image/codingQuiz.png",
                pTag1: "Here is a small coding quiz game i also made with vanilla javascript, html and css.",
                pTag2: "Here is a link to the ",
                link: "https://mdu830.github.io/CodingQuizGame/", 
                linkText: "Coding Quiz",
                pTag3: "Github repository: ",
                github: "https://github.com/mdu830/CodingQuizGame"
            },
            {
                image: "assets/image/dayPlanner.png",
                pTag1: "This is a nice Day-Planner where I utilized jQuery and Local storage.",
                pTag2: "Here is a link to the ",
                link: "https://mdu830.github.io/Day-Planner/", 
                linkText: "Day-Planner",
                pTag3: "Github repository: ",
                github: "https://github.com/mdu830/Day-Planner"
            },
            {
                image: "assets/image/weatherDashboard.png",
                pTag1: "This is an easy to use Weather-Dashboard I made. Using the Open Weather Map API to gather weather information. Other technologies used: Javascript, jQuery, HTML, CSS, Bootstrap, Google Fonts.",
                pTag2: "Here is a link to the ",
                link: "https://mdu830.github.io/Weather-Dashboard/",
                linkText: "Weather Dashboard",
                pTag3: "Github repository: ",
                github: "https://github.com/mdu830/Weather-Dashboard"
            },
            {
                image: "assets/image/eatdaburger.gif",
                pTag1: "Eat Da Burger is a web application (deployed on Heroku) that utilizes Express, mySQL, orm, Handlebars, and Node.js",
                pTag2: "Here is a link to ",
                link: "https://eat-da-booger.herokuapp.com/burgers",
                linkText: "Eat-Da-Burger",
                pTag3: "Github repository: ",
                github: "https://github.com/mdu830/eat-da-burger"


            },
            {
                image: "assets/image/travelBuddy.png",
                pTag1: " Travel Buddy is a project I contributed to. It is a web application that utilizes multiple APIs to help the user find the best prices on flights and hotels.",
                pTag2: "Here is a link to ",
                link: "http://kmh8827.github.io/project1-team2",
                linkText: "Travel Buddy",
                pTag3: "Github repository: ",
                github: "https://github.com/kmh8827/project1-team2"


            },
            {
                image: "assets/image/large-quadcopter.jpeg",
                pTag1: "This is the Pixhawk 4 Autopilot that i built, designed and programmed. It has several features. Of the most desired are the Return To Home, the long flight times (about 30 minutes), and the 4k FPV video camera.",
                pTag2: "Here is an example video from a test flight we did: ",
                link:  "https://youtu.be/pbIMcGK4tOE",
                linkText: "video",
            },
            {
                image: "assets/image/small-quadcopter.jpeg",
                pTag1: "This the small FPV model I designed and put into production earlier this year. They come with everything you need to get started in FPV and are ready to fly out of the box!",
                pTag2: "",
                link: "", 
            },
            {
                image: "assets/image/3D-printers.jpeg",
                pTag1: "I've had quite a bit of experience with 3D Printing and 3D Design/cad. I use these to create new drone frames and covers among other electric designs",
                pTag2: "",
                link: "", 
            },
            {
                image: "assets/image/small-super-computer.jpeg",
                pTag1: "I also have experience with building computers, and network penetration testing. This is a picture of a super computer I built for penetration testing and other large computational needs.",
                pTag2: "",
                link: "", 
            }

        ];

        for(i = 0; i < portfolioItems.length; i++) {

            var row3 = $("<div>");
            row3.attr("class", "row bord mt-2 mb-1");
            mediaBody.append(row3);

            var col1Row2 = $("<div>");
            col1Row2.attr("class", "col-lg");
            row3.append(col1Row2);

            var col2Row2 = $("<div>");
            col2Row2.attr("class", "col-lg mr-4");
            row3.append(col2Row2);

            
            var col1Image = $("<img>");
            col1Image.attr("src", portfolioItems[i].image);
            col1Image.attr("class", "img-fluid img-thumbnail w-50 h-auto ml-2 mt-3 mr-2 mb-3");
            col1Row2.append(col1Image).fadeIn();

            var col2Ptag1 = $("<p>");
            col2Ptag1.attr("class", "mt-3")
            col2Ptag1.text(portfolioItems[i].pTag1)


            var col2Ptag2 = $("<p>");
            col2Ptag2.text(portfolioItems[i].pTag2);

            var col2Ptag3 = $("<p>");
            col2Ptag3.text(portfolioItems[i].pTag3);

            var c2Anchor = $("<a>");
            c2Anchor.attr("href", portfolioItems[i].link);
            c2Anchor.attr("class", "bs-link");
            c2Anchor.text(portfolioItems[i].linkText);

            var c2github = $("<a>");
            c2github.attr("href", portfolioItems[i].github);
            c2github.attr("class", "bs-link");
            c2github.text(portfolioItems[i].github);

            col2Row2.append(col2Ptag1);
            col2Row2.append(col2Ptag2);
            col2Ptag2.append(c2Anchor);
            col2Row2.append(col2Ptag3);
            col2Ptag3.append(c2github);
  
        };
        

    }

    // contact me
    function loadContactMe() {

        var mediaBody = $("<div>");
        mediaBody.attr("class", "media-body p-3 bord");
        article.append(mediaBody);

        var container = $("<div>");
        container.attr("class", "container");
        mediaBody.append(container);

        var row = $("<div>");
        row.attr("class", "row");
        container.append(row);

        var col1 = $("<div>");
        col1.attr("class", "col-9");
        row.append(col1);

        var col2 = $("<div>");
        col2.attr("class", "col-3");
        row.append(col2);

        var h5 = $("<h5>");
        h5.attr("class", "mt-3 mb-4");
        h5.text("Contact Me: ");
        col1.append(h5);

        var row2 = $("<div>");
        row2.attr("class", "row");
        container.append(row2);

        var row2col1 = $("<div>");
        row2col1.attr("class", "col ml-5");
        row2.append(row2col1);


        var ifContact = $("<p>");
        ifContact.attr("class", "ml-5")
        ifContact.text("If you have any questions or would like to get in contact with me here is my contact information: ");
        row2col1.append(ifContact);

        var row3 = $("<div>");
        row3.attr("class", "row");
        container.append(row3);


        var row3Col1 = $("<div>");
        row3Col1.attr("class", "col-6");
        row3.append(row3Col1);

        var row3Col2 = $("<div>");
        row3Col2.attr("class", "col-6");
        row3.append(row3Col2);

        // github link
        var gitImg = $("<img>");
        gitImg.attr("class", "ico mt-3");
        gitImg.attr("src", "assets/image/icons/github.png");

        var gitLink = $("<a>");
        gitLink.attr("href", "https://github.com/mdu830");

        col2.append(gitLink);
        gitLink.append(gitImg);
        // linkedin link
        var linkedInImg = $("<img>");
        linkedInImg.attr("class", "ico mt-3");
        linkedInImg.attr("src", "assets/image/icons/linkedin.png");

        var linkedInLink = $("<a>");
        linkedInLink.attr("href", "https://www.linkedin.com/in/mitchell-duncan-a466501bb");

        col2.append(linkedInLink);
        linkedInLink.append(linkedInImg);
        // email mailto link
        var emailImg = $("<img>");
        emailImg.attr("class", "ico mt-3");
        emailImg.attr("src", "assets/image/icons/email.png");

        var emailLink = $("<a>");
        emailLink.attr("href", "mailto:mdu830@yahoo.com");

        col2.append(emailLink);
        emailLink.append(emailImg);
        // listed email
        var emailListed = $("<h6>");
        emailListed.attr("class", "m-5")
        emailListed.text("Email: ");
        row3Col1.append(emailListed);

        var emailLink2 = $("<a>");
        emailLink2.attr("class", "bs-link")
        emailLink2.attr("href", "mailto:mdu830@yahoo.com");
        emailLink2.text("mdu830@yahoo.com");
        emailListed.append(emailLink2);
        // listed phone number
        var phoneListed = $("<h6>");
        phoneListed.attr("class", "m-5")
        phoneListed.text("Phone: ");
        row3Col2.append(phoneListed);

        var phoneLink = $("<a>");
        phoneLink.attr("class", "bs-link")
        phoneLink.text("(252) 207-7476");
        phoneListed.append(phoneLink);
    }

    loadAboutMe();

    $("#portfolioBtn").on("click", function() {

        $("#appendElements").fadeOut("slow", function(){
            $("#appendElements").empty().hide().fadeIn();
            loadportfolio()
        });
    });

    $("#contactBtn").on("click", function() {
        $("#appendElements").fadeOut("slow", function(){
            $("#appendElements").empty().hide().fadeIn();
            loadContactMe()
        });
    });

    $("#aboutMeBtn").on("click", function() {
        $("#appendElements").fadeOut("slow", function(){
            $("#appendElements").empty();
            loadAboutMe()
        });
    });
});







