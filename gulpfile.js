var gulp = require('gulp');

gulp.task('copy', function () {
    gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('./dist/css/'));
    gulp.src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('./dist/js/'));
    gulp.src('./node_modules/popper.js/dist/popper.js')
        .pipe(gulp.dest('./dist/js/'));
    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('./dist/js/'));
});