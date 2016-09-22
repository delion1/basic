var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    shell = require('gulp-shell'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    neat = require('node-neat').includePaths;

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({
	includePaths: ['sass'].concat(neat),
        outputStyle: 'compressed',
        sourceComments: 'map',
    }))
    .pipe(gulp.dest('css/'))
    .pipe(notify({
      title: "SASS Compiled",
      message: "All SASS files have been recompiled to CSS.",
      onLast: true
    }));
});

gulp.task('drush:cc', function () {
  return gulp.src('', {read: false})
    .pipe(shell([
      'drush cc all',
    ]))
    .pipe(notify({
      title: "Caches cleared",
      message: "Drupal CSS/JS caches cleared.",
      onLast: true
    }));
});

gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js-min'))
    .pipe(notify({
      title: "JS Minified",
      message: "All JS files in the theme have been minified.",
      onLast: true
    }));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  //gulp.watch('compress');
    //gulp.run('drush:cc');
  gulp.watch('js/**/*.js', ['compress']);
});

gulp.task('default', ['watch']);
