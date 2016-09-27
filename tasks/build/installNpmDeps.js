module.exports = function (grunt) {
  var { exec } = require('child_process');
  var { resolve } = require('path');

  grunt.registerTask('_build:installNpmDeps', function () {
    grunt.file.mkdir('build/kibana/node_modules');

    exec('npm install  --production --no-optional', {
      cwd: grunt.config.process('<%= root %>/build/kibana'),
      maxBuffer: 500 * 1024
    }, this.async());
  });
};


