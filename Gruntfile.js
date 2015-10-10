/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {
          "angular": true,
          "Kinetic": true,
          "$": true,
          "require": true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      js: {
        src: ['app.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      www: {
        files: ['app.js', 'index.html'],
        tasks: ['jshint:js'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      options: {
        port: 9000,
        open: true,
        keepalive: true
      },
      server: {
        options: {
          middleware: function() {
            return [
              require('connect-livereload')()
            ];
          }
        }
      }
    },
    wiredep: {
      www: {
        src: 'index.html'
      },
      bower: {
        src: 'bower.json',
        tasks: ['wiredep']
      }
    },
    concurrent: {
      server: ['watch', 'connect']
    }
  });

  // These plugins provide necessary tasks.
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-concurrent');

  // Default task.
  grunt.registerTask('default', [
    'wiredep',
    'jshint',
    'concurrent:server'
    ]);

};
