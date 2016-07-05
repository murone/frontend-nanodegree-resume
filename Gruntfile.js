/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
	"grunt" alone creates a new, completed images directory
	"grunt clean" removes the images directory
	"grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files: ['*.js', 'js/resumeBuilder.js', 'js/helper.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},
		csslint: {
			strict: {
				options: {
					import: 2
				},
				src: ['css/*.css']
			},
			lax: {
				options: {
					import: false
				},
				src: ['css/*.css']
			}
		},
		autoprefixer: {
			options: {
				// Task-specific options go here. 
			},
			your_target: {
				// Target-specific file lists and/or options go here. 
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default',['jshint', 'csslint', 'autoprefixer']);

};
