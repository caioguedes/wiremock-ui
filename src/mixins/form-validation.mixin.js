export default {
  methods: {
    getMessage (name, field) {
      if ('required' in field && !field.required) {
        return name + ' is required'
      } else if (field.$invalid) {
        return name + ' is not valid'
      }
    },
    getType (field) {
      if (field.$dirty && field.$invalid) {
        return 'is-danger'
      }
    }
  },
  watch: {
    form: {
      handler () {
        if (this.$v) {
          console.log(this)
          this.$store.commit('mappingValidationChange', {
            name: this.$options.name,
            valid: !this.$v.$invalid
          })
        }
      },
      deep: true
    }
  }
}
