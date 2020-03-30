<template>
	<view class="shopping-detail">
		<view class="header">
			<view @click="$common.navigateBack()"><i class="iconfont">&#xe658;</i></view>
			<view class="center-header login-center-header">
				<s-tabs slot-title :nav-per-view="2" v-model="activeTab">
					<s-tab><view class="tabs-title">购物车</view></s-tab>
					<s-tab><view class="tabs-title">需求清单</view></s-tab>
				</s-tabs>
			</view>
			<view @click="rightClick"><view></view></view>
		</view>
		<view class="space"></view>
		<view class="swiper">
			<view class="swiper-box">
				<swiper circular="true" @change="swiperChange">
					<swiper-item v-for="(item, index) in shoppingDetail.bannerList" :key="index"><image :src="item" @click="toSwiper(item)"></image></swiper-item>
				</swiper>
			</view>
			<view class="indicator-dots">{{ currentSwiper + 1 }}/{{ shoppingDetail.bannerList.length }}</view>
		</view>
		<!-- <view class="title">
			<view class="title-left">
				<view class="title-left-one">￥{{ detail.itemPrice }} 抢购价</view>
				<view class="title-left-two">￥{{ detail.itemOriginalPrice }}</view>
			</view>
			<view class="title-right">
				<view class="title-right-one">限时抢购</view>
				<view class="title-right-two">距结束 {{ detail.time }}</view>
			</view>
		</view> -->
		<view class="price">
			<view class="price-left">
				<view class="price-left-one">￥{{ shoppingDetail.price }}</view>
				<view class="price-left-two">￥{{ shoppingDetail.oldPrice }}</view>
			</view>
			<view class="price-right">
				<view class="icon">
					<i class="iconfont">&#xe66e;</i>
					说明书
				</view>
				<view class="icon">
					<i class="iconfont">&#xe7ce;</i>
					收藏
				</view>
			</view>
		</view>
		<view class="title">
			<text v-if="detail.isSelf" class="is_self">自营</text>
			{{ shoppingDetail.goodsName }}
		</view>
		<view class="small_title">{{ shoppingDetail.brief }}</view>
		<view class="thick-line"></view>
		<view class="promotions" v-if="preferential.listBigLable.length||preferential.listPmtCoupon.length||preferential.listPmtGoods.length">
			<view class="promotions-title">可享受优惠</view>
			<view class="line"></view>
			<view class="listPmtGoods" v-if="preferential.listPmtCoupon.length">
				<view class="listPmtGoods-left">
					<text>领券</text>
						<text v-for="(subItem,subIndex) in preferential.listPmtCoupon[0].coupons" :key=subIndex>
							<text class="label">{{subItem.couponShowName}}</text>
						</text>
				</view>
				<view @click="$refs.listPmtCouponPopup.open()" class="listPmtGoods-right"><i class="iconfont">&#xe748;</i></view>
			</view>
			<uni-popup ref="listPmtCouponPopup" type="bottom">
				<view class="popup">
					<view class="popup-title">
						<view>领券</view>
						<view @click="$refs.listPmtCouponPopup.close()"><i class="iconfont">&#xe608;</i></view>
					</view>
					<view class="line"></view>
					<text v-for="(item,index) in preferential.listPmtCoupon" :key=index>
						<text v-for="(subItem,subIndex) in item.coupons" :key=subIndex>
							<text class="label">{{subItem.couponShowName}}</text>
						</text>
					</text>
				</view>
			</uni-popup>
			<view class="listPmtGoods" v-if="preferential.listPmtGoods.length">
				<view class="listPmtGoods-left">
					<text>促销</text>
						<text class="label">{{preferential.listPmtGoods[0].activityName}}</text>
						<text v-for="(subItem,subIndex) in preferential.listPmtGoods[0].listActivity" :key=subIndex>
							<text class="label-title">{{subItem.activityName}}</text>
						</text>
				</view>
				<view @click="$refs.listPmtGoodsPopup.open()" class="listPmtGoods-right"><i class="iconfont">&#xe748;</i></view>
			</view>
			<uni-popup ref="listPmtGoodsPopup" type="bottom">
				<view class="popup">
					<view class="popup-title">
						<view>促销</view>
						<view @click="$refs.listPmtGoodsPopup.close()"><i class="iconfont">&#xe608;</i></view>
					</view>
					<view class="line"></view>
					<view v-for="(item,index) in preferential.listPmtGoods" :key=index>
						<text class="label">{{item.activityName}}</text>
						<text v-for="(subItem,subIndex) in item.listActivity" :key=subIndex>
							<text class="label-title">{{subItem.activityName}}</text>
						</text>
					</view>
				</view>
			</uni-popup>
		</view>
		<view class="thick-line"></view>
		<view class="selected">
			<text>已选</text><text>{{shoppingDetail.spec}}</text>
		</view>
		<view class="thick-line"></view>
		<view class="supermarket">
			<view class="supermarket-title">好药师商城</view>
			<view class="line"></view>
			<view class="supermarket-center">
				<view class="supermarket-center-name">
					<view><i class="iconfont">&#xe601;</i></view>
					<view>正品保证</view>
				</view>
				<view class="supermarket-center-name">
					<view><i class="iconfont">&#xe601;</i></view>
					<view>品质保障</view>
				</view>
				<view class="supermarket-center-name">
					<view><i class="iconfont">&#xe601;</i></view>
					<view>隐私配送</view>
				</view>
			</view>
		</view>
		<view class="thick-line"></view>
		<view class="space"></view>
		<view class="goods-nav"><uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="onClick" @buttonClick="$refs.goodsPopup.open()"></uni-goods-nav></view>
		<uni-popup ref="goodsPopup" type="bottom">
			<view class="goods-popup">
				<view class="goods-popup-title">
					<view><image :src="shoppingDetail.sameSpuGoodsList[0].thumbnailPic" mode="widthFix"></image></view>
					<view>
						<view>￥{{shoppingDetail.price}}</view>
						<view>已选：{{shoppingDetail.spec}}</view>
					</view>
					<view @click="$refs.goodsPopup.close()"><i class="iconfont">&#xe608;</i></view>
				</view>
				<view class="goods-popup-size">
					<view>规格</view>
					<view class="check-view">
						<text :class="[checked == true ? 'checked' : 'no-checked']" @click="checked=!checked">{{shoppingDetail.spec}}</text>
					</view>
				</view>
				<view class="goods-popup-operate">
					<view class="shu-liang">
						<view>数量</view>
						<view>仅剩{{shoppingDetail.sameSpuGoodsList[0].store}}件</view>
					</view>
					<view class="xian-gou">
						<view v-if="shoppingDetail.restriction>-1" class="xian-gou-title">限购{{shoppingDetail.restriction}}件</view>
						<view class="uni-numbox">
							<view @click="addTotal('minus')" class="uni-numbox__minus">
								<text class="uni-numbox--text" :class="{ 'uni-numbox--disabled': total <= 1 }">-</text>
							</view>
							<input class="uni-numbox__value" type="number" v-model="total" />
							<view @click="addTotal('plus')" class="uni-numbox__plus">
								<text class="uni-numbox--text" :class="{ 'uni-numbox--disabled': enable }">+</text>
							</view>
						</view>
					</view>
				</view>
				<view class="goods-popup-button">
					<view @click="addShopings(1)">加入购物车</view>
					<view @click="addShopings(2)">立即购买</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
