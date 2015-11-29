module.exports = function(comments) {
  var collect = []
  var data = []
  comments.forEach(function(comment) {
    var value = comment.value.trim()
    if (value.indexOf('#if') === 0) {
      comment.append = {
        if: true
      }
      data.push(comment)
    }
    if (value.indexOf('#end') === 0 && data[0] && data[0].append.if) {
      collect.push({
        if: data[0],
        end: comment
      })
      data = []
    }
  })
  return collect
}