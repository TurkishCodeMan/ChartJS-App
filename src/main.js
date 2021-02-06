import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VuePapaParse from 'vue-papa-parse'
Vue.use(VuePapaParse)

new Vue({
  render: h => h(App),
}).$mount('#app')
