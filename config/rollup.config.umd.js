import { name } from '../package.json'
import base from './rollup.config.base'

const format = 'umd'
const file = `dist/${name}.${format}.js`

const output = {
  ...base.output,
  name,
  format,
  file,
  exports: 'default'
}

const config = Object.assign({}, base, {
  output
})

export default config
