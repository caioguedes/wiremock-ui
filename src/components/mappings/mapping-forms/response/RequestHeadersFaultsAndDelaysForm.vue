<template lang="pug">
  .columns
    .column
      b-collapse.panel(:open.sync="responseAdvOpts")
        .panel-heading(slot="trigger" :class="{open: responseAdvOpts}")
          strong Headers, Delays, & Faults
        p.panel-tabs
          a(@click="switchTab('headers')" :class="{'is-active': isTabActive('headers')}")
            | Headers{{ form.bodyPatterns | count }}
          a(@click="switchTab('delay')" :class="{'is-active': isTabActive('delay')}")
            | Delay
          a(@click="switchTab('faults')" :class="{'is-active': isTabActive('faults')}")
            | Faults
          b-icon.is-pulled-right(v-if="isTabActive('headers')" icon="plus" @click.native="addHeader()")
        .panel-block
          .full-width
            div(v-if="isTabActive('headers')")
              .has-text-centered(v-if="form.headers.length <= 0") No Response Headers
              KeyMatcherValue(v-for="(header, index) in form.headers" :key="'header' + index"
                :matcher="header" @change="matcherChanged('headers', index, $event)")
            div(v-if="isTabActive('delay')") This feature has not yet been implemented.
            div(v-if="isTabActive('faults')") This feature has not yet been implemented.
</template>

<script>
export default {
  name: 'RequestFaultsAndDelaysForm',
  data () {
    return {
      responseAdvOpts: false,
      activeTab: 'headers',
      form: {
        headers: [],
        delay: null,
        faults: []
      }
    }
  },
  created () {
    console.log(this.response)
  },
  methods: {
    addHeader () {
      this.form.headers.push({})
    },
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
