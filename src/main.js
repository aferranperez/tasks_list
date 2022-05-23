import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import VueMq from './plugins/vue-mq'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  VueMq,
  render: h => h(App)
}).$mount('#app')
