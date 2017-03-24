module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
            watch: {
                scripts: {
                    files: ['./src/**/*.js'],
                    tasks: ['test','babel'],
                    options: {
                        spawn: false
                    }
                }
            },
            eslint: {
                all: ['Gruntfile.js', './src/**/*.js',],
                options: {
                    'ecmaVersion': 6
                }
            },
            babel: {
                options: {
                    sourceMap: true,
                    presets: ['es2015']
                },
                dist: {
                    files: {
                        './dist/index.js': './src/index.js'
                    }
                }
            },
            mochaTest: {
                ci: {
                    src: './src/**/*.test.js',
                    options: {
                        reporter: 'mocha-junit-reporter',
                        captureFile: 'junit/test-results.xml'
                    }
                }
            },
            mocha_istanbul: {
                coverage: {
                    src: 'src',
                    options: {
                        mask: '*.test.js'

                    }
                }
            },
            checkDependencies: {
                this: {}
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', ['checkDependencies', 'babel']);
    grunt.registerTask('test', ['checkDependencies', 'babel', 'mocha_istanbul']);

};