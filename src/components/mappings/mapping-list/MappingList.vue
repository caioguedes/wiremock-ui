<template lang="pug">
  ul#mapping-list.has-background-white-bis.side-shadow
    Mapping(v-for="mapping in mappings" :mapping="mapping" :key="mapping.id")
</template>

<script>
import Mapping from './Mapping'

export default {
  name: 'MappingList',
  components: {
    Mapping
  },
  props: ['mappings']
}
</script>

<style scoped>
  #mapping-list {
    z-index: 20;
    min-width: 25rem;
    max-width: 25rem;
    height: 100%;
    overflow-y: auto;
  }
</style>
