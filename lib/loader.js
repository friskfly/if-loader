var collect = require('./collect')
var generate = require('./generate')
module.exports = function(source) {
  this.cacheable()
  if (!this.options['if-loader']) {
    this.emitError('if-loader config undefined')
  }
  var coll = collect(source);
  
  if (coll.length) {
    source = generate.call(this, source, coll)
  }
  return source
}
