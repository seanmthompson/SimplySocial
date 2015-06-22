var path = require('path');

module.exports = function(grunt){	
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
     	uglify: {
			options: {
				mangle: false,
                sourceMap: true
			},
			build: {
				files: {
					'js/app.libs.min.js': [
						'js/libs/require/modernizr.js',
						'js/libs/modernizr/modernizr.js',
						'js/libs/jquery/dist/jquery.js',
						'js/libs/angular/angular.js',
						'js/libs/angular-ui-router/release/angular-ui-router.js',
						'js/libs/bootstrap/dist/js/bootstrap.js',
						'js/libs/angular-sanitize/angular-sanitize.js',
						'js/libs/ng-loaders/ngLoader.js',
					]
				}
			}
		},
		
		less: {
		  development: {
			options: {
			  paths: ["css"],
			  compress: true,
			  sourceMap: true
			},
			files: {
			  	"css/app.css": "css/app.less"
			}
		  }
		},

		watch: {    
			less: {
				files: ['css/*.less', 'css/**/*.less'],
				tasks: ['less']
			},
			
			js: {
				files: ['js/*.js', 'js/**/*.js'],
				tasks: ['uglify']
			}
		}
    });

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin')
	grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', []);

};