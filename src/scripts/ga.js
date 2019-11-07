export const ga = function (...args) {
  let debug = process.env.NODE_ENV !== 'production'
  let status = !debug ? 'on' : 'off'
  let params = args.map(arg => {
    if (typeof arg === 'object') {
      return '{ ' + Object.keys(arg).map(key => {
        return `${key}: ${arg[key]}`
      }).join(', ') + ' }'
    }
    return arg
  })
  if (!debug) {
    window.ga && window.ga(...args)
  }
  console.log(`[GA ${status}] ga(${params.join(', ')})`)
}

export default ga
