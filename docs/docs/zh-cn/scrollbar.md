# Scrollbar 滚动条

# 开始上手

[详细文档](https://wangyi7099.github.io/vuescrolljs/zh/)


## 代码演示

::: demo
<summary>
  #### 演示
  基本演示。
</summary>

```html
<template>
<div>
    <v-scrollbar height="150px" hover-bg="red">
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
    </v-scrollbar>
</div>
</template>
```
:::

## API

### Scrollbar Props
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| width | 内容大于此宽度时出现滚动条 | string |  100px、15% 或者不设| auto |
| height | 内容大于此宽度时出现滚动条 | string |  100px、15% 或者不设| auto |
| mode | 选择scroll一个模式 | string | native、slide、pure-native| native |
| background | 滚动条背景颜色 | string | css颜色值 | hsla(220,4%,58%) |
| keep-show | 设置滚动条是否保持显示 | Boolean | true、false | false |
| opacity | 设置滚动条透明度 | String | 0-1的值 | .3 |
| hover-bg | 只在PC上有效，当鼠标指针移上去的时候显示的颜色。 | String | css颜色值 '' | '' |
| scroll-width | 设置滚动条和轨道的宽度。 | String | - | 6px |
| scroll-height | 设置滚动条和轨道的高度。 | String | - | 6px |
| pos | 设置滚动条和轨道的位置 | String | right、bottom | right |
| line-bg | 设置滚动轨道背景色 | String | css颜色值 | #282c34 |
| line-opacity | 设置轨道的透明度 | String | 0-1之间 | 0 |
