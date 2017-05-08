var gulp = require('gulp');
var rollupEach = require('gulp-rollup-each');
var resolve = require("rollup-plugin-node-resolve");

/**
 * 使用gulp的rollup插件来对单个组件进行编译
 * @type {String}
 */
gulp.task('rollup', () => {
    return gulp.src([
            'src/demo6/*.js',
            '!src/demo6/index.js' // exclude modules
        ])
        .pipe(rollupEach({
            plugins: [
                resolve(),
            ]
        }, {
            format: 'iife',
            moduleName: "bar"
        }))
        .pipe(gulp.dest('dist/demo6/'))
})
