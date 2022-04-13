import Vue from 'vue'
import { Form, Button, Input, Select, Layout, Menu, Icon, Checkbox } from 'ant-design-vue'

import App from './App.vue'
import 'ant-design-vue/dist/antd.css';

Vue.use(Form);
Vue.use(Button);
Vue.use(Input);
Vue.use(Select);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Checkbox);

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  render: h => h(App)
})
