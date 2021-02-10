<template lang="pug">
  footer.is-clearfix.has-background-white-bis.bottom-shadow
    .is-pulled-right
      a.button.is-success(:disabled="!$store.getters.isMappingValid()") Create Mapping
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  .is-clearfix {
    min-width: 25rem;
    max-width: 25rem;
    padding: 1rem 1rem;
    z-index: 10;
  }

  a {
    margin-left: 0.5rem;
  }
</style>
