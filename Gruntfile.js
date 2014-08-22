module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean'); //erases everything in a dir (dist in our case)
  grunt.loadNpmTasks('grunt-contrib-copy'); //copies static files
  grunt.loadNpmTasks('grunt-browserify'); //builds js files
  grunt.loadNpmTasks('grunt-mocha');

  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      }
    },
    copy: {
      dev: {
        expand: true,
        cwd: 'app/',  //current working directory
        src: ['*.html', '*.css'],
        dest: 'build/',
        filter: 'isFile'
      }
    },
    browserify: {
      dev: {
        options: {
          transform: ['debowerify', 'hbsfy'],
          debug: true
        },
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js'
      },
      test: {
        options: {
          transform: ['hbsfy', 'debowerify'],
          debug: true
        },
        src: ['test/mocha/backbone/**/*.js'],
        dest: 'test/testbundle.js'
      }
    },
    mocha: {
      backbonetest: {
        src: ['test/test.html'],
        options: {
          run: true
        }
      }
    },
  });
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('backbone:test', ['browserify:test', 'mocha:backbonetest']);
  grunt.registerTask('test', ['backbone:test']);
  grunt.registerTask('default', ['buildtest']);
  grunt.registerTask('buildtest', ['test', 'build:dev']);
  //the default grunt task should probably be a test
};