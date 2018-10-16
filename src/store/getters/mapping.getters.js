export default {
  isMappingValid (state) {
    let result = true
    let validations = state.mapping.validations
    for (let key in validations) {
      result = result && validations[key]
    }
    return result
  }
}
