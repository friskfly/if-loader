function process(source, collect) {
  var startLoc = collect.if.range[0]
  var endLoc = collect.end.range[1]
  source = source.slice(0, startLoc) + source.slice(endLoc)
  return source;
}
module.exports = function(source, collects) {
  var define = this.options['if-loader']
  for (var i = collects.length - 1; i >= 0; i--) {
    var collect = collects[i]

    var defs = collect.if.value.replace(/#if/ig, '').trim()
    if (defs.indexOf(',') > -1) defs = defs.split(',')
    else defs = [defs]
    if (defs.indexOf(define) === -1) {
      source = process(source, collect)
    }
  }
  return source
}