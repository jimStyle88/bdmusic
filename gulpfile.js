var gulp = require('gulp');
var sass = require('gulp-sass');

// 创建编译sass任务
gulp.task('buildSass',function(){
	// 找到.scss文件的位置
	gulp.src('./app/sass/*.scss')

	.pipe(sass({outputStyle:'expanded'}))
	.pipe(gulp.dest('./app/css'))
});


// 监听文件修改，并自动编译
gulp.task('autoBuild',function(){
	// 监听所有sass文件修改，只有文件有改变，则执行buildSass任务
	gulp.watch('./app/sass/*.scss', ['buildSass']);
})