<template lang="pug">
  .columns
    .column.is-4
      b-field(label="Status")
        b-input(v-model="$v.form.status.$model"  type="number" min="100" max="599")
      Status(:status="$v.form.status.$model")
    .column.is-4
    .column.is-4
      b-field(label="Response Type")
        b-select.full-width(v-model="form.responseType")
          option(value="NO_CONTENT") No Content
          option(value="JSON") JSON
          option(value="PLAIN_TEXT") Plain Text
          option(value="XML") XML
</template>

<script>
import { validationMixin } from 'vuelidate'
import formValidationMixin from '../../../../mixins/form-validation.mixin'
import { between, integer, required } from 'vuelidate/lib/validators'
import Status from '../../../shared/Status'
import jsonUtils from '../../../utils/json.utils'

export default {
  name: 'ResponseBasicForm',
  props: ['response'],
  components: {
    Status
  },
  data () {
    return {
      form: {
        status: '',
        responseType: 'NO_CONTENT'
      }
    }
  },
  created () {
    // set form values from request
    this.form.status = this.response.status
    if (jsonUtils.isValidJson(this.response.body)) {
      this.form.responseType = 'JSON'
    } else if (this.response.body) {
      this.form.responseType = 'PLAIN_TEXT'
    }
    // TODO try to convert to JSON
  },
  mixins: [
    formValidationMixin,
    validationMixin
  ],
  validations: {
    form: {
      status: {
        integer,
        required,
        between: between(100, 599)
      }
    }
  }
}
</script>
