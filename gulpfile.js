var gulp = require('gulp');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var del = require('del');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;

var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

// Errors
var onError = function(err) {
	gutil.log(gutil.colors.red('¡Oh, no! 😱'));
	console.log(err);
}

// --------------------------
// VARIABLES
// --------------------------

// Routes
var source = 'src/';
var dest = 'public/';

// gulp build --production
var production = !!argv.production;
// determine if we're doing a build
var build = argv._.length ? argv._[0] === 'build' : false;
// for production we require the clean method on every individual task
var clean = build ? ['clean'] : [];

// --------------------------
// CUSTOMS TASKS
// --------------------------

// Clean
gulp.task('clean', function() {
	return del([dest]);
});

// Process Stylus and compress CSS
gulp.task('css', clean, function() {
	return gulp.src(source + 'css/styles.styl')
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(stylus())
		.pipe(gulp.dest(dest + 'css/'));
});

gulp.task('prefix', function() {
	return gulp.src(dest + 'css/*.css')
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: true
		}))
		.pipe(gulpif(production, minifyCss()))
});

// --------------------------
// DEV/WATCH TASKS
// --------------------------

gulp.task('build-css', function() {
	runSequence('css', 'prefix')
})

// WATCH task
gulp.task('watch', function() {
	//Watch changes in styles
	gulp.watch(source + 'css/*.styl', ['build-css']);
	gutil.log(gutil.colors.bgGreen('Watching for changes...'));
});

// BUILD task
gulp.task('build', function() {
	runSequence('build-css')
});

// DEFAULT task
gulp.task('default', function() {
	runSequence('build-css', 'watch')
})
