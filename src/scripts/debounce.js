/**
 * Delay function excution by specified time
 * @param  {Function} fn
 * @param  {Number}   delay
 * @param  {Object}   scope
 * @param  {Boolean}  immediate
 * @return {Function}
 */
export function debounce (fn, delay, scope, immediate = false) {
  let timer
  delay = delay || 250
  return function () {
    // let context, args, later, execNow
    let context = scope || this
    let args = arguments
    let later = function () {
      timer = null
      if (!immediate) {
        fn.apply(context, args)
      }
    }
    let execNow = immediate && !timer
    clearTimeout(timer)
    timer = setTimeout(later, delay)
    if (execNow) {
      fn.apply(context, args)
    }
  }
}

export default debounce
