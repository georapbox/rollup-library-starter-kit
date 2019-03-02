// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const libraryName = 'Library'; // Change with your library's name

export default [
  // Browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: libraryName,
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      // Uncomment the following 2 lines if your library has external dependencies
      // resolve(), // teach Rollup how to find external modules
      // commonjs(), // so Rollup can convert external modules to an ES module
      babel({
        exclude: ['node_modules/**']
      })
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build
  {
    input: 'src/index.js',
    external: [], // indicate which modules should be treated as external
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**']
      })
    ]
  }
];
