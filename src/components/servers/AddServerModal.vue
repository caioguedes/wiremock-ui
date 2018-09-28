<template lang="pug">
  b-modal(:active.sync="active" :width="640" scroll="keep")
    .modal-card(style="width: auto")
      header.modal-card-head
        p.modal-card-title Add Server
      section.modal-card-body.has-text-left
        ServerInfoForm
      footer.modal-card-foot FOOTER
</template>

<script>
import ServerInfoForm from './ServerInfoForm'

export default {
  name: 'AddServerModal',
  props: ['active'],
  components: {
    ServerInfoForm
  }
}
</script>

<style scoped>

</style>
