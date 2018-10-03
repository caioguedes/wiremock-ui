import Vue from 'vue'
import Router from 'vue-router'
import MappingsView from './views/MappingsView'
import ServerSelect from './components/servers/ServerSelect'
import RequestsView from './views/RequestsView'
import ServerView from './views/ServerView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      component: ServerSelect
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
