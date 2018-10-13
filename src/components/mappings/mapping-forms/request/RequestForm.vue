<template lang="pug">
  div
    .is-size-4 Request
    hr
    RequestBasicForm(:request="request" @change="form = Object.assign(form, $event)")
    RequestAdditionalMatchersForm(:request="request" :matchers="request.matchers"  @change="form.matchers = Object.assign(form.matchers, $event)")
</template>

<script>
import RequestBasicForm from './RequestBasicForm'
import RequestAdditionalMatchersForm from './RequestAdditionalMatchersForm'
import formValidationMixin from '../../../../mixins/form-validation.mixin'

export default {
  name: 'RequestForm',
  mixins: [formValidationMixin],
  components: {
    RequestBasicForm,
    RequestAdditionalMatchersForm
  },
  props: {
    request: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      form: {
        urlMatcher: '',
        path: '',
        method: '',
        matchers: {
          headers: [],
          queryParams: [],
          cookies: [],
          bodyPatterns: []
        }
      }
    }
  }
}
</script>
