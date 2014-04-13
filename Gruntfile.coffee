module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)
  grunt.initConfig
    hapi:
      def:
        server : "./lib/index.js"
    watch:
      all:
        files : ["./index.js", "lib/*.js", "template/*", "fixture/*"]
        options:
          spawn: false
  grunt.registerTask 'default', ['hapi', 'watch']
