<template lang="pug">
  pre.has-text-left.has-background-white {{ mapping | pretty }}
</template>

<script>
export default {
  name: 'MappingEditor',
  props: ['mapping'],
  filters: {
    pretty: function (value) {
      return JSON.stringify(value, null, 2)
    }
  }
}
</script>

<style scoped>

</style>
