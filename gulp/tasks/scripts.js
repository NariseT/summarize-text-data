var gulp = require('gulp');
var ts = require('gulp-typescript');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var merge = require('merge2');

var tsProject = ts.createProject('tsconfig.json');
gulp.task('scripts', function() {
    var tsResult = tsProject.src()
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(ts(tsProject));

    return merge([
        tsResult.js
            .pipe(gulp.dest('dist/js')),
        tsResult.dts
            .pipe(gulp.dest('dist/dts'))
    ]);
});
