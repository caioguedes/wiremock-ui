<template lang="pug">
  .is-inline
    span(:class="statusGroup" v-if="statusCodeValid(status)")
      span {{ status }}&nbsp;-&nbsp;
      span(v-if="statusExists(status)") {{ status | statusCode }}
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
        return 'has-background-warning'
      }
      return 'has-background-danger'
    }
  },
  methods: {
    statusCodeValid (status) {
      return status && this.statusExists(status)
    },
    statusExists (status) {
      return !!statusCodes[status]
    }
  }
}
</script>

<style scoped>
  .is-inline > span {
    padding: 0.1rem 0.2rem;
    border-radius: 0.2rem;
    color: white;
  }
</style>
