<template lang="pug">
  b-modal(:active.sync="active" :width="920" scroll="keep")
    .modal-card(style="width: auto")
      header.modal-card-head
        p.modal-card-title Mapping Raw JSON
      section.modal-card-body.has-text-left
        prism(language="json") {{ mapping | pretty }}
</template>

<script>
import Prism from 'vue-prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'ViewRawModal',
  props: ['mapping'],
  components: {
    Prism
  },
  data () {
    return {
      active: false
    }
  },
  filters: {
    pretty: function (value) {
      return JSON.stringify(value, null, 2)
    }
  },
  methods: {
    open () {
      this.active = true
    }
  }
}
</script>

<style scoped>

</style>
