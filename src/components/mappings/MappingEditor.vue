<template lang="pug">
  #mapping-editor
    MappingForm(:mapping="mapping")
    MappingEditorFooter
</template>

<script>
import MappingForm from './mapping-forms/MappingForm'
import MappingEditorFooter from './MappingEditorFooter'

export default {
  name: 'MappingEditor',
  props: ['mapping'],
  data () {
    return {
      content: ''
    }
  },
  components: {
    MappingForm,
    MappingEditorFooter
  }
}
</script>

<style scoped>
  #mapping-editor {
    height: 100%;
    overflow-x: hidden;
    width: 100%;
    padding: 2rem 2rem 6rem;
  }
</style>
