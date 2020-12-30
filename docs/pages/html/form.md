# HTML表单基础

## 1. 简单示例

```html
<form action="/my-handling-form-page" method="post">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />
  </div>
  <div>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" name="user_email" />
  </div>
  <div class="button">
    <button type="submit">Send your message</button>
  </div>
</form>
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkqrfyn8k1j30e407qmxc.jpg" alt="截屏2020-11-16 上午9.33.24" style="zoom:50%;" />

上面是 一个简单的表单示例：

- `<label>`的 `for` 属性与`<input>`的`id`对应。**点击`<label>`，其对应的输入框就会获取焦点。**`<label>`的`for`属性即使不在`<form>`标签内部也可以生效。
- `<input>`的`type`属性指定输入框类型；`name` 属性为提交表单时输入框内容的`key`值。
- `<form>`的`action`和`method`分别指定提交表单的url和请求方法。



当点击提交按钮时，浏览器会对特定`type`的`<input>`输入框内容进行校验：

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkqrdnmc6rj30my084dgg.jpg" alt="截屏2020-11-16 上午9.31.12" style="zoom:50%;" />

若校验通过，则页面会**跳转到`<form>`的`action`属性中指定的 url**。`action`为`POST`，表单参数会放入请求体中，若`action`为`GET`，则参数会拼接到url中。



## 2. 使用JS提交表单数据

在单页面中我们并不希望表单提交时跳转页面，所以需要**禁用提交的默认行为**。我们的目的是：在点击提交按钮时，浏览器能帮助我们完成表单验证，但是不能跳转页面。

```html
<form id="form">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name"/>
  </div>
  <div>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail"/>
  </div>
  <div>
    <button type="submit">submit</button>
  </div>
</form>

<script>
  const form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); //阻止默认行为
    // 发送数据
  });
</script>
```

发送表单数据前，我们需要**对数据进行构造和编码**：

1. 普通表单数据 **application/x-www-form-urlencoded**

```js
let urlEncodedData = "";
const urlEncodedDataPairs = [];
//dataObject为原始数据（JS对象）
for (let name in dataObject) {
  urlEncodedDataPairs.push(
    encodeURIComponent(name) + "=" + encodeURIComponent(dataObject[name])
  );
}
urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");
```

2. 二进制表单数据 **multipart/form-data**

```js
const formData = new FormData();
formData.append("file", file);
```

手动构造 multipart/form-data 的数据比较麻烦，使用FormData对象可以很方便的实现。

3. JSON

如果客户端和服务端协商使用JSON格式的数据，则可以直接使用 JS对象 包装数据。

参考：[使用JS发送表单数据 MDN](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript)



## 3. 让表单更完整

####  `<fieldset>` 和 `<legend> `元素

> 一个表单小部件组。

```html
<form>
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small" />
      <label for="size_1">Small</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium" />
      <label for="size_2">Medium</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large" />
      <label for="size_3">Large</label>
    </p>
  </fieldset>
</form>
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkqtw9rvf5j30ro0aujru.jpg" alt="截屏2020-11-16 上午10.58.16" style="zoom:50%;" />

 `<fieldset>`元素是构建可访问表单的关键元素之一。当阅读上述表格时，屏幕阅读器将会读第一个小部件“Fruit juice size small”，“Fruit juice size medium”为第二个，“Fruit juice size large”为第三个。

####  `<label> `元素

前面已经提到过了， `<label>`元素的一个作用是使输入框获取焦点。另外，`<label>`元素也有利于构建可访问的表单。

```html
<label for="username">Name:</label>
<input type="text" name="username">
```

参考：[构造HTML表单](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)



## 4. 其他表单部件

### 单行文本框

```html
<input type="text" id="comment" name="comment" value="I'm a text field">

<input type="email" id="email" name="email" multiple>

<input type="password" id="pwd" name="pwd">

<input type="search" id="search" name="search">

<input type="tel" id="tel" name="tel">

<input type="url" id="url" name="url">
```

