const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () => {
    gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 24 versions']
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('watchstyles', () => {
    gulp.watch('css/style.css', ['styles']);
});