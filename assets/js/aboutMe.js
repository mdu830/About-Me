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
                pTag3: "Here is the link to the github repo ",
                github: "https://github.com/mdu830/Password-Gen"
            },
            {
                image: "assets/image/codingQuiz.png",
                pTag1: "Here is a small coding quiz game i also made with vanilla javascript, html and css.",
                pTag2: "Here is a link to the ",
                link: "https://mdu830.github.io/CodingQuizGame/", 
                linkText: "Coding Quiz",
                pTag3: "Here is the link to the github repo ",
                github: "https://github.com/mdu830/CodingQuizGame"
            },
            {
                image: "assets/image/dayPlanner.png",
                pTag1: "This is a nice Day-Planner where I utilized jQuery and Local storage.",
                pTag2: "Here is a link to the ",
                link: "https://mdu830.github.io/Day-Planner/", 
                linkText: "Day-Planner",
                pTag3: "Here is the link to the github repo ",
                github: "https://github.com/mdu830/Day-Planner"
            },
            {
                image: "assets/image/weatherDashboard.png",
                pTag1: "This is an easy to use Weather-Dashboard I made. Using the Open Weather Map API to gather weather information. Other technologies used: Javascript, jQuery, HTML, CSS, Bootstrap, Google Fonts.",
                pTag2: "Here is a link to the ",
                link: "https://mdu830.github.io/Weather-Dashboard/",
                linkText: "Weather Dashboard",
                pTag3: "Here is the link to the github repo ",
                github: "https://github.com/mdu830/Weather-Dashboard"
            },
            {
                image: "assets/image/eatdaburger.gif",
                pTag1: "Eat Da Burger is a web application (deployed on Heroku) that utilizes Express, mySQL, orm, Handlebars, and Node.js",
                pTag2: "Here is a link to ",
                link: "https://eat-da-booger.herokuapp.com/burgers",
                linkText: "Eat-Da-Burger",
                pTag3: "Here is the link to the github repo ",
                github: "https://github.com/mdu830/eat-da-burger"


            },
            {
                image: "assets/image/travelBuddy.png",
                pTag1: " Travel Buddy is a project I contributed to. It is a web application that utilizes multiple APIs to help the user find the best prices on flights and hotels.",
                pTag2: "Here is a link to ",
                link: "http://kmh8827.github.io/project1-team2",
                linkText: "Travel Buddy",
                pTag3: "Here is the link to the github repo ",
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

            var row2 = $("<div>");
            row2.attr("class", "row bord mt-2 mb-1");
            mediaBody.append(row2);

            var col1Row2 = $("<div>");
            col1Row2.attr("class", "col-lg");
            row2.append(col1Row2);

            var col2Row2 = $("<div>");
            col2Row2.attr("class", "col-lg mr-4");
            row2.append(col2Row2);

            
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

        var col12 = $("<div>");
        col12.attr("class", "col-12");
        row.append(col12);

        var col12Row = $("<div>");
        col12Row.attr("class", "row");
        col12.append(col12Row);

        var col = $("<div>");
        col.attr("class", "col ml-3");
        col12Row.append(col);

        var h5 = $("<h5>");
        h5.attr("class", "mt-3 ml-2");
        h5.text("Contact Me");
        col.append(h5);

        var col2 = $("<div>");
        col2.attr("class", "col-md-4");
        col12Row.append(col2);

        var colcol = $("<div>");
        colcol.attr("class", "col mt-4 ml-5");
        col2.append(colcol);
        // github link
        var gitImg = $("<img>");
        gitImg.attr("class", "ico");
        gitImg.attr("src", "assets/image/icons/github.png");

        var gitLink = $("<a>");
        gitLink.attr("href", "https://github.com/mdu830");

        colcol.append(gitLink);
        gitLink.append(gitImg);
        // linkedin link
        var linkedInImg = $("<img>");
        linkedInImg.attr("class", "ico");
        linkedInImg.attr("src", "assets/image/icons/linkedin.png");

        var linkedInLink = $("<a>");
        linkedInLink.attr("href", "https://www.linkedin.com/in/mitchell-duncan-a466501bb");

        colcol.append(linkedInLink);
        linkedInLink.append(linkedInImg);
        // facebook link
        var facebookImg = $("<img>");
        facebookImg.attr("class", "ico");
        facebookImg.attr("src", "assets/image/icons/facebook.png");

        var facebookLink = $("<a>");
        facebookLink.attr("href", "https://www.facebook.com/joe.duncan.589");

        colcol.append(facebookLink);
        facebookLink.append(facebookImg);
        // inputs

        // name
        var row0 = $("<div>");
        row0.attr("class", "row");
        mediaBody.append(row0);

        col0 = $("<div>");
        col0.attr("class", "col");
        row0.append(col0);

        var label = $("<label>");
        label.attr("class", "ml-1 mt-5");
        label.attr("for", "name-input");
        label.text("Name");
        col0.append(label);

        var input = $("<input>");
        input.attr("type", "text");
        input.attr("class", "form-control mb-2");
        input.attr("id", "name-input");
        input.attr("placeholder", "Name");
        col0.append(input);

        // email
        var row1 = $("<div>");
        row1.attr("class", "row mt-n3");
        mediaBody.append(row1);

        col1 = $("<div>");
        col1.attr("class", "col");
        row1.append(col1);

        var label = $("<label>");
        label.attr("class", "ml-1 mt-3");
        label.attr("for", "email-input");
        label.text("Email");
        col1.append(label);

        var input = $("<input>");
        input.attr("type", "text");
        input.attr("class", "form-control  mb-2");
        input.attr("id", "email-input");
        input.attr("placeholder", "Email");
        col1.append(input);

        // message input and submit button
        var row02 = $("<div>");
        row02.attr("class", "row");
        mediaBody.append(row02);

        var col02 = $("<div>");
        col02.attr("class", "col");
        row02.append(col02);

        var formGroup = $("<div>");
        formGroup.attr("class", "form-group");
        col02.append(formGroup);

        var label02 = $("<label>");
        label02.attr("for", "textarea");
        formGroup.append(label02);

        var textArea = $("<textarea>")
        textArea.attr("class", "form-control");
        textArea.attr("id", "textarea");
        textArea.attr("placeholder", "message");
        textArea.attr("rows", "3");
        formGroup.append(textArea);

        var row03 =$("<div>");
        row03.attr("class", "row");
        mediaBody.append(row03);

        var col03 = $("<div>");
        col03.attr("class", "col");
        row03.append(col03);

        var coldiv = $("<div>");
        col03.append(coldiv);

        var submitBtn = $("<button>");
        submitBtn.attr("type", "submit");
        submitBtn.attr("class", "btn btn-primary ml-5 mb-2 submit");
        submitBtn.text("Submit");
        coldiv.append(submitBtn);
        
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







