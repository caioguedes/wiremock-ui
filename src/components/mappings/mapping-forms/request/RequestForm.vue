<template lang="pug">
  div
    .is-size-4 Request
    hr
    RequestBasicForm
    RequestAdditionalMatchersForm
</template>

<script>
import RequestBasicForm from './RequestBasicForm'
import RequestAdditionalMatchersForm from './RequestAdditionalMatchersForm'

export default {
  name: 'RequestForm',
  components: {
    RequestBasicForm,
    RequestAdditionalMatchersForm
  }
}
</script>
