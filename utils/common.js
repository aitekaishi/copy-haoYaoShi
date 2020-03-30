export default {
  isEmpty: value => {
    return value === null || value === undefined || value === ''
  },
  json2url: obj => {
    let arr = []
    for (let key in obj) {
      if (obj[key]) {
        arr.push(key + '=' + encodeURI(obj[key]))
      }
    }
    return (arr.length ? '?' : '') + arr.join('&')
  }
}
