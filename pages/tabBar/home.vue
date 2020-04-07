<template>
	<view>
		<view class="header">
			<view @click="$common.navigateTo('../select-city/select-city')"><i class="iconfont">&#xe611;</i><text class="city">{{ city.substring(0,2) }}<text v-if="city.length>2">...</text></text></view>
			<view class="center-header">
				<input placeholder="输入商品名称" placeholder-style="color:#c0c0c0;" @click="$common.navigateTo('../keywords/keywords')" />
				<view class="icon"><i class="iconfont">&#xe615;</i></view>
			</view>
			<view @click="$common.switchTab('./user')">
				<view v-if="!login">登录</view>
				<view v-if="login"><i class="iconfont">&#xe699;</i></view>
			</view>
		</view>
		<view class="space"></view>
		<view class="swiper">
			<view class="swiper-box">
				<swiper indicator-dots="true" circular="true" autoplay="true" @change="swiperChange">
					<swiper-item v-for="(item, index) in HeadDataList.banner" :key="index"><image lazy-load :src="item.pic" @click="toWebView(item.content)"></image></swiper-item>
				</swiper>
			</view>
		</view>
		<view class="category-list">
			<uni-grid :column="5" :show-border="false" :square="false">
				<uni-grid-item v-for="(item, index) in templatedata" :key="index" @click.native="toWebView(item.cmsUrl)">
					<view class="img"><image lazy-load :src="item.adPic"></image></view>
					<view class="text">{{ item.adTitle }}</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="center-line"></view>
		<view class="notice">
			<i class="iconfont">&#xe639;</i>
			<swiper vertical="true" circular="true" interval="4000" autoplay="true" @change="swiperChange">
				<swiper-item v-for="(item, index) in HeadDataList.notice" :key="index" @click="toWebView(item)">
					<text>{{ item.title }}</text>
				</swiper-item>
			</swiper>
		</view>
		<view class="thick-line"></view>
		<!-- <view class="count-down" v-if="pagepurchasesList.purchaseInfo.length">
			<cmd-cell-item arrow slot-left addon="更多">
				<text class="text1">{{ pagepurchasesList.purchaseInfo[0].seckillActivityName }}</text>
				<text class="text2">距时间仅剩</text>
				<text class="text3">{{ time }}</text>
			</cmd-cell-item>
		</view>
		<view class="line" v-if="pagepurchasesList.purchaseInfo.length"></view>
		<view class="place" v-if="pagepurchasesList.purchaseInfo.length"></view>
		<view class="goods-list" v-if="pagepurchasesList.purchaseInfo.length">
			<view class="product-list scroll-view">
				<scroll-view scroll-x="true" @scroll="scroll">
					<view class="product scroll-prodnct" v-for="(item, index) in pagepurchasesList.purchaseInfo[0].itemInfo" :key="index" @click="toGoods(item,'hot')">
						<view class="image"><image lazy-load mode="widthFix" :src="item.itemImage"></image></view>
						<view class="name">{{ item.itemName }}</view>
						<view class="info">
							<view class="price">￥{{ item.itemPrice }}</view>
							<view class="price market-price">￥{{ item.itemOriginalPrice }}</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view> -->
		<!-- <view class="goods-list">
			<view class="product-list scroll-view">
				<scroll-view scroll-x="true" @scroll="scroll">
					<view class="product scroll-prodnct" v-for="(item, index) in TailDataList.grabTogether.mobileFlashSaleNewItems" :key="index" @click="toGoods(item)">
						<view class="image"><image lazy-load mode="widthFix" :src="item.mainimg3"></image></view>
						<view class="name">{{ item.flashSaleProductName }}</view>
						<view class="info">
							<view class="price">￥{{ item.promotionPrice }}</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view> -->
		<!-- <image lazy-load style="width: 100vw;" :src="HeadDataList.banner[0].pic" mode="widthFix"></image> -->
		<view class="count-down">
			<cmd-cell-item slot-left>
				<i class="admire iconfont">&#xe60c;</i>
				<text class="text1 admire-text">精选专题</text>
			</cmd-cell-item>
		</view>
		<view class="goods-list" v-for="(item, index) in TailDataList.goodTopic" :key="index">
			<image lazy-load style="width: 100vw;height: 66vw;" :src="item.picUrl" mode="widthFix"></image>
			<view class="product-list scroll-view">
				<scroll-view scroll-x="true">
					<view class="product scroll-prodnct" v-for="(subItem, subIndex) in item.goodProducts" :key="subIndex" @click="toGoods(subItem)">
						<view class="image"><image lazy-load mode="widthFix" :src="subItem.productImg"></image></view>
						<view class="name">{{ subItem.productName }}</view>
						<view class="info">
							<view class="price">￥{{ subItem.sellPrice }}</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="line"></view>
		<view class="count-down">
			<cmd-cell-item slot-left>
				<i class="admire iconfont">&#xe624;</i>
				<text class="text1 admire-text">常见疾病</text>
			</cmd-cell-item>
		</view>
		  <s-tabs effect v-model="activeTab">
		     <s-tab v-for="(item,index) in healthNewList.healthList" :key=index :title="item.name">
				<view>
					<view v-for="(subItem, subIndex) in item.questionList" :key="subIndex">
						<view class="tabs-health">
							<view>{{ subItem.content }}</view>
							<view>{{ subItem.createTime.slice(0, 11) }}</view>
						</view>
						<view class="center-line"></view>
					</view>
					<view class="tabs-health-more">
						<view>查看更多{{ item.name }}问题</view>
						<view><uni-icons type="arrowright" size="20" color="#4399fc"></uni-icons></view>
					</view> 
				</view>
			 </s-tab>
		   </s-tabs>
		<view class="thick-line"></view>
		<view class="count-down">
			<cmd-cell-item slot-left>
				<i class="admire iconfont">&#xe61b;</i>
				<text class="text1 admire-text">最新疾病资讯</text>
			</cmd-cell-item>
		</view>
		<view class="new" v-for="(item, index) in healthNewList.newsList" :key="index">
			<view class="title">{{ item.title }}</view>
			<view class="content">{{ item.shortContent }}</view>
			<view class="name-time">
				<view class="name">{{ item.author }}</view>
				<view class="time">{{ item.createTime.slice(0, 11) }}</view>
			</view>
			<view class="line"></view>
		</view>
		<view class="goods-list">
			<view class="title">新品上市</view>
			<view class="product-list">
				<view class="product" v-for="(item, index) in pagination.productList" :key="index" @click="toGoods(item)">
					<image lazy-load mode="widthFix" :src="item.Pic800"></image>
					<view class="name">{{ item.Advertisement }}</view>
					<view class="info">
						<view class="price">￥{{ item.SalePrice }}</view>
						<view class="price market-price">￥{{ item.MarketPrice }}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="loading-text">{{ pagination.loadingText }}</view>
		<backTop :scrollTop="backTop.scrollTop"></backTop>
		<uni-fab @trigger="trigger" @fabClick="fabClick"></uni-fab>
		<!-- 底部弹窗 -->
		<uni-popup ref="showshare" @change="change"></uni-popup>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import sTabs from '@/components/s-tabs';
