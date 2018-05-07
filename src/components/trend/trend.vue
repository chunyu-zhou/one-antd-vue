<template>
    <div :class="['trendItem', !colorful ? 'trendItemGrey' : '']" >
        <span>
            <slot></slot>
        </span>
        <span :class="flag">
            <i :class="['anticon', `anticon-caret-${flag}`]"></i>
        </span>
    </div>
</template>
<script>
export default {
    name: 'Trend',
    props: {
        flag: {
            type: String,
        },
        colorful: {
            type: Boolean,
            default: true,
        },
    },
};
</script>
