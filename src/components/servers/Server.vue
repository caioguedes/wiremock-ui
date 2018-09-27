<template lang="pug">
  .is-clearfix.server
    .is-pulled-left.has-text-left
      .is-size-4
        ServerIndicator(:mock="mock")
        | {{server.name}}
      .has-text-grey.is-size-7 {{server.host}}:{{server.port}}
</template>

<script>
import { connect } from 'wiremock-client'
import ServerIndicator from './StatusIndicator'

export default {
  name: 'Server',
  props: ['server'],
  components: {
    ServerIndicator
  },
  computed: {
    mock () {
      if (this.server) {
        return connect(this.server.host, this.server.port)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.server {
  min-width: 10rem;

  .indicator {
    margin-right: 0.5rem;
  }

  .is-size-4 {
    line-height: 1.3;
  }
}
</style>
