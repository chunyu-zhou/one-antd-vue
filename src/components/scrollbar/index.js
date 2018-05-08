import './style/index.less'
import Scrollbar from './geminiScrollbar.vue'
import GS from 'gemini-scrollbar'

Scrollbar.install = function(Vue) {
  Vue.component(Scrollbar.name, Scrollbar);
  Vue.prototype.$Scrollbar = Vue.$Scrollbar = GS
};

export default Scrollbar;
