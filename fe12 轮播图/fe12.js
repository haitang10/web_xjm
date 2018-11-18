
// 当页面中有多个隐藏页面时，利用bindAll 函数给所有按钮绑定事件
// 1，点击按钮展开隐藏页面,通过toggle函数 开关class
var bindEventToggles = function() {
  let elements = wAll('.gua-menu-toggle')
  bindAll(elements, 'click', function(event){
    log('debug 2, click button')
    //页面中有多个gua-menu-content , 所以要通过event.targrt
    // 选择其兄弟节点，或者通过其父亲节点
    // 找到自己这个菜单的gua-menu-content 通过父节点
    // 利用toggleClass 函数开关 gua-hide 属性
    var p = event.target.parentElement
    var content = find(p,'.gua-menu-content')
    toggleClass(content,'gua-hide')
  })
}
bindEventToggles()

// 2，当鼠标移到图片上时，图片高亮,并且图片变大，通过给div 加一个gua-highlight
var bindEventItems = function() {
  var elements = wAll('.gua-item')
  bindAll(elements, 'mouseover', function(event){
    log('debug 3,mouseover 高亮')
    // 给gua-item 加一个属性gua-highlight
    var item = event.target.parentElement
    item.classList.add('gua-highlight')
  })

  bindAll(elements, 'mouseout', function(event){
    log('debug 4,mouseout  透明')
    var item = event.target.parentElement
    item.classList.remove('gua-highlight')
  })


}
bindEventItems()

//3,轮播图
/*
1, 写一个div,把图片放在里面
2，只显示一张图片,即当前活动的image 标签
点击下一张和上一张的时候切换图片显示,并且indicator 颜色随之改变
3,让两个按钮垂直居中
*/
var bindEventSlide = function() {
  // 下一张图片
  var element = w('.gua-slide-button-next')
  bindEvent(element, 'click', function(event){
    log('debug 4, 轮播图下一张')
    // -获取图片总数和当前图片下标
    // 计算出下一张图片的id
    // 还要改变父元素div中 data-active 的值
    var slide = event.target.parentElement
    var imgs = slide.dataset.imgs
    var active = slide.dataset.active

    // active 是string 用 paarseInt 转换,求出下一张图片的id 取余数
    var id = (parseInt(active) + 1) % parseInt(imgs)
    var next_img_id = `#id-gua-image-${id}` // '#id-gua-image-' + String(id)
    var active_img_id = `#id-gua-image-${active}`
    log('debug 5 当前图片id 和下一张图片id' , active_img_id, next_img_id)

    // 删除当前图片的gua-slide-active 属性，
    //并且给下一张图片加上active class
    // 重构代码，最好在事件发生之地附近搜索元素，不要全局搜索，
    var activeImg = find(slide, '.gua-slide-active')
    activeImg.classList.remove('gua-slide-active')
    var nextImg = find(slide, next_img_id)
    nextImg.classList.add('gua-slide-active')
    // removeClassAll('gua-slide-active')
    // addClassAll(next_img_id, 'gua-slide-active')


    // 还要改变父元素div中 data-active 的值
    slide.dataset.active = id

    // 同时还要改变indicator 颜色,
    removeClassAll('gua-indicator-white')
    var indicator_id = '#id-gua-indicator-' + String(id)
    addClassAll(indicator_id,'gua-indicator-white')
  })


  // 上一张图片
  var selector2 = w('.gua-slide-button-pre')
  bindEvent(selector2, 'click', function(event){
    log('debug 6, 轮播图上一张')

    // -获取图片总数和当前图片下标
    // 计算出下一张图片的id
    // 还要改变父元素div中 data-active 的值
    var slide = event.target.parentElement
    var imgs = slide.dataset.imgs
    var active = slide.dataset.active

    // active 和 imgs是string 用 paarseInt 转换,求出上一张图片的id 取余数
    if (parseInt(active) == 0) {
      var id = parseInt(imgs) - 1
    } else {
      var id = (parseInt(active) - 1) % parseInt(imgs)
    }

    var next_img_id = `#id-gua-image-${id}` // '#id-gua-image-' + String(id)
    var active_img_id = `#id-gua-image-${active}`
    log('debug 7 当前图片id 和下一张图片id' , active_img_id, next_img_id)

    // 删除当前图片的gua-slide-active 属性，
    //并且给下一张图片加上active class

    removeClassAll('gua-slide-active')
    addClassAll(next_img_id, 'gua-slide-active')
    // 还要改变父元素div中 data-active 的值
    slide.dataset.active = id
    // 同时还要改变并且indicator 颜色
    removeClassAll('gua-indicator-white')
    var indicator_id = '#id-gua-indicator-' + String(id)
    addClassAll(indicator_id,'gua-indicator-white')
  })
}
bindEventSlide()

// 4, 在图片下方加上indicators 并且点击indicator 切换图片,
// 5, 当鼠标移到indicator上的时候图片随之切换,此功能和鼠标点击一样
// 6, 由此想到构建函 数 bindEventIndicator
//    1，先给所有indicator 加上事件，给indicator加上id 和img 保持一致，
//    2, 点击时获取indicator id
//    3, 清除其他img 的gua-slide-active属性，并且清除其他indicator 的gua-white
//    4, 给其加上gua-white，给相同 id 的img 加上gua-slide-active属性

var bindEventIndicator = function(method) {
  var elements = wAll('.gua-slide-indicators-button')
  bindAll(elements, method, function(event){
    log('debug 8, indicators')

    //清除其他img 的gua-slide-active属性，并且清除其他indicator 的gua-white
    // removeClassAll 可以清除页面中所有指定class的元素，在taofun.js
    removeClassAll('gua-slide-active')
    removeClassAll('gua-indicator-white')

    //找到对应的img的id, 加上gua-slide-active属性,
    var click_id = event.target.id
    log('debug 9 active_id', click_id, typeof(click_id))
    var number = click_id.slice(-1)

    var img_id = '#id-gua-image-' + number
    log('debug 10 img_id', img_id)
    addClassAll(img_id, 'gua-slide-active')

    //还要改变img 父元素div中data-active 的值
    var slide = w('.gua-slide')
    slide.dataset.active = number

    // 给indicator其加上gua-white,
    event.target.classList.add('gua-indicator-white')

  })
}
bindEventIndicator('click')
bindEventIndicator('mouseover')
