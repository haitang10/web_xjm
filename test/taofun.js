var log = function () {
  console.log.apply(console, arguments)
}

// 用w 代替  其中selector 是元素的id或标签名或class
var w = function(selector) {
  return document.querySelector(selector)
}

var appendHtml = function(element, html) {
  element.insertAdjacentHTML('beforeend', html)
}

var bindEvent = function(element, event, callback) {
  element.addEventListener(event, callback)
}

var toggleClass = function(element, className) {
  //检查元素是否有某个class,if exist delete
  if (element.classList.contains(className)) {
    element.classList.remove(className)
  } else {
    // if not exist then add
    element.classList.add(className)
  }
}
// 给所有按钮绑定事件
//先选择所有gua-menu-toggle
var bindAll = function(selecter, event, callback) {
  var elements = document.querySelectorAll(selecter)
  for (var i = 0; i < elements.length; i++) {
    var a = elements[i]
    a.addEventListener(event, callback)
  }
}

// find 函数可以查找element元素的子节点
var find = function(element, selecter) {
  return element.querySelector(selecter)
}
