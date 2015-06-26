'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('js', function (callback) {

    var coffeeFilter = $.filter(['**/*.coffee']);

    var src = [
        'resources/assets/bower/jquery/dist/jquery.min.js',
        'resources/assets/bower/jquery-migrate/jquery-migrate.min.js',
        'resources/assets/scripts/util/a.coffee',
        'resources/assets/scripts/b.js'
    ];

    var destName = 'scripts.js';
    var dest = 'public/assets';

    return gulp.src(src)

    .pipe(coffeeFilter)
    .pipe($.cached('coffee'))
    .pipe($.coffee())
    .pipe($.remember('coffee'))
    .pipe($.order(src, { base: process.cwd() }))
    .pipe(coffeeFilter.restore())

    .pipe($.concat(destName))
    .pipe(gulp.dest(dest));
});
