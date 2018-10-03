<template lang="pug">
  header.navbar.is-light(role="navigation")
    .navbar-start(v-if="$route.path.includes('/servers')")
      .navbar-item.has-dropdown.is-hoverable(v-if="$store.state.servers.length > 0")
        a.navbar-link
          Server(:server="$store.getters.currentServer")
        .navbar-dropdown
          template(v-for="(server, index) in $store.state.servers")
            router-link.navbar-item(:to="{name: 'mappings', params: {serverIndex: index}}")
              Server(:server="server" :key="index")
          hr.dropdown-divider
          a.navbar-item(@click="$refs.addServerModel.open()")
            b-icon(icon="plus")
            | Add New Server
    .navbar-end(v-if="$route.path.includes('/servers')")
      router-link.navbar-item(to="mappings" active-class="is-active") Mappings
      router-link.navbar-item(to="requests" active-class="is-active") Requests
    AddServerModal(ref="addServerModel")
</template>

<script>
import Server from './servers/Server'
import AddServerModal from './servers/AddServerModal'

export default {
  name: 'Header',
  components: {
    AddServerModal,
    Server
  }
}
</script>

<style scoped lang="scss">
  header {
    min-height: 65px;
    max-height: 65px;
  }

 .icon {
   padding-right: 1rem;
 }
</style>
