<template lang="pug">
  form
    b-field(label="Name")
      b-input(v-model="form.name" required)
    .columns
      b-field.column(label="Protocol")
        b-select(v-model="form.protocol" required)
          option(:value="'HTTP'") HTTP
          option(:value="'HTTPS'") HTTPS
      b-field.column(label="Host")
        b-input(v-model="form.host" required)
      b-field.column.is-3(label="Port")
        b-input(v-model="form.port" min="0" max="65535" step="1" required)
</template>

<script>
export default {
  name: 'ServerInfoForm',
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
  watch: {
    form: {
      handler () {
        // TODO validate form
        this.$emit('validation', true)
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
