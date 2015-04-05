module.exports = function(grunt) {

  // Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        files: {
          "dist/PIANO.css": [
            "less/*.less",
            "bower_components/gripscroll/dist/GripScroll.css"
          ]
        }
      }
    },
    jshint: {
      options: {
        laxcomma: true
      },
      all: [
        'js/*.js'
      ]
    },
    uglify: {
      dev: {
        files: {
          "dist/PIANO.js": [
            "bower_components/keymaster/keymaster.js",
            "bower_components/gripscroll/dist/GripScroll.js",
            "js/*.js"
          ]
        },
        options: {
          beautify: true,
          mangle: false
        }
      }
    },
    watch: {
      less: {
        files: "less/*.less",
        tasks: "less"
      },
      js: {
        files: "js/*.js",
        tasks: [
          "jshint",
          "uglify"
        ]
      }
    }
  });

  // Tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Commands
  grunt.registerTask('default', ['less', 'jshint', 'uglify']);

};