const gulp = require('gulp');
const gulpif = require('gulp-if');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');

gulp.task('clean', () => {
  return del(['./*-compiled.*'])
});

gulp.task('compile', () => {
  return gulp.src(['./*.js', '!./gulpfile.js'])
    .pipe(gulpif(/\.js$/, babel()))
    .pipe(gulpif(/\.js$/, uglify()))
    .pipe(rename({
      suffix: "-compiled"
    }))
    .pipe(gulp.dest('./'));
});
gulp.task('default',
  gulp.series('clean', 'compile')
);