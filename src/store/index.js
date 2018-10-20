import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate'
import { connect } from 'wiremock-client'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    paths: [
      'servers'
    ],
    getState: (key, storage) => {
      let state = JSON.parse(storage.getItem(key))
      if (state && Array.isArray(state.servers)) {
        state.servers.map(server => {
          server.mock = connect(
            server.protocol,
            server.host,
            server.port
          )
          return server
        })
      }
      return state
    }
  })],
  state: {
    servers: [],
    mapping: {
      form: {},
      validations: {}
    }
  },
  getters,
  mutations
  // TODO: enable strict mode
  // strict: true
})
