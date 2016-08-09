module.exports =  function(grunt){


grunt.initConfig({
  concat: {
            css: {
            src: ['css/*.css',],
            dest: '../theme/assets/css/master.css',
    },js: {
    src: ['js/*.js',],
    dest: '../theme/assets/js/master.js',
},


  },

watch: {
  css: {
    files: ['css/*.css'],
    tasks: ['concat'],

  },js: {
    files: ['js/*.js'],
    tasks: ['concat'],

  },

    less: {
    files: ['less/core.less'],
    tasks: ['less'],

  },
},

less: {
  development: {
    options: {
      paths: ['/less']
    },
    files: {
      'css/less.css': 'less/core.less'
    }
  },
},


});

 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-contrib-less');


}
