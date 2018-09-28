<template lang="pug">
  form(action="" @change="onFormChange()")
    b-field(label="Name")
      b-input(v-model="name")
    .columns
      b-field.column(label="Protocol")
        b-select(v-model="protocol")
          option(:value="'HTTP'") HTTP
          option(:value="'HTTPS'") HTTPS
      b-field.column(label="Host")
        b-input(v-model="host")
      b-field.column.is-2(label="Port")
        b-input(v-model="port")
</template>

<script>
export default {
  name: 'ServerInfoForm',
  data () {
    return {
      host: 'localhost',
      name: 'New Server',
      protocol: 'HTTP',
      port: 8080
    }
  },
  methods: {
    onFormChange () {
      console.log('form changed')
    }
  }
}
</script>

<style scoped lang="scss">
  form .columns:first-child {
    max-width: 8rem;
    min-width: 8rem;
  }

</style>
