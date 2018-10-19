<template lang="pug">
  .columns
    .column
      b-field(label="Url Matcher" :type="getType($v.urlMatcher)")
        b-select(v-model="$v.urlMatcher.$model")
          option(value="url") Equal To
          option(value="urlPattern") Matching
          option(value="urlPath") Path Equal To
          option(value="urlPathPattern") Path Matching
    .column.is-fill
      b-field(label="Path" :type="getType($v.path)")
        b-input(v-model="$v.path.$model")
    .column
      b-field(label="Method" :type="getType($v.method)")
        b-select(v-model="$v.method.$model")
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
import { validationMixin } from 'vuelidate'
import formValidationMixin from '../../../../mixins/form-validation.mixin'
import { required } from 'vuelidate/lib/validators'
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
  },
  mixins: [
    formValidationMixin,
    validationMixin
  ],
  validations: {
    urlMatcher: {
      required
    },
    path: {
      required
    },
    method: {
      required
    }
  }
}
</script>
