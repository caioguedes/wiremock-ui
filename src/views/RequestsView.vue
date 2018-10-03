<template lang="pug">
  section
    RequestList.shadow(:requests="requests")
    article
      RequestDetails(v-if="request" :request="request")
      div(v-else) SELECT REQUEST
</template>

<script>
import RequestList from '../components/requests/RequestList'
import RequestDetails from '../components/requests/RequestDetails'

export default {
  name: 'RequestView',
  components: {
    RequestDetails,
    RequestList
  },
  data () {
    return {
      request: null,
      requests: []
    }
  },
  created () {
    this.retrieveMappings()
  },
  methods: {
    retrieveMappings () {
      this.$store.getters.currentMock().allRequests().then(res => {
        console.log(res)
        this.requests = res.requests
        this.request = this.requests.find(request => request.id === this.$route.params.requestId)
      }).catch(() => {
        this.requests = []
      })
    }
  },
  watch: {
    '$route.params.serverIndex' () {
      this.retrieveMappings()
    },
    '$route.params.requestId' (requestId) {
      this.request = this.requests.find(request => request.id === requestId)
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
    height: 100%;
    overflow-y: auto;
  }
</style>
