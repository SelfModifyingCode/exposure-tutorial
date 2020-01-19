const gulp        = require('gulp'),
	  gulpWebpack = require('webpack-stream');

const JS_CONFIG = {
	FILE_NAME        : 'bundle.js',
	LOCAL_DESTINATION: './public/assets/js/',
	SOURCES          : './src/',
	JS_FILES_TO_WATCH: './src/**/*.js'
};

const webpackConfig = {
	entry : './src/bundle.js',
	mode  : 'development',
	output: {
		filename: JS_CONFIG.FILE_NAME,
		library : 'MyCustomLibrary'
	}
};

function compileScripts() {
	console.log('Compiling Scripts...');
	return gulp.src(JS_CONFIG.SOURCES + JS_CONFIG.FILE_NAME)
			   .pipe(gulpWebpack(webpackConfig))
			   .pipe(gulp.dest(JS_CONFIG.LOCAL_DESTINATION));
}

gulp.task('scripts-compile', compileScripts);

