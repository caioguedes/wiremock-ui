<template lang="pug">
  .is-clearfix.server
    .is-pulled-left.has-text-left
      .is-size-4
        ServerIndicator(:mock="server.mock")
        | {{server.name}}
      .has-text-grey.is-size-7 {{server.protocol.toLowerCase()}}://{{server.host}}:{{server.port}}
</template>

<script>
import ServerIndicator from './StatusIndicator'

export default {
  name: 'Server',
  props: ['server'],
  components: {
    ServerIndicator
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
