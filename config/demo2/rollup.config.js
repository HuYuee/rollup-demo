import json from 'rollup-plugin-json';

export default {
  entry: 'src/demo2/index.js',
  format: 'cjs',
  plugins: [ json() ],
  dest: 'dist/demo2/build.js' // equivalent to --output
};
