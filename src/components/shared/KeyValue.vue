<template lang="pug">
  .columns.full-width
    .column.is-4
      b-field
        b-select.full-width(placeholder="Matcher" v-model="form.keyName" required)
          option(value="equalTo") Equal To
          option(value="matches") Matches
          option(value="doesNotMatch") Does Not Match
          option(value="contains") Contains
    .column.is-8
      b-field
        b-input(placeholder="Value" v-model="form.value" required)
</template>

<script>
export default {
  name: 'KeyValue',
  props: {
    kv: {
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
    padding: 0;

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
