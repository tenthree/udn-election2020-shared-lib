/**
 * Limit functino excution times in specified time
 * @param  {Function} fn
 * @param  {Number}   threshold
 * @param  {Object}   scope
 * @return {Function}
 */
export function throttle (fn, threshold, scope) {
  threshold = threshold || 250
  let last, timer
  return function () {
    var context = scope || this
    var args = arguments
    var now = Date.now()
    if (last && now < last + threshold) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}

export default throttle
