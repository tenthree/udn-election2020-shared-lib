import { name } from '../package.json'
import base from './rollup.config.base'

const pkgName = name.split('/').pop()
const format = 'umd'
const file = `dist/${pkgName}.${format}.js`

const output = {
  ...base.output,
  name: pkgName.replace(/-([a-z])/g, (g) => g[1].toUpperCase()),
  format,
  file,
  exports: 'named'
}

const config = Object.assign({}, base, {
  output
})

export default config
