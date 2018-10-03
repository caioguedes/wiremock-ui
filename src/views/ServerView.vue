<template lang="pug">
  router-view
</template>

<script>
import store from '../store'

function onRouteChange (to, next) {
  const servers = store.state.servers
  const serverIndex = to.params.serverIndex
  if (!Array.isArray(servers) || servers.length <= 0) {
    next({ name: 'root' })
  } else if (!servers[serverIndex]) {
    next({ name: 'mappings', params: { serverIndex: 0 } })
  } else {
    next()
  }
}

export default {
  name: 'ServerView',
  beforeRouteEnter: (to, from, next) => {
    onRouteChange(to, next)
  },
  beforeRouteUpdate: (to, from, next) => {
    onRouteChange(to, next)
  }
}
</script>

<style scoped>

</style>
