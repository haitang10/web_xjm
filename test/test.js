var log = function () {
  console.log.apply(console, arguments)
}

// 用w 代替  其中selector 是元素的id或标签名或class
var w = function(selector) {
  return document.querySelector(selector)
}
// 往一个元素节点内添加元素
var appendHtml = function(element, html) {
  element.insertAdjacentHTML('beforeend', html)
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

// 1, 往页面中添加输入框和提交按钮
var init = function() {
  var t =
  `
  <input id='id-input-task'>
  <button id='id-button-add'>Add todo</button>
  `
  var todoContainer = w('#id-div-container')
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

init()
addInput()
