function isLineTerminator(ch){
  return (ch === 0x0A) || (ch === 0x0D) || (ch === 0x2028) || (ch === 0x2029);
}

function process(source, collect) {
  var startLoc = collect.if.range[0]
  var endLoc = collect.end.range[1]
  var fill = ''
  for (var i = startLoc; i < endLoc; i++) {
    if(isLineTerminator(source[i].charCodeAt(0))) fill += source[i]
    else fill += ' '
  }
  source = source.slice(0, startLoc) + fill + source.slice(endLoc)
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