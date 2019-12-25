var gulp=require('gulp');
var uglify=require('gulp-uglify');
var minifyCss=require('gulp-minify-css');
var minifyHtml=require('gulp-minify-html');
var rename=require('gulp-rename');
var jshint=require('gulp-jshint');
var concat=require('gulp-concat');

gulp.task('hint-js',function(){
	var stream=gulp.src('js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter());
	return stream;
});

// gulp.task('concat-js',function(cb){
// 	gulp.src('src/js/*.js')
// 	.pipe(concat('custom.js'))
// 	.pipe(uglify())
// 	.pipe(rename('custom.min.js'))
// 	.pipe(gulp.dest('bin/js'));
// 	cb();
// });

// gulp.task('concat-css',function(cb){
// 	gulp.src('src/css/*.css')
// 	.pipe(concat('custom.css'))
// 	.pipe(minifyCss())
// 	.pipe(rename('custom.min.css'))
// 	.pipe(gulp.dest('bin/css'));
// 	cb();
// });

gulp.task('minify-js',function(cb){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(rename('custom.min.js'))
	.pipe(gulp.dest('bin1/js'));
	cb();
});
// gulp.task('minify-js-m',function(cb){
// 	gulp.src(['messageboard/js/*.js','messageboard/js/components/*.js'])
// 	.pipe(uglify())
// 	.pipe(rename('custom.min.js'))
// 	.pipe(gulp.dest('bin1/messageboard/js/'));
// 	cb();
// });

gulp.task('concat-js-m',function(cb){
	gulp.src(['messageboard/js/*.js','messageboard/js/components/*.js'])
	.pipe(concat('custom.js'))
	.pipe(uglify())
	.pipe(rename('custom.min.js'))
	.pipe(gulp.dest('bin1/messageboard/js'));
	cb();
});

gulp.task('minify-css',function(cb){
	gulp.src('css/*.css')
	.pipe(minifyCss())
	.pipe(rename('custom.min.css'))
	.pipe(gulp.dest('bin1/css'));
	cb();
});
gulp.task('minify-css-m',function(cb){
	gulp.src('messageboard/css/*.css')
	.pipe(minifyCss())
	.pipe(rename('custom.min.css'))
	.pipe(gulp.dest('bin1/messageboard/css'));
	cb();
});

gulp.task('minify-html',function(cb){
	gulp.src('index.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('bin1'));
	cb();
});
gulp.task('minify-html-m',function(cb){
	gulp.src('messageboard/index.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('bin1/messageboard/'));
	cb();
})

gulp.task('default',gulp.series('hint-js',/*'concat-js','concat-css',*/'minify-js','concat-js-m','minify-css','minify-css-m','minify-html','minify-html-m'));