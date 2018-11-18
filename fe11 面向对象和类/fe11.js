var log = function () {
  console.log.apply(console, arguments)
}
// 面向对象和类
//定义一个类
var Student = function(name, height) {
  this.name = name
  this.height = height
}

// 用new函数 初始化一个类的实例 对象的实例,类或者说对象有属性
var s1 = new Student('haha', 180)
log('class, s1', s1.name, s1.height)
var s2 = new Student()
var s3 = new Student()
s2.name = 'gau II'
s3.name = '三代瓜'
log(s2.name, s3.name)
// 类或者说对象还可以添加方法，类的函数叫方法
Student.prototype.greeting = function() {
  log(`Hello, I'm ${this.name}`)
}
//利用类的方法更新实例
Student.prototype.update = function(name, age) {
  this.name = name
  this.age = age
}










// 重构fe10.js ajax 代码

// 四个 todo ajax
/*
var ajax = function(method, path, data, reseponseCallback) {
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open(method, path, true)
    // 设置发送的数据的格式
    r.setRequestHeader('Content-Type', 'application/json')
    // 注册响应函数
    r.onreadystatechange = function() {
        if(r.readyState === 4) {
            reseponseCallback(r)
        }
    }
    // 发送请求
    r.send(data)
}


var loadTodos = function() {
    var method = 'GET'
    var path = '/all'
    var url = baseUrl + path
    ajax(method, url, '', function(r){
        var todos = JSON.parse(r.response)
        log(todos)
        insertTodos(todos)
    })
}

var addTodo = function(task) {
    var url = 'http://vip.cocode.cc/sandbox/todo/3400711034/todo'
    var data = {
        'task': task,
    }
    data = JSON.stringify(data)
    ajax('POST', url, data, function(r){
        var t = JSON.parse(r.response)
        console.log(t)
    })
}

var deleteTodo = function(todoId) {
    // var todoId = '965'
    var url = 'http://vip.cocode.cc/sandbox/todo/3400711034/delete/' + todoId
    ajax('GET', url, '', function(r){
        var t = JSON.parse(r.response)
        console.log(t)
    })
}

var updateTodo = function(todoId, task) {
    var url = 'http://vip.cocode.cc/sandbox/todo/3400711034/update/' + todoId
    var data = {
        'task': task,
    }
    data = JSON.stringify(data)
    ajax('POST', url, data, function(r){
        var t = JSON.parse(r.response)
        console.log(t)
    })
}

*/

// 面向对象和类，变量都在内部，不会对外部造成影响
var Api = function(qq) {
  this.baseUrl = 'http://vip.cocode.cc/sandbox/todo/' + qq
}

Api.prototype.ajax = function(method, path, data, responseCallback ) {
  var r = new XMLHttpRequest()
  //设置请求方法和请求地址
  var url = this.baseUrl + path
  r.open(method, url, true)
  //设置发送的数据格式
  r.setRequestHeader('Content-Type', 'application/json')
  //注册相应函数
  r.onreadystatechange = function() {
    if (r.readyState === 4) {
      // data 是response返回数据解析后的样子
      var data = JSON.parse(r.response)
      responseCallback(data)
    }
  }
  // 在ajax 中把data转成JSON字符串
  var data = JSON.stringify(data)
  r.send(data)
}
// 定义response 函数

// response 是一个函数
Api.prototype.loadTodos = function(response) {
  var method = 'GET'
  var path = '/all'
  this.ajax(method, path, '', response)
}

Api.prototype.addTodos = function(task, response) {
  var path ='/add'
  var data = {
      'task': task,
  }
  this.ajax('POST', path, data, response)
}

Api.prototype.deleteTodos = function(todoTd, response) {
  var path = '/delete/' + todoId
  this.ajax('GET', path, '', response)
}

Api.prototype.updateTodos = function(todoTd, task, response) {
  var path = '/update/' + todoId
  var data = {
      'task': task,
  }
  this.ajax('POST', path, data, response)
}

var api = new Api(871257602)

api.loadTodos(function(r) {
  console.log('// DEBUG: 1, loadTodos', r)
})

api.deleteTodos(1111, function(r){

})
