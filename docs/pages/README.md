[[toc]]
## Hello VuePress
### 自定义容器
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

### 代码块行高亮
``` js {2-5}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```