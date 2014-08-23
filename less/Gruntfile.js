module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    watch: {
      less: {
        files: ['style/less/**/*.less', 'index.html'],
        tasks: ['less'],
        options: {
          livereload: true,
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000
        }
      }
    },
    less: {
      development: {
        files: {
          "style/main.css": "style/less/main.less"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('server', ['connect', 'watch']);
};
