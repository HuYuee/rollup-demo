import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/demo4/index.js',
  format: 'cjs',
  plugins: [
    resolve(),
    babel()//对所有的文件进行es6转es5
  ],
  dest: 'dist/demo4/build.js' // equivalent to --output
};
