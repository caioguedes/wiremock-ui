<template lang="pug">
  header.navbar.is-light(role="navigation")
    .navbar-start
      .navbar-item.has-dropdown.is-hoverable
        a.navbar-link
          Server(:server="selectedServer")
        .navbar-dropdown
          a.navbar-item(v-for="server in servers" @click="selectServer(server)")
            Server(:server="server")
          hr.dropdown-divider
          a.navbar-item(@click="addServerActive = true")
            b-icon(icon="plus")
            | Add New Server
    .navbar-end
      router-link.navbar-item(to="/mappings") Mappings
      router-link.navbar-item(to="/requests") Requests
    AddServerModal(:active="addServerActive")
</template>

<script>
import Server from './servers/Server'
import AddServerModal from './servers/AddServerModal'

const SERVER_DATA = [
  {
    id: 123,
    name: 'Server 1',
    host: 'http://localhost',
    port: '8080',
    status: true
  },
  {
    id: 456,
    name: 'Server 2',
    host: 'http://localhost',
    port: '10000',
    status: false
  }
]

export default {
  name: 'Header',
  components: {
    AddServerModal,
    Server
  },
  data () {
    return {
      addServerActive: false,
      selectedServer: SERVER_DATA[0],
      servers: SERVER_DATA
    }
  },
  methods: {
    selectServer (server) {
      console.log(server)
    }
  }
}
</script>

<style scoped lang="scss">
 .icon {
   padding-right: 1rem;
 }
</style>
