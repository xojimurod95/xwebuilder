var gulp = require('gulp');                         //4.2 version
var autoprefixer = require('gulp-autoprefixer');    //webkit qo'yish uchun tani eski brauzerlarda ishlash uchun
var csso = require('gulp-csso');                    // css bir qator qiladi
var rename = require("gulp-rename");                //min qo'shimchasi
var gcmq = require('gulp-group-css-media-queries'); //medialar uchun
var watch = require('gulp-watch');                  //musor papkani kuzatib avtomat tarzda toza papkaga jo'natadi
var browserSync = require('browser-sync').create(); //
var plumber = require('gulp-plumber');              //   
var sourcemaps = require('gulp-sourcemaps');        //
var less = require('gulp-less');
// var CleanCSS = require('clean-css');             //shu      
// var uglify = require('gulp-uglify-es').default;     //shu

gulp.task('style', style);

function style() {
    return gulp.src('./app/precss/style.less')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(less())
        .pipe(gcmq())
        .pipe(autoprefixer({
            browsers: ['last 50 versions', '> 3%', 'ie 11'],//shu
            cascade: false
        }))
        .pipe(gulp.dest('./app/css'))
        .pipe(csso())
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(sourcemaps.write('.'))
        // .pipe(CleanCSS())//shu
        // .pipe(uglify())//ustanovka qil npm i gulp-uglify-es
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.stream());

}

gulp.task('watch', function () {
    watch("./app/precss/**/*.less", style);
    watch("./app/index.html", browserSync.reload);
    watch("./app/html/**/*.html", browserSync.reload);
    watch("./app/js/*.js", browserSync.reload);
    watch("./app/image.img/*.*", browserSync.reload);
    watch("./app/Libs/*.*", browserSync.reload);
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./app"
        },
        tunnel: false,
        notify: true,
        host: 'localhost',
        port: 9000,
    })
});

gulp.task("default", gulp.parallel("style", "watch", "server"));