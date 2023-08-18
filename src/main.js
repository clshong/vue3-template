import { createApp } from 'vue';
import App from './App.vue';
import installElementPlus from './plugins/element';
import router from './router';
import vuex from './store/vuex';

// 使用pinia
import store from './store';

import 'virtual:uno.css';
import 'normalize.css';

const app = createApp(App);
// 导入权限控制模块
import './permission';

import installDirective from '@/directives';
import '@/styles/index.scss';
import axios from '@/utils/axios';

app.config.globalProperties.$axios = axios; // 使用globalProperties挂载

installElementPlus(app);
installDirective(app);

// filter
import installFilter from '@/filters';

installFilter(app);

// 自定义表格工具组件
import RightToolbar from '@/components/RightToolbar/index.vue';
// 分页组件
import Pagination from '@/components/Pagination/index.vue';

// 全局组件挂载
app.component('RightToolbar', RightToolbar);
app.component('Pagination', Pagination);
app.component('svg-icon', svgIcon);

// 将自动注册所有组件为全局组件
import svgIcon from '@/components/SvgIcon/index.vue';
import 'virtual:svg-icons-register'; // 新增

app.use(vuex);

app.use(router).use(store).mount('#app');
