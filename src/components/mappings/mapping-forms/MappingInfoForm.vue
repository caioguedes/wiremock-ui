<template lang="pug">
  div
    ViewRawModal(ref="viewRawModel" :mapping="mapping")
    .columns.align-item-center
      .column
        .is-size-3 Mapping
        .is-size-6.has-text-grey ID: {{mapping.uuid}}
      .column.has-text-right
        button.button(@click="$refs.viewRawModel.open()")
          b-icon(icon="eye")
          span View Raw
        button.button(@click="form.hidden = !form.hidden")
          b-icon(icon="plus")
          span Hide
        button.button(@click="form.favorite = !form.favorite")
          b-icon(icon="star")
          span Favorite
    .columns.align-flex-end
      .column.is-10
        b-field(label="Name")
          b-input(v-model="form.name" placeholder="Name (Optional)")
      .column.is-2
        b-field(label="Priority")
          b-input(v-model="form.priority")
</template>

<script>
import { validationMixin } from 'vuelidate'
import formValidationMixin from '../../../mixins/form-validation.mixin'
import { required } from 'vuelidate/lib/validators'
import ViewRawModal from './ViewRawModal'

export default {
  name: 'MappingInfoForm',
  props: [
    'mapping'
  ],
  components: {
    ViewRawModal
  },
  mixins: [
    formValidationMixin,
    validationMixin
  ],
  data () {
    return {
      viewRawModalActive: false,
      form: {
        name: '',
        priority: 0,
        hidden: false,
        favorite: false
      }
    }
  },
  validations: {
    form: {
      priority: {
        required
      }
    }
  },
  created () {
    this.form.name = this.mapping.name
    this.form.priority = this.mapping.priority
    this.form.hidden = this.mapping.hidden
    this.form.favorite = this.mapping.favorite
  }
}
</script>

<style scoped lang="scss">
  button {
    margin-left: 0.5rem;
  }
</style>
