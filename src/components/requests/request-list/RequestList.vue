<template lang="pug">
  ul#request-list.has-background-white-bis.side-shadow
    Request(v-for="request in requests" :request="request" :key="request.id")
</template>

<script>
import Request from './Request'

export default {
  name: 'RequestList',
  components: {
    Request
  },
  props: ['requests']
}
</script>

<style scoped>
  #request-list {
    z-index: 2;
    min-width: 25rem;
    max-width: 25rem;
    height: 100%;
    overflow-y: auto;
  }
</style>
