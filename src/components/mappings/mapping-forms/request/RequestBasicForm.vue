<template lang="pug">
  .columns
    .column
      b-field(label="Url Matcher" required)
        b-select(v-model="urlMatcher")
          option(value="url") Equal To
          option(value="urlPattern") Matching
          option(value="urlPath") Path Equal To
          option(value="urlPathPattern") Path Matching
    .column.is-fill
      b-field(label="Path")
        b-input(v-model="path" required)
    .column
      b-field(label="Method" required)
        b-select(v-model="method")
          option(value="GET") GET
          option(value="POST") POST
          option(value="PUT") PUT
          option(value="DELETE") DELETE
          option(value="PATCH") PATCH
          option(value="OPTIONS") OPTIONS
          option(value="HEAD") HEAD
          option(value="TRACE") TRACE
          option(value="ANY") ANY
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'RequestBasicForm',
  props: ['request'],
  computed: {
    ...mapFields([
      'mapping.request.urlMatcher',
      'mapping.request.path',
      'mapping.request.method'
    ])
  }
}
</script>
