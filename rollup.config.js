// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const LIBRARY_NAME = 'Library'; // Change with your library's name
const EXTERNAL = []; // Indicate which modules should be treated as external
const GLOBALS = {}; // https://rollupjs.org/guide/en/#outputglobals

const banner = `/*!
 * ${pkg.name}
 * ${pkg.description}
 *
 * @version v${pkg.version}
 * @author ${pkg.author}
 * @homepage ${pkg.homepage}
 * @repository ${pkg.repository.url}
 * @license ${pkg.license}
 */`;

export default commandLineArgs => {
  const configs = [
    {
      input: 'src/index.js',
      external: EXTERNAL,
      output: [
        {
          banner,
          name: LIBRARY_NAME,
          file: `dist/${LIBRARY_NAME}.umd.js`, // UMD
          format: 'umd',
          globals: GLOBALS
        },
        {
          banner,
          file: `dist/${LIBRARY_NAME}.cjs.js`, // CommonJS
          format: 'cjs',
          exports: 'auto',
          globals: GLOBALS
        },
        {
          banner,
          file: `dist/${LIBRARY_NAME}.esm.js`, // ESM
          format: 'es',
          globals: GLOBALS
        }
      ],
      plugins: [
        // Uncomment the following 2 lines if your library has external dependencies
        // resolve(), // teach Rollup how to find external modules
        // commonjs(), // so Rollup can convert external modules to an ES module
        babel({
          babelHelpers: 'bundled',
          exclude: ['node_modules/**']
        })
      ]
    }
  ];

  // Production
  if (commandLineArgs.environment === 'BUILD:production') {
    configs.push({
      input: 'src/index.js',
      external: EXTERNAL,
      output: [
        {
          banner,
          name: LIBRARY_NAME,
          file: `dist/${LIBRARY_NAME}.umd.min.js`, // UMD
          format: 'umd',
          globals: GLOBALS
        },
        {
          banner,
          file: `dist/${LIBRARY_NAME}.cjs.min.js`, // CommonJS
          format: 'cjs',
          exports: 'auto',
          globals: GLOBALS
        },
        {
          banner,
          file: `dist/${LIBRARY_NAME}.esm.min.js`, // ESM
          format: 'es',
          globals: GLOBALS
        }
      ],
      plugins: [
        // Uncomment the following 2 lines if your library has external dependencies
        // resolve(), // teach Rollup how to find external modules
        // commonjs(), // so Rollup can convert external modules to an ES module
        babel({
          babelHelpers: 'bundled',
          exclude: ['node_modules/**']
        }),
        terser({
          output: {
            comments: /^!/
          }
        })
      ]
    });
  }

  return configs;
};
