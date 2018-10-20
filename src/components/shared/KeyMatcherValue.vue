<template lang="pug">
  .columns.full-width
    .column.is-4
      b-field
        b-input(placeholder="Key" v-model="form.keyName" required)
    .column.is-4
      b-field
        b-select(placeholder="Matcher" v-model="form.matcher" required expanded)
          option(value="equalTo") Equal To
          option(value="matches") Matches
          option(value="doesNotMatch") Does Not Match
          option(value="contains") Contains
    .column.is-4
      b-field
        b-input(placeholder="Value" v-model="form.value" required)
</template>

<script>
export default {
  name: 'KeyMatcherValue',
  props: {
    kmv: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      form: {
        keyName: '',
        matcher: '',
        value: ''
      }
    }
  },
  created () {
    this.from = Object.assign(this.form, this.kmv)
  }
}
</script>

<style scoped lang="scss">
  .columns {
    margin-bottom: 0 !important;

    & > .column {
      padding-bottom: 0.25rem;
    }

    &:not(:first-child), &:not(:last-child) {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }

    &:not(:first-child) > .column {
      padding-top: 0.25rem;
    }

  }
</style>
