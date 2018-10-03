<template lang="pug">
  router-link(:to="{name: 'mappings', params: {mappingId: mapping.id}}")
    ul
      li {{ mapping.id }}
      li {{ url }}
      li {{ mapping.request.method }}
      li {{ mapping.response.status }}
</template>

<script>
export default {
  name: 'Mapping',
  props: ['mapping'],
  computed: {
    url () {
      return this.mapping.request.urlPattern
    }
  }
}
</script>

<style scoped>

</style>
