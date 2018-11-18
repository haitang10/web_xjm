
var log = function() {
  console.log.apply(console, arguments)
}
// 用w 代替  其中selector 是元素的id或标签名或class
var w = function(selector) {
  return document.querySelector(selector)
}


var q = function() {
  log('debug 1 , coverTodoList')
  var todoList = w('#id-div-todoList')
  while( todoList.hasChildNodes() ) {
    log('debug 2', todoList.firstChild)
    todoList.removeChild(todoList.firstChild)
    //todoList.removeChild(todoList.firstChild)
  }

  log('debug 3', todoList)
  // var todos = read()
  // for (var i = 0; i < todos.length; i++) {
  //   var todo = todos[i]
  //   var task = todo.content
  //   var t = `<div>${task}</div>`
  //   log('debug 4', t)
  //   appendHtml(todoList, t)
  // }
  // log('debug 5',todoList)

}
