import { buziAPI } from '@/api';
export default {
	data() {
		return {
			login: '' ,//用户信息
			pagination:{
				loadingText: '', //上拉刷新提示语
				productList: [], //分页数据List
				index: 1, //分页数据页数
				TotalCount: 0, //分页数据总条数
			},
			keyWords: '' ,//关键字
			keyWordsList:[],//关键字列表
			empty:false,//商品列表是否为空，默认否
			shoppingList: [], //购物车列表
		}

	},
	watch: {
		keyWords(newVal, oldVal) {
			buziAPI.getSuggests({ name: newVal, coonType: 5, cityId: '010' },res=>{
				if(res.data.list){
					this.keyWordsList = res.data.list
				}
			});
		}
	},
	methods: {
		//获取用户信息
		getUserInfo(){
			if(this.$localstorageFactory.get('userInfo')){
				this.login = this.$localstorageFactory.get('userInfo')
			}
		},
		//跳转新品上市详情页
		toGoods(item,type) {//type:cart购物车 good_list hot首页热销
			this.$localstorageFactory.set('good', item);
			uni.navigateTo({
				url: '../goods/goods?type='+type
			});
		},
		swiperChange(event) {
			this.currentSwiper = event.detail.current;
		},
		//搜索
		serach(item) {
			this.$localstorageFactory.remove('query_body')
			uni.navigateTo({
				url: '../goods/goods-list?name='+item
			});
			let keyList = []
			this.keyWordsList = []
			if(this.$localstorageFactory.get('hisory_list')){
				keyList = this.$localstorageFactory.get('hisory_list')
				for (let i = 0; i < keyList.length; i++) {
					if(keyList[i]==item){
						keyList.splice(i,1)
					}
				}
			}
			keyList.unshift(item)
			this.$localstorageFactory.set('hisory_list',keyList)
			this.historyList = this.$localstorageFactory.get('hisory_list')
			
		},
	}
}
