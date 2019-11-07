let isLocked = false
let pageYOffsetBeforeLocked = 0

function lockScroll (bool = true) {
  let body = document.body
  if (isLocked === bool) {
    return
  }
  isLocked = bool
  if (!isLocked) {
    body.style.position = ''
    body.style.overflow = ''
    body.style.top = ''
    body.style.width = ''
    window.scrollTo(0, pageYOffsetBeforeLocked)
    pageYOffsetBeforeLocked = 0
  } else {
    pageYOffsetBeforeLocked = window.pageYOffset
    body.style.position = 'fixed'
    body.style.overflow = 'hidden'
    body.style.top = `${-pageYOffsetBeforeLocked}px`
    body.style.width = '100%'
  }
}

export default {
  name: 'lockscroll',
  bind (el, binding, vnode, oldVnode) {
    // [bind hook]
    lockScroll(binding.value)
  },
  inserted (el, binding, vnode, oldVnode) {
    // [inserted hook]
  },
  update (el, binding, vnode, oldVnode) {
    // [update hook]
  },
  componentUpdated (el, binding, vnode, oldVnode) {
    // [componentUpdated hook]
    lockScroll(binding.value)
  },
  unbind (el, binding, vnode, oldVnode) {
    // [unbind hook]
    lockScroll(false)
  }
}
