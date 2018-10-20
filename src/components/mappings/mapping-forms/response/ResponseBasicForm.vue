<template lang="pug">
  .columns
    .column.is-4
      b-field(label="Status")
        b-input(v-model="status"  type="number" min="100" max="599" step="1" required)
      Status(:status="status")
    .column.is-4
    .column.is-4
      b-field(label="Response Type")
        b-select.full-width(v-model="responseType" required)
          option(value="NO_CONTENT") No Content
          option(value="JSON") JSON
          option(value="PLAIN_TEXT") Plain Text
          option(value="XML") XML
</template>

<script>
import Status from '../../../shared/Status'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'ResponseBasicForm',
  components: {
    Status
  },
  computed: {
    ...mapFields([
      'mapping.response.status',
      'mapping.response.responseType'
    ])
  }
}
</script>
