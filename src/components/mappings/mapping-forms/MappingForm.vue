<template lang="pug">
  form.has-text-left
    <!--| {{ form }}-->
    .v-spacer
    MappingInfoForm(:mapping="mapping" @change="form = Object.assign(form, $event)")
    .v-spacer
    MappingRequestForm
    .v-spacer
    MappingResponseForm
</template>

<script>
import MappingInfoForm from './MappingInfoForm'
import MappingResponseForm from './response/ResponseForm'
import MappingRequestForm from './request/RequestForm'

export default {
  name: 'MappingForm',
  props: ['mapping'],
  components: {
    MappingInfoForm,
    MappingResponseForm,
    MappingRequestForm
  },
  data () {
    return {
      form: {
        name: '',
        priority: 0,
        hidden: false,
        favorite: false,
        request: {},
        response: {}
      }
    }
  },
  watch: {
    form: {
      handler () {
        console.log('MappingForm change', this.form)
      },
      deep: true
    }
  }
}
</script>
