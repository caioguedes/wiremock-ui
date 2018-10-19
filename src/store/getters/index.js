import mappingGetters from './mapping.getters'
import serverGetters from './server.getters'
import { getField } from 'vuex-map-fields'

export default Object.assign({ getField },
  mappingGetters,
  serverGetters
)
