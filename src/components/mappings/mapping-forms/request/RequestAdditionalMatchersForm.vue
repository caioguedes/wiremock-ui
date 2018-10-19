<template lang="pug">
  .columns
    .column
      b-collapse.panel(:open.sync="requestAdvOpts")
        .panel-heading(slot="trigger" :class="{open: requestAdvOpts}")
          strong Additional Matchers
          small(v-if="anyMatchers()")
            br
            span(v-if="headers.length > 0") Headers{{ headers | count }}&nbsp;
            span(v-if="bodyPatterns.length > 0") Body Matchers{{ bodyPatterns | count }}&nbsp;
            span(v-if="queryParams.length > 0") Query Params{{ queryParams | count }}&nbsp;
            span(v-if="cookies.length > 0") Cookies{{ cookies | count }}
        p.panel-tabs
          a(@click="switchTab('headers')" :class="{'is-active': isTabActive('headers')}")
            | Headers{{ headers | count }}
          a(@click="switchTab('bodyPatterns')" :class="{'is-active': isTabActive('bodyMatchers')}")
            | Body Matchers{{ bodyPatterns | count }}
          a(@click="switchTab('queryParams')" :class="{'is-active': isTabActive('queryParams')}")
            | Query Params{{ queryParams | count }}
          a(@click="switchTab('cookies')" :class="{'is-active': isTabActive('cookies')}")
            | Cookies{{ cookies | count }}
          b-icon.is-pulled-right(icon="plus" @click.native="$store.commit('addRequestMatcher', activeTab)")
        .panel-block
          .full-width
            div(v-if="isTabActive('headers')")
              .has-text-centered(v-if="headers.length <= 0") No Header Matchers
              KeyMatcherValue(v-for="(header, index) in headers" :key="'header' + index" :matcher="header"
                @change="$store.commit('requestMatcherChanged', {arrayKey: 'headers', index, value: $event})")
            div(v-if="isTabActive('bodyPatterns')")
              .has-text-centered(v-if="bodyPatterns.length <= 0") No Body Matchers
              MatcherValue(v-for="(bodyPattern, index) in bodyPatterns" :key="'bodyPatterns' + index" :matcher="bodyPattern"
                @change="$store.commit('requestMatcherChanged', {arrayKey: 'bodyPatterns', index, value: $event})")
            div(v-if="isTabActive('queryParams')")
              .has-text-centered(v-if="queryParams.length <= 0") No Query Parameter Matchers
              KeyMatcherValue(v-for="(queryParams, index) in queryParams" :key="'queryParams' + index" :matcher="queryParams"
                @change="$store.commit('requestMatcherChanged', {arrayKey: 'queryParams', index, value: $event})")
            div(v-if="isTabActive('cookies')")
              .has-text-centered(v-if="cookies.length <= 0") No Cookie Matchers
              KeyMatcherValue(v-for="(cookies, index) in cookies" :key="'cookies' + index" :matcher="cookies"
                @change="$store.commit('requestMatcherChanged', {arrayKey: 'cookies', index, value: $event})")
</template>

<script>
import KeyMatcherValue from '../../../shared/KeyMatcherValue'
import MatcherValue from '../../../shared/MatcherValue'
import formValidationMixin from '../../../../mixins/form-validation.mixin'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'RequestMoreOptionsForm',
  components: {
    KeyMatcherValue,
    MatcherValue
  },
  mixins: [formValidationMixin],
  computed: {
    ...mapFields([
      'mapping.request.headers',
      'mapping.request.queryParams',
      'mapping.request.cookies',
      'mapping.request.bodyPatterns'
    ])
  },
  data () {
    return {
      requestAdvOpts: false,
      activeTab: 'headers'
    }
  },
  methods: {
    anyMatchers () {
      return this.headers.length > 0 ||
          this.queryParams.length > 0 ||
          this.cookies.length > 0 ||
          this.bodyPatterns.length > 0
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
