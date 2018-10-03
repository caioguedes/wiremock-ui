<template lang="pug">
  pre.has-text-left.has-background-white {{ request | pretty }}
</template>

<script>
export default {
  name: 'RequestDetails',
  props: ['request'],
  filters: {
    pretty: function (value) {
      return JSON.stringify(value, null, 2)
    }
  }
}
</script>

<style scoped>

</style>
