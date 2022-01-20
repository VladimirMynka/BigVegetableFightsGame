var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");

gulp.task("hello", function () {
    console.log("hello");
});

gulp.task("default", function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['TScript/Main/Program.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("js"));
});

gulp.task("async", function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['js/TScriptAsync/Main/Program.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('async.js'))
    .pipe(gulp.dest("js"));
});