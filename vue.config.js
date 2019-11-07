// --------------------------------------------------
// require modules
// --------------------------------------------------
const pkg = require('./package.json')
const path = require('path').posix
const exec = require('child_process').execSync
const BannderPlugin = require('webpack/lib/BannerPlugin.js')

// --------------------------------------------------
// Basic configuration
// --------------------------------------------------
const publicPath = (process.env.NODE_ENV !== 'production') ? '/' : '/'
const filenameHashing = false
const runtimeCompiler = false
const disableHtmlMinify = true

// --------------------------------------------------
// Build destinations by types
// --------------------------------------------------
const dest = {
  script: 'js',
  style: 'css',
  image: 'images',
  media: 'media',
  font: 'fonts'
}

// --------------------------------------------------
// SASS auto injection data
// --------------------------------------------------
const sassInjectionData = `
  @import "@/styles/settings/variables.scss";
  @import "@/styles/settings/mixins.scss";
`

// --------------------------------------------------
// Prerender routes
// --------------------------------------------------
const prerenderRoutes = [
  // '/',
  // '/about'
]

// --------------------------------------------------
// Webpack DevServer
// --------------------------------------------------
const devServer = {
  historyApiFallback: true,
  disableHostCheck: false,
  allowedHosts: [ '.ngrok.io' ],
  proxy: {
    // [doc] https://github.com/chimurai/http-proxy-middleware#http-proxy-options
    // e.g. proxy github api
    // from: https://api.github.com/repos/f2etw/jobs/issues
    // to: /api-github/repos/f2etw/jobs/issues
    '/api-github/': {
      target: 'https://api.github.com',
      changeOrigin: true,
      pathRewrite: { '^/api-github/': '' }
    }
  }
}

// --------------------------------------------------
// PWA configuration
// --------------------------------------------------
// const pwa = {
//   workboxPluginMode: 'InjectManifest',
//   workboxOptions: {
//     swSrc: 'src/service-worker.js',
//     importWorkboxFrom: 'disabled'
//     // To use the latest workbox version(v4.3.0)
//     // You can disable default workbox version(v3.6.3), and import it manually
//     // e.g. importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js')
//   },
//   iconPaths: {
//     favicon32: `${dest.image}/icons/favicon-32x32.png`,
//     favicon16: `${dest.image}/icons/favicon-16x16.png`,
//     appleTouchIcon: `${dest.image}/icons/apple-touch-icon-152x152.png`,
//     maskIcon: `${dest.image}/icons/safari-pinned-tab.svg`,
//     msTileImage: `${dest.image}/icons/msapplication-icon-144x144.png`
//   }
// }

