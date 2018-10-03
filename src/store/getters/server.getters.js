import router from '../../router'

import Sorting from '../../utils/sorting'

export default {
  currentServer (state) {
    return () => {
      const serverIndex = router.history.current.params.serverIndex
      if (Array.isArray(state.servers) && state.servers.length > 0) {
        return state.servers[serverIndex || 0]
      }
    }
  },
  currentMock (state, getters) {
    return () => {
      const server = getters.currentServer()
      if (server) {
        return server.mock
      }
    }
  },
  sortedServers (state) {
    return state.servers.sort((a, b) => Sorting.compareAlpha(a.name, b.name))
  }
}
