/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	"name": "Chris Murone",
	"role" : "Lead IT Engineer - Thingworx Visualization",
	"contacts" : {
		"mobile" : "724-372-4984",
		"email" : "c.murone@gmail.com",
		"github" : "murone",
		"twitter" : "@bonesmurones",
		"location" : "Slippery Rock, PA"
	},
	"welcomeMessage" : "Welcome to my resume! It's still a work in progress.",
	"skills" : ["awesomeness", "programming", "teaching", "js"],
	"bioPic" : "images/ProfessionalPortrait.jpg",
	display: function display(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);

		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		// $("#main").append(internationalizeButton);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").prepend(formattedPic);
		$("#topContactsICON").append(formattedGithub);
		$("#topContactsICON").append(formattedTwitter);
		$("#topContactsICON").append(formattedLinkedin);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedLocation);
		$("#header").append(formattedWelcome);
		if (bio.skills.length > 0){

			$("#header").append(HTMLskillsStart);
			for (var skill in bio.skills){
			var formattedSkill= HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
			}
		}
		$("#mapDiv").append(googleMap);

		$("#lets-connectICON").append(formattedGithub);
		$("#lets-connectICON").append(formattedTwitter);
		$("#lets-connectICON").append(formattedLinkedin);
		$("#lets-connect").append(formattedEmail);
		$("#lets-connect").append(formattedMobile);
		$("#lets-connect").append(formattedLocation);
	}
};

var education = {
	"schools" : [
		{
			"name": "Robert Morris University", 
			"location": "Moon Twp, PA",
			"degree" : "BA",
			"majors": ["Software Engineering"],
			"dates": "2009-2013",
			"url" : "http://www.rmu.edu/"
		},
		{
			"name": "Grove Cith High School", 
			"location": "Grove City, PA",
			"degree" : "HS Diploma",
			"majors": ["N/A"],
			"dates": "2006-2009",
			"url" : "http://www.grovecity.k12.pa.us/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front End Web Developer Nanodgree",
			"school" : "Udacity",
			"dates" : "April - November 2016",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title" : "IT Strategy and Portfolio Management",
			"school" : "Indiana University",
			"dates" : "December 2014 - March 2015",
			"url" : "https://www.iu.edu"
		}
	],
	display: function(){
		for (var schools in education.schools){
			$("#education").append(HTMLschoolStart);

			var formattedSchool = HTMLschoolName.replace("%data%", education.schools[schools].name).replace("#", education.schools[schools].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
			var formattedDate = HTMLworkDates.replace("%data%", education.schools[schools].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", education.schools[schools].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].majors,toString());

			$(".education-entry:last").append(formattedSchool + formattedDegree + formattedDate + formattedLocation + formattedMajor);
		}

		$("#education").append(HTMLonlineClasses);

		for (var courses in education.onlineCourses){
			$("#education").append(HTMLschoolStart);

			var formattedCourseO = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title).replace("#", education.onlineCourses[courses].url);
			var formattedSchoolO = HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
			var formattedDateO = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].dates);
			// var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url).replace("#", education.onlineCourses[courses].url);

			$(".education-entry:last").append(formattedCourseO + formattedSchoolO + formattedDateO);
		}
	}
};

var projects = {
	"projects" : [
		{
			"title": "Grove City Production Control", 
			"dates": "Oct 2014-March 2015",
			"description" : "We made something that runs a shop",
			"images": "images/197x148.gif"
		},
		{
			"title": "Fairchild ERP Conversion", 
			"dates": "October 2013-May 2014",
			"description" : "We put them on Oracle!",
			"images": "images/fry.jpg"
		}
	],
	display: function(){
		for (var projs in projects.projects){
			$("#projects").append(HTMLprojectStart);		
			
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[projs].title);
			var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[projs].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[projs].description);
			var formattedImg = HTMLprojectImage.replace("%data%", projects.projects[projs].images);

			$(".project-entry:last").append(formattedTitle + formattedDate + formattedDescription + formattedImg);
		}
	}
};

var work = {
	"jobs" : [
		{
			"employer": "GE Transportation", 
			"title": "Lead IT Engineer - Thingworx Visualization",
			"location" : "Grove City, PA",
			"dates": "January 2016 - Present",
			"description" : "Make pretty things"
		},
		{
			"employer": "GE Transportation", 
			"title": "Project Manager - UX Ops BI",
			"location" : "Grove City, PA",
			"dates": "May 2015 - December 2015",
			"description" : "Made BI reports"
		},
		{
			"employer": "GE Transportation", 
			"title": "IT Security Leader",
			"location" : "Erie, PA",
			"dates": " March 2014 - August 2014",
			"description" : "Made BI reports"
		},
		{
			"employer": "GE Transportation", 
			"title": "Project Manger - Commercial and Communications Support",
			"location" : "Chicago, IL",
			"dates": "August 2013 - February 2014",
			"description" : "Made BI reports"
		},
		{
			"employer": "GE Transportation", 
			"title": "Intern - CTO",
			"location" : "Grain Valley, MO",
			"dates": "May 2011 - August 2011",
			"description" : "Did CTO Things"
		},
	],
	display: function(){
		for (var jobs in work.jobs){
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
			var formattedDate = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobs].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);

			$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDate + formattedLocation + formattedDescription);
		}
	}
};

function locationizer (work_obj){
	var locArray = [];
	for (var jobs in work_obj.jobs){
		locArray.push(work_obj.jobs[jobs].location);
	}
	console.log(locArray);
}



//RUNTIME CALLS
locationizer(work);
bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
		var x = loc.pageX;
		var y = loc.pageY;
		logClicks(x,y);
		});
