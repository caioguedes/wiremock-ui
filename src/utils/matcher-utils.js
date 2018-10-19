export default {
  getUrlMatcher (request) {
    if ('url' in request) {
      return 'url'
    }
    if ('urlPattern' in request) {
      return 'urlPattern'
    }
    if ('urlPath' in request) {
      return 'urlPath'
    }
    if ('urlPathPattern' in request) {
      return 'urlPathPattern'
    }
  },
  convertToKeyMatcherValueArray (obj) {
    return Object.keys(obj || {}).map(keyName => {
      let matcher = Object.keys(obj[keyName])[0]
      return {
        keyName,
        matcher,
        value: obj[keyName][matcher]
      }
    })
  },
  convertToMatcherValue (obj) {
    let matcher = Object.keys(obj)[0]
    return {
      matcher,
      value: obj[matcher]
    }
  }
}
