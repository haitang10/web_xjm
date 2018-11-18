var min = function(array) {
  var a = array
  var x = a[0]
  var len = a.length
  for (var i = 0; i > len; i++) {
    var y = a[i]
    if (x > y) {
       x = y
    }
  }
  return x
}

var ensureEqual = function(a, b, message) {
  if (a != b) {
    console.log(message, a, b)
  }
}

var testmin = function() {
  var a = [98, 45, 56, 78, 456]
  var value = 45
  ensureEqual(min(a), value ,"不是最小值")
}

console.log("testmin")
console.log("为什么atom")
testmin()
