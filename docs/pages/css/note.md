# CSS基础

## 选择器优先级

1. 内联样式（如`<h1 style="color:red">Hello~</h1>`）
2. id选择器 （如`#example`）
3. 类选择器 （如`.example`）
4. 类型选择器 （如`div`）
5. `* ` 通配符选择器

::: warning  important

当在一个样式声明中使用一个 `!important` 规则时，此声明将覆盖任何其他声明。

:::

## 水平垂直居中布局

### Flex

```css
.outer {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### absolute + transform

```css
.outer {
    position: relative
}

.inner {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

## 三角形

### 方案一

```css
.container::after {
    content: '';
    position: absolute;
    border: 10px solid transparent;
    border-bottom-color: pink; /* border-top-color */
}
```

### 方案二

```css
.container{
  width: 0;
  height: 0;
  border-width: 30px;
  border-style: solid;
  border-color: #000000 transparent transparent transparent;
 }
```



## 移动端适配

### rem

```css
/*示例*/
.title {
  font-size: 2rem;
  font-weight: 500;
  color: black;
}
p {
  font-size: 1.2rem;
  color: gray;
}
```

 左iphone6/7/8，右ipad

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gj3uppva6gj30l811gmy9.jpg" alt="截屏2020-09-26 上午10.38.14" style="zoom:40%;" /><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gj3uq66y7qj30lm0sot9m.jpg" alt="截屏2020-09-26 上午10.38.38" style="zoom:50%;" />

参考：[简单粗暴的移动端适配方案 - REM](https://imweb.io/topic/5a523cc0a192c3b460fce3a5)

::: tip 拓展

也可以使用 `vw`等响应式单位

:::

### 媒体查询

```css
@media (max-width: 600px) {
  .container {
    width: 95%;
  }
}
@media (min-width: 600px) {
  .container {
    width: 80%;
  }
}
```



