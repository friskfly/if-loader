var re = /(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/(.*))/g
module.exports = function(source) {
  var collect = []
  var data = []
  re.lastIndex = 0

  var match
  while (match = re.exec(source)) {
    var v = match[0]
    if(v.indexOf('/*') === 0){
      v = v.slice(0, v.length - 2)
    }
    v = v.slice(2).trim()
    if (v.indexOf('#if') === 0) {
      data.push({
        value: v,
        range: [re.lastIndex - match[0].length, re.lastIndex],
        if :true
      })
    }

    if (v.indexOf('#end') === 0 && data[0] && data[0].if) {
      collect.push({
        if: data[0],
        end: {
          range: [re.lastIndex - match[0].length, re.lastIndex],
          value: v
        }
      })
      data = []
    }
  }
  return collect
}