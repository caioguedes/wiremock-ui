<template lang="pug">
  .indicator.has-background-success(v-if="status === true")
  .indicator.has-background-danger(v-else-if="status === false")
  .indicator.has-background-grey-light(v-else)
</template>

<script>
export default {
  name: 'StatusIndicator',
  props: ['mock'],
  data () {
    return {
      status: null
    }
  },
  created () {
    this.ping()
    setInterval(() => {
      if (this.isVisible()) {
        this.ping()
      }
    }, 5000)
  },
  methods: {
    ping () {
      if (this.mock) {
        this.mock.healthcheck().then(healthy => {
          this.status = healthy
        })
      }
    },
    isVisible () {
      return !!(this.$el && this.$el.offsetLeft)
    }
  },
  watch: {
    mock () {
      this.ping()
    }
  }
}
</script>

<style scoped lang="scss">
  .indicator {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
</style>
