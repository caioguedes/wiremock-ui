export default {
  setFromWireMock (state, mapping) {

  },
  mappingValidationChange (state, validation) {
    const clone = Object.assign({}, state.mapping.validations)
    clone[validation.name] = validation.valid
    state.mapping.validations = clone
  }
}
