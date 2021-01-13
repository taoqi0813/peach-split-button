import SplitBtn from './components/splitbtn/index.js';
import './styles/index.css'

const components = [
  SplitBtn
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.1.0',
  install,
  SplitBtn
};