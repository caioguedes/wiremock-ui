<template lang="pug">
  router-link.has-text-left(:to="{name: 'mappings', params: {mappingId: mapping.id}}")
    strong {{ url }}
    .is-clearfix
      .is-pulled-left
        Method(:method="mapping.request.method")
      .is-pulled-right
        Status(:status="mapping.response.status")
</template>

<script>
import Method from '../shared/Method'
import Status from '../shared/Status'

export default {
  name: 'Mapping',
  props: ['mapping'],
  components: {
    Method,
    Status
  },
  computed: {
    url () {
      return this.mapping.request.urlPattern
    }
  }
}
</script>

<style scoped>
a {
  display: block;
  border-bottom: 1px solid gray;
  padding: 0.5rem;
}
</style>
