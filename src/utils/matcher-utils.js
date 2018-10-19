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
  convertToMatcher (obj) {
    return Object.keys(obj || {}).map(key => {
      let matcher = Object.keys(obj[key])[0]
      return {
        key,
        matcher,
        value: obj[key][matcher]
      }
    })
  }
}
