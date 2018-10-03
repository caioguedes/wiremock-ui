<template lang="pug">
  ul#mapping-list
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
    min-width: 20rem;
    max-width: 20rem;
    height: 100%;
    overflow-y: auto;
  }
</style>
