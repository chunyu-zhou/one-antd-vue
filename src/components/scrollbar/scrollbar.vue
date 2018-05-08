<template>
    <div :style="{width:width,height:height}">
        <vue-scroll :ops="ops" @handle-resize="handleResize">
            <slot></slot>
        </vue-scroll>
    </div>
</template>
<script>
export default {
    name: 'Scrollbar',
    data() {
        return {
            ops: {
                mode: this.mode,
                bar: {
                    vBar: {
                        background: this.background,
                        keepShow: this.keepShow,
                        opacity: this.opacity,
                        hover: this.hoverBg
                    },
                    hBar: {
                        background: this.background,
                        keepShow: this.keepShow,
                        opacity: this.opacity,
                        hover: this.hoverBg
                    },
                },  
                rail: {
                    vRail: {
                        width: this.scrollWidth,
                        pos: this.pos?this.pos:'right',
                        background: this.lineBg,
                        opacity: this.lineOpacity //'0.5'
                    },
                    hRail: {
                        height: this.scrollHeight,
                        pos: this.pos?this.pos:'bottom',
                        background: this.lineBg,
                        opacity: this.lineOpacity //'0.5'
                    }
                }
            },
        }
    },
    props: {
        width: {
            type: String,
            default: 'auto',
        },
        height: {
            type: String,
            default: 'auto',
        },
        mode:  {
            type: String,
            default: 'native',
        },
        background: {
            type: String,
            default: 'hsla(220,4%,58%)',
        },
        keepShow: {
            type: Boolean,
            default: false,
        },
        opacity: {
            type: String,
            default: '.3',
        },
        hoverBg: {
            type: String,
            default: '',
        },
        scrollWidth: {
            type: String,
            default: '6px',
        },
        scrollHeight: {
            type: String,
            default: '6px',
        },
        pos: {
            type: String,
            default: 'right',
        },
        lineBg: {
            type: String,
            default: '#282c34',
        },
        lineOpacity: {
            type: String,
            default: '0',
        },
    },
    methods: {
        handleResize() {
            
        }
    },
};
</script>
