var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    open: false,
    server: "./"
  });

  gulp.watch("*.scss", ['sass']);
  gulp.watch(["**/*.html", "**/*.css"]).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("*.scss")
    .pipe(sass())
    .pipe(gulp.dest("."))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);