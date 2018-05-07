<script>
    export default {
        data: function () {
            return {
                colorful: false
            };
        },
    }
</script>

# Trend 趋势标记

趋势符号，标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外。

## 代码演示

::: demo
<summary>
  #### 演示
  在数值背后添加一个小图标来标识涨跌情况。
</summary>

```html
<script>
    export default {
        data: function () {
            return {
                colorful: false
            };
        },
    }
</script>
<template>
<div>
    <div>
    	<v-trend flag="up" >50%</v-trend>
    </div>
    <div>
    	<v-trend flag="down" >50%</v-trend>
    </div>
    <div>
    	<v-trend flag="down" :colorful="colorful">50%</v-trend>
    </div>
</div>
</template>
```
:::

## API

### Affix Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| colorful    | 是否彩色标记 | Boolean | true |
| flag    | 上升下降标识：up、down | string | - |
