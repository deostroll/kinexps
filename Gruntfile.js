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
        src: ['src/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      js: {
        files: ['src/*.js'],
        tasks: ['jshint:js'],
        options: {
          livereload: '<%= connect.options.livereload'
        }
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 3582
      },
      server: {
        options: {
          open: false,
          middleware: function(connect) {
            var app  = connect();
            connect.static = require('./node_modules/grunt-contrib-connect/node_modules/serve-static');
            app.use(connect.static('src'));
            app.use('/bower_components', connect.static('bower_components'));
            var lr = require('./node_modules/grunt-contrib-connect/node_modules/connect-livereload');
            return [
              lr(),
              app
            ];
          }
        }
      }
    },
    wiredep: {
      www: {
        src: ['src/*.html']
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
  
  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', [
    'wiredep',
    'jshint',
    'concurrent:server'
    ]);

};
