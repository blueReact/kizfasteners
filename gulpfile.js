var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglifycss = require('gulp-uglifycss');

gulp.task('minify-css', () => {
  return gulp.src('public/styles/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('public/dist'));
});

gulp.task('default', function () {
  gulp.watch('public/styles/*.css', gulp.series('minify-css'));
  return;
});

// note
// console: gulp to bundle code