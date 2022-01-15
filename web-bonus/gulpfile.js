const gulp = require("gulp");
const concat = require("gulp-concat");
var del = require('del');

const vendorScripts = [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/popper.js/dist/umd/popper.min.js",
];

gulp.task("build", ["clean", "build-vendor", "default"]);

gulp.task("build-vendor", ["build-vendor-js"]);

gulp.task("build-vendor-js", () => {
    return gulp.src(vendorScripts)
        .pipe(concat("vendor.min.js"))
        .pipe(gulp.dest("wwwroot/scripts"));
});

var paths = {
    scripts: ['TScript/**/*.js', 'TScript/**/*.ts', 'TScript/**/*.map'],
};

gulp.task('clean', function () {
    return del(['wwwroot/scripts/**/*']);
});

gulp.task('default', function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'))
});

gulp.task("default:watch", function () {
    gulp.watch("TScript/**/*.ts", ["default"]);
});
