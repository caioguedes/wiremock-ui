<template lang="pug">
  .columns.full-width
    .column.is-4
      b-field(:type="getType($v.form.key)")
        b-input(placeholder="Key" v-model="$v.form.key.$model")
    .column.is-4
      b-field(:type="getType($v.form.matcher)")
        b-select(placeholder="Matcher" v-model="$v.form.matcher.$model" expanded)
          option(value="equalTo") Equal To
          option(value="matches") Matches
          option(value="doesNotMatch") Does Not Match
          option(value="contains") Contains
    .column.is-4
      b-field(:type="getType($v.form.value)")
        b-input(placeholder="Value" v-model="$v.form.value.$model")
</template>

<script>
import { validationMixin } from 'vuelidate'
import formValidationMixin from '../../mixins/form-validation.mixin'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'KeyMatcherValue',
  mixins: [
    formValidationMixin,
    validationMixin
  ],
  props: {
    matcher: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      form: {
        key: '',
        matcher: '',
        value: ''
      }
    }
  },
  created () {
    this.from = Object.assign(this.form, this.matcher)
  },
  validations: {
    form: {
      key: {
        required
      },
      matcher: {
        required
      },
      value: {
        required
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .columns {
    margin-bottom: 0 !important;

    & > .column {
      padding-bottom: 0.25rem;
    }

    &:not(:first-child), &:not(:last-child) {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }

    &:not(:first-child) > .column {
      padding-top: 0.25rem;
    }

  }
</style>
