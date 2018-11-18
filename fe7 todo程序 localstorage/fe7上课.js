
// 2016/12/06
//
// 此为第 7 课的上课内容 2
//
// 这部分的主要内容有
//
// 通过一个 Todo 应用, 学习下面这个概念
// 1, 什么是事件委托
// 2, 为什么需要事件委托
// 3, 如何实现事件委托
//
// 时间操作
// content editable (标签的可编辑属性)
// localStorage (本地存储) 和 JSON 数据格式
//
//
// 应该都能看懂, 不懂的稍微做个笔记, 等上课讲解


// 自己定义一个 log 函数
var log = function() {
    console.log.apply(console, arguments)
}

// 用自己实现的 e 替代 document.querySelector
// 因为这个东西太长了
var e = function(selector) {
    return document.querySelector(selector)
}

// 给 add button 绑定添加 todo 事件
var addButton = e('#id-button-add')
addButton.addEventListener('click', function(){
    // 获得 input.value
    var todoInput = e('#id-input-todo')
    var todo = todoInput.value
    // 添加到 container 中
    var todoContainer = e('#id-div-container')
    var t = templateTodo(todo)
    // 这个方法用来添加元素
    // 第一个参数 'beforeend' 意思是放在最后
    todoContainer.insertAdjacentHTML('beforeend', t);
})

var templateTodo = function(todo) {
    var t = `
        <div class='todo-cell'>
            <button class='todo-done'>完成</button>
            <button class='todo-delete'>删除</button>
            <span contenteditable='true'>${todo}</span>
        </div>
    `
    return t
}

// 事件委托相关概念
// ===
//
// 问题在于, todo 都是运行的时候才添加的元素
// 对于这样的元素, 我们没办法实现绑定事件
// 我们可以把 click 事件绑定在事先存在的父元素上
// 然后在运行的时候检查被点击的对象(通过 event.target 属性)
// 是否是我们需要的对象, 这个概念就是事件委托

var todoContainer = e('#id-div-container')

// 通过 event.target 的 class 来检查点击的是什么
todoContainer.addEventListener('click', function(event){
    log('container click', event, event.target)
    var target = event.target
    if(target.classList.contains('todo-done')) {
        log('done')
        // 给 todo div 开关一个状态 class
        var todoDiv = target.parentElement
        toggleClass(todoDiv, 'done')
    } else if (target.classList.contains('todo-delete')) {
        log('delete')
        var todoDiv = target.parentElement
        todoDiv.remove()
    }
})

// 这个函数用来开关一个元素的某个 class
var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}


// localStorage 是浏览器自带的功能
// localStorage 可以用来存储字符串数据, 在浏览器关闭后依然存在
// 但是不同页面拥有各自独立的 localStorage
// 存储方法如下
localStorage.name = 'gua'
// 关闭浏览器, 再次打开, 仍然能获取到这个值
// log('关闭浏览器后', localStorage.name)
//
// 利用 localStorage 就可以存储 todo
// 但是 todo 存在 array 中
// 而 localStorage 只能存储 string 数据
// 所以没办法直接存储
//
// 可行的办法如下
// 存储的时候把 array 转换为字符串
// 读取的时候把字符串转成 array
// 这个过程通常被称之为 序列化 和 反序列化
//
// 在 js 中, 序列化使用 JSON 数据格式
// 全称 JavaScript Object Notation (js对象标记)
// 这个格式已经是现在用于互联网数据交换的事实标准格式了

var s = JSON.stringify([1, 2, 3, 4])
log('序列化后的字符串', typeof s, s)
var a = JSON.parse(s)
log('反序列化后的数组', typeof a, a)

// 使用 JSON 序列化后, 就可以把 todo 存入浏览器的 localStorage 了


// 时间标准库
// 常用用法如下
// var d = new Date()
// d.getFullYear()
// 年份, 2016
// d.getMonth()
// 月份, 0-11
// d.getDate()
// 日期, 1-31
// d.getHours()
// 小时, 0-23
// d.getMinutes()
// 分钟, 0-59
// d.getSeconds()
// 秒数, 0-59
// d.getMilliseconds()
// 毫秒, 0-999
// d.getDay()
// 星期几, 0-6
