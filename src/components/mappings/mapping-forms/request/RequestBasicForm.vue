<template lang="pug">
  .columns
    .column
      b-field(label="Url Matcher" :type="getType($v.form.urlMatcher)")
        b-select(v-model="$v.form.urlMatcher.$model")
          option(value="url") Equal To
          option(value="urlPattern") Matching
          option(value="urlPath") Path Equal To
          option(value="urlPathPattern") Path Matching
    .column.is-fill
      b-field(label="Path" :type="getType($v.form.path)")
        b-input(v-model="$v.form.path.$model")
    .column
      b-field(label="Method" :type="getType($v.form.method)")
        b-select(v-model="$v.form.method.$model")
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

export default {
  name: 'RequestBasicForm',
  props: ['request'],
  data () {
    return {
      form: {
        urlMatcher: '',
        path: '',
        method: ''
      }
    }
  },
  created () {
    // set form values from request
    this.form.method = this.request.method
    this.form.urlMatcher = this.getUrlMatcher()
    if (this.form.urlMatcher) {
      this.form.path = this.request[this.form.urlMatcher]
    }
  },
  mixins: [
    formValidationMixin,
    validationMixin
  ],
  validations: {
    form: {
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
  },
  methods: {
    getUrlMatcher () {
      if ('url' in this.request) {
        return 'url'
      }
      if ('urlPattern' in this.request) {
        return 'urlPattern'
      }
      if ('urlPath' in this.request) {
        return 'urlPath'
      }
      if ('urlPathPattern' in this.request) {
        return 'urlPathPattern'
      }
    }
  }
}
</script>
