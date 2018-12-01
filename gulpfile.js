const { src, dest, parallel, watch } = require('gulp');
var del = require('del');

function clean() {
    return del('dist');
}

function html() {
    return src('src/*.html')
    .pipe(dest('dist/'));
}

function css() {
    return src('src/*.css')
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
exports.default = parallel(html, css, js, img);
//exports.watch = watch(parallel(html, css, js, img));
