import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// @是一个路径的别名  是src路径  在vue-cli项目下有效
// index 是目录的索引文件  默认使用的索引文件 优先顺序为 index.js  index.vue  index.json
import router from '@/router'

// 产品级别提示  不开启    在开发阶段 提示越详细越好 开发级别提示    上线阶段后选true 日志内容比较少 运行快
Vue.config.productionTip = false

Vue.use(ElementUI)

// main.js 入口文件的功能
// 职责1：引入需要依赖的模块（js,包，css , 其他资源）
// 职责2：创建一个根vue实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
