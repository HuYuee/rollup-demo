import babel from "rollup-plugin-babel";
import multidest from "rollup-plugin-multidest";
import resolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";
import license from "rollup-plugin-license";

export default {
    entry: 'src/demo7/index.js',
    dest: 'dist/demo7/build.cjs.js', // equivalent to --output
    format: "cjs",
    plugins: [uglify()],
    plugins: [
        license({
            banner: `<%= pkg.name %> v<%= pkg.version %>
                    <%= pkg.description %>
                    author : <%= pkg.author %>
                    homepage : <%= pkg.homepage %>
                    bugs : <%= pkg.bugs.url %>`,
        }),
        resolve(),
        multidest([{
                dest: "dist/demo7/build.cjs.min.js",
                format: "cjs",
                plugins: [uglify()]
            },
            {
                dest: "dist/demo7/build.iife.js",
                format: "iife",
                moduleName: "bar"//这个必须填，如果你的入口js文件中有export
            },
            {
                dest: "dist/demo7/build.iife.min.js",
                format: "iife",
                moduleName: "bar",//这个必须填，如果你的入口js文件中有export
                plugins: [uglify()]
            }

        ]),
        babel({
            exclude: "node_modules/**" // only transpile our source code
        })
    ]
};
