

    const gulp = require('gulp'),
        sass = require('gulp-sass')(require('sass'));

    gulp.task('sass', function () {
        return gulp.src('src/scss/style.scss')
            .pipe(sass())
            .pipe(gulp.dest('src/css'))
    });

    sass();

//gulp sass - команда сборки запуска в терминале