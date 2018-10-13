export default {
  beautify (str) {
    if (typeof str === 'string') {
      return JSON.stringify(JSON.parse(str), null, 2)
    }
    return str
  },
  isValidJson (str) {
    if (typeof str === 'string') {
      try {
        JSON.parse(str)
        return true
      } catch (err) {}
    }
    return false
  }
}
