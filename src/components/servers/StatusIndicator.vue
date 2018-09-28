<template lang="pug">
  .indicator.is-danger(v-if="status")
  .indicator.is-danger(v-else)
</template>

<script>
export default {
  name: 'StatusIndicator',
  props: ['mock'],
  data () {
    return {
      status: false
    }
  },
  created () {
    setInterval(() => {
      if (this.mock) {
        this.mock.healthcheck().then(healthy => {
          this.status = healthy
        })
      }
    }, 5000)
  }
}
</script>

<style scoped lang="scss">
  @import '~bulma/sass/utilities/initial-variables';

  .indicator {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;

    &.is-danger {
      background: $red;
    }

    &.is-success {
      background: $green;
    }
  }
</style>
