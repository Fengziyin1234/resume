var gulp = require('gulp');
var browserSync = require('browser-sync').create();
// var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
// var uglify = require('gulp-uglify');
// var clean = require('gulp-clean');
// var stylish = require('jshint-stylish');
// var imagemin=require('gulp-imagemin');


gulp.task('sass', function() {
	return gulp.src('.app/style/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('.app/style/css/'))

});


gulp.task('watch', function() {
  gulp.watch('.app/style/sass/*.scss', ['sass']);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})





// gulp.task('task1' , function(){
// 		return gulp.src(['./app/assets/images/src/app/*.jpg','./app/assets/images/src/app/*.png'])
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('./app/assets/images/build/app'))
// 	});
// gulp.task( 'task2' ,function(){
// 		return gulp.src('./app/assets/images/src/profile/*.png')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('./app/assets/images/build/profile'))
// 	});
// gulp.task('task3', function(){
// 		return gulp.src('./app/assets/images/src/work/*.jpg')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('./app/assets/images/build/work'))
// 	});
// gulp.task('clean1',function(){
// 	return gulp.src('./app/assets/styles/*.css', {read: false})
//     .pipe(clean());

// });
// gulp.task('clean2',function(){
// 	return gulp.src('./app/assets/images/build/app/*', {read: false})
//     .pipe(clean());

// });
// gulp.task('clean3',function(){
// 	return gulp.src('./app/assets/images/build/profile/*', {read: false})
//     .pipe(clean());

// });
// gulp.task('clean4',function(){
// return gulp.src('./app/assets/images/build/work/*', {read: false})
//     .pipe(clean());
// });

// gulp.task('jshint', function() {
//   return gulp.src('./app/scripts/**/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'));
// });
	
// gulp.task('imagemin',['task1','task2','task3']);

// gulp.task('clean',['clean1','clean2','clean3']);







