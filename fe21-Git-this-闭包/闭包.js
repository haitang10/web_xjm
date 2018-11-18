// 6. 函数声明和表达式
//JavaScript 解释器中存在一种变量声明被提升的机制，
//也就是说函数声明会被提升到作用域的最前面，
//即使写代码的时候是写在最后面，也还是会被提升至最前面。
//而用函数表达式创建的函数是在运行时进行赋值，且要等到表达式赋值完成后才能调用


getName()//oaoafly 函数被提升 这里受函数声明的影响，虽然函数声明在最后可以被提升到最前面了
var getName = function() {
console.log('wscat')
}//函数表达式此时才开始覆盖函数声明的定义
getName()//wscat
function getName() {
console.log('oaoafly')
}
getName()//wscat 这里就执行了函数表达式的值

// 结果是 oaoafly   wscat  wscat
//7. 闭包






var a = [];
for (var i = 0; i < 10; i++) {
	console.log(i)
  a[i] = function () {
    console.log(i);
  };
}
a[5]()

var a = [];
for (let i = 0; i < 10; i++) {
	console.log(i)
  a[i] = function () {
    console.log(i);
  };
}
a[5]()












// 1.声明函数，直接调用，成功弹出
function f1(){
　　　　var n=999;
　　　　function f2(){
　　　　　　alert(n); // 999
　　　　}
			f2()
}
f1()   //
//2. 声明函数，用表达式的方式执行
　　function f1(){
　　　　var n=999;
　　　　function f2(){
　　　　　　alert(n); // 999
　　　　}
			f2()
}
var a = f1()  //成功弹出   a()  失败

// 3. 用表达式的方式定义函数， 然后调用
　　var a = function f1(){
　　　　var n=999;
　　　　function f2(){
　　　　　　alert(n); // 999
　　　　}
			f2()
}
a() // 成功
//4. 同三，成功
　　var a = function (){
　　　　var n=999;
　　　　function f2(){
　　　　　　alert(n); // 999
　　　　}
			f2()
}
a()
// 5. 函数内部有返回值，如果直接调用f1,结果是返回函数f2内容，f2并不会执行
　　function f1(){
　　　　var n=999;
　　　　function f2(){
　　　　　　alert(n);
　　　　}
　　　　return f2;
　　}
		f1() // 返回f2 内容，并不执行
　　var result=f1();
　　result()     // result 就是f2, 成功执行
