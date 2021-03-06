const format = function (num) {
  num = Number(num * 100).toFixed(2)
  return `${num}%`
}

const filter = function (value) {
  if (isNaN(value)) {
    return value
  }
  return format(value)
}

const name = 'percentage'

export default {
  filter,
  name
}
