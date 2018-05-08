<script>
    export default {
        data: function () {
            return {
                autoshow: true
            };
        },
    }
</script>
<style>
.my-scroll-bar{
    height:200px;
}
</style>
# Scrollbar 滚动条

在页面布局时可能需要用到

## 代码演示

::: demo
<summary>
  #### 演示
  基本演示。
</summary>

```html
<script>
    export default {
        data: function () {
            return {
                autoshow: true
            };
        },
    }
</script>
<style>
.my-scroll-bar{
    height:200px;
}
</style>
<template>
<div>
    <Scrollbar :autoshow="autoshow" class="my-scroll-bar">
        <div>content...</div>
        <div>content...</div>
        <div>content...</div>
        <div>content...</div>
        <div>content...</div>
        <div>content...</div>
        <div>content...</div>
        <div>content...</div>
        <div>content...</div>
        <div>content...</div>
        <div>content...</div>
        <div>content...</div>
        <div>content...</div>
        <div>content...</div>
        <div>content...</div>
        <div>content...</div>
    </Scrollbar>
</div>
</template>
```
:::

## API

### Affix Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| autoCreate    | 自动创建自定义滚动条 | Boolean | true |
| autoshow    | hover时才显示滚动条 | Boolean | false |
| isforce    | 原生滚动条可见的情况下，强制显示自定义滚动条（开发时会比较有用） | Boolean | false |
| minThumbSize    | 滚动条最小长度 | Number | 20 |
