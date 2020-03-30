import Vue from 'vue'
import App from './App'
import './uni.scss'
import './weui.css'
import CommonUtils from '@/common/common.js'
import localstorageFactory from '@/common/localstorage.factory.js'
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.prototype.$common = CommonUtils
Vue.prototype.$localstorageFactory = localstorageFactory
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
