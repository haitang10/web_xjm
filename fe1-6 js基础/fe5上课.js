var log = function() {
  console.log.apply(console, arguments)
}

log("代码开始")
// document.querySelector  选择元素 标签名 属性 ID
var body = document.querySelector('body')

var form = document.querySelector('.login-form')

var loginButton = document.querySelector('#id-button-login')

// var user = document.querySelector('#id-input-username')
// // getAttribute 得到的是默认值
// var userValue = user.getAttribute('value')
// log('dsfdsffds')
// log("user  Value",userValue)
//
// //添加元素
// var button = document.createElement('button')
// // 用.inner 设置属性
// button.innerHTML = "注册用户"
// form.appendChild(button)
//
// //删除元素
// var pws = document.querySelector("#id-input-password")
// //pws.remove()
// //form.removeChild(pws)
//
// //修改元素
// button.innerHTML = "大千世界"

var clicked = function() {
  log('你点到按钮了')
}
// 添加选项卡效果
// 添加事件 addEventListener 函数；两个参数 事件名字 和调用函数
loginButton.addEventListener('click', clicked)


// 给多个元素挂上同一个事件
// querySelectorAll 用来选择多个元素，返回列表
var buttons = document.querySelectorAll('.radio-button')

for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i]
  log(button)
  // 以函数作为参数传递，函数具体功能再定义，发生click时调用函数
  button.addEventListener('click', function(event) {
    // event.target 用来提取响应事件的函数
    var self = event.target
    log('谁点的', self)
    // 删除属性
    clearActive()
    // classList.add()增加 class
    self.classList.add('active')
  })
}

// 清除 active 属性
var clearActive = function() {
  var spans = document.querySelectorAll('.active')
  for (var i = 0; i < spans.length; i++) {

    span = spans[i]
    if (span != null) {
      // classList.remove() 用来删除属性
      span.classList.remove('active')
    }
  }



}



// 事件机制 用来处理相应
