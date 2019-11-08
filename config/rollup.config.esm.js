import { name } from '../package.json'
import base from './rollup.config.base'

const pkgName = name.split('/').pop()
const format = 'esm'
const file = `dist/${pkgName}.${format}.js`

const output = {
  ...base.output,
  format,
  file
}

const config = Object.assign({}, base, {
  output
})

export default config
