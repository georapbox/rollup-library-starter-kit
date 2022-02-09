![build](https://github.com/georapbox/rollup-library-starter-kit/workflows/build/badge.svg)

# rollup-library-starter-kit

Rollup starter kit for creating libraries (Input: ES6, Output: UMD, CommonJS, ESM)

## Features

- Rollup 2.x.x
- Babel 7
- ES6 as a source
- Exports in UMD, CommonJS, ESM formats
- ES6 test setup with [Jest](https://jestjs.io/)
- Linting with [ESLint](https://eslint.org/)
- Basic [Travis](https://travis-ci.org/) configuration

## Getting started

### 1. Setup the library's name

- Open `rollup.config.js` and change the value of `LIBRARY_NAME` variable with your library's name.
- Open `package.json` and change the following properties with your library's equivalent
  - `name`
  - `version`
  - `description`
  - `main`
  - `module`
  - `browser`
  - `repository`
  - `author`
  - `license`
  - `bugs`
  - `homepage`

### 2. Install dependencies

- Run `npm install` to install the library's dependencies.

### 3. Build for development

- Having all the dependencies installed run `npm run dev`. This command will generate `UMD` (unminified), `CommonJS` and `ESM` modules under the `dist` folder. It will also watch for changes in source files to recompile.

### 4. Build for production

- Having all the dependencies installed run `npm run build`. This command will generate the same modules as above and one extra minified `UMD` bundle for usage in browser.

## Scripts

- `npm run build` - Produces production version of library modules under `dist` folder.
- `npm run dev` - Produces a development version of library and runs a watcher to watch for changes.
- `npm run test` - Runs the tests.
- `npm run test:watch` - Runs the tests in watch mode for development.
- `npm run test:coverage` - Runs the tests and provides with test coverage information.
- `npm run lint` - Lints the source code with ESlint.
- `npm run prepare` - Run both BEFORE the package is packed and published, on local npm install without any arguments, and when installing git dependencies.
- `npm run clean` - Deletes `dist` and `coverage` folders.

## Misc

- By default all source code is located under the `src` folder.
- Be default `dist` folder is excluded from source control but included for npm. You can change this behavior by not excluding this folder inside the `.gitignore` file.
- The starter kit assumes that all tests are located under `test` folder with `.spec.js` extension.

## License

[The MIT License (MIT)](https://georapbox.mit-license.org/@2019)
