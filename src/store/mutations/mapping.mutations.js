import jsonUtils from '../../utils/json.utils'
import matcherUtils from '../../utils/matcher-utils'

export default {
  addRequestMatcher (state, arrayKey) {
    const mapping = Object.assign({}, state.mapping)
    mapping.request[arrayKey] = mapping.request[arrayKey].concat({})
    state.mapping = mapping
  },
  // set mapping from WireMock response
  setFromWireMock (state, mapping) {
    state.mapping = {}

    // general
    // name
    // hidden
    // favorite

    // priority
    state.mapping.priority = mapping.priority

    // request
    const request = {}
    const requestMapping = mapping.request
    request.method = requestMapping.method
    request.urlMatcher = matcherUtils.getUrlMatcher(requestMapping)
    if (request.urlMatcher) {
      request.path = requestMapping[request.urlMatcher]
    }
    request.headers = matcherUtils.convertToMatcher(requestMapping.headers)
    request.queryParams = matcherUtils.convertToMatcher(requestMapping.queryParams)
    request.cookies = matcherUtils.convertToMatcher(requestMapping.cookies)
    request.bodyPatterns = requestMapping.bodyPatterns || []
    state.mapping.request = request

    // response
    const response = {}
    const responseMapping = mapping.response
    const body = responseMapping.body
    response.status = responseMapping.status
    if (jsonUtils.isValidJson(responseMapping.body)) {
      response.responseType = 'JSON'
      response.body = jsonUtils.beautify(body)
    } else {
      response.body = body
      if (body) {
        response.responseType = 'PLAIN_TEXT'
      } else {
        response.responseType = 'NO_CONTENT'
      }
    }
    state.mapping.response = response

    console.log(state)
  },

  mappingValidationChange (state, validation) {
    const clone = Object.assign({}, state.mapping.validations)
    clone[validation.name] = validation.valid
    state.mapping.validations = clone
  },

  requestMatcherChanged (state, arrayKey, index, value) {
    let arrayIndex = {}
    arrayIndex[index] = value
    state.mapping.request[arrayKey] = Object.assign([], state.mapping.request[arrayKey], arrayIndex)
  }
}
