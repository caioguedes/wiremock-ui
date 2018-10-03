<template lang="pug">
  router-link.has-text-left(:to="{name: 'mappings', params: {mappingId: mapping.id}}")
    strong.has-text-grey-dark.is-size-6 {{ url }}
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
      const req = this.mapping.request
      return req.url || req.urlPattern || req.urlPath || req.urlPathPattern
    }
  }
}
</script>

<style scoped lang="scss">
a {
  strong {
    margin-bottom: 0.5rem;
    display: inline-block;
  }

  display: block;
  border-bottom: 1px solid #E3E3E3;
  padding: 0.5rem;
  cursor: pointer;
  transition: background 0.5s;

  &:hover {
      background: lightgray;
  }
}
</style>
