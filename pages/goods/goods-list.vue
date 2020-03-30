<template>
	<view class="goods-list-page">
		<view class="tab-header">
			<view class="header">
				<view @click="$common.navigateBack()"><i class="iconfont">&#xe658;</i></view>
				<view class="center-header">
					<input placeholder="输入商品名称" v-model="keyWords" placeholder-style="color:#c0c0c0;" />
					<view @click="keyWords=''" class="icon"><i class="iconfont">&#xe62a;</i></view>
				</view>
				<view @click="serach(keyWords)">
					<view>搜索</view>
				</view>
			</view>
			<view v-for="(item,index) in keyWordsList" @click="serach(item)" :key=index>
				<view class="keyword">{{item}}</view>
				<view class="center-line"></view>
			</view>
			<view v-if="!keyWordsList.length" class="space"></view>
			<s-tabs v-if="!keyWordsList.length" activeColor="#fa436a" lineColor="#fa436a" slot-title :nav-per-view="4" v-model="activeTab">
				<s-tab><view @click="comprehensive" class="tabs-title">综合排序</view></s-tab>
				<s-tab>
					<view @click="indexClick(1, saleIndex)" class="tabs-title">
						销量
						<i v-if="saleIndex == 0" class="iconfont">&#xe682;</i>
						<i v-if="saleIndex == 1" class="iconfont">&#xe667;</i>
						<i v-if="saleIndex == 2" class="iconfont">&#xe668;</i>
					</view>
				</s-tab>
				<s-tab>
					<view @click="indexClick(2, priceIndex)" class="tabs-title">
						价格
						<i v-if="priceIndex == 0" class="iconfont">&#xe682;</i>
						<i v-if="priceIndex == 1" class="iconfont">&#xe667;</i>
						<i v-if="priceIndex == 2" class="iconfont">&#xe668;</i>
					</view>
				</s-tab>
				<s-tab>
					<view @click="drawerVisible = true" class="tabs-title">
						筛选
						<i class="iconfont">&#xe7a6;</i>
					</view>
				</s-tab>
			</s-tabs>
			<view v-if="!keyWordsList.length" class="line"></view>
			<view v-if="!keyWordsList.length" class="check-view">
				<text :class="[item.checked == 1 ? 'checked' : 'no-checked']" v-for="(item,index) in oneCheckList" @click="oneCheckClick(index,item)" :key=index>{{item.name}}</text>
			</view>
			<view v-if="!keyWordsList.length" class="line"></view>
		</view>
		<view class="space_2"></view>
		<view v-if="empty" class="empty">暂无商品{{keyWords}}~</view>
		<view v-else class="shopping-list">
			<view class="product-list">
				<view class="product" v-for="(item, index) in pagination.productList" :key="index">
					<view @click="toGoods(item,'good_list')">
						<image mode="widthFix" :src="item.smallPic"></image>
						<view class="name"><text v-if="item.is_overseas">海外购 </text>{{ item.goodsName }}</view>
						<view class="smallName">{{ item.brief }}</view>
						<view class="smallName">规格：{{ item.spec }}</view>
						<view class="label">
							<view  v-if="item.marketInfos.length">
								<text v-for="(subItem,subIndex) in item.marketInfos" :key=subIndex>{{subItem.activityName}}</text>
							</view>
						</view>
						<view class="info">
							<view class="price">￥{{ item.price }}</view>
						</view>
					</view>
					<view class="info">
						<view class="price market-price">￥{{ item.oldPrice }}</view>
						<view v-if="item.isStore == 1&&item.is_overseas==0" class="effective"><uni-icons type="plusempty" size="20" @click.native="addShopping(item)"></uni-icons></view>
						<view v-if="item.isStore == 0&&item.is_overseas==1" class="disibled"><uni-icons type="plusempty" size="20"></uni-icons></view>
					</view>
				</view>
			</view>
		</view>
		<view class="loading-text">{{ pagination.loadingText }}</view>
		<uni-drawer :visible="drawerVisible" mode="right" @close="drawerVisible=false">
			<view>
				<view class="check-title">配送方式</view>
				<view class="check-view">
					<text :class="[item.checked == 1 ? 'checked' : 'no-checked']" v-for="(item,index) in expressType" @click="expressTypeClick(index,item)" :key=index>{{item.name}}</text>
				</view>
			</view>
			<view>
				<view class="check-title">折扣服务</view>
				<view class="check-view">
					<text :class="[item.checked == 1 ? 'checked' : 'no-checked']" v-for="(item,index) in discountType" @click="discountTypeClick(index,item)" :key=index>{{item.name}}</text>
				</view>
			</view>
			<view>
				<view class="check-title">商品品牌</view>
				<view class="check-view">
					<text :class="[item.checked == 1 ? 'checked' : 'no-checked']" v-for="(item,index) in shappingType" @click="shappingTypeClick(index,item)" :key=index>{{item.name}}</text>
				</view>
				<view class=""></view>
			</view>
		</uni-drawer>
	</view>
