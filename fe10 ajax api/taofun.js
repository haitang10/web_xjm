var log = function () {
  console.log.apply(console, arguments)
}


var w = function(selector) {
  return document.querySelector(selector)
}
// 往一个元素节点内添加元素
var appendHtml = function(element, html) {
  element.insertAdjacentHTML('beforeend', html)
}


// 构建todo 模板
var toodTemplate = function(todo) {
  var task = todo.task
  var id = todo.id
    var t = `
    <div id=${id}>
    <button class='button-delete'>删除</button>
    <button class='button-update'>更新</button>
    <span id='task-${id}'>${task}</span>

    </div>
  `
  return t
}


var ajax = function(method, path, data, responseCallback ) {
  var r = new XMLHttpRequest()
  //设置请求方法和请求地址
  r.open(method, path, true)
  //设置发送的数据格式
  r.setRequestHeader('Content-Type', 'application/json')
  //注册相应函数
  r.onreadystatechange = function() {
    if (r.readyState === 4) {
      responseCallback(r)
    }
  }

  r.send(data)
}

// 利用ajax 函数来删除一个todo，而不是在页面中删除，因为要删除的是后端数据
var deleteTodo = function(todoId) {
  var url = `
  http://vip.cocode.cc/sandbox/todo/3400711034/delete/${todoId}
  `
  log(url)
  ajax('GET', url, '', function(r){
    var t = JSON.parse(r.response)
    log(t)
  })

}
var updateTodo = function(todoId, task) {
  var url =`
  http://vip.cocode.cc/sandbox/todo/3400711034/delete/${todoId}
  `
  var data = {
    task: task
  }
  ajax('GET', url, data, function(r) {
      console.log(r.status, JSON.parse(r.response))
  })
}
