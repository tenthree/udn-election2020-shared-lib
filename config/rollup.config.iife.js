import { name } from '../package.json'
import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const format = 'iife'
const file = `dist/${name}.min.js`

const output = {
  ...base.output,
  name: name.replace(/-([a-z])/g, (g) => g[1].toUpperCase()),
  format,
  file,
  exports: 'named'
}

const plugins = [
  ...base.plugins,
  terser({
    output: {
      comments: function (node, comment) {
        var text = comment.value
        var type = comment.type
        if (type == "comment2") {
          // multiline comment
          return /@preserve|@license|@cc_on/i.test(text)
        }
      }
    }
  })
]

const config = Object.assign({}, base, {
  output,
  plugins
})

export default config
