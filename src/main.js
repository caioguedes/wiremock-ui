import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import '../node_modules/buefy/dist/buefy.css'
import './assets/styles/main.scss'
import * as vuewMoment from 'vue-moment'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(vuewMoment)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
