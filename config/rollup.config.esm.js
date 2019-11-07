import { name } from '../package.json'
import base from './rollup.config.base'

const format = 'esm'
const file = `dist/${name}.${format}.js`

const output = {
  ...base.output,
  format,
  file
}

const config = Object.assign({}, base, {
  output
})

export default config
