var log = function () {
  console.log.apply(console, arguments)
}

// 用w 代替  其中selector 是元素的id或标签名或class
var w = function(selector) {
  return document.querySelector(selector)
}

// wAll 函数返回一个元素集合
var wAll = function(selecter) {
  return document.querySelectorAll(selecter)
}

// 添加元素函数
var appendHtml = function(element, html) {
  element.insertAdjacentHTML('beforeend', html)
}

// 绑定事件函数
var bindEvent = function(element, event, callback) {
  element.addEventListener(event, callback)
}

// 给所有按钮绑定事件
var bindAll = function(elements, event, callback) {
  for (var i = 0; i < elements.length; i++) {
    var a = elements[i]
    a.addEventListener(event, callback)
  }
}
  //检查元素是否有某个class,if exist delete
var toggleClass = function(element, className) {

  if (element.classList.contains(className)) {
    element.classList.remove(className)
  } else {
    // if not exist then add
    element.classList.add(className)
  }
}

// find 函数可以查找element元素的子节点
var find = function(element, selector) {
  return element.querySelector(selector)
}

// removeClassAll 可以删除所有指定的class,接受class参数，不加.
// 要注意一点，querySelectorAll() 接受参数是.gua-slide-active
// 而element.classList.remove() 接受'gua-slide-active' 没有.
var removeClassAll = function(selector) {
  var new_selector = '.' +selector
  var elements = document.querySelectorAll(new_selector)
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    element.classList.remove(selector)
  }

}

// addClassAll 函数通过查找id，添加指定class,
//selector 为完整选择器，#gua-slide, new_class 为字符串
var addClassAll = function(selector, new_class) {
  log('addClassAll')
  var elements = document.querySelectorAll(selector)
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    element.classList.add(new_class)
  }
}
