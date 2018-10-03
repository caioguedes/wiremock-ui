<template lang="pug">
  section
    MappingList(:mappings="mappings")
    article
      MappingEditor(v-if="mapping" :mapping="mapping")
      div(v-else) SELECT MAPPING
</template>

<script>
import MappingList from '../components/mappings/MappingList'
import MappingEditor from '../components/mappings/MappingEditor'

export default {
  name: 'MappingsView',
  components: {
    MappingEditor,
    MappingList
  },
  data () {
    return {
      mapping: null,
      mappings: []
    }
  },
  created () {
    this.retrieveMappings()
  },
  methods: {
    retrieveMappings () {
      this.$store.getters.currentMock.allStubMappings().then(res => {
        this.mappings = res.mappings
        this.mapping = this.mappings.find(mapping => mapping.id === this.$route.params.mappingId)
      }).catch(() => {
        this.mappings = []
      })
    }
  },
  watch: {
    '$route.params.serverIndex' () {
      this.retrieveMappings()
    },
    '$route.params.mappingId' (mappingId) {
      this.mapping = this.mappings.find(mapping => mapping.id === mappingId)
    }
  }
}
</script>

<style scoped>
  section {
    display: flex;
    width: 100%;
    height: calc(100% - 65px);
  }

  article {
    flex-grow: 1;
    width: calc(100% - 20rem);
  }
</style>
