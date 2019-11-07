import device from 'current-device'
import DetectInApp from 'detect-inapp'
import ga from './scripts/ga.js'

// components
import TheUdnLogo from './components/TheUdnLogo'
import TheMenu from './components/TheMenu'
import SvgInlineResource from './components/SvgInlineResource'
import SvgSymbol from './components/SvgSymbol'

// directives
import inview from './directives/inview'
import lockscroll from './directives/lockscroll'

// filters
import numeric from './filters/numeric'
import percentage from './filters/percentage'

const version = '#{VERSION}'

const namespace = ''

function registerComponents (Vue, components = []) {
  components.forEach(component => Vue.component(`${namespace}${component.name}`, component))
}

function registerDirectives (Vue, directives = []) {
  directives.forEach(directive => Vue.directive(`${namespace}${directive.name}`, directive))
}

function registerFilters (Vue, filters = []) {
  filters.forEach(filter => Vue.filter(`${namespace}${filter.name}`, filter))
}

function install (Vue, options) {
  if (install.installed) {
    return
  }
  install.installed = true
  Vue.device = Vue.prototype.$device = device
  Vue.inApp = Vue.prototype.$inApp = new DetectInApp(window.navigator.userAgent)
  Vue.ga = Vue.prototype.$ga = ga
  registerComponents(Vue, [ TheUdnLogo, TheMenu ])
  registerDirectives(Vue, [ inview, lockscroll ])
  registerFilters(Vue, [ numeric, percentage ])
}

const plugin = {
  version,
  install,
  TheUdnLogo,
  TheMenu,
  SvgInlineResource,
  SvgSymbol
}

let runtimeVue = null
if (typeof window !== 'undefined') {
  runtimeVue = window.Vue || null
} else if (typeof global !== 'undefined') {
  runtimeVue = global.Vue || null
}
if (runtimeVue) {
  runtimeVue.use(plugin)
}

export default plugin
