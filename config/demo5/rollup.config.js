import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/demo5/index.js',
  format: 'cjs',
  plugins: [ resolve() ],
  dest: 'dist/demo5/build.js' // equivalent to --output
};
