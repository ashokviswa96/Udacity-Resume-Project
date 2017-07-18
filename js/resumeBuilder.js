/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace(
    "%data%",
    "karthik Vaidyanathan");
var formattedRole = HTMLheaderRole.replace(
    "%data%", "Web Developer");

//Object "bio" consisting of the details about my bio

var bio = {
    "name": "Karthik Vaidyanathan",
    "role": "Web Developer",
    "contacts": {
        "mobile": "9600125521",
        "email": "ashokviswa96@gmail.com",
        "github": "ashokviswa96",
        "twitter": "@ashokviswa96",
        "location": "Chennai"
    },
    "welcomeMessage": "Hi there,check out my resumé  😎.",
    "skills": ["awesomeness",
        "HTML", "CSS",
        "Javascript",
        "more awesomeness",
        "even more awesomeness 😄"
    ],
    "bioPic": "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/13669600_1228890430468621_574650787557749977_n.jpg?oh=b607cc63bac31b5ddf2808040598c5c7&oe=59CFC892",

};

var formattedbioPic = HTMLbioPic.replace(
    "%data%", bio.bioPic);
var formattedmobile = HTMLmobile.replace(
    "%data%", bio.contacts.mobile);
var formattedemail = HTMLemail.replace(
    "%data%", bio.contacts.email);
var formattedgithub = HTMLgithub.replace(
    "%data%", bio.contacts.github);
var formattedtwitter = HTMLtwitter.replace(
    "%data%", bio.contacts.twitter);
var formattedlocation = HTMLlocation.replace(
    "%data%", bio.contacts.location
);
var formattedWelcome = HTMLwelcomeMsg.replace(
    "%data%", bio.welcomeMessage);
