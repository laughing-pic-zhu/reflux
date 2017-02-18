module.exports = {
  option: function (str) {
    if (str === null || str === '' || str === undefined) {
      return str
    }
    return str[0].toUpperCase() + str.substr(1)
  }
}



