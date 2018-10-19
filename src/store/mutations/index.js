import mappingMutations from './mapping.mutations'
import serverMutations from './server.mutations'
import { updateField } from 'vuex-map-fields'

export default Object.assign({ updateField },
  mappingMutations,
  serverMutations
)
