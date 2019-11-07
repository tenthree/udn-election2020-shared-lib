const format = function (num) {
  num = Number(num * 100).toFixed(2)
  return `${num}%`
}

const percentage = function (value) {
  if (isNaN(value)) {
    return value
  }
  return format(value)
}

export default percentage
