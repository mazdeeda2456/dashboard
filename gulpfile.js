var gulp = require('gulp');
    sass = require('gulp-sass');
    minify = require('gulp-minify-css');
    babelminigy = require("gulp-babel-minify");
    concat = require('gulp-concat');
    order = require('gulp-order');
    autoprefixer = require('gulp-autoprefixer');
    
gulp.task('default', ['sass','js']);

gulp.task('sass',function(){
  return gulp.src('app/scss/**/*.scss')
   .pipe(concat('main.scss'))
   .pipe(sass())
   .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
   .pipe(minify())
   .pipe(gulp.dest('disc'));
});

gulp.task('js', function() {
  return gulp.src('app/js/**/*.js')
    .pipe(concat('mian.js'))
    .pipe(babelminigy({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest('disc'));
});

gulp.task('watch', function(){
  gulp.watch('app/**/*.scss', ['sass', 'js']); 
});
