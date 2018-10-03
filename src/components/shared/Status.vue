<template lang="pug">
  span(:class="statusGroup") {{ status }} - {{ status | statusCode }}
</template>

<script>
import * as statusCodes from 'builtin-status-codes'

export default {
  name: 'Status',
  props: ['status'],
  filters: {
    statusCode: function (value) {
      return statusCodes[value]
    }
  },
  computed: {
    statusGroup: function () {
      if (this.status < 300) {
        return 'has-background-success'
      }
      if (this.status < 400) {
        return 'has-background-warn'
      }
      return 'has-background-danger'
    }
  }
}
</script>

<style scoped>
  span {
    padding: 0.1rem 0.2rem;
    border-radius: 0.2rem;
    color: white;
  }
</style>
