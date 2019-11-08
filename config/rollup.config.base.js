import { name, version, license, repository } from '../package.json'
import alias from 'rollup-plugin-alias'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import buble from 'rollup-plugin-buble'
import vue from 'rollup-plugin-vue'
import cssOnly from 'rollup-plugin-css-only'
import replace from 'rollup-plugin-replace'
import analyzer from 'rollup-plugin-analyzer'
import filesize from 'rollup-plugin-filesize'
import autoprefixer from 'autoprefixer'

const pkgName = name.split('/').pop()

const banner = `/*!
 * ${pkgName} v${version}
 * @license ${license}
 * ${repository.url}
 */`

const plugins = [
  alias({
    '@': `${__dirname}/../src`
  }),
  resolve({
    modulesOnly: true,
    extensions: [ '.mjs', '.js', '.jsx', '.json', '.vue' ]
  }),
  json(),
  commonjs(),
  cssOnly(),
  vue({
    template: {
      isProduction: true
    },
    compileTemplate: true,
    css: false,
    style: {
      preprocessOptions: {
        scss: {
          includePaths: [
            `src/styles/settings`
          ],
          data: `
            @import "variables.scss";
            @import "mixins.scss";
            `
        }
      },
      postcssPlugins: [
        autoprefixer()
      ]
    }
  }),
  buble(),
  replace({
    exclude: 'node_modules/**',
    delimiters: ['#{', '}'],
    values: {
      VERSION: version
    }
  }),
  analyzer({
    summaryOnly: true
  }),
  filesize()
]

const watch = {
  include: 'src/**',
}

const external = [
  'vue',
  'current-device',
  'detect-inapp'
]

const globals = {
  'current-device': 'device',
  'detect-inapp': 'inapp'
}

export default {
  input: 'src/lib.js',
  output: {
    banner,
    globals
  },
  plugins,
  watch,
  external
}