// --------------------------------------------------
// BannerPlugin configuration
// --------------------------------------------------
let user, email, branch, commit
try {
  user = exec('git config user.name').toString().trim()
  email = exec('git config user.email').toString().trim()
  branch = exec('git rev-parse --abbrev-ref HEAD').toString().trim()
  commit = exec('git rev-parse --short HEAD').toString().trim()
} catch (err) {
  user = ''
  email = ''
  branch = ''
  commit = ''
}
const now = new Date().toLocaleString('default', { hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
const banner = `/*!\n` +
  `@build with webpack\n` +
  `------------------------------\n` +
  `project : ${pkg.name}\n` +
  `author  : ${user} <${email}>\n` +
  `branch  : ${branch}\n` +
  `commit  : ${commit}\n` +
  `file:   : [file]\n` +
  `hash    : [hash]\n` +
  `chunk   : [chunkhash]\n` +
  `update  : ${now}\n` +
  `------------------------------\n` +
  `*/\n\n`

// --------------------------------------------------
// Configure webpack
// --------------------------------------------------
const configureWebpack = config => {
  // production mode only
  if (process.env.NODE_ENV === 'production') {
    return {
      /*
      // prevent xlsx|canvg|pdfmake files generated from amcharts4
      // treat them as external libraries in webpack
      // [doc] https://www.amcharts.com/docs/v4/getting-started/integrations/using-webpack/#Large_file_sizes
      // [doc] https://webpack.js.org/configuration/externals/#function
      externals (context, request, callback) {
        if (/xlsx|canvg|pdfmake/.test(request)) {
          return callback(null, `commonjs ${request}`)
        }
        callback()
      }
      */
      /*
      // performance warning bundle size
      performance: {
        maxAssetSize: 500000,
        maxEntrypointSize: 614400
      }
      */
    }
  }
  return {}
}

// --------------------------------------------------
// Chain webpack
// --------------------------------------------------
const chainWebpack = config => {
  // filename pattern
  let assetHash = !filenameHashing ? '' : '.[hash:8]'
  let assetNamePattern = `[name]${assetHash}.[ext]`

  // common
  config.module.rule('images')
    .use('url-loader')
    .loader('url-loader')
    .tap(options => {
      options = {
        limit: 4096,
        fallback: {
          loader: 'file-loader',
          options: {
            name: path.join(dest.image, assetNamePattern)
          }
        }
      }
      return options
    })

  config.module.rule('svg')
    .use('file-loader')
    .loader('file-loader')
    .tap(options => {
      options.name = path.join(dest.image, assetNamePattern)
      return options
    })

  config.module.rule('media')
    .use('url-loader')
    .loader('url-loader')
    .tap(options => {
      options = {
        limit: 4096,
        fallback: {
          loader: 'file-loader',
          options: {
            name: path.join(dest.media, assetNamePattern)
          }
        }
      }
      return options
    })

  config.module.rule('fonts')
    .use('url-loader')
    .loader('url-loader')
    .tap(options => {
      options = {
        limit: 4096,
        fallback: {
          loader: 'file-loader',
          options: {
            name: path.join(dest.font, assetNamePattern)
          }
        }
      }
      return options
    })

  // support csv module
  // [cmd] npm i -D csv-loader papaparse
  config.module.rule('csv')
    .test(/\.csv$/)
    .use('csv')
    .loader('csv-loader')
    .options({
      dynamicTyping: true,
      header: true,
      skipEmptyLines: true
    })

  // production mode only
  if (process.env.NODE_ENV === 'production') {
    let hash = !filenameHashing ? '' : '.[contenthash:8]'
    let scriptFullPath = path.join(dest.script, `[name]${hash}.js`)
    let styleFullPath = path.join(dest.style, `[name]${hash}.css`)

    config
      .output
      .filename(scriptFullPath)
      .chunkFilename(scriptFullPath)

    config
      .externals({
        ...config.get('externals'),
        'current-device': {
          commonjs: 'current-device',
          commonjs2: 'current-device',
          amd: 'current-device',
          device: 'current-device'
        },
        'detect-inapp': {
          commonjs: 'detect-inapp',
          commonjs2: 'detect-inapp',
          amd: 'detect-inapp',
          inapp: 'detect-inapp'
        }
      })

    config
      .plugin('extract-css')
      .tap(args => {
        args[0] = {
          filename: styleFullPath,
          chunkFilename: styleFullPath
        }
        return [ ...args ]
      })

    config
      .plugin('banner')
      .use(BannderPlugin, [ { banner, raw: true } ])

    if (disableHtmlMinify) {
      // try to disable HtmlWebpackPlugin minify
      // There are some special conditions with html plugin configuration
      // 1. When building in multi-page mode, the webpack config will contain different plugins (https://cli.vuejs.org/config/#pages)
      // 2. when build target is "lib", there is no html plugin
      if (config.plugins.has('html')) {
        config
          .plugin('html')
          .tap(args => {
            if (args.length) {
              args[0].minify = false
            }
            return [ ...args ]
          })
      }
    }

    if (prerenderRoutes.length) {
      // add Prerender SPA Plugin
      // [doc] https://github.com/chrisvfritz/prerender-spa-plugin
      const PrerenderSPAPlugin = require('prerender-spa-plugin')
      config
        .plugin('prerender')
        .use(PrerenderSPAPlugin, [ {
          staticDir: path.join(__dirname, 'dist'),
          routes: prerenderRoutes
        } ])
    }
  }
}

// --------------------------------------------------
// Export vue configuration
// --------------------------------------------------
module.exports = {
  publicPath,
  filenameHashing,
  runtimeCompiler,
  css: {
    loaderOptions: {
      sass: {
        prependData: sassInjectionData // use "data" option if sass-loader < v8.0.0
      }
    }
  },
  devServer,
  // pwa,
  configureWebpack,
  chainWebpack
}
