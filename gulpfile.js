var gulp = require('gulp');
var inject = require('gulp-inject');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var javascriptObfuscator = require('gulp-javascript-obfuscator');
var angularFilesort = require('gulp-angular-filesort');
var webserver = require('gulp-webserver');
var rm = require('gulp-rm');
var image = require('gulp-image');

// paths ar correct for src folder
var paths = {
  src: 'public/**/*',
  srcHTML: 'public/**/*.html',
  srcCSS: ['public/styles/*.css'],
  srcJS: ['public/**/module.js', 'public/**/controller.js', 'public/**/router.js', 'public/**/directive.js'],
  tmp: 'tmp',
  tmpIndex: 'tmp/index.html',
  tmpCSS: ['tmp/**/style.min.css'],
  tmpJS: ['tmp/**/bundle.min.js']
};

gulp.task('move', function () {
  return gulp.src([
    './public/fonts/**/*.*',
    './public/images/**/*.*',
    './public/library/**/*.*'
    ], {
      base: 'public'
    })
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: true,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
      quiet: true // defaults to false
    }))
    .pipe(gulp.dest('./tmp/'));
});

gulp.task('html', function () {
  return gulp.src(paths.srcHTML)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('css', function () {
  return gulp.src(paths.srcCSS)
    .pipe(sourcemaps.init())
    .pipe(concat('styles/style.min.css'))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('bundle', function () {
  return gulp.src(paths.srcJS)
    .pipe(sourcemaps.init())
    .pipe(angularFilesort())
    .pipe(concat('scripts/bundle.min.js'))
    .pipe(uglify())
    .pipe(javascriptObfuscator({
      compact: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./tmp'));
});


gulp.task('copy', ['html', 'css', 'bundle']);

gulp.task('inject', ['copy'], function () {
  var css = gulp.src(paths.tmpCSS);
  var js = gulp.src(paths.tmpJS);
  return gulp.src(paths.tmpIndex)
    .pipe(inject(css, {
      ignorePath: '/tmp'
    }))
    .pipe(inject(js, {
      ignorePath: '/tmp'
    }))
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('serve', ['inject'], function () {
  gulp.src(paths.tmp)
    .pipe(webserver({
      port: 3000,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('clean', function () {
  return gulp.src('tmp/**/*', {
      read: false
    })
    .pipe(rm({
      async: false
    }));
});

gulp.task('watch', ['serve'], function () {
  gulp.watch(paths.src, ['inject', 'move']);
});

gulp.task('default', ['watch']);