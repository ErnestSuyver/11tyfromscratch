const sass = require('gulp-sass')(require('sass'));
const {parallel, watch} = require('gulp');
const fonts = require('./gulp-tasks/fonts.js');
const images = require('./gulp-tasks/images.js');

// Pull in each task
const sassTask = require('./gulp-tasks/sass.js');

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
const watcher = () => {
  watch('./src/scss/**/*.scss', {ignoreInitial: true}, sassTask);
  watch('./src/images/**/*', {ignoreInitial: true}, images);
};

// The default (if someone just runs `gulp`) is to run each task in parrallel
exports.default = parallel(fonts, images, sassTask);

// This is our watcher task that instructs gulp to watch directories and
// act accordingly
exports.watch = watcher;