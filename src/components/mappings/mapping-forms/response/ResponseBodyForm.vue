<template lang="pug">
  div
    strong Body
    editor(v-model="body" @init="editorInit" lang="json" theme="chrome" width="100%" height="400" @change="$emit('change', form)")
</template>

<script>
import * as editor from 'vue2-ace-editor'
import formValidationMixin from '../../../../mixins/form-validation.mixin'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'ResponseBodyForm',
  mixins: [formValidationMixin],
  components: {
    editor
  },
  computed: {
    ...mapFields(['mapping.response.body'])
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
