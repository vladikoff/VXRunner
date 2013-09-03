'use strict';

var APP_SRC = "game/src/";
var APP_OUT = "game/out/";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    browserify: {
      voxelbundle: {
        src: APP_SRC + 'js/voxel-bundle.js',
        dest: APP_OUT + 'js/voxel-bundle.js'
      },
      dev: {
        src: APP_SRC + 'js/game-bundle.js',
        dest: APP_OUT + 'js/bundle.js'
      }
    },
    less: {
      files: {
        src:  APP_SRC + 'less/vxrunner.less',
        dest: APP_OUT + 'css/vxrunner.css'
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, cwd: APP_SRC, src: [ '*.html', 'img/*.*', 'js/lib/**'], dest: APP_OUT }
        ]
      }
    },
    watch: {
      front: {
        options: {
          atBegin: true
        },
        files: [ APP_SRC + '**/*', 'node_modules/voxel-oculus-vr/**/*' ],
        tasks: ['build']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify:voxelbundle', 'build']);
  grunt.registerTask('build', ['browserify:dev', 'less', 'copy']);
  grunt.registerTask('dev', ['watch']);
};
