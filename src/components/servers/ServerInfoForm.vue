<template lang="pug">
  form
    b-field(label="Name" :type="getType($v.form.name)" :message="getMessage('Server Name', $v.form.name)")
      b-input(v-model="$v.form.name.$model")
    .columns
      b-field.column(label="Protocol")
        b-select(v-model.trim="$v.form.protocol.$model")
          option(:value="'HTTP'") HTTP
          option(:value="'HTTPS'") HTTPS
      b-field.column(label="Host" :type="getType($v.form.host)" :message="getMessage('Host', $v.form.host)")
        b-input(v-model.trim.lazy="$v.form.host.$model")
      b-field.column.is-3(label="Port" :type="getType($v.form.port)" :message="getMessage('Port', $v.form.port)")
        b-input(v-model.trim.lazy="$v.form.port.$model")
</template>

<script>
import { validationMixin } from 'vuelidate'
import formValidationMixin from '../../mixins/FormValidation'
import { integer, minValue, maxValue, required } from 'vuelidate/lib/validators'

export default {
  name: 'ServerInfoForm',
  mixins: [
    formValidationMixin,
    validationMixin
  ],
  data () {
    return {
      form: {
        host: 'localhost',
        name: 'New Server',
        protocol: 'HTTP',
        port: 8080
      }
    }
  },
  validations: {
    form: {
      host: {
        required
      },
      name: {
        required
      },
      protocol: {
        required
      },
      port: {
        required,
        integer,
        minValue: minValue(0),
        maxValue: maxValue(65535)
      }
    }
  },
  watch: {
    form: {
      handler () {
        this.$emit('change', this.$v)
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">
  .column:first-child {
    max-width: 8rem;
    min-width: 8rem;
    flex-grow: unset;
  }
</style>
