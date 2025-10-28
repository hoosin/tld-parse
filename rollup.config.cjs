const typescript = require('@rollup/plugin-typescript');
const dts = require('rollup-plugin-dts').default;
const { string } = require('rollup-plugin-string');
const terser = require('@rollup/plugin-terser');

const packageJson = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

const basePlugins = [
  string({
    include: '**/*.dat',
  }),
  typescript({ tsconfig: './tsconfig.json' }),
];

const umdPlugins = [
  // We only want to minify the UMD build for production
  isProd && terser(),
].filter(Boolean);

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
      {
        file: packageJson.browser,
        format: 'umd',
        name: 'tldParse',
        sourcemap: true,
      },
    ],
    plugins: [...basePlugins, ...umdPlugins],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/types/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: ['./core/tld.dat'],
  },
];
