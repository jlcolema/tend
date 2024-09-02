
// Include Gulp

var gulp = require('gulp');

// Include Plugins

// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');

var sass = require('gulp-sass');

// var imagemin = require('gulp-imagemin');
// var cache = require('gulp-cache');

var notify = require('gulp-notify');

var livereload = require('gulp-livereload');


// Concatenate and Minify JS Files

// gulp.task('js', function() {

// 	return gulp.src(['src/js/jquery.js', 'src/js/*.js'])

// 		.pipe(concat('scripts.js'))

// 		.pipe(rename({suffix: '.min'}))

// 		.pipe(uglify())

// 		.pipe(gulp.dest('a/js'));

// });



gulp.task('sass', function() {

	return gulp.src('a/scss/**/*.scss')

	.pipe(sass({

		outputStyle: 'compressed',
		errLogToConsole: false,
		onError: function(err) {

			return notify({

				'title': 'Sass Issue',
				'icon': false

			}).write(err);

		}

	}))

	.pipe(gulp.dest('a/css'))

	.pipe(livereload());

});


// Image Optimization

// gulp.task('img', function() {

// 	return gulp.src('src/img/**/*')

// 		.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))

// 		.pipe(gulp.dest('a/img'));

// });


// Watch for Changes

gulp.task('watch', function() {

	var server = livereload();

	// Watch HTML files

	gulp.watch('**/*.html').on('change', function(file){

		server.changed(file.path);

	})

	// Watch .js files

	// gulp.watch('src/js/*.js', ['js']);

	// Watch .scss files

	gulp.watch('a/scss/**/*.scss', ['sass']);

	// Watch image files

	// gulp.watch('src/img/**/*', ['img']);

});


// Default task

gulp.task('default', ['sass', 'watch']);