### 多行文本框

```html
<textarea cols="30" rows="10"></textarea>
```

### 下拉内容

示例一：

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option>Cherry</option>
  <option>Lemon</option>
</select>

<-->多选</-->
<select multiple id="multi" name="multi">
  <option>Banana</option>
  <option>Cherry</option>
  <option>Lemon</option>
</select>
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkqudco9ocj305g022wee.jpg" alt="截屏2020-11-16 上午11.14.41" style="zoom:50%;" /><img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkqudzjy96j306404sq3v.jpg" alt="截屏2020-11-16 上午11.15.20" style="zoom:50%;" />

示例二：

```html
<select id="groups" name="groups">
  <optgroup label="fruits">
    <option>Banana</option>
    <option selected>Cherry</option>
    <option>Lemon</option>
  </optgroup>
  <optgroup label="vegetables">
    <option>Carrot</option>
    <option>Eggplant</option>
    <option>Potato</option>
  </optgroup>
</select>
```

  <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkqugf9bpmj307w09omzv.jpg" alt="截屏2020-11-16 上午11.17.39" style="zoom:50%;" />

### 自动补全输入框

```html
<label for="myFruit">What's your favorite fruit?</label>
<input type="text" name="myFruit" id="myFruit" list="mySuggestion">
<datalist id="mySuggestion">
  <option>Apple</option>
  <option>Banana</option>
  <option>Blackberry</option>
  <option>Blueberry</option>
  <option>Lemon</option>
  <option>Lychee</option>
  <option>Peach</option>
  <option>Pear</option>
</datalist>
```

 <img src="/Users/bytedance/Library/Application Support/typora-user-images/截屏2020-11-16 上午11.20.20.png" alt="截屏2020-11-16 上午11.20.20" style="zoom:40%;" />

### 复选框

```html
<input type="checkbox" checked id="carrots" name="carrots" value="carrots">
```

### 单选框

```html
<input type="radio" checked id="soup" name="meal">
```

```html
<fieldset>
  <legend>What is your favorite meal?</legend>
  <ul>
    <li>
      <label for="soup">Soup</label>
      <input type="radio" checked id="soup" name="meal" value="soup">
    </li>
    <li>
      <label for="curry">Curry</label>
      <input type="radio" id="curry" name="meal" value="curry">
    </li>
    <li>
      <label for="pizza">Pizza</label>
      <input type="radio" id="pizza" name="meal" value="pizza">
    </li>
  </ul>
</fieldset>
```

如果`name`属性相同，则被认为是一组。

### 按钮

三种类型:

- **submit** 提交表单数据到服务器。
- **reset** 将所有表单小部件重新设置为它们的默认值。
- **Anonymous** 没有特殊效果。

```html
<button type="reset">
    This a <br><strong>reset button</strong>
</button>

<input type="reset" value="This is a reset button">
```

> 从技术上讲，使用`<button>`元素或`<input>`元素定义的按钮几乎没有区别。唯一值得注意的区别是按钮本身的标签。在`<input>`元素中，标签只能是字符数据，而在`<button>`元素中，标签可以是HTML，因此可以相应地进行样式化。

### 数字

```html
<input type="number" name="age" id="age" min="1" max="10" step="2">
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkquxd5mx8j303m02uwec.jpg" alt="截屏2020-11-16 上午11.33.53" style="zoom:50%;" />

### 滑块

```html
<input type="range" name="beans" id="beans" min="0" max="500" step="10">
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkquxpbl34j307y01mglh.jpg" alt="截屏2020-11-16 上午11.34.17" style="zoom:50%;" />

### 日期时间选择器

**（1）本地时间**

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkqv1m1xinj30ls0hcabl.jpg" alt="截屏2020-11-16 上午11.38.00" style="zoom:50%;" />

**（2）月**

