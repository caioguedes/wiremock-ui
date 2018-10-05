<template lang="pug">
  header.navbar.is-light.shadow(role="navigation")
    .navbar-start(v-if="$route.path.includes('/servers')")
      .navbar-item.has-dropdown.is-hoverable(v-if="$store.state.servers.length > 0")
        a.navbar-link
          Server(:server="$store.getters.currentServer()")
        .navbar-dropdown
          template(v-for="(server, index) in $store.getters.sortedServers")
            router-link.navbar-item(:to="{name: 'mappings', params: {serverIndex: index}}")
              Server(:server="server" :key="index")
          hr.dropdown-divider
          a.navbar-item(@click="$refs.addServerModel.open()")
            b-icon(icon="plus")
            | Add New Server
    .navbar-center
      img(src="../assets/wiremock.png")
    .navbar-end(v-if="$route.path.includes('/servers')")
      router-link.navbar-item(:to="{name: 'mappings'}" active-class="is-active") Mappings
      router-link.navbar-item(:to="{name: 'requests'}" active-class="is-active") Requests
      router-link.navbar-item(:to="{name: 'settings'}" active-class="is-active") Settings
    AddServerModal(ref="addServerModel")
</template>

<script>
import Server from './servers/Server'

export default {
  name: 'Header',
  components: {
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

  .navbar-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    img {
      height: 65px;
      padding: 0.5rem;
    }
  }
</style>
