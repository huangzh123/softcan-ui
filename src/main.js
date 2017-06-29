import Vue from 'vue'
import App from './App.vue'


/* 引入组件库js文件 */
import softcan from 'softcan-ui'
/* 引入组件库全部css */
import 'softcan-ui\\dist\\softcan-ui\\index.css'



Vue.use(softcan)
/* eslint-disable no-new */
console.info('src entry load!')
new Vue({
    el: '#app',
    render: h => h(App)
})
