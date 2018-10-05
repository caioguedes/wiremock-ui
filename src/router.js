import Vue from 'vue'
import Router from 'vue-router'
import MappingsView from './views/MappingsView'
import ServerSelectView from './views/ServerSelectView'
import RequestsView from './views/RequestsView'
import ServerView from './views/ServerView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      component: ServerSelectView
    },
    {
      path: '/servers/:serverIndex',
      component: ServerView,
      children: [
        {
          path: '',
          redirect: 'mappings'
        },
        {
          name: 'mappings',
          path: 'mappings/:mappingId?',
          component: MappingsView
        },
        {
          name: 'requests',
          path: 'requests/:requestId?',
          component: RequestsView
        }
      ]
    }
  ]
})
