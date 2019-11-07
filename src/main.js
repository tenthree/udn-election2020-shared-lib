import Vue from 'vue'
import Election2020UdnShared from './lib'
import App from '@/App'
// import Router from 'vue-router'
// import Home from '@/views/Home'
// import About from '@/views/About'

Vue.config.productionTip = false

Vue.use(Election2020UdnShared)

// Vue.use(Router)
// const router = new Router({
//   mode: 'history',
//   base: '/',
//   routes: [
//     {
//       path: '/',
//       component: Home
//     },
//     {
//       path: '/about',
//       component: About
//     }
//   ]
// })

new Vue({
  // router,
  render: h => h(App)
}).$mount('#app')
