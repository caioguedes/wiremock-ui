import router from '../../router'

export default {
  currentServer (state) {
    const serverIndex = router.history.current.params.serverIndex
    if (Array.isArray(state.servers) && state.servers.length > 0) {
      return state.servers[serverIndex || 0]
    }
  },
  currentMock (state, getters) {
    const server = getters.currentServer
    if (server) {
      return server.mock
    }
  }
}
