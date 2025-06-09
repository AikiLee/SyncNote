# Array

[toc]

## 数组的基本用法

主要包括：创建数组、检测数组、插入删除、遍历

### 创建数组

2种方式：

1. 使用new关键字

    ```js
    let colors = new Array();
    let colors = new Array(3); // 三个元素的数组
    let colors = new Array(1,2,3); // 直接指定了初始化的元素
    ```

2. 使用中括号

    ```JS
    let name =["a1","a2","a3"];
    ```

### 访问数组

一般都是通过数组下标访问：

```JS
//注意要注意范围不要超过length
let colors = ["red","blue","green"];
console.out(colors[1]); //red

//如果访问的越界，则返回undefined
console.out(colors[10]);
```

`array.length`并不是一个只读的变量，而是可以修改的

### 检测数组

`Array.isArray`是es5提供的检测方法，现如今基本上所有浏览器均支持

### 转换方法

所有的对象均支持的`toLocateString()`,`toString()`,`valueOf`,其中toString返回的是字符串，而valueOf返回的是本身数据类型

### 栈方法

即模拟栈的操作方式，LIFO，只在队尾进行操作。es提供了，`push()`,`pop()`两种方法:

1. push可以增加若干项

2. pop只弹出一项

### 队列方法

模拟队列的操作方式，FIFO。es提供`shift()`,`unshift()`
