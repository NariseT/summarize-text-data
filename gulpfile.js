var gulp = require('gulp');
var runSequence = require('run-sequence');

require('require-dir')('./gulp/tasks', {recurse: true});

gulp.task('build', function() {
    runSequence('scripts', 'webpack')
});

gulp.task('server', function() {
    runSequence('build', 'browser')
});

gulp.task('default', ['server'], function() {
    gulp.watch('src/**/*', ['build']);
    gulp.watch('*.html', ['browser-reload']);
    gulp.watch('*.js', ['browser-reload']);
});
