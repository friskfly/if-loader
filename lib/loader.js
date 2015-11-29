var espree = require('espree')
var collect = require('./collect')
var generate = require('./generate')

module.exports = function(source) {
  this.cacheable()
  if(!this.options['if-loader']){
    this.emitError('if-loader config undefined')
  }
  var ast = espree.parse(source, {
    range: true,
    loc: true,
    comments: true,
    attachComment: true,
    tokens: true,
    tolerant: true,
    ecmaFeatures: {
      arrowFunctions: true,
      blockBindings: true,
      destructuring: true,
      regexYFlag: true,
      regexUFlag: true,
      templateStrings: true,
      binaryLiterals: true,
      octalLiterals: true,
      unicodeCodePointEscapes: true,
      defaultParams: true,
      restParams: true,
      forOf: true,
      objectLiteralComputedProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      objectLiteralDuplicateProperties: true,
      generators: true,
      spread: true,
      superInFunctions: true,
      classes: true,
      newTarget: false,
      modules: true,
      jsx: true,
      globalReturn: true,
      experimentalObjectRestSpread: true
    }
  })
  var coll = collect(ast.comments)
  if (coll.length) {
    source = generate.call(this,source, coll)
  }
  return source
}