import sTab from '@/components/s-tab';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import cmdCellItem from '@/components/cmd-cell-item/cmd-cell-item.vue';
import uniGrid from '@/components/uni-grid/uni-grid.vue';
import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import backTop from '@/components/back-top/back-top.vue';
import uniFab from '@/components/uni-fab/uni-fab.vue';
import constants from '@/common/enumerate';
import { buziAPI } from '@/api';
import mixins from '@/mixins/myMixins'
export default {
	components: {
		uniIcons,
		backTop,
		uniFab,
		uniPopup,
		uniGrid,
		uniGridItem,
		cmdCellItem,
		sTabs,
		sTab,
	},
	computed: {
		...mapState({
			city: state => state.city,
			//login: state => state.login
		})
	},
	mixins:[mixins],
	data() {
		return {
			activeTab:1,
			pagepurchasesList: {}, //好药师防疫专区
			TailDataList: {}, //精选专题
			healthNewList: {}, //常见疾病、最新疾病资讯
			HeadDataList: {}, //banner、分类，通知信息
			templatedata:[],//分类图标
			time: '', //倒计时
			currentSwiper: 0, //swiper index
			backTop: {//回到顶部
				scrollTop: 0
			}
		};
	},
	//滑动触发
	onPageScroll(e) {
		this.backTop.scrollTop = e.scrollTop;
	},
	//下拉刷新
	onPullDownRefresh() {
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	onShow() {
		this.getUserInfo();
	},
	async onLoad() {
		let that = this
		if(!that.$localstorageFactory.get('city_type')){
			that.getLocation();
		}
		that.getHeadDataList();
		await that.pagepurchases();
		that.getTailDataList();
		that.getNewList();
		that.getIndexList();
		// if(that.pagepurchasesList.purchaseInfo.length){
		// 	that.$localstorageFactory.set('activityEndTime',that.pagepurchasesList.purchaseInfo[0].activityEndTime)
		// 	let timer = setInterval(() => {
		// 		let newDate = new Date(that.pagepurchasesList.purchaseInfo[0].activityEndTime) - new Date()
		// 		if (newDate <= 0) {
		// 			that.time = '00:00:00'
		// 			clearInterval(timer)
		// 		}
		// 		let hours = Math.floor(newDate / 1000 / 60 / 60) > 9 ? Math.floor(newDate / 1000 / 60 / 60) : '0' + Math.floor(
		// 			newDate / 1000 / 60 / 60);
		// 		let minutes = Math.floor(newDate / 1000 / 60) - hours * 60 > 9 ? Math.floor(newDate / 1000 / 60) - hours * 60 :
		// 			'0' + (Math.floor(newDate / 1000 / 60) - hours * 60);
		// 		let seconds = Math.floor(newDate / 1000) - hours * 3600 - minutes * 60 > 9 ? Math.floor(newDate / 1000) - hours *
		// 			3600 - minutes * 60 : '0' + (Math.floor(newDate / 1000) - hours * 3600 - minutes * 60);
		// 		that.time = `${hours}:${minutes}:${seconds}`;
		// 	}, 1000);
		// }
	},
	//上拉加载更多
	onReachBottom() {
		let len = this.pagination.productList.length;
		if (len >= this.pagination.TotalCount) {
			this.pagination.loadingText = '到底了';
			return false;
		} else {
			this.pagination.index++;
			this.pagination.loadingText = '正在加载...';
			this.getIndexList();
		}
	},
	methods: {
		...mapMutations(['getLocation']), //获取定位信息
		//分享
		share(index) {
			console.log(index);
		},
		//获取新品上市分页List
		getIndexList() {
			let that = this;
			return new Promise(function(resolve, reject) {
				buziAPI.queryProductsList({ pagesize:10, pageindex: that.pagination.index }, res => {
					that.pagination.productList = [...that.pagination.productList, ...res.Data];
					that.pagination.TotalCount = res.TotalCount;
					resolve();
				});
			});
		},
		//获取banner、分类，通知信息
		getHeadDataList() {
			let that = this;
			buziAPI.getHeadDataList(
				{ tradername: 'yw_app', trader: 'h5', closesignature: 'yes', signature_method: 'md5', timestamp: new Date().getTime(), signature: 'liupan' },
				res => {
					that.HeadDataList = res.data;
					that.templatedata = that.HeadDataList.templatedata[0].contentList
					if(that.HeadDataList.notice!=null&&that.HeadDataList.notice.length == 1){
						that.HeadDataList.notice.push(that.HeadDataList.notice[0])
					}
				}
			);
		},
		//获取好药师防疫专区
		pagepurchases() {
			let that = this;
			return new Promise(function(resolve, reject) {
				buziAPI.pagepurchases({ platformId: 1, memberId: that.login?that.login.userId:'', coonType: '5', cityId: '010' }, res => {
					that.pagepurchasesList = res.data;
					resolve();
				});
			})
		},
		//精选专题
		getTailDataList() {
			let that = this;
			buziAPI.getTailDataList(
				{ tradername: 'yw_app', trader: 'h5', closesignature: 'yes', signature_method: 'md5', timestamp: new Date().getTime(), signature: 'liupan' },
				res => {
					that.TailDataList = res.data;
					for (let i = 0; i < that.TailDataList.goodTopic.length; i++) {
						for (let j = 0; j < that.TailDataList.goodTopic[i].goodProducts.length; j++) {
							//that.$common.placeholderChart(that.TailDataList.goodTopic[i].goodProducts[j],'productImg')
						}
					}
				}
			);
		},
		//常见疾病、最新疾病资讯
		getNewList() {
			let that = this;
			buziAPI.getNewList(
				{ tradername: 'yw_app', trader: 'h5', closesignature: 'yes', signature_method: 'md5', timestamp: new Date().getTime(), signature: 'liupan' },
				res => {
					that.healthNewList = res.data;
				}
			);
		},
		//跳转到webView
		toWebView(item){
			uni.navigateTo({
				url: '../webView/webView?url=' + encodeURIComponent(JSON.stringify(item))
			});
		},
		swiperChange(event) {
			this.currentSwiper = event.detail.current;
		},
		//咨询按钮点击
		trigger(e) {
			uni.showModal({
				title: '提示',
				content: `您选中了${e.item.text}`,
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		fabClick() {
			uni.showToast({
				title: '点击了药师咨询',
				icon: 'none'
			});
		},
	}
};
</script>
<style lang="scss" scoped>
@import '../../mixin';
.notice {
	width: 92vw;
	margin: 10upx auto;
	@include flex(space-around);
	swiper {
		@include wh(80vw, 40upx);
		text {
			@include sc(28upx, $font-color-base);
			/* #ifdef H5 */
			@include relative(-15upx)
			/* #endif */
		}
	}
}
.swiper {
	width: 100%;
	margin: 0 auto;
	.swiper-box {
		@include wh(100%, 40vw);
		overflow: hidden;
		box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
		position: relative;
		z-index: 1;
		swiper {
			@include wh(100%, 40vw);
			swiper-item {
				image {
					@include wh(100%, 40vw);
				}
			}
		}
	}
}
.category-list {
	background: #FFF;
	margin-top: 20upx;
	padding-top: 10upx;
	.img {
		@include flex(center);
		image {
			@include wh(10vw, 10vw);
		}
	}
	.text {
		margin: 16upx auto;
		@include flex(center);
		@include sc(24upx, $font-color-light);
	}
}
.count-down {
	.admire {
		display: inline-block;
		width: 40upx;
		margin: 0 10upx;
	}
	.admire-text {
		@include relative(auto, auto, auto, 10upx);
	}
	.text1 {
		font-size: 30upx;
	}
	.text2 {
		@include sc(24upx, $font-color-disabled);
		border-right: 2upx solid $font-color-disabled;
	}
	.text2,
	.text3 {
		display: inline-block;
		width: 20vw;
		margin-left: 30upx;
	}
	.text3 {
		@include sc(30upx, $base-color);
	}
}
.goods-list {
	.title {
		@include wh(100%, 80upx);
		@include flex(center);
		@include sc(30upx, $uni-color-primary);
		margin-top: 10upx;
		image {
			@include wh(30upx, 30upx);
		}
	}
	.product-list {
		width: 92%;
		padding: 0 4% 3vw 4%;
		margin-top: 10upx;
		/* #ifdef MP-WEIXIN */
		margin-bottom: 20upx;
		/* #endif */
		@include flex(space-between);
		flex-wrap: wrap;
		.product {
			width: 48%;
			@include borderRadius(20upx) margin: 0 0 15upx 0;
			box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.1);
			image {
				@include wh(100%,100%);
			}
			.name {
				@include line-clamp(2, 75upx) padding: 0 4%;
				text-align: start;
				font-size: 25upx;
			}
			.info {
				@include flex(start, flex-end);
				padding: 10upx 4% 10upx 4%;
				.price {
					@include sc(25upx, $base-color);
				}
				.market-price {
					text-decoration: line-through;
					color: $font-color-light;
				}
			}
		}
	}
	.scroll-view {
		height: 40vw;
		white-space: nowrap;
		margin-bottom: 30upx;
		.scroll-prodnct {
			width: 30%;
			margin: 20upx;
			display: inline-block;
			.image {
				text-align: center;
				image {
					@include wh(80%,70%);
				}
			}
			.name {
				white-space: normal;
			}
		}
	}
}
.tabs-health {
	width: 92%;
	margin: 20upx auto;
	font-size: 30upx;
	@include flex(space-around);
	view:nth-of-type(1) {
		@include line-clamp(1, 40upx) text-align: justify;
		width: 70vw;
	}
	view:nth-of-type(2) {
		text-align: right;
		width: 25vw;
		@include sc(24upx, $border-color-dark);
	}
}
.tabs-health-more {
	margin-top: 10upx;
	@include sc(28upx, $font-color-spec);
	text-align: center;
	@include flex(center);
}
.new {
	width: 92%;
	margin: 20upx auto;
	font-size: 30upx;
	.content {
		@include sc(25upx, $base-color);
	}
	.name-time {
		margin: 10upx auto;
		@include flex(space-between);
		@include sc(25upx, $font-color-disabled);
	}
}
</style>
