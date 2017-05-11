import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/demo3/index.js',
  format: 'iife',
  moduleName: "a",
  plugins: [ resolve() ],
  dest: 'dist/demo3/build.js' // equivalent to --output
};
