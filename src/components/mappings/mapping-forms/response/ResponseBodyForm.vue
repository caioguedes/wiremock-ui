<template lang="pug">
  div
    strong Body
    editor(v-model="form.body" @init="editorInit" lang="json" theme="chrome" width="100%" height="400" @change="$emit('change', form)")
</template>

<script>
import * as editor from 'vue2-ace-editor'
import { validationMixin } from 'vuelidate'
import formValidationMixin from '../../../../mixins/form-validation.mixin'
import jsonUtils from '../../../utils/json.utils'

export default {
  name: 'ResponseBodyForm',
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
        body: ''
      }
    }
  },
  created () {
    const body = this.response.body
    if (jsonUtils.isValidJson(body)) {
      this.form.body = jsonUtils.beautify(body)
    } else {
      this.form.body = body
    }
  },
  mixins: [
    formValidationMixin,
    validationMixin
  ],
  components: {
    editor
  },
  validations: {
    form: {
      body: {}
    }
  },
  methods: {
    editorInit: function () {
      require('brace/ext/language_tools')
      require('brace/mode/json')
      require('brace/theme/chrome')
    }
  }
}
</script>

<style scoped lang="scss">
  strong {
    margin-bottom: 0.5rem;
    display: inline-block;
  }

  .ace_editor {
    border: 1px solid #dbdbdb;
    border-radius: 4px;
  }
</style>
