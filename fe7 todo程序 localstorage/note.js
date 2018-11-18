// 1 函数作为参数传递
/* 函数也可以作为变量进行传递， 不加这个变量的
   的时候如果要改变process 里面调用的函数就要改变很多
   而加了 processor 这个变量 就不用进到process函数里面去
   改了*/

/* array 是一个数组， processor 用来处理array 里面每一个元素*/

var process = function(array, processor) {
  // process 处理每一个元素并返回一个新的array
   var new_array = []
   for (var i = 0; i <array.length; i++) {
     var a = array[i]
     var b = processor(a)
     new_array.push(b)
   }
  return new_array
}
var square = function(n) {
  var a = n * n
  return a
}
var array = [1.1, 2.2, 3.6]
var stringList = process(array, String)
var addList = process(array, function(n) {
  return n + 1
})
log('addlist',addList)
log('stringList', stringList)


// 2 localStorage
// localStorage 本地存储  和 JSON JavaScript Object Notation 数据格式
// 本地存储十分有用，因为在页面中点击按钮后通过js增加内容，但是页面刷新后
// 内容就没有了，又回到最初的状态了，即没有任何事件发生时的状态，
// 所以要把js 动作或者事件存到localstorage中

//JSON 序列化和反序列化，即把数组array 变成string，反之 变为array
var s = JSON.stringify([1, 2, 3, 4])
//log('序列化后的字符串', typeof s, s)

var a = JSON.parse(s)
//log('反序列化后的数组',typeof a, a)
