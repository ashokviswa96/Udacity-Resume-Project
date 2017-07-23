/*
This is empty on purpose! Your code to build the resume will go here.
 */
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
   "skills": ["awesomeness", "HTML", "CSS", "Javascript", "more awesomeness", "even more awesomeness 😄"],
   "biopic": "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/13669600_1228890430468621_574650787557749977_n.jpg?oh=b607cc63bac31b5ddf2808040598c5c7&oe=59CFC892",
};
//Object "work" consisting of the details about work
var work = {
   jobs: [{
      "title": "Center Forward",
      "employer": "Manchester United",
      "location": "Manchester,Uk",
      "dates": "2017",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
   }, {
      "title": "Systems Engineer",
      "employer": "Infosys",
      "location": "Mysore,India",
      "dates": "2017",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
   }]
};
//Object "education" consisting of the details about education
var education = {
   "schools": [{
      "name": "Jawahar Higher Secondary School",
      "location": "Ashok Nagar,Chennai",
      "degree": "High School ",
      "majors": ["Computer Science", "Sanskrit"],
      "dates": "2011-2013",
      "url": "http://www.jawaharssm.com/"
   }, {
      "name": "Velammal Institute of Technology",
      "location": "Karanodai",
      "degree": "B.E.",
      "majors": ["Electronics & Communication Engineering"],
      "dates": "2013-2017",
      "url": "http://velammalitech.edu.in/"
   }],
   "onlineCourses": [{
      "title": "Front End Nanodegree",
      "school": "Udacity",
      "dates": "in progress",
      "url": "https://in.udacity.com/"
   }]
};
//object 'projects' containing info about projects.
var projects = {
   "projects": [{
      "title": "Automated Aquaponic System",
      "dates": "2017",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "images": ["http://via.placeholder.com/200x200", "http://via.placeholder.com/200x200"]
   }, {
      "title": "naveena mutai poochi kollum machine",
      "dates": "2017",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "images": ["http://via.placeholder.com/200x200", "http://via.placeholder.com/200x200"]
   }]
};
bio.display = function() {
   var formattedName = HTMLheaderName.replace("%data%", bio.name);
   var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
   var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
   var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
   var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
   var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
   var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
   var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
   var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
   var formattedGenericContacts = HTMLcontactGeneric.replace("%contact%", bio.contacts);
   $("#topContacts , #footerContacts").append(formattedmobile, formattedemail, formattedgithub, formattedtwitter, formattedlocation);
   $("#header").prepend(formattedName + formattedRole).append(formattedbioPic, formattedWelcome);
   var buttonLink = '<button type="button" id="download-resume"><a href="my-resume.docx"  download>download resume</a></button>';
   $("#download").append("<p>Here is a link to download resume in docx format:</p>", buttonLink);
   if (bio.skills.length) {
      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
         var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
         $("#skills").append(formattedSkills);
      }
   }
};
work.display = function displayWork() {
   if (work.jobs.length > 0) {
      for (var jobs = 0; jobs < work.jobs.length; jobs++) {
         var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
         var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
         var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
         var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[jobs].location);
         var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
         $("#workExperience").append(HTMLworkStart);
         $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle, formattedworkLocation, formattedworkDates, formattedworkDescription);
      }
   }
};
education.display = function() {
   for (var i = 0; i < education.schools.length; i++) {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchool = formattedSchoolName.replace("#data#", education.schools[i].url) + formattedschoolDegree;
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formmattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      $(".education-entry:last").append(formattedSchool, formattedSchoolDates, formmattedschoolLocation);
      var formattedschoolMajor = [];
      for (var k = 0; k < education.schools[i].majors.length; k++) {
         formattedschoolMajor[k] = HTMLschoolMajor.replace("%data%", education.schools[i].majors[k]);
         $(".education-entry:last").append(formattedschoolMajor[k]);
      }
   }
   $(".education-entry:last").append(HTMLonlineClasses);
   for (i = 0; i < education.onlineCourses.length; i++) {
      $("#education").append(HTMLschoolStart);
      var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
      var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      $(".education-entry:last").append(onlineTitle.replace("#", education.onlineCourses[i].url) + onlineSchool);
      var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      var onlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
      var onurl = onlineurl.replace("#data#", education.onlineCourses[i].url);
      $(".education-entry:last").append(onlineDates, onurl);
   }
};
projects.display = function() {
   for (var i = 0; i < projects.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);
      var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      var formattedprojectdates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      $(".project-entry:last").append(formattedprojectTitle, formattedprojectdates, formattedprojectDescription);
      for (var image = 0; image < projects.projects[i].images.length; image++) {
         var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
         $(".project-entry:last").append(formattedprojectImage);
      }
   }
};
//to create the nav bar
navList.display = function() {
   $(createbar).insertAfter("#skills");
   for (var i = 0; i < navList.navItems.length; i++) {
      var formatlist = listItem.replace("%data%", navList.navItems[i]);
      $(".nav").append(formatlist + navList.navNames[i] + '</a></li>');
   }
};
//to invoke the display functions for all the section of the page.
work.display();
education.display();
projects.display();
bio.display();
//to add google map
$("#mapDiv").append(googleMap);
//to add the navigation bar
navList.display();
