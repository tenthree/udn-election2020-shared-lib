export const rand = function (begin, end) {
  let len = arguments.length
  if (len === 0) {
    return Math.random()
  } else if (len > 1) {
    return Math.round(Math.random() * (end - begin)) + begin
  }
  return Math.round(Math.random() * begin)
}

export const randArray = function (arr) {
  let _arr = arr.concat()
  let index = _arr.length - 1
  let tmp
  let tmpIndex
  for (; index > 0; index--) {
    tmpIndex = rand(index - 1)
    tmp = _arr[tmpIndex]
    _arr[tmpIndex] = _arr[index]
    _arr[index] = tmp
  }
  return _arr
}

export default {
  rand,
  randArray
}
