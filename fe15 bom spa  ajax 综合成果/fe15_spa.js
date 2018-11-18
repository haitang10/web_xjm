/*
把 todo 存在localStorage 里面
{
  'id': 1,
  'task': '吃瓜'，
  'done': true;
}

1 创建todo
2 显示某个todo
3 修改todo
4 显示所有todo
*/

/* 创建 todo
  1 写出界面
  2 给 add 绑定事件
  3 获取 input 值
  4 创建一个 todo task = input 输入值
  5 保存 todo
  */

  // 1,点击add 按钮 添加todo,并且往todolist 里面添加todo

  var addButton = w('#id-button-add')
  log('发热的氛围')
  bindEvent(addButton, 'click', function() {
    // 获得input.value
    var todoInput = w('#id-input-todo')
    var todoValue = todoInput.value
    //添加todo 的内容和 done class的状态,此时只add ,没有点完成，所以doneStatus 为false
    insertodos(todoValue, false)
    writeTodos()
    insertodoList(todoValue)
  })

  //2,添加todo之后，点击todo里面点击完成添加或者删除done class，点击删除按钮 删除父级div

  // 问题在于, todo 都是运行的时候才添加的元素,对于这样的元素, 我们没办法实现绑定事件
  // 我们可以把 click 事件绑定在事先存在的父元素上
  // 然后在运行的时候检查被点击的对象(通过 event.target 属性),是否是我们需要的对象,
  // 这个概念就是事件委托,把 点击按钮委托给 div id-div-container，因为这个元素一直存在，
  //这样就不用给每个按钮绑定事件
  var todoContainer = w('#id-div-container')

  bindEvent(todoContainer, 'click', function(event) {
    //log('container click', event, event.target)
    // target 用来标记谁点的
    var target = event.target
    // 如果点的是完成就增加或删除done class
    if(target.classList.contains('todo-done')) {
      log('done')
      var todoDiv = target.parentElement
      toggleClass(todoDiv, 'done')
      // 改变todo 完成状态时保存，写入到localStorage
      writeTodos()

      //如果点的是delete 就删除父级todo-cell-div
    } else if (target.classList.contains('todo-delete')) {
      log('delete')
      var todoDiv = target.parentElement
      todoDiv.remove()
      writeTodos()
    }
  })


  // 现在给页面增加功能，在点击添加和删除时，把数据存入localStorage
  // 并且还要读取localStorage 中的todo，添加到页面中
  // 定义writeTodos函数，在add 和delete 时把页面上所有的todo写入localStorage
  // 在点击完成时把done 这个class也存入localStorage
  // 在之前的writetodos中不仅要保存文本还要保存done 这个class
  // writeTodos 和readTodos 两个函数在 taofun.js 里面
  // 读取localStorage存入的信息并添加到页面中
  // todos 是一个包含输入文本的数组

  readTodos()

  // 3, 给显示add todo按钮绑定事件, 删除自己的hide class, 给todoList div 增加hide 属性
  var show_addTodo = w('.show-addTodo')
  bindEvent(show_addTodo,'click', function(event) {
    var todoContainer = w('#id-div-container')
    deleteClass(todoContainer, 'hide')
    var todoList = w('#id-div-todoList')
    addClass(todoList, 'hide')
  })


  // 4, 给显示todo list按钮绑定事件，让todo-container 隐藏，并显示todo list
  var show_todoList = w('.show-todoList')
  bindEvent(show_todoList, 'click', function(event) {
    var todoContainer = w('#id-div-container')
    log('debug1', todoContainer)
    addClass(todoContainer,'hide')
    // 显示todoList 并且给div 加一个show class

    var todoList = w('#id-div-todoList')
    deleteClass(todoList, 'hide')
    if(todoList.classList.contains('show')) {

    } else {
      addClass(todoList,'show')
      showTodos()
    }

  })












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
