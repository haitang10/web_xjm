
//获取登录页面，创建AJAX对象
var r = new XMLHttpRequest()
//设置请求方法和请求地址
r.open('GET', '/login', true)
//设置发送的数据格式
r.setRequestHeader('Content-Type', 'application/json')
// 注册相应函数
r.onreadystatechange = function() {
  if(r.readyState == 4) {
    console.log('state change', r, r.status, r.response)
    var response = JSON.parse(r.response)
    console.log('response', response)
  } else {
    console.log('change')
  }
}
// 发送请求
var account = {
  username: 'ha',
  password: '1234',
}
var data = JSON.stringify(account)
r.send(data)

// 封装成函数
var ajax = function(method, path, headers, data, responseCallback ) {
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
ajax('GET', '/v2/movie/subject/1764796', null, '', function(r) {
    console.log(r.status, JSON.parse(r.response))
})

GET /v2/movie/subject/1764796
