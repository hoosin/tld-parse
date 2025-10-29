const typescript = require('@rollup/plugin-typescript');
const dts = require('rollup-plugin-dts').default;
const { string } = require('rollup-plugin-string');
const terser = require('@rollup/plugin-terser');

const packageJson = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

// Common plugins
const tsPlugin = typescript({ tsconfig: './tsconfig.json' });
const stringPlugin = string({ include: '**/*.dat' });

// Main build (with data)
const mainBuild = {
  input: 'src/index.ts',
  plugins: [tsPlugin, stringPlugin],
  output: [
    {
      file: packageJson.main, // dist/cjs/index.js
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module, // dist/esm/index.js
      format: 'esm',
      sourcemap: true,
    },
    {
      file: packageJson.browser, // dist/umd/tld-parse.min.js
      format: 'umd',
      name: 'tldParse',
      sourcemap: true,
      plugins: [isProd && terser()].filter(Boolean), // Minify only UMD
    },
  ],
};

// Core build (no data)
const coreBuild = {
  input: 'src/core.ts',
  plugins: [tsPlugin], // No string plugin
  output: [
    {
      file: 'dist/cjs/core.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/core.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/umd/tld-parse.core.min.js',
      format: 'umd',
      name: 'tldParse',
      sourcemap: true,
      plugins: [isProd && terser()].filter(Boolean), // Minify only UMD
    },
  ],
};

// DTS bundling
const dtsBuilds = [
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/types/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.dat$/],
  },
  {
    input: 'dist/esm/core.d.ts',
    output: [{ file: 'dist/types/core.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];

module.exports = [
  mainBuild,
  coreBuild,
  ...dtsBuilds,
];
