<template lang="pug">
  footer.is-clearfix.has-background-white-bis.top-shadow
    .is-pulled-left
      a.button.is-danger Delete
    .is-pulled-right
      a.button Cancel
      a.button.is-success(:disabled="!$store.getters.isMappingValid()") Save
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
  .is-clearfix {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    padding: 1rem 1rem 1rem 26rem;
  }

  a {
    margin-left: 0.5rem;
  }
</style>
