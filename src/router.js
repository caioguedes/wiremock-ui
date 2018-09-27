import Vue from 'vue'
import Router from 'vue-router'
import MappingsView from './views/MappingsView'
import ServerSelect from './views/ServerSelect'
import RequestsView from './views/RequestsView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/servers',
      component: ServerSelect,
      children: [
        {
          path: '/:serverId',
          redirect: '/mappings',
          children: [
            {
              path: '/mappings',
              component: MappingsView
            },
            {
              path: '/requests',
              component: RequestsView
            }
          ]
        }
      ]
    }
  ]
})
