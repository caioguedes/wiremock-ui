<template lang="pug">
  form.has-text-left
    <!--| {{ form }}-->
    .v-spacer
    MappingInfoForm
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
  }
}
</script>
