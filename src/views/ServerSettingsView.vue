<template lang="pug">
  .center.has-text-left
    .is-size-3 Server Info
    hr
    ServerInfoForm(ref="serverInfoForm" @change="onFormChange($event)")
    .is-clearfix
      .is-pulled-right
        a.button Cancel
        a.button.is-success(@click="save()" :disabled="invalid") Save
</template>

<script>
import ServerInfoForm from '../components/servers/ServerInfoForm'

export default {
  name: 'ServerSettingsView',
  components: {
    ServerInfoForm
  },
  data () {
    return {
      invalid: false
    }
  },
  methods: {
    save () {
      if (!this.invalid) {
        this.$store.commit('updateServer', {
          serverIndex: this.$route.params.serverIndex,
          server: this.$refs.serverInfoForm.form
        })
      }
    },
    onFormChange (form) {
      this.invalid = form.$invalid
    }
  }
}
</script>

<style scoped lang="scss">
.center {
  width: 100%;
  padding-top: 2rem;

  & > * {
    max-width: 900px;
    margin: 0 auto;
  }

  hr {
    margin-bottom: 1rem;
  }

  a {
    margin-left: 0.5rem;
  }
}
</style>
