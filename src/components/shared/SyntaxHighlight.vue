<template>
  <prism :language="language">
    <slot></slot>
  </prism>
</template>

<script>
import Prism from 'vue-prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'SyntaxHighlight',
  components: {
    Prism
  },
  props: ['language']
}
</script>

<style scoped>

</style>
