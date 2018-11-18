
/* 1, 点击add 按钮,在页面中添加todo,并且往todolist 里面添加todo
      然后把页面里的内容和状态写入localStorage 中，
   2, 添加todo之后，点击todo里面完成按钮添加或者删除done class，
      如果点的是delete 就删除父级todo-cell-div,并且要在todolist 中更新
   3, 删除todolist对应的 中的内容,利用coverTodoList 函数
      取巧，先清空todoList,再从localStorage中读取的内容
      更取巧的方式，直接让页面刷新.利用show——todoList 函数，在页面中构建todoList
   4， 点击完成和删除按钮时要把内容和状态写入localStorage，writeTodos()
   5， 点击显示 add todo  和显示todolist页面 完成相应转换，添加删除各自hide属性

  */

















// 1， 获得input.value,添加todo 的内容和 done class的状态,此时只add ,没有点完成，所以doneStatus 为false
// 向页面中添加TODOlist内容，并且往todolist 里面添加todo
var addButton = w('#id-button-add')

bindEvent(addButton, 'click', function() {
  var todoInput = w('#id-input-todo')
  var todoValue = todoInput.value

  insertodos(todoValue, false)
  insertodoList(todoValue)

  writeTodos() // 写入本地存储

})

//2,添加todo之后，点击todo里面完成按钮添加或者删除done class，点击删除按钮 删除父级div

// 问题在于, todo 都是运行的时候才添加的元素,对于这样的元素, 我们没办法实现绑定事件
// 我们可以把 click 事件绑定在事先存在的父元素上
// 然后在运行的时候检查被点击的对象(通过 event.target 属性),是否是我们需要的对象,
// 这个概念就是事件委托,把 点击按钮委托给 div id-div-container，因为这个元素一直存在，
//这样就不用给每个按钮绑定事件
var todoContainer = w('#id-div-container')

bindEvent(todoContainer, 'click', function(event) {
  //log('container click', event, event.target)
  // target 用来标记谁点的，如果点的是完成就增加或删除done class
  var target = event.target

  if(target.classList.contains('todo-done')) {
    log('点了完成按钮')
    var todoDiv = target.parentElement
    toggleClass(todoDiv, 'done')

    // 改变todo 完成状态时保存，写入到localStorage
    writeTodos()

    //如果点的是delete 就删除父级todo-cell-div,并且要在todolist 中更新，删除todo
  } else if (target.classList.contains('todo-delete')) {
    log('delete')
    var todoDiv = target.parentElement
    todoDiv.remove()
    writeTodos()

    // 删除todolist对应的 中的内容,利用coverTodoList 函数取巧，先清空todoList,
    //再从localStorage中读取的内容,更取巧的方式，直接让页面刷新
    coverTodoList()
    //location.reload()
  }
})

//  读取localSorage 内容,
readTodos()
show_todoList()

// 现在给页面增加功能，在点击添加和删除时，把数据存入localStorage
// 并且还要读取localStorage 中的todo，添加到页面中
// 定义writeTodos函数，在add 和delete 时把页面上所有的todo写入localStorage
// 在点击完成时把done 这个class也存入localStorage
// 在之前的writetodos中不仅要保存文本还要保存done 这个class
// 读取localStorage存入的信息并添加到页面中
// todos 是一个包含输入文本的数组



// 3, show_add todo按钮绑定事件, 删除自己的hide class, 给todoList div 增加hide 属性
var show_addTodo = w('.show-addTodo')
bindEvent(show_addTodo,'click', function(event) {
  var todoContainer = w('#id-div-container')
  deleteClass(todoContainer, 'hide')
  var todoList = w('#id-div-todoList')
  addClass(todoList, 'hide')

})


// 4, 给show_todo list按钮绑定事件，让todo-container 隐藏，并显示todo list
var show_todoList = w('.show-todoList')
bindEvent(show_todoList, 'click', function(event) {
  var todoContainer = w('#id-div-container')
  log('debug1', todoContainer)
  addClass(todoContainer,'hide')
  var todoList = w('#id-div-todoList')
  deleteClass(todoList, 'hide')

})
//











// 时间
var now = function() {
  var d = new Date()
  var year = d.getFullYear()
  var month = d.getMonth() + 1
  var date = d.getDate()
  var hour = d.getHours()
  var minute = d.getMinutes()
  var second = d.getSeconds()
  t = `${year}-${month}-${date} ${hour}:${minute}:${second}`
  return t
}
now()
