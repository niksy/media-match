module.exports = function ( grunt ) {

	grunt.initConfig({

		uglify: {
			dist: {
				options: {
					preserveComments: 'some'
				},
				files: {
					'media.match.min.js': ['media.match.js']
				}
			}
		}

	});

	grunt.registerTask('default',['uglify:dist']);

	grunt.loadNpmTasks('grunt-contrib-uglify');

};