</template>
<script>
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
import sTabs from '@/components/s-tabs';
import sTab from '@/components/s-tab';
import { buziAPI } from '@/api';
import mixins from '@/mixins/myMixins';
export default {
	components: {
		sTabs,
		sTab,
		uniDrawer
	},
	mixins:[mixins],
	data() {
		return {
			saleIndex: 0, //销量排序
			priceIndex: 0, //价格排序
			activeTab: 0,
			drawerVisible: false, //侧边栏显示
			oneCheckList: [// 海外购与仅看有货
				{
					name: '海外购',
					checked: false
				},
				{
					name: '仅看有货',
					checked: false
				}
			],
			expressType: [// 快递方式
				{
					name: '2-5天送达',
					checked: false
				},
				{
					name: '海外购',
					checked: false
				},
			],
			discountType: [// 折扣服务
				{
					name: '仅看有货',
					checked: false
				},
				{
					name: '自营',
					checked: false
				},
				{
					name: '促销优惠',
					checked: false
				},
			],
			//商品品牌
			shappingType:[]
		};
	},
	onLoad: function(option) {
		let that = this
		that.keyWords = option.name
		that.getUserInfo()
		let body = {}
		if(this.$localstorageFactory.get('query_body')){
			body = this.$localstorageFactory.get('query_body');
		} else {
			body = {
				isSelf: '',//自营 ''否 1是
				isStore: 0,//仅看有货 0否 1是
				type: 1,//1综合排序，2价格 3销量
				descs: '',// desc降序 asc升序
				cid: '',
			    searchGoodsBrief: option.name,
				page: 1,
				rows: 10,
				brandId: '',//商品品牌ID
				memberId: that.login?that.login.userId:'',
				sendMethod: '',
				isMarket: 0,// 促销优惠 0否 1是
				shippingId: '',//海外购 ''否 9是
				coonType: 5,
				cityId: '010'
			};
		}
		that.searchGoods(body);	
		that.$localstorageFactory.set('first_good_list',true)
		that.$localstorageFactory.set('query_body', body);
	},
	//上拉加载更多
	onReachBottom() {
		let body = this.$localstorageFactory.get('query_body');
		let len = this.pagination.productList.length;
		if (len >= this.pagination.TotalCount) {
			this.pagination.loadingText = '到底了';
			return false;
		} else {
			this.pagination.index++;
			this.pagination.loadingText = '正在加载...';
			body.page = this.pagination.index
			this.$localstorageFactory.set('query_body', body);
			this.searchGoods(body);
		}
	},
	methods: {
		//综合排序
		comprehensive(){
			this.pagination.productList = []
			this.priceIndex = 0;
			this.saleIndex = 0;
			let body = this.$localstorageFactory.get('query_body');
			body.page = 1
			body.type = 1
			this.searchGoods(body);
		},
		//销量、价格排序
		indexClick(type, index) {
			this.pagination.productList = []
			let body = this.$localstorageFactory.get('query_body');
			body.page = 1
			if (index == 2) {
				index = 1;
			} else {
				index++;
			}
			if (type == 1) {
				this.saleIndex = index;
				this.priceIndex = 0;
				body.type = 3;
			} else {
				body.type = 2;
				this.priceIndex = index;
				this.saleIndex = 0;
			}
			if (index == 1) {
				body.descs = 'desc';
			} else {
				body.descs = 'asc';
			}
			this.searchGoods(body);
			this.$localstorageFactory.set('query_body', body);
		},
		searchGoods(body) {
			let that = this
			that.empty = false
			buziAPI.searchGoods(body, res => {
				if(that.$localstorageFactory.get('first_good_list')){
					for (let i = 0; i < res.data.brandList.length; i++) {
						that.shappingType.push({
							name: res.data.brandList[i].brandName,
							value: res.data.brandList[i].brandId,
							checked: false
						})
					}
					that.$localstorageFactory.set('first_good_list',false)
				}
				that.pagination.productList = [...that.pagination.productList, ...res.data.goodsList];
				if(!that.pagination.productList.length){
					that.empty = true
				}
				that.pagination.TotalCount = res.pagination.total;
			});
		},
		//首页多选筛选
		oneCheckClick(index,item){
			item.checked = !item.checked
				this.pagination.productList = []
				let body = this.$localstorageFactory.get('query_body');
				body.page = 1
				body.shippingId = ''
				body.isStore = 0
				if(this.oneCheckList[0].checked){
					this.expressType[1].checked = true
					body.shippingId = 9
				}
				if(this.oneCheckList[1].checked){
					this.discountType[0].checked = true
					body.isStore = 1
				}
				if (!this.oneCheckList[0].checked){
					this.expressType[1].checked = false
				}
				if (!this.oneCheckList[1].checked){
					this.discountType[0].checked = false
				}
					
				this.searchGoods(body);
				this.$localstorageFactory.set('query_body', body);
		},
		//配送方式
		expressTypeClick(index,item){
			item.checked = !item.checked
			this.pagination.productList = []
			let body = this.$localstorageFactory.get('query_body');
			body.page = 1
			body.shippingId = ''
			if(this.expressType[0].checked&&!this.expressType[1].checked){
				body.shippingId = 6
			}
			if(this.expressType[1].checked&&!this.expressType[0].checked){
				this.oneCheckList[0].checked = true
				body.shippingId = 9
			}
			if(this.expressType[1].checked&&this.expressType[0].checked){
				this.oneCheckList[0].checked = true
				body.shippingId = '9 6'
			}
			if (!this.expressType[1].checked){
				this.oneCheckList[0].checked = false
			}
			this.searchGoods(body);
			this.$localstorageFactory.set('query_body', body);
		},
		//折扣服务
		discountTypeClick(index,item){
			item.checked = !item.checked
			this.pagination.productList = []
			let body = this.$localstorageFactory.get('query_body');
			body.page = 1
			body.isSelf = ''
			body.isStore = 0
			body.isMarket = 0
			if(this.discountType[0].checked){
				this.oneCheckList[1].checked = true
				body.isStore = 1
			}
			if(!this.discountType[0].checked){
				this.oneCheckList[1].checked = false
			}
			if(this.discountType[1].checked){
				body.isSelf = 1
			}
			if(this.discountType[2].checked){
				body.isMarket = 1
			}
			this.searchGoods(body);
			this.$localstorageFactory.set('query_body', body);
		},
		//商品品牌
		shappingTypeClick(index,item){
			item.checked = !item.checked
			this.pagination.productList = []
			let body = this.$localstorageFactory.get('query_body');
			body.page = 1
			body.brandId = ''
			console.log(this.shappingType)
			for (let i = 0; i < this.shappingType.length; i++) {
				if(this.shappingType[i].checked){
					body.brandId = body.brandId + ' '+ this.shappingType[i].value
				}
			}
			this.searchGoods(body);
			this.$localstorageFactory.set('query_body', body);
		}
	}
};
</script>

<style lang="scss" scoped>
.goods-list-page {
	background: #fff;
	min-height: 100vh;
	.tab-header{
		position: fixed;
		background: #FFF;
		top: 0;
		z-index: 998;
	}
}
.tabs-title{
	color: #333;
	.iconfont {
		display: inline-block;
		font-size: 28upx;
	}
}
.check-title{
	padding: 50upx 0 0 20upx;
	font-size: 30upx;
}
.space{
	height: 100upx;
}
.space_2{
	height: 350upx;
}
.empty{
	text-align: center;
}
</style>
