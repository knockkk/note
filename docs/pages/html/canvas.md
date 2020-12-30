# Canvas基础使用

## 1. 使用canvas元素

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

`<canvas>` 可以通过属性`width`和`height`来设置宽高。`<img>`，`vedio`标签等都有`alt`属性，以便在浏览器不支持的时候使用替换内容，在`<canvas>`中，我们只需要**将替换内容写在`<canvas>`元素内**即可。如：

```html
<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt=""/>
</canvas>
```



## 2. 获取上下文

如以上示例所见，`<canvas>`元素只是创造了一个固定大小的画布，其中并没有内容。为了绘制内容，我们需要使用脚本获取到canvas的渲染上下文，然后在它的上面绘制。

```js
const canvas = document.getElementById('tutorial');
const ctx = canvas.getContext('2d');
```

为了检查浏览器的支持性，更好的做法是：

```js
const canvas = document.getElementById('tutorial');

if (canvas.getContext){
  const ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}
```



## 3. 渲染简单图形

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkl0t9qsqcj30ci0cc0t5.jpg" alt="截屏2020-11-11 上午10.24.12" style="zoom:50%;" />

Canvas通过(x,y)坐标去定位元素在画布上的位置，所以我们需要熟悉以上图片中的定位规则：以左上角为原点，横轴为X轴，纵轴为Y轴。

Canvas只支持两种形式的图形绘制：矩形和路径。

### 绘制矩形

**绘制矩形**有三种方法：

1. `fillRect(x, y, width, height)` 绘制一个填充的矩形；
2. `strokeRect(x, y, width, height)` 绘制一个矩形的边框；
3. `clearRect(x, y, width, height)` 清除指定矩形区域。



### **绘制路径**

常用的路径有：**直线**，**圆**，**贝塞尔曲线**，以及**矩形路径**。下面有一些简单示例：

- 绘制一个三角形

```js
function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath(); //新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。与之相反，closePath()使图形绘制命令又重新指向到上下文中。
    ctx.moveTo(75, 50); //指定起始位置
    ctx.lineTo(100, 75); //绘制直线
    ctx.lineTo(100, 25); //绘制直线
    ctx.fill(); //闭合路径并填充
  }
}
```

- 绘制圆

```js
ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise); 
// x,y 坐标
// radius 半径
// startAngle,endAngle 开始和结束角度
// anticlockwise 顺时针或逆时针
```

### Path2D对象

> 为了简化代码和提高性能，某些较新版本的浏览器中可以使用[`Path2D`](https://developer.mozilla.org/zh-CN/docs/Web/API/Path2D)对象。



## 4. 添加颜色和样式

### **颜色**3

```js
ctx.fillStyle = "orange";
ctx.strokeStyle = "red";
```

### **透明度**

```js
// 设置透明度值
ctx.globalAlpha = 0.2;

// 指定透明颜色，用于描边和填充样式
ctx.strokeStyle = "rgba(255,0,0,0.5)";
ctx.fillStyle = "rgba(255,0,0,0.5)";
```

### 线条样式

```js
ctx.lineWidth = 1; //设置线条宽度

const lineCap = ['butt','round','square'];
ctx.lineCap = lineCap[i]; //设置线段端点样式

const lineJoin = ['round', 'bevel', 'miter'];
ctx.lineJoin = lineJoin[i]; //设置两线段连接处样式

//绘制虚线
ctx.setLineDash([4, 2]); //指定线段和间隙的长度
ctx.lineDashOffset = 0;  //设置起始偏移量
```

### **渐变**

```js
//线性渐变 createLinearGradient(x1,y1,x2,y2) 起点 (x1,y1) 与终点 (x2,y2)
const lineargradient = ctx.createLinearGradient(0,0,150,150); 
lineargradient.addColorStop(0,'white'); //设置颜色及它的相对位置
lineargradient.addColorStop(1,'black');
ctx.fillStyle = lineargradient;

//径向渐变 createRadialGradient(x1,y1,r1,x2,y2,r2) 
const radgrad = ctx.createRadialGradient(45,45,10,52,50,30);
radgrad.addColorStop(0, '#A7D30C');
radgrad.addColorStop(0.9, '#019F62');
radgrad.addColorStop(1, 'rgba(1,159,98,0)');
ctx.fillStyle = radgrad;
ctx.fillRect(0,0,150,150);
```

### **图案样式**

`createPattern(image, type)` ，type 为 `repeat`，`repeat-x`，`repeat-y` 和 `no-repeat` 之一。

```js
function draw() {
  const ctx = document.getElementById('canvas').getContext('2d');
  
  // 创建新 image 对象，用作图案
  const img = new Image();
  img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
  img.onload = function() {
    // 创建图案
    const ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 150, 150);
  }
}
```

### **阴影**

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.shadowOffsetX = 2; //阴影在 X 和 Y 轴的延伸距离
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2; //阴影的模糊程度 
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)"; //阴影颜色
 
  ctx.font = "20px Times New Roman";
  ctx.fillStyle = "Black";
  ctx.fillText("Sample String", 5, 30);
}
```

### 填充规则

> `nonzero`或`evenodd`。该填充规则根据某处在路径的外面或者里面来决定该处是否被填充，这对于自己与自己路径相交或者路径被嵌套的时候是有用的。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d'); 
  ctx.beginPath(); 
  ctx.arc(50, 50, 30, 0, Math.PI*2, true);
  ctx.arc(50, 50, 15, 0, Math.PI*2, true);
  ctx.fill("evenodd");
}
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkm5djnyf6j305q058wej.jpg" alt="截屏2020-11-12 上午9.47.38" style="zoom:50%;" />

## 5. 绘制文本

`fillText` 和`strokeText`。

文本样式属性有：`font`, `textAlign`, `textBaseline`, `direction`。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = "48px serif";
  ctx.fillText("Hello world", 10, 50);
  //ctx.strokeText("Hello world", 10, 50);
}
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gksd9gxk8vj30sm07cdgb.jpg" alt="截屏2020-11-17 下午6.53.53" style="zoom:50%;" />

## 6. 使用图像

## 7. [基本动画](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations)



## 参考

1. [canvas教程 MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)

