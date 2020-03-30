import Vue from 'vue'
import Vuex from 'vuex'
import { buziAPI } from '@/api';
import constants from '@/common/enumerate';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		city:'北京',
		flag:false,
		login:{}
    },
    mutations: {
		setFlag(state,res){
			state.flag = true
			state.login = res
		},
		//定位
		getLocation(state) {
			let that = this;
			// #ifdef MP-WEIXIN
			//小程序定位城市
			uni.getLocation({
				type: 'gcj02',
				success: function(res) {
					buziAPI.getLocation({ location: res.latitude + ',' + res.longitude, key: constants['TX_KEY'], get_poi: 1 }, res => {
						if(res.result.address_component.city){
							state.city = res.result.address_component.city.replace(/市/g, '')
						}
					});
				},
				fail: function(err) {
					console.log(err.errMsg);
				}
			});
			// #endif
			// #ifdef H5
			//浏览器IP定位城市
			buziAPI.getIpLocation({ key: constants['GD_H5_KEY'] }, res => {
				if(res.city.length){
					state.city = res.city.replace(/市/g, '')
				}
			});
			// #endif
		},
		setCity(state,city){
			state.city = city.replace(/市/g, '')
		}
    }
})

export default store
