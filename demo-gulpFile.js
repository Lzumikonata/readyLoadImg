/**
 * Created by wittbulter on 16/1/5.
 */

var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),//sass编译时的sourcemap,用户浏览器追踪调试
    imagemin = require('gulp-imagemin'),//图片压缩
    pngquant = require('imagemin-pngquant'),//高度压缩
    notify = require('gulp-notify'),//提示信息
    rename = require('gulp-rename');//文件更名

//压缩image
gulp.task('img', function () {
    return gulp.src('images/*.{png,jpg,gif}')
        .pipe(imagemin({
            optimizationLevel: 7, //取值范围：0-7（优化等级）
            progressive: false, //无损
            interlaced: true, //隔行扫描
            multipass: true, //多次优化svg
            svgoPlugins: [{removeViewBox: false}],//SVG-viewbox
            use: [pngquant()] //高度压缩
        }))
        .pipe(rename({ suffix: '-min' }))
        .pipe(gulp.dest('test'))
        .pipe(notify({ message: 'image task over' }));
})

//默认任务
gulp.task('default', function () {
    gulp.start('img')
})