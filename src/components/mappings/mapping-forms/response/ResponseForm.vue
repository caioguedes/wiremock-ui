<template lang="pug">
  div
    .is-size-4 Response
    hr
    ResponseBasicForm(:response="response" @change="form = Object.assign(form, $event)")
    RequestHeadersFaultsAndDelaysForm(:response="response" @change="form = Object.assign(form, $event)")
    ResponseBodyForm(v-if="form.responseType !== 'NO_CONTENT'" :response="response" @change="form = Object.assign(form, $event)")
</template>

<script>
import ResponseBasicForm from './ResponseBasicForm'
import ResponseBodyForm from './ResponseBodyForm'
import RequestHeadersFaultsAndDelaysForm from './RequestHeadersFaultsAndDelaysForm'
import formValidationMixin from '../../../../mixins/form-validation.mixin'

export default {
  name: 'ResponseForm',
  mixins: [formValidationMixin],
  components: {
    ResponseBodyForm,
    ResponseBasicForm,
    RequestHeadersFaultsAndDelaysForm
  },
  props: {
    response: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      form: {
        status: '',
        responseType: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
