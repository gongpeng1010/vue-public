import Vue from 'vue'
import Element from 'element-ui'

import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