bio.display = function() {
    $("#header").prepend(
        formattedName +
        formattedRole);
    $("#topContacts").append(
        formattedmobile);
    $("#topContacts").append(
        formattedemail);
    $("#topContacts").append(
        formattedgithub);
    $("#topContacts").append(
        formattedtwitter);
    $("#topContacts").append(
        formattedlocation);
    $("#header").append(
        formattedbioPic);
    $("#header").append(
        formattedWelcome);
    var buttonLink =
        '<button type="button" id="download-resume"><a href="my-resume.docx"  download>download resume</a></button>';
    $("#download").append(
        "<p>Here is a link to download my resume in docx format:   </p>"
    )
    $("#download").append(
        buttonLink);
    if (bio.skills.length > 0) {
        $("#header").append(
            HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {
            var formattedSkills =
                HTMLskills.replace(
                    "%data%", bio.skills[
                        i]);
            $("#skills").append(
                formattedSkills
            );
        }
    }

}



//Object "work" consisting of the details about work
var work = {
    jobs: [{
            "title": "Center Forward",
            "employer": "Manchester United",
            "location": "Manchester",
            "dates": "2017",
            "description": "PODA dei poi pulla kuttiya padika veikura velaiya paarunga da"
        },
        {
            "title": "Systems Engineer",
            "employer": "Infosys",
            "location": "Mysore",
            "dates": "2017",
            "description": "PODA dei poi pulla kuttiya padika veikura velaiya paarunga da"
        }
    ]
};

work.display = function displayWork() {
    if (work.jobs.length > 0) {
        for (var jobs = 0; jobs <
            work.jobs.length; jobs++
        ) {
            $("#workExperience").append(
                HTMLworkStart);
            var
                formattedWorkEmployer =
                HTMLworkEmployer.replace(
                    "%data%", work.jobs[
                        jobs].employer
                );
            var formattedWorkTitle =
                HTMLworkTitle.replace(
                    "%data%", work.jobs[
                        jobs].title
                );
            $(".work-entry:last").append(
                formattedWorkEmployer +
                formattedWorkTitle
            );
            var formattedworkDates =
                HTMLworkDates.replace(
                    "%data%", work.jobs[
                        jobs].dates
                );
            $(".work-entry:last").append(
                formattedworkDates
            );
            var
                formattedworkDescription =
                HTMLworkDescription
                .replace("%data%",
                    work.jobs[jobs]
                    .description);
            $(".work-entry:last").append(
                formattedworkDescription
            );
        }
    }
}


var education = {
    "schools": [{
            "name": "Jawahar Higher Secondary School",
            "location": "Ashok Nagar,Chennai",
            "degree": "High School ",
            "majors": [
                "Computer Science",
                "Sanskrit"
            ],
            "dates": "2011-2013",
            "url": "http://www.jawaharssm.com/"
        },
        {
            "name": "Velammal Institute of Technology",
            "location": "Karanodai",
            "degree": "B.E.",
            "majors": [
                "Electronics & Communication Engineering"
            ],
            "dates": "2013-2017 ",
            "url": "http://velammalitech.edu.in/"
        }
    ],
    "onlineCourses": [{
        "title": "Front End Nanodegree",
        "school": "Udacity",
        "dates": "in progress",
        "url": "https://in.udacity.com/"
    }]
}
education.display = function() {
    for (var i = 0; i < education.schools
        .length; i++) {
        $("#education").append(
            HTMLschoolStart);
        var formattedSchoolName =
            HTMLschoolName.replace(
                "%data%", education
                .schools[i].name);
        var formattedschoolDegree =
            HTMLschoolDegree.replace(
                "%data%", education
                .schools[i].degree);
        var formattedSchool =
            formattedSchoolName.replace(
                "#data#", education
                .schools[i].url) +
            formattedschoolDegree;
        $(".education-entry:last").append(
            formattedSchool);
        var formattedSchoolDates =
            HTMLschoolDates.replace(
                "%data%", education
                .schools[i].dates);
        $(".education-entry:last").append(
            formattedSchoolDates
        );
        var formmattedschoolLocation =
            HTMLschoolLocation.replace(
                "%data%", education
                .schools[i].location
            );
        $(".education-entry:last").append(
            formmattedschoolLocation
        );
        var formattedschoolMajor =
            HTMLschoolMajor.replace(
                "%data%", education
                .schools[i].majors);
        $(".education-entry:last").append(
            formattedschoolMajor
        );
    }
    $(".education-entry:last").append(
        HTMLonlineClasses);
    for (i = 0; i < education.onlineCourses
        .length; i++) {
        $("#education").append(
            HTMLschoolStart);
        var onlineTitle =
            HTMLonlineTitle.replace(
                "%data%", education
                .onlineCourses[i].title
            );
        var onlineSchool =
            HTMLonlineSchool.replace(
                "%data%", education
                .onlineCourses[i].school
            );
        $(".education-entry:last").append(
            onlineTitle.replace(
                "#", education.onlineCourses[
                    i].url) +
            onlineSchool);
        var onlineDates =
            HTMLonlineDates.replace(
                "%data%", education
                .onlineCourses[i].dates
            );
        $(".education-entry:last").append(
            onlineDates);
        var onlineurl =
            HTMLonlineURL.replace(
                "%data%", education
                .onlineCourses[i].url
            );
        var onurl = onlineurl.replace(
            "#data#", education
            .onlineCourses[i].url
        );
        $(".education-entry:last").append(
            onurl);

    }
}

var projects = {
    "projects": [{
            "title": "Automated Aquaponic System",
            "dates": 2017,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. cubilia Curae; Sed odio odio, laoreet sed est nec, tempor consequat sem. Curabitur sed purus nec libero tempor faucibus eu a quam.",
            "images": [
                "http://via.placeholder.com/200x200",
                "http://via.placeholder.com/200x200"
            ]
        },
        {
            "title": "naveena mutai poochi kollum machine",
            "dates": 2017,
            "description": "Morbi luctus, felis at laoreet tincidunt, non augue vel urna aliquet feugiat ac ut nisi. Proin in tristique nibh, a volutpat mi. Fusce euismod tellus felis.",
            "images": [
                "http://via.placeholder.com/200x200",
                "http://via.placeholder.com/200x200"
            ]
        }
    ]
}
projects.display = function() {
    for (var i = 0; i < projects.projects
        .length; i++) {
        $("#projects").append(
            HTMLprojectStart);
        var formattedprojectTitle =
            HTMLprojectTitle.replace(
                "%data%", projects.projects[
                    i].title);
        $(".project-entry:last").append(
            formattedprojectTitle
        );
        var formattedprojectdates =
            HTMLprojectDates.replace(
                "%data%", projects.projects[
                    i].dates);
        var
            formattedprojectDescription =
            HTMLprojectDescription.replace(
                "%data%", projects.projects[
                    i].description);
        $(".project-entry:last").append(
            formattedprojectdates
        );
        $(".project-entry:last").append(
            formattedprojectDescription
        );
        for (var image = 0; image <
            projects.projects[i].images
            .length; image++) {
            var
                formattedprojectImage =
                HTMLprojectImage.replace(
                    "%data%",
                    projects.projects[
                        i].images[
                        image]);
            $(".project-entry:last")
                .append(
                    formattedprojectImage
                );
        }
    }
};



function footerContacts() {
    $("#footerContacts").append(
        formattedmobile);
    $("#footerContacts").append(
        formattedemail);
    $("#footerContacts").append(
        formattedgithub);
    $("#footerContacts").append(
        formattedtwitter);
    $("#footerContacts").append(
        formattedlocation);
}

work.display();
education.display();
projects.display();
bio.display();
footerContacts();
//to create the nav bar
var createbar = '<ul class="nav"></ul>';
$(createbar).insertAfter("#skills");
var navList = {
    "navItems": ["workExperience",
        "education", "projects",
        "mapDiv"
    ],
    "navNames": ["Work",
        "Education", "Projects",
        "Location"
    ]
}
var listItem =
    '<li class="nav-item"><a href="#%data%">';
navList.display = function() {
    for (i = 0; i < navList.navItems
        .length; i++) {
        var formatlist = listItem.replace(
            "%data%", navList.navItems[
                i]);
        $(".nav").append(formatlist +
            navList.navNames[i] +
            '</a></li');
    }
}
navList.display();
/*
$(document).click(function(loc) {
  // your code goes here
  logClicks(loc.pageX,loc.pageY);
});
*/

/*$("#main").append(internationalizeButton);
function inName(){
  var nameString=[];
  nameString=bio.name.split(" ");
  'nameString[0]=nameString[0].slice(1);
  nameString[0]=bio.name[0].toUpperCase()+nameString[0];
  nameString[1]=nameString[1].toUpperCase();
  var internationalName=nameString.join(" ");
  return internationalName;
}
inName();
*/
$("#mapDiv").append(googleMap);
