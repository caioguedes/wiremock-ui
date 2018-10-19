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
        button.button(@click="hidden = !hidden")
          b-icon(icon="plus")
          span Hide
        button.button(@click="favorite = !favorite")
          b-icon(icon="star")
          span Favorite
    .columns.align-flex-end
      .column.is-10
        b-field(label="Name")
          b-input(v-model="name" placeholder="Name (Optional)")
      .column.is-2
        b-field(label="Priority")
          b-input(v-model="priority")
</template>

<script>
import { validationMixin } from 'vuelidate'
import formValidationMixin from '../../../mixins/form-validation.mixin'
import { required } from 'vuelidate/lib/validators'
import ViewRawModal from './ViewRawModal'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'MappingInfoForm',
  components: {
    ViewRawModal
  },
  mixins: [
    formValidationMixin,
    validationMixin
  ],
  computed: {
    ...mapFields([
      'mapping',
      'mapping.name',
      'mapping.priority',
      'mapping.hidden',
      'mapping.favorite'
    ])
  },
  data () {
    return {
      viewRawModalActive: false
    }
  },
  validations: {
    priority: {
      required
    }
  }
}
</script>

<style scoped lang="scss">
  button {
    margin-left: 0.5rem;
  }
</style>
