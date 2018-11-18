
/* 通过ajax和服务器
1，获得所有的todo ，返回json 格式字符串，
2，发送JSON格式字符串创建todo，
var data = {
  task:haha
}
var data = JSON.stringify(data)
ajax('POST', url, null, data, function(r) {
    console.log(r.status, JSON.parse(r.response))
})

3，发送JSON格式字符串更新todo
var url = ''
var data = {
  task: hhh
}
ajax('GET', url, null, data, function(r) {
    console.log(r.status, JSON.parse(r.response))
})
4，删除一个todo
GET
http://vip.cocode.cc/sandbox/todo/<你的qq号>/delete/<todo_id>

var todoId = '965'
var url = 'http://vip.cocode.cc/sandbox/todo/3400711034/delete/${todoId}'
data = JSON.stringify(data)
ajax('GET', url, null, '', function(r){
    var t = JSON.parse(r.response)
    console.log(t)
})
*/


/*
这次要实现的功能是通过ajax构建页面和交互，服务器中存在一些数据
首先通过ajax在页面中构建input输入框和add按钮，
下面是todo和删除，更新两个按钮 ，即
    todo内容  delete  update
    todo内容  delete  update
    todo内容  delete  update
点击delete 发送ajax删除todo，点击update，出现input输入框和submit按钮,发送ajax更新todo，
这两个功能都利用获取todoId实现
*/

// 实现一个用ajax和后端交互数据的todo
/*
1, 往页面中添加输入框和提交按钮，点击add时往页面中添加内容
2， 载入所有todos
3, 显示所有todos
4, 每个todos 要显示删除按钮
5， 删除按钮可以删除这个todo
    绑定删除按钮的事件
    写出删除函数，需要todo_id
    在事件中调用删除函数，把todo_id 传给函数
6， 每个todo要显示更新按钮
7, 点击更新按钮
8，添加CSS
*/






// 1, 往页面中添加输入框和add todo按钮
var init = function() {
  var todoContainer = w('#id-div-container')
  var t =
  `
  <input id='id-input-task'>
  <button id='id-button-add'>Add todo</button>
  `
  appendHtml(todoContainer, t)
}



// 给add按钮绑定事件，即在init 中的 input 输入框中输入内容后点击add，
// 一方面向页面内插入输入内容，即todo task，另一方面会发送ajax请求到
// 服务器来增加todo，即发送json 格式字符串创建todo
var addInput = function() {
  var addButton = w('#id-button-add')
  addButton.addEventListener('click', function(){
    var inputValue  = w('#id-input-task').value
    var t = `
    <div>
    <button class='button-delete'>删除</button>
    <button class='button-update'>更新</button>
    <span>${inputValue}</span>
    </div>
    `
    var todoContainer = w('#id-div-container')
    appendHtml(todoContainer, t)
  })
}

//2，载入所有todos, 利用 AJAX
var loadTodos = function() {
  var baseUrl = ''
  var path = ''
  var url = baseUrl + path
  var method = 'GET'
  ajax(method, url, '', function(r){
    var todos = JSON.parse(r.response)
    log(todos)
    insertTodos(todos)
  })
}

//3, 显示所有todos
var insertTodos = function(todos) {
  var todoContainer = w('#id-div-container')
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i]
    var t = todoTemplate(todo)
    appendHtml(todoContainer, t)
  }
}

//5    删除按钮可以通过id删除这个todo
//     绑定删除按钮的事件
//     写出删除函数，需要todo_id
//     在事件中调用删除函数，把todo_id 传给函数
var bindEventDelete = function() {
  var todoContainer = w('#id-div-container')
  todoContainer.addEventListener('click', function(event){
    var target = event.target
    log(target.classList)
    if(taret.classList.contains('button-delete')) {
      log('点了删除按钮')
      // 利用ajax删除后端数据
      var todoId = target.parentElement.id
      deleteTodo(todoId)
      // 删除页面内todoDiv
      var todoDiv = target.parentElement
      todoDiv.remove()

    }
  })
}


//7 点击更新按钮后，往div中添加两个元素 input 和 提交按钮
//给提交按钮绑定事件，在点击提交按钮的时候通过ajax向服务器发送请求
var bindEventUpdate = function() {
  var todoContainer = w('#id-div-container')
  todoContainer.addEventListener('click',function(event) {
    //log('container click', event, event.target)
    // target 用来标记谁点的
    var target = event.target

    if(target.classList.contains('button-update')) {
      log('点到了update按钮')
      var todoId = target.parentElement.id

      var t = `
        <input id=update-${todoId}>
        <button class='button-submit'></button>
      `
      appendHtml(target.parentElement, t)

}
})
}


// 给提交按钮绑定事件，在点击提交按钮的时候通过ajax向服务器发送请求
// 这时要知道input的值和id 然后通过ajax向服务器更新数据
var bindEventSubmit = function() {
  var todoContainer = w('#id-div-container')
  todoContainer.addEventListener('click',function(event){
    var target = event.target
    if(target.classList.contains('button-submit')) {
      log('点到了提交submit按钮')
      // 获取todoID
      var todoId = target.parentElement.id
      // 获取输入框内容，并发送ajax请求到服务器
      var selecter1 = '#' + 'update-' + todoId
      var task = w(selecter1).value
      // 发送更新请求
      updateTodo(todoId, task)
      // 修改页面中todo task
      var selecter2 = '#' + 'task-' + todoId
      w(selecter2).innerHTML = task
      log('submit debug', selecter2, task)
    }
  })
}




// //8 添加css
var addCss = function() {
  var t = `
    <style>
      div {
        outline:red solid 1px;
        background:lightblue;
      }
    </style>
  `
  var head = w('head')
  appendHtml(head, t)
}

var bindEvents = function() {
  bindEventDelete()
  //bindEventUpdate()
  bindEventSubmit()
}




var main = function() {
  init()
  addInput()
  //loadTodos()
  //addCss()
  bindEvents()
}

main()
