# L4layout

[toc]

## flex layout

关于这种布局我们需要知道，这是用来替代float布局的，使用这种布局方式，可以快速实现一维的弹性布局。

### 简介

可以通过很简单的几行命令来实现对页面布局的快速实现和调整。例如：

- 垂直居中：`display: flex; align-items: center;`

- 使两个盒子平分水平空间：`flex: 1; flex: 1;`。而float还需要调整宽高

![L4layout-2025-01-05-16-01-16](https://cdn.jsdelivr.net/gh/AikiLee/imgur@main/L4layout-2025-01-05-16-01-16.png)

- 常用属性：

    1. 对于container

        ```css
        .container {
            /*相当于margin充当间距 */
            gap：10px;
            /* 启用弹性布局，对所有子元素生效*/
            display: flex; 
            /* 调整弹性布局沿着主轴的对齐方式，分别对应顶端对齐，底端， */
            justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
            /* 针对items在cross axis进行操作，拉伸，item顶格，底格，居中等*/
            align-items:  stretch | flex-start | flex-end | 
            center;
            /*定义谁是主轴 */
            flex-direction: 
            /* 多行时进行处理和justify-content效果一样 */
            align-content: 
        }
        ```

    2. 针对items  

    ```CSS
    /* default :
     align-grow: 允许元素增长填充空白，默认为0不允许
     flex-shrink : 允许元素收缩，默认为1允许
     flex-basis 定义元素宽度
     ==
     flex: 0 1 auto;
      */
    /* 单独重写items属性*/
    align-self: auto | stretch | flex-start | flex
    end | center | baseline;
    order: 控制顺序-1为第一，1
    为最后
    ```

- 相较于float的好处

    1. 更容易实现居中，自动对齐和分配空间

    2. 更容易实现响应式布局

    3. 清除浮动问题，防止父元素的坍缩

## grid layout

这是一种二维布局结构，可以理解为二维的flex布局，我们可以在页面设置中总体使用grid而在具体的调整中使用flex

### 基本介绍

![L4layout-2025-01-05-16-18-06](https://cdn.jsdelivr.net/gh/AikiLee/imgur@main/L4layout-2025-01-05-16-18-06.png)

- 具体介绍：

    1. 针对container
    实现基本的布局，对齐方式，行列合并，row/column gap

        ```CSS
        /*指定行列数。通常采用grid-template-rows = 250px 1fr 1fr; 这种形式来设置，表示三列，第一列固定 */
        grid-template-rows: <track size>*
        grid-template-columns: <track size>*

        gap: <row gap> <column gap>
        /* 水平和垂直地调整整行整列的对齐方式*/
        justify-items: stretch | start | center | end
        align-items: stretch | start | center | end

        /* 调整item内部的对齐方式*/
        justify-content: start | start | center | end | ...
        align-content: start | start | center | end | ...
        ```

    2. 针对item
    一般可以调整行列的合并数还有单个item的对齐方式

    ```CSS
    /* 调整单个item的行列合并数，注1 / -1表示整行合并*/
    grid-column: <start line> / <end line> | span <number>
    grid-row: <start line> / <end line> | span <number>

    /*单独重写对齐方式 */
    justify-self: stretch | start | center | end
    align-self: stretch | start | center | end


    ```
