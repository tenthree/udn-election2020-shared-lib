export const ellipsis = function (text, maxLen = 95) {
  let len = text.length
  if (len > maxLen) {
    return `${text.slice(0, maxLen)}...`
  }
  return text
}

ellipsis.name = 'ellipsis'

export default ellipsis