import sTabs from '@/components/s-tabs';
import sTab from '@/components/s-tab';
import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue';
import uniPopup from "@/components/uni-popup/uni-popup.vue"
import { buziAPI } from '@/api';
import mixins from '@/mixins/myMixins';
export default {
	components: { uniGoodsNav, sTabs, sTab,uniPopup,uniNumberBox },
	mixins: [mixins],
	data() {
		return {
			enable:false,
			total:1,
			checked:true,
			detail: {},
			activeTab:0,
			shoppingDetail: {}, //商品详情
			preferential: {}, //商品优惠
			currentSwiper: 0, //swiper index
			options: [
				{
					icon: '/static/img/tabBar/home.png',
					text: '首页'
				},
				{
					icon: '/static/img/tabBar/user.png',
					text: '咨询药师'
				},
				{
					icon: '/static/img/tabBar/cart.png',
					text: '购物车',
					info: ''
				}
			],
			buttonGroup: [
				{
					text: '加入购物车',
					backgroundColor: '#ff0000',
					color: '#fff'
				},
				{
					text: '立即购买',
					backgroundColor: '#ffa200',
					color: '#fff'
				}
			]
		};
	},
	onLoad(options) {
		let that = this;
		console.log(options);
		that.detail = that.$localstorageFactory.get('good');
		console.log(that.detail);
		that.getUserInfo();
		let id = 0;
		if (options.type == 'cart') {
			id = that.detail.channelSkuId;
		}
		if (options.type == 'good_list') {
			id = that.detail.goodsId;
		}
		if (options.type == 'hot') {
			id = that.detail.itemId;
		}
		// that.detail.pharmacyId = 25
		// that.detail.goodsId = 5038864
		that.options[2]['info'] = that.$localstorageFactory.get('shoppingNum');
		buziAPI.getShoppingDetail(that.detail.pharmacyId, id, { groupId: id, userId: that.login ? that.login.userId : '', coonType: 5, cityId: '010' }, res => {
			that.shoppingDetail = res.data;
			that.shoppingDetail.bannerList = that.shoppingDetail.bigPic.split(',');
		});
		buziAPI.getPromotions(
			{
				goodsId: that.detail.goodsId,
				pharmacyId: that.detail.pharmacyId,
				itemId: id,
				platformId: 1,
				memberId: that.login ? that.login.userId : '',
				coonType: '5',
				cityId: '010'
			},
			res => {
				that.preferential = res.data;
			}
		);
	},
	methods: {
		//增加减少
		addTotal(type) {
			if (type == 'minus') {
				if(this.total == 1) {
					return
				}
				this.total--;
			} else {
				
				if(this.shoppingDetail.restriction > -1) {
					if(this.total>=this.shoppingDetail.restriction)
					this.enable = true
					return
				}
				this.total++;
			}
		},
		onClick(e) {
			if(e.index == 0){
				this.$common.switchTab('../tabBar/home')
			}
			if(e.index == 1){
				this.$common.switchTab('../tabBar/doctor')
			}
			if(e.index == 2){
				this.$common.switchTab('../tabBar/cart')
			}
		},
		addShopings(index){
			if(index==1){
				this.shoppingList = this.$localstorageFactory.get('shoppingList')
				this.options[2]['info'] = this.$localstorageFactory.get('shoppingNum') + this.total;
				this.$localstorageFactory.set('shoppingNum',this.options[2]['info'])
				this.detail.total = this.total
				this.detail.checked = true;
				let bn = []
				for (let i = 0; i < this.shoppingList.length; i++) {
					bn.push(this.shoppingList[i].bn)
				}
				if(bn.indexOf(this.detail.bn)==-1){
					this.shoppingList.push(this.detail)
				} else {
					this.shoppingList[bn.indexOf(this.detail.bn)].total = this.shoppingList[bn.indexOf(this.detail.bn)].total + this.total
				}
				this.$localstorageFactory.set('shoppingList',this.shoppingList)
				uni.showToast({
					title:'加入购物车成功',
					icon:'none'
				})
			}
			this.$refs.goodsPopup.close()
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../../mixin';
.shopping-detail {
	background: #fff;
	min-height: 100vh;
	.swiper {
		width: 90%;
		margin: 20upx auto;
		@include flex(center, flex-end) .swiper-box {
			@include wh(100%, 60vw);
			overflow: hidden;
			box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
			position: relative;
			z-index: 1;
			margin-left: 5vw;
			swiper {
				@include wh(100%, 60vw);
				swiper-item {
					image {
						@include wh(100%, 60vw);
					}
				}
			}
		}
		.indicator-dots {
			width: 10vw;
			@include sc(24upx, #fff) text-align: center;
			background: $font-color-base;
			@include borderRadius(35upx);
			margin-left: 30upx;
		}
	}
	.price {
		padding: 20upx;
		@include flex(space-between) .price-left, .price-right {
			@include flex(space-between);
		}
		.price-left {
			.price-left-one {
				@include sc(40upx, $base-color);
				margin-right: 30upx;
			}
			.price-left-two {
				@include sc(28upx, $font-color-disabled);
				@include relative(5upx);
				text-decoration: line-through;
			}
		}
		.price-right {
			text-align: center;
			font-size: 28upx;
			.icon {
				margin-left: 30upx;
				.iconfont {
					font-size: 40upx;
				}
			}
		}
	}
	.title {
		padding: 0 20upx 0 20upx;
		font-size: 30upx;
		@include line-clamp(2, 80upx);
		.is_self {
			@include sc(22upx, #fff);
			background-color: $font-color-spec;
			padding: 0 5upx;
			@include borderRadius(5upx);
			margin-right: 20upx;
		}
	}
	.small_title {
		padding: 20upx;
		@include sc(24upx, $font-color-disabled);
	}
	.promotions{
		padding: 20upx;
		@include sc(26upx, $font-color-disabled);
		.promotions-title{
			color: #333;
		}
		.iconfont{
			font-size: 30upx;
		}
		.listPmtGoods{
			@include flex(space-between);
			padding: 20upx 0;
			border-bottom: 1upx solid $line;
			.listPmtGoods-left{
				.label-title{
					color: #333;
				}
			}
		}
		.popup{
			background: #FFF;
			padding: 20upx;
			color: #333;
			.popup-title{
				@include flex(space-between);
				view:nth-of-type(1){
					flex: 1;
					text-align: center;
				}
			}
		}
		
	}
	.goods-nav {
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		border: 1upx solid $font-color-light;
	}
}
.label{
					@include sc(25upx, $base-color);
					padding: 0 10upx;
					line-height: 25upx;
					@include borderRadius(10upx);
					border: 1upx solid $base-color;
					margin: 0 10upx 0 20upx;
				}
				.selected{
					padding: 20upx;
					font-size: 26upx;
					text:nth-of-type(1){
						color: $font-color-light;
						margin-right: 20upx;
					}
				}
				.supermarket{
					padding: 20upx;
					font-size: 26upx;
					.supermarket-center{
						@include flex(space-around);
						.supermarket-center-name{
							@include flex(space-around);
							.iconfont{
								@include sc(30upx, $base-color);
							}
							view:nth-of-type(2){
								margin-left: 10upx;
								@include sc(24upx, red);
							}
						}
					}
						
				}
				.goods-popup{
					padding: 20upx;
					background: #FFF;
					.goods-popup-title{
						@include flex(space-between);
						align-items: flex-start;
						view:nth-of-type(1){
							image{
								width: 180upx;
							}
						}
						view:nth-of-type(2){
							flex: 1;
							margin-left: 20upx;
							view:nth-of-type(1){
								@include sc(30upx, $base-color);
							}
							view:nth-of-type(2){
								@include sc(26upx, #333);
							}
						}
						.iconfont{
							font-size: 30upx;
						}
					}
				}
				.goods-popup-size{
					margin-top: 20upx;
					view:nth-of-type(1){
						font-size: 28upx;
					}
					.check-view{
						text{
							
							width: auto;
							padding: 10upx;
						}}
				}
				.goods-popup-operate{
					@include flex(space-between);
					margin-bottom: 100upx;
					.shu-liang,.xian-gou{
					@include flex(space-between);
					}
					.shu-liang{
						view:nth-of-type(2){
							@include sc(25upx, $font-color-light);
							margin-left: 20upx;
						}
				}
				.xian-gou{
					.xian-gou-title{
						margin-right: 20upx;
						@include sc(25upx, $font-color-light);
					}
				}
					
			}
			.goods-popup-button{
				@include wh(100vw,130upx);
				@include relative(20upx,auto,auto,-20upx)
				@include flex(space-between);
				view:nth-of-type(1),view:nth-of-type(2){
					height: 130upx;
					width: 50vw;
					@include flex(center);
				}
				view:nth-of-type(1){
					color: red;
					background: $font-color-disabled;
				}
				view:nth-of-type(2){
					color: #FFF;
					background: red;
				}
			}
				
</style>
