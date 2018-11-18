var n = 6

var length = 63

forward(length)
right(angle)

var squqre = function(length, bianshu) {
  var x = length
  var n = bianshu
  var angle = 180 - ((n - 2) * 180 / n)
  var i = 0
  while(i < n) {
    forward(x)
    right(angle)
    i = i + 1
  }
}
square(10,3)


var polygon = function(length, bianshu) {
  var x = length
  var n = bianshu
  var angle = 180 - ((n - 2) * 180 / n)
  var i = 0
  while(i < n) {
    forward(x)
    right(angle)
    i = i + 1
  }
}

var circle = function(x, y, r) {
  jump(x, y)
  setHeading(0)
  // 从圆心走到起点
  var a = 36
  var angle = 360 / a
  var angleHalf = angle / 2

  left(90)
  left(angleHalf)
  forward(r)
  setHeading(0)

  var c = 2 * 3.14 * r
  var b = c / a
  polygon(b, a)

}

circle(0, 0, 30)

 
