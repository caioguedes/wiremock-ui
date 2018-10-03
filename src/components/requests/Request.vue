<template lang="pug">
  router-link.has-text-left(:to="{name: 'requests', params: {requestId: request.id}}")
    strong.has-text-grey-dark.is-size-6 {{ request.request.url }}
    .is-clearfix.has-text-centered
      span {{ request.request.loggedDate | moment('M/d, h:mm:ss.SS A') }}
      .is-pulled-left
        Method(:method="request.request.method")
      .is-pulled-right
        Status(:status="request.response.status")
</template>

<script>
import Method from '../shared/Method'
import Status from '../shared/Status'

export default {
  name: 'Request',
  props: ['request'],
  components: {
    Method,
    Status
  }
}
</script>

<style scoped lang="scss">
  a {
    strong {
      margin-bottom: 0.5rem;
      display: inline-block;
    }

    display: block;
    border-bottom: 1px solid #E3E3E3;
    padding: 0.5rem;
    cursor: pointer;
    transition: background 0.5s;

    &:hover {
      background: lightgray;
    }
  }
</style>
