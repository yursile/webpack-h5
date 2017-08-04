var gulp = require( 'gulp' );
var fontSpider = require( 'gulp-font-spider' );
	
gulp.task('fontspider', function() {
	return gulp.src('./src/font.html')
		.pipe(fontSpider());
});

gulp.task('default', ['fontspider']);