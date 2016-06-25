var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser', function() {
    browserSync.init({
        server: '.',
        open: 'external'
    });
});

gulp.task('browser-reload', function () {
    browserSync.reload();
});
