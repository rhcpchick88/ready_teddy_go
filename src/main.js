import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia, PiniaVuePlugin} from 'pinia'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  pinia,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
