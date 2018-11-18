 var fac = function(n) {
   if(n==0) {
     return 1
   }
   else {
     return n * fac(n-1)
   }
 }
fac(50)

console.log("递归阶乘", fac(51))

 var sum = function(n) {
   var s = 0
   var i = 0
   for (i; i < n; i++ ) {
     s = s + i

   }
   return s
 }

 sum(567)

//   zuoye

var log = function() {
  console.log.apply(console, arguments)

}

var ensure = function(condition, message) {
  // condition 不成立输出message
   if(!condition) {
     log("测试失败啦！",message)

   }
}

var test_lowercase = function() {
  var s = "ABCDE"
  var value = "abcde"
  ensure(value == lowercase(s),"函数出错啦")

}
test_lowercase()




var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lower = 'abcdefghijklmnopqrstuvwxyz'
// 找到s 2 在s1 中的下标，s2 为一个字符
var find = function(s1,s2) {
  var index = -1
  for (var i = 0; i < s1.length; i++) {
    if(s1[i] == s2) {
      index = i
      break
    }
  }
  return index
}

// 返回字符串的小写形式  ，假设s 全是大写字符
var lowercase = function(s) {
  // 新建 result 存储字符串
  var result = ""

  for(var i = 0; i < s.length; i++) {
    // 得到 s 中所有字符在upper中的下标，再对应lower的下标
    var index = find(upper,s[i])
    result += lower[index]
  }
  return result
}
// 假设字符串大小写都有

// 返回字符串的小写形式  ，假设s 大小写都有字符
var lowercase1 = function(s) {
  var result = ""

  for(var i = 0; i < s.length; i++) {
    var index = find(upper,s[i])
    if(index > -1) {
      result += lower[index]
    }
    else {
      result += s[i]
    }
  }

  return result
}

// 返回字符串的小写形式  ，假设s 大小写都有字符
var lowercase1 = function(s) {
  var result = ""

  for(var i = 0; i < s.length; i++) {
    var index = find(upper,s[i])
    if(index > -1) {
      result += lower[index]
    }
    else {
      result += s[i]
    }
  }

  return result
}


// 字符串 加密成小写  原字符串大小写都有,还有空格
var shiftedChar = function(char,n) {
  // return char右移 n 位 的字符串

  var result = ""
  for(var i = 0; i < char.length; i++) {

    var index = find(lower, char[i])
    if(index > -1) {
      var newIndex = (index + n + 26) % 26
      result += lower[newIndex]
    }
    else {
      result += char[i]
    }
  }
  return result
}

// 解密凯撒密码

var decode = function() {

  var oldcode = 'VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX'
  var code = lowercase1(oldcode)
  console.log(code)

  for (var i = 1; i < 26; i++) {
    var availresult = shiftedChar(code, i)
    console.log(availresult)
  }
}

decode()
