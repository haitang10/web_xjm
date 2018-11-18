/*
var log = function() {
  console.log.apply(console,arguments)
}

var grade = 3
if(grade < 7) {
  log('小学生')
}

var rect = function(x, y, w, h) {
  jump(x, y)
  setHeading(0)

  var i = 0
  while(i < 2) {
    forward(w)
    right(90)
    forward(h)
    right(90)
    i = i + 1
  }
}

var center_rect = function(x, y, w, h) {

  var x1 = x - w / 2
  var y1 = y + h / 2

  rect(x1, y1, w, h)

}

center_rect(x, y, w, h)

*/












// 测试函数是否出错 debug   自动测试

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
testmin()
