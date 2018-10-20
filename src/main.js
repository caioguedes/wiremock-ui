import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import '../node_modules/buefy/dist/buefy.css'
import './assets/styles/main.scss'
import * as vueMoment from 'vue-moment'
import AddServerModel from './components/servers/AddServerModal'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(vueMoment)

Vue.component('AddServerModal', AddServerModel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
