<template lang="pug">
  .columns
    .column.is-4
      b-field(label="Status")
        b-input(v-model="$v.status.$model"  type="number" min="100" max="599")
      Status(:status="$v.status.$model")
    .column.is-4
    .column.is-4
      b-field(label="Response Type")
        b-select.full-width(v-model="responseType")
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
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'ResponseBasicForm',
  props: ['response'],
  components: {
    Status
  },
  computed: {
    ...mapFields([
      'mapping.response.status',
      'mapping.response.responseType'
    ])
  },
  mixins: [
    formValidationMixin,
    validationMixin
  ],
  validations: {
    status: {
      integer,
      required,
      between: between(100, 599)
    }
  }
}
</script>
