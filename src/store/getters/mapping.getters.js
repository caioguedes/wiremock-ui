export default {
  isMappingValid (state) {
    console.log('isMappingValid', state.mapping.validations)
    let result = true
    let validations = state.mapping.validations
    for (let key in validations) {
      result = result && validations[key]
    }
    return result
  }
}
