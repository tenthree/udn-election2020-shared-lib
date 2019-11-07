const regexp = /(\d)(?=(\d{3})+(?!\d))/g

const format = function (num) {
  let point
  num = num.toString()
  point = num.lastIndexOf('.')
  if (point < 0) {
    return num.replace(regexp, '$1,')
  }
  return num.substr(0, point).replace(regexp, '$1,') + num.substr(point)
}

const numeric = function (value) {
  if (isNaN(value)) {
    return value
  }
  return format(value)
}

export default numeric
