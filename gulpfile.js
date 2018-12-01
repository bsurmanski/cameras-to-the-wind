const { src, dest, parallel, watch } = require('gulp');
var scss = require('gulp-scss');
var del = require('del');

function clean() {
    return del('dist');
}

function html() {
    return src('src/*.html')
    .pipe(dest('dist/'));
}

function scss() {
    return src('src/*.scss')
    .pipe(scss())
    .pipe(dest('dist/'));
}

function js() {
    return src('src/js/*.js')
    .pipe(dest('dist/js'));
}

function img() {
    return src('src/img/*')
    .pipe(dest('dist/img'));
}

exports.clean = clean;
exports.default = parallel(html, scss, js, img);
exports.watch = function() {
    watch('src/*.scss', scss);
}
