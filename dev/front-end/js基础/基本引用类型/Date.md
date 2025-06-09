# Date

## 日期对象

在默认使用无参构造方法时，日期对象会返回当前系统时间时间,当然我们也可以指定的输入的日期

## 日期的标准化输出

```JS
//toDateString()，返回utc时间的日期
let now = new Date();
console.log(now.toDateString()); //Thu Dec 26 2024

//toTimeString(),返回utc具体时间信息
let now = new Date();
console.log(now.toTimeString()); //21:49:54 GMT+0800 (中国标准时间)

//toLocateDateString(),返回xxxx/xx/xx
let now = new Date();
console.log(now.toLocaleDateString()); //2024/12/26

//toLocateTimeString(),返回xx:xx:xx
let now = new Date();
console.log(now.toLocaleTimeString()); //21:50:50

//当然还有更加精细的操作,不多赘述
getDate(),getTime(),getMonth()...
```
