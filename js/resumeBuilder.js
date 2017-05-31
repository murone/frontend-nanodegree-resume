/*
This is empty on purpose! Your code to build the resume will go here.
 */


var model = {
	"bio": {
		"name": "Chris Murone",
		"role": "Staff Software Engineer - Brilliant Factory",
		"contacts": {
			"mobile": "724-372-4984",
			"email": "c.murone@gmail.com",
			"github": "murone",
			"twitter": "@chrismurone",
			"location": "Slippery Rock, PA"
		},
		"welcomeMessage": "Welcome to my resume! It's still a work in progress.",
		"skills": ["awesomeness", "programming", "teaching", "js"],
		"biopic": "images/ProfessionalPortrait.jpg"
	},
	"schools": [
		{
			"name": "Robert Morris University",
			"location": "Moon Twp, PA",
			"degree": "BA",
			"majors": ["Software Engineering"],
			"dates": "2009-2013",
			"url": "http://www.rmu.edu/"
		},
		{
			"name": "Grove Cith High School",
			"location": "Grove City, PA",
			"degree": "HS Diploma",
			"majors": ["N/A"],
			"dates": "2006-2009",
			"url": "http://www.grovecity.k12.pa.us/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer Nanodgree",
			"school": "Udacity",
			"dates": "April - November 2016",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "IT Strategy and Portfolio Management",
			"school": "Indiana University",
			"dates": "December 2014 - March 2015",
			"url": "https://www.iu.edu"
		}
	],
	"projects": [
		{
			"title": "Grove City Production Control",
			"dates": "Oct 2014-March 2015",
			"description": "We made something that runs a shop",
			"images": ["images/197x148.gif", "images/fry.jpg"]
		},
		{
			"title": "Fairchild ERP Conversion",
			"dates": "October 2013-May 2014",
			"description": "We put them on Oracle!",
			"images": ["images/fry.jpg","images/197x148.gif"]
		}
	],
	"jobs": [
		{
			"employer": "GE Transportation",
			"title": "Lead IT Engineer - Thingworx Visualization",
			"location": "Grove City, PA",
			"dates": "January 2016 - Present",
			"description": "Make pretty things"
		},
		{
			"employer": "GE Transportation",
			"title": "Project Manager - UX Ops BI",
			"location": "Grove City, PA",
			"dates": "May 2015 - December 2015",
			"description": "Made BI reports"
		},
		{
			"employer": "GE Transportation",
			"title": "IT Security Leader",
			"location": "Erie, PA",
			"dates": " March 2014 - August 2014",
			"description": "Made BI reports"
		},
		{
			"employer": "GE Transportation",
			"title": "Project Manger - Commercial and Communications Support",
			"location": "Chicago, IL",
			"dates": "August 2013 - February 2014",
			"description": "Made BI reports"
		},
		{
			"employer": "GE Transportation",
			"title": "Intern - CTO",
			"location": "Grain Valley, MO",
			"dates": "May 2011 - August 2011",
			"description": "Did CTO Things"
		},
	]
};

var controller = {
	init: function() {
		this.locationizer(model.jobs);
    	view.displayBio(model.bio);
    	view.displayEducation(model.schools,model.onlineCourses);
    	view.displayProjects(model.projects);
    	view.displayWork(model.jobs);
    	view.init();
    },
    locationizer: function(work_obj) {
		var locArray = [];
		work_obj.forEach(function(job){
			locArray.push(job.location);
		});
	}
};

var view = {
	init: function() {
    	$(document).click(function (loc) {
			var x = loc.pageX;
			var y = loc.pageY;
			logClicks(x, y);
		});
		var $animation_elements = $('#inner');
		var $window = $(window);

		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');

		function check_if_in_view() {
			var window_height = $window.height();
			var window_top_position = $window.scrollTop();
			var window_bottom_position = (window_top_position + window_height);

			$.each($animation_elements, function () {
				var $element = $(this);
				var element_height = $element.outerHeight();
				var element_top_position = $element.offset().top;
				var element_bottom_position = (element_top_position + element_height);

				//check to see if this current container is within viewport
				if ((element_bottom_position >= window_top_position) &&
					(element_top_position <= window_bottom_position)) {
					$element.addClass('in-view');
				} else {
					$element.removeClass('in-view');
				}
			});
		}
    },
    displayBio: function (bio) {

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#inner").prepend(formattedName + formattedRole);
		$("#inner").prepend(formattedPic);
		$("#topContactsICON").append(formattedGithub);
		$("#topContactsICON").append(formattedTwitter);
		$("#topContactsICON").append(formattedLinkedin);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedLocation);
		$("#header").append(formattedWelcome);
		if (bio.skills.length > 0) {

			$("#header").append(HTMLskillsStart);
			bio.skills.forEach(function(skill) {
			  var formattedSkill = HTMLskills.replace("%data%", skill);
				$("#skills").append(formattedSkill);
			});
		}
		$("#mapDiv").append(googleMap);
		$("#lets-connectICON").append(formattedGithub);
		$("#lets-connectICON").append(formattedTwitter);
		$("#lets-connectICON").append(formattedLinkedin);
		$("#lets-connectTEXT").append(formattedEmail);
		$("#lets-connectTEXT").append(formattedMobile);
		$("#lets-connectTEXT").append(formattedLocation);
	},
	displayEducation:function(schools, courses) {

		schools.forEach(function(schools) {
		  $("#education").append(HTMLschoolStart);

			var formattedSchool = HTMLschoolName.replace("%data%", schools.name).replace("#", schools.url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", schools.degree);
			var formattedDate = HTMLworkDates.replace("%data%", schools.dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", schools.location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", schools.majors, toString());

			$(".education-entry:last").append(formattedSchool + formattedDegree + formattedDate + formattedLocation + formattedMajor);
		});

		$("#education").append(HTMLonlineClasses);

		courses.forEach(function(courses) {
		  $("#education").append(HTMLschoolStart);

			var formattedCourseO = HTMLonlineTitle.replace("%data%", courses.title).replace("#", courses.url);
			var formattedSchoolO = HTMLonlineSchool.replace("%data%", courses.school);
			var formattedDateO = HTMLonlineDates.replace("%data%", courses.dates);
			var formattedURL = HTMLonlineURL.replace("%data%", courses.url).replace("#", courses.url);

			$(".education-entry:last").append(formattedCourseO + formattedSchoolO + formattedDateO + formattedURL);
		});

	},
	displayProjects: function (projects) {
		projects.forEach(function(proj) {
		  $("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", proj.title);
			var formattedDate = HTMLprojectDates.replace("%data%", proj.dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", proj.description);
			$(".project-entry:last").append(formattedTitle + formattedDate + formattedDescription);
			proj.images.forEach(function(img) {
				var formattedImg = HTMLprojectImage.replace("%data%", img);
				$(".project-entry:last").append(formattedImg);

			});

			
		});
	},
	displayWork: function (jobs) {
		jobs.forEach(function(job) {
		  $("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
			var formattedDate = HTMLworkDates.replace("%data%", job.dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

			$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDate + formattedLocation + formattedDescription);
		});
	}
};

//RUNTIME CALLS
controller.init();

