import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import axios from 'axios'
import { store } from './store/store'

const app = createApp(App);

app.config.globalProperties = {
    $axios : axios,  //axios 전역 설정
    $store : store,  //vuex store 전역 설정
}

app.use(Antd).use(router).use(store).mount('#app');