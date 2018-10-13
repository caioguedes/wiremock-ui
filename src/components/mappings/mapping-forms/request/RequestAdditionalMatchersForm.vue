<template lang="pug">
  .columns
    .column
      b-collapse.panel(:open.sync="requestAdvOpts")
        .panel-heading(slot="trigger" :class="{open: requestAdvOpts}")
          strong Additional Matchers
          small(v-if="anyMatchers()")
            br
            span(v-if="form.headers.length > 0") Headers{{ form.headers | count }}&nbsp;
            span(v-if="form.bodyPatterns.length > 0") Body Matchers{{ form.bodyPatterns | count }}&nbsp;
            span(v-if="form.queryParams.length > 0") Query Params{{ form.queryParams | count }}&nbsp;
            span(v-if="form.cookies.length > 0") Cookies{{ form.cookies | count }}
        p.panel-tabs
          a(@click="switchTab('headers')" :class="{'is-active': isTabActive('headers')}")
            | Headers{{ form.headers | count }}
          a(@click="switchTab('bodyPatterns')" :class="{'is-active': isTabActive('bodyMatchers')}")
            | Body Matchers{{ form.bodyPatterns | count }}
          a(@click="switchTab('queryParams')" :class="{'is-active': isTabActive('queryParams')}")
            | Query Params{{ form.queryParams | count }}
          a(@click="switchTab('cookies')" :class="{'is-active': isTabActive('cookies')}")
            | Cookies{{ form.cookies | count }}
          b-icon.is-pulled-right(icon="plus" @click.native="add()")
        .panel-block
          .full-width
            div(v-if="isTabActive('headers')")
              .has-text-centered(v-if="form.headers.length <= 0") No Header Matchers
              KeyMatcherValue(v-for="(header, index) in form.headers" :key="'header' + index"
                :matcher="header" @change="matcherChanged('headers', index, $event)")
            div(v-if="isTabActive('bodyPatterns')")
              .has-text-centered(v-if="form.bodyPatterns.length <= 0") No Body Matchers
              MatcherValue(v-for="(bodyPattern, index) in form.bodyPatterns" :key="'bodyPatterns' + index"
                :matcher="bodyPattern" @change="matcherChanged('bodyPatterns', index, $event)")
            div(v-if="isTabActive('queryParams')")
              .has-text-centered(v-if="form.queryParams.length <= 0") No Query Parameter Matchers
              KeyMatcherValue(v-for="(queryParams, index) in form.queryParams" :key="'queryParams' + index"
                :matcher="queryParams" @change="matcherChanged('queryParams', index, $event)")
            div(v-if="isTabActive('cookies')")
              .has-text-centered(v-if="form.cookies.length <= 0") No Cookie Matchers
              KeyMatcherValue(v-for="(cookies, index) in form.cookies" :key="'cookies' + index"
                :matcher="cookies" @change="matcherChanged('cookies', index, $event)")
</template>

<script>
import KeyMatcherValue from '../../../shared/KeyMatcherValue'
import MatcherValue from '../../../shared/MatcherValue'
import formValidationMixin from '../../../../mixins/form-validation.mixin'

export default {
  name: 'RequestMoreOptionsForm',
  components: {
    KeyMatcherValue,
    MatcherValue
  },
  mixins: [formValidationMixin],
  props: ['request'],
  data () {
    return {
      requestAdvOpts: false,
      activeTab: 'headers',
      form: {
        headers: [],
        queryParams: [],
        cookies: [],
        bodyPatterns: []
      }
    }
  },
  created () {
    console.log(this.request)
    this.form.headers = this.convertToMatchers(this.request.headers)
    this.form.queryParams = this.convertToMatchers(this.request.queryParams)
    this.form.cookies = this.convertToMatchers(this.request.cookies)
    this.form.bodyPatterns = this.request.bodyPatterns || []
  },
  methods: {
    add () {
      this.form[this.activeTab].push({})
    },
    anyMatchers () {
      return this.form.headers.length > 0 ||
          this.form.queryParams.length > 0 ||
          this.form.cookies.length > 0 ||
          this.form.bodyPatterns.length > 0
    },
    switchTab (tab) {
      this.activeTab = tab
    },
    isTabActive (tab) {
      return this.activeTab === tab
    },
    matcherChanged (arrayKey, index, value) {
      let arrayIndex = {}
      arrayIndex[index] = value
      this.form[arrayKey] = Object.assign([], this.form[arrayKey], arrayIndex)
    },
    convertToMatchers (obj) {
      return Object.keys(obj || {}).map(key => {
        let matcher = Object.keys(obj[key])[0]
        return {
          key,
          matcher,
          value: obj[key][matcher]
        }
      })
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
