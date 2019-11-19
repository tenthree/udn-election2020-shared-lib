const filter = function (text, maxLen = 95) {
  let len = text.length
  if (len > maxLen) {
    return `${text.slice(0, maxLen)}...`
  }
  return text
}

const name = 'ellipsis'

export default {
  filter,
  name
}
