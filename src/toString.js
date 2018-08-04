export default (item, {showObject, defaultStringForObject} = {}) => {
  if (typeof item !== 'object') {
    return `${item}`
  }

  if (!item) {
    return ''
  }

  if (item.__dom) {
    return item.__dom
  }

  if (showObject) {
    return JSON.stringify(item)
  }
  return defaultStringForObject
}