```html
<input type="month" name="month" id="month">
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkqv3f0winj30dw0cm3zl.jpg" alt="截屏2020-11-16 上午11.39.45" style="zoom:50%;" />

**（3）时间**

```html
<input type="time" name="time" id="time">
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkqv7whpsbj309y0g0my2.jpg" alt="截屏2020-11-16 上午11.44.01" style="zoom:50%;" />

（4）星期

```html
<input type="week" name="week" id="week">
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkqv8dthzuj30fk0hywgf.jpg" alt="截屏2020-11-16 上午11.44.28" style="zoom:50%;" />

（5）日期

```html
<label for="myDate">When are you available this summer?</label>
<input type="date" name="myDate" min="2013-06-01" max="2013-08-31" id="myDate">
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkqv8rnpkaj30cq0hugn4.jpg" alt="截屏2020-11-16 上午11.44.51" style="zoom:50%;" />

现在的浏览器支持度还是可以的：

![截屏2020-11-16 上午11.42.25](https://tva1.sinaimg.cn/large/0081Kckwly1gkqv65tq85j321o0r2ajj.jpg)

### 文件选择器

```html
<input type="file" name="file" id="file" accept="image/*" multiple>
```

### 隐藏内容

> 有时候，由于为了方便技术原因，**有些数据是用表单发送的，但不显示给用户**。

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410">
```

### 进度条

```html
<progress max="100" value="75">75/100</progress>
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkqvezkdmpj309m01y3yd.jpg" alt="截屏2020-11-16 上午11.50.52" style="zoom:50%;" />

### 仪表

```html
<meter min="0" max="100" low="33" high="66" optimum="75" value="25"></meter>
<meter min="0" max="100" low="33" high="66" optimum="75" value="50"></meter>
<meter min="0" max="100" low="33" high="66" optimum="75" value="75"></meter>
<meter min="0" max="100" low="33" high="66" optimum="75" value="100"></meter>
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkqvll4zd1j30l4028q2u.jpg" alt="截屏2020-11-16 上午11.57.14" style="zoom:50%;" />



## 5. 表单数据校验

表单的一些内置属性可以提供校验功能，如邮箱地址，数字，是否必须等；当校验不通过时，如果用户尝试提交表单，**浏览器会展示出错误消息，并停止表单提交。** 元素校验未通过时，可以通过 CSS 伪类 [`:invalid`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:invalid) 进行特殊的样式化。

### required 属性

```html
<form>
  <label for="choose">Would you prefer a banana or cherry?</label>
  <input id="choose" name="i_like" required>
  <button>Submit</button>
</form>
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkr30554sgj309k058jrg.jpg" alt="截屏2020-11-16 下午4.13.21" style="zoom:67%;" />

可以对未通过校验的元素进行样式化：

```css
input:invalid {
  border: 2px dashed red;
}
```

### 正则表达式校验

```html
<form>
  <label for="choose">Would you prefer a banana or a cherry?</label>
  <input id="choose" name="i_like" required pattern="banana|cherry">
  <button>Submit</button>
</form>
```

### 限制输入长度

```html
<p>
    <label for="t3">Leave a short message</label>
    <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
</p>
```

### 自定义错误信息

在JavaScript 中调用 [`setCustomValidity()`](https://developer.mozilla.org/en-US/docs/HTML/HTML5/Constraint_validation#Constraint_API's_element.setCustomValidity()) 方法：

```html
 		<form>
      <label for="mail">I would like you to provide me an e-mail</label>
      <input type="email" id="mail" name="mail" />
      <button>Submit</button>
    </form>

    <script>
      var email = document.getElementById("mail");

      email.addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
          email.setCustomValidity("I expect an e-mail, darling!");
        } else {
          email.setCustomValidity("");
        }
      });
    </script>
```

 <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkr7hpf339j30sq05c0t6.jpg" alt="截屏2020-11-16 下午6.48.41" style="zoom:50%;" />

### 使用 JavaScript校验表单

> 如果想控制错误信息的界面外观，或者使用不支持HTML内置表单校验的浏览器，则必须使用 Javascript。



## 参考

[表单数据校验 MDN](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/Data_form_validation)

