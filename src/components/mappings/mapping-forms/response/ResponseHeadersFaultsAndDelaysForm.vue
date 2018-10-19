<template lang="pug">
  .columns
    .column
      b-collapse.panel(:open.sync="responseAdvOpts")
        .panel-heading(slot="trigger" :class="{open: responseAdvOpts}")
          strong Headers, Delays, & Faults
        p.panel-tabs
          a(@click="switchTab('headers')" :class="{'is-active': isTabActive('headers')}")
            | Headers{{ headers | count }}
          a(@click="switchTab('delay')" :class="{'is-active': isTabActive('delay')}")
            | Delay
          a(@click="switchTab('faults')" :class="{'is-active': isTabActive('faults')}")
            | Faults
          b-icon.is-pulled-right(v-if="isTabActive('headers')" icon="plus" @click.native="$store.commit('addResponseHeader')")
        .panel-block
          .full-width
            div(v-if="isTabActive('headers')")
              .has-text-centered(v-if="headers.length <= 0") No Response Headers
              KeyValue(v-for="(header, index) in headers" :key="'header' + index"
                :matcher="header" @change="$store.commit('responseHeaderChanged', {index, value: $event})")
            div(v-if="isTabActive('delay')") This feature has not yet been implemented.
            div(v-if="isTabActive('faults')") This feature has not yet been implemented.
</template>

<script>
import KeyValue from '../../../shared/KeyValue'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'ResponseHeadersFaultsAndDelaysForm',
  computed: {
    ...mapFields([
      'mapping.response.headers',
      'mapping.response.faults'
    ])
  },
  components: {
    KeyValue
  },
  data () {
    return {
      responseAdvOpts: false,
      activeTab: 'headers'
    }
  },
  methods: {
    switchTab (tab) {
      this.activeTab = tab
    },
    isTabActive (tab) {
      return this.activeTab === tab
    }
  },
  filters: {
    count: function (value) {
      if (Array.isArray(value) && value.length > 0) {
        return `(${value.length})`
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .panel-heading {
    border-radius: 4px 4px 4px 4px;

    &.open {
      border-radius: 4px 4px 0 0
    }
  }

  p.panel-tabs {
    position: relative;

    & > span.icon {
      align-self: center;
      position: absolute;
      right: 0;
      margin-right: 0.5rem;
      cursor: pointer;
    }
  }
</style>
