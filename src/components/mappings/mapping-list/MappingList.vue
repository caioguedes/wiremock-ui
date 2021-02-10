<template lang="pug">
  div#mapping-list-wrap
    MappingListHeader
    ul#mapping-list.has-background-white-bis.side-shadow
      Mapping(v-for="mapping in mappings" :mapping="mapping" :key="mapping.id")
</template>

<script>
import Mapping from './Mapping'
import MappingListHeader from './MappingListHeader'

export default {
  name: 'MappingList',
  components: {
    Mapping,
    MappingListHeader
  },
  props: ['mappings']
}
</script>

<style scoped>
  #mapping-list {
    overflow-y: auto;
    max-height: calc(100vh - 135px);
  }

  #mapping-list-wrap {
    z-index: 20;
    min-width: 25rem;
    max-width: 25rem;
  }
</style>
