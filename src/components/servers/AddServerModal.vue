<template lang="pug">
  b-modal(:active.sync="active" :width="640" scroll="keep")
    .modal-card(style="width: auto")
      header.modal-card-head
        p.modal-card-title Add Server
      section.modal-card-body.has-text-left
        ServerInfoForm(ref="form" @validation="onValidationChange")
      footer.modal-card-foot.flex-end
        a.button(@click="active = false") Cancel
        a.button.is-success(@click="addServer()" :disabled="!valid") Add Server
</template>

<script>
import ServerInfoForm from './ServerInfoForm'
import store from '../../store/index'

export default {
  name: 'AddServerModal',
  data () {
    return {
      active: false,
      valid: true
    }
  },
  components: {
    ServerInfoForm
  },
  methods: {
    addServer () {
      if (!this.invalid) {
        this.active = false
        let index = this.$store.state.servers.length
        store.commit('addServer', this.$refs.form.form)
        this.$router.push({ name: 'mappings', params: { serverIndex: index } })
      }
    },
    onValidationChange (valid) {
      // TODO get form
      console.log(this.$refs)
      this.valid = valid
    },
    open () {
      this.active = true
    }
  }
}
</script>

<style scoped>

</style>
