//Importar los modulos y plugins que se usaran.Cada uno se importa con requiere('modulo')
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
//Crear tarea

gulp.task('sass',function() {
   return  gulp.src('./scss/styles.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers:['last 2 versions'],
           cascade: false
       }))
      .pipe(gulp.dest('./css/'))
      .pipe(browserSync.stream());
  });

  //npm install browser-sync --save-dev
  gulp.task('default', function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch('./scss/styles.scss',gulp.series(['sass']));
    gulp.watch("./*.html").on('change', browserSync.reload);

});



////
