const isIntersectionSupported = typeof window.IntersectionObserver !== 'undefined'
if (!isIntersectionSupported) {
  console.warn('[v-inview] Broswer is not compatible with InstersectionObserver api, callback will be called immediatetly')
}

const intersectionOptions = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
}

const Inview = {
  observe (element, options = {}) {
    let callback = null
    let threshold = 0.2
    let data = {}
    if (typeof options === 'function') {
      callback = options
    } else if (typeof options.callback === 'function') {
      callback = options.callback || null
      threshold = options.threshold || threshold
      data = options.data || {}
    }
    if (!callback) {
      return
    }
    if (!isIntersectionSupported) {
      callback(JSON.parse(JSON.stringify(data)))
      return
    }
    let observer = new IntersectionObserver(function (entries) {
      let isInview = Array.prototype.slice.call(entries)
        .some(function (entry) {
          if (entry.intersectionRatio > threshold) {
            callback(JSON.parse(JSON.stringify(data)))
            observer.unobserve(entry.target)
            observer.disconnect()
            return true
          }
        }, this)
      if (isInview) {
        element = null
        options = null
        observer = null
      }
    }, intersectionOptions)

    let onLoadToObserve = function (event) {
      window.removeEventListener('load', onLoadToObserve)
      observer.observe(element)
      onLoadToObserve = null
    }
    if (document.readyState !== 'complete') {
      window.addEventListener('load', onLoadToObserve)
    } else {
      observer.observe(element)
    }
  }
}

export default {
  name: 'inview',
  bind (el, binding, vnode, oldVnode) {
    // [bind hook]
  },
  inserted (el, binding, vnode, oldVnode) {
    // [inserted hook]
    Inview.observe(el, binding.value)
  },
  update (el, binding, vnode, oldVnode) {
    // [update hook]
  },
  componentUpdated (el, binding, vnode, oldVnode) {
    // [componentUpdated hook]
  },
  unbind (el, binding, vnode, oldVnode) {
    // [unbind hook]
  }
}
