<template lang="pug">
  div
    .is-size-4 Response
    hr
    ResponseBasicForm
    ResponseHeadersFaultsAndDelaysForm
    ResponseBodyForm(v-if="responseType && responseType !== 'NO_CONTENT' && body")
</template>

<script>
import ResponseBasicForm from './ResponseBasicForm'
import ResponseBodyForm from './ResponseBodyForm'
import ResponseHeadersFaultsAndDelaysForm from './ResponseHeadersFaultsAndDelaysForm'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'ResponseForm',
  components: {
    ResponseBodyForm,
    ResponseBasicForm,
    ResponseHeadersFaultsAndDelaysForm
  },
  computed: {
    ...mapFields(['mapping.response.body']),
    ...mapFields(['mapping.response.responseType'])
  }
}
</script>

<style scoped>

</style>
