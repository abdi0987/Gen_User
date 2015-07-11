var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename');


gulp.task('js', function() {
  gulp.src('builds/src/**');
});

gulp.task('html', function() {
  gulp.src('index.html');
});

/*

gulp.task('concatScripts',function () {
  gulp.src(['builds/development/js/services/TextGenerator.js',
            'builds/development/js/directives/TextGenerator.js',
            'builds/development/js/directives/NameGenerator.js'])
          .pipe(concat('loremgen.js'))
          .pipe(gulp.dest('builds/development/js'));
});

gulp.task('minifyScripts',function () {
  gulp.src("builds/development/js/loremgen.js")
          .pipe(uglify())
          .pipe(rename('loremgen.min.js'))
          .pipe(gulp.dest('builds/production/js'));
});

*/

gulp.task('watch', function() {
  gulp.watch('builds/src/**/*', ['js']);
  gulp.watch('builds/src/*.html', ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/src/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'webserver']);
