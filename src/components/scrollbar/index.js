import './style/index.less'
import _Scrollbar from './geminiScrollbar.vue'
import GS from '../../utils/gemini-scrollbar'

const ElScrollbar = function (Vue) {
  Vue.component(_Scrollbar.name, _Scrollbar)
  Vue.prototype.$geminiScrollbar = Vue.$geminiScrollbar = GS
}

if (typeof window !== 'undefined' && window.Vue) {
  ElScrollbar(window.Vue)
  window.Vue.prototype.$geminiScrollbar = window.Vue.$geminiScrollbar = GS
}

export default ElScrollbar
