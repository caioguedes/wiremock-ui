<template lang="pug">
  .center
    a.button.is-success(@click="$refs.addServerModel.open()") Add Server
    AddServerModal(ref="addServerModel")
</template>

<script>
import AddServerModal from '../components/servers/AddServerModal'

export default {
  name: 'ServerSelect',
  components: {
    AddServerModal
  },
  created () {
    console.log('created')
    let state = this.$store.state
    if (state && Array.isArray(state.servers) && state.servers.length > 0) {
      this.$router.push({ name: 'mappings', params: { serverIndex: 0 } })
    }
  }
}
</script>

<style scoped>
 .center {
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
 }
</style>
