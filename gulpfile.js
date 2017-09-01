'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/assets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/*.scss', ['sass']);
});