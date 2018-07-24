export default (item, {showObject, defaultStringForObject} = {}) => {
  if (typeof item !== 'object') {
    return `${item}`
  }
  if (showObject) {
    return JSON.stringify(item)
  }
  return defaultStringForObject
}
