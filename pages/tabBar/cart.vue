<template>
	<view>
		<view class="header">
			<view @click="$common.navigateBack()"><i class="iconfont">&#xe658;</i></view>
			<view class="center-header login-center-header">
				<s-tabs slot-title :nav-per-view="2" v-model="activeTab">
					<s-tab><view class="tabs-title">购物车</view></s-tab>
					<s-tab><view class="tabs-title">需求清单</view></s-tab>
				</s-tabs>
			</view>
			<view @click="rightClick">
				<view>{{ rightName }}</view>
			</view>
		</view>
		<view class="space"></view>
		<view class="login" v-if="!login">
			<view>登录后可同步电脑与手机购物车中的商品</view>
			<view><button type="primary" size="mini" @click="$common.switchTab('./user')">登录</button></view>
		</view>
		<view class="cart" v-if="activeTab === 0">
			<view class="empty" v-if="!shoppingList.length">
				<view>购物车没商品~你还可以</view>
				<view><button type="primary" size="mini" @click="$common.switchTab('./home')">去逛逛</button></view>
			</view>
			<view class="shopping" v-if="shoppingList.length">
				<view class="shopping-title">
					<view class="shopping-title-left"><radio style="transform:scale(0.7)" :checked="allChecked" @click.native="allChangeRadio()" /></view>
					<view class="shopping-title-center">{{ shoppingList[0].pharmacyShortName }}</view>
					<view class="shopping-title-right" v-if="price < 79">还差￥{{ Number(79) - Number(price) }}包邮</view>
					<view class="shopping-title-right" v-if="price >= 79">已包邮</view>
				</view>
				<view class="line"></view>
				<view v-for="(item, index) in shoppingList" :key="index">
					<view class="shopping-view">
						<view class="shopping-view-left"><radio style="transform:scale(0.7)" :value="item" :checked="item.checked" @click.native="changeRadio(index)" /></view>
						<view class="shopping-view-center" @click="toGoods(item,'cart')"><image :src="item.smallPic" mode="widthFix"></image></view>
						<view class="shopping-view-right">
							<view class="skuTitle" @click="toGoods(item,'cart')">{{ item.skuTitle }}</view>
							<view class="specification" @click="toGoods(item,'cart')">规格：{{ item.specification }}</view>
							<view class="info">
								<view class="salePrice">￥{{ item.salePrice }}</view>
								<view class="info-right">
									<view class="uni-numbox">
										<view @click="addTotal('minus', index)" class="uni-numbox__minus">
											<text class="uni-numbox--text" :class="{ 'uni-numbox--disabled': item.total <= 1 }">-</text>
										</view>
										<input class="uni-numbox__value" type="number" v-model="item.total" />
										<view @click="addTotal('plus', index)" class="uni-numbox__plus">
											<text class="uni-numbox--text">+</text>
										</view>
									</view>
									<view class="info-right-icons"><uni-icons type="trash" size="25" @click.native="deleteShopping(index)"></uni-icons></view>
								</view>
							</view>
						</view>
					</view>
					<view class="center-line"></view>
				</view>
			</view>
		</view>
		<view class="cart" v-if="activeTab === 1">
			<view class="empty" v-if="!shoppingList.length">
				<view>需求清单没商品~你还可以</view>
				<view><button type="primary" size="mini" @click="$common.switchTab('./home')">去逛逛</button></view>
			</view>
			<view class="shopping" v-if="shoppingList.length"><view v-for="(item, index) in shoppingList" :key="index" class="shopping-view"></view></view>
		</view>
		<view class="accounts" v-if="shoppingList.length">
			<view class="total">合计：￥{{ price }}</view>
			<view class="button" @click="sumbit">结算({{ num }})</view>
		</view>
		<view class="shopping-list" v-if="rightName === '编辑'">
			<view class="title">您可能还需要</view>
			<view class="product-list">
				<view class="product" v-for="(item, index) in pagination.productList" :key="index">
					<view   @click="toGoods(item,'cart')">
						<image mode="widthFix" :src="item.smallPic"></image>
						<view class="name">{{ item.genericName }}</view>
						<view class="smallName">{{ item.skuTitle }}</view>
						<view class="smallName">规格：{{ item.specification }}</view>
						<view class="label">
							<view  v-if="item.marketInfos.length">
								<text v-for="(subItem,subIndex) in item.marketInfos" :key=subIndex>{{subItem.marketName}}</text>
							</view>
						</view>
					</view>
					<view class="info">
						<view class="price">￥{{ item.salePrice }}</view>
					</view>
					<view class="info">
						<view class="price market-price">￥{{ item.guidePrice }}</view>
						<view v-if="item.isStock == 1" class="effective"><uni-icons type="plusempty" size="20" @click.native="addShopping(item)"></uni-icons></view>
						<view v-if="item.isStock == 0" class="disibled"><uni-icons type="plusempty" size="20"></uni-icons></view>
					</view>
				</view>
			</view>
		</view>
		<view class="loading-text">{{ pagination.loadingText }}</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import sTabs from '@/components/s-tabs';
import sTab from '@/components/s-tab';
import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import { buziAPI } from '@/api';
import mixins from '@/mixins/myMixins';
export default {
	data() {
		return {
			activeTab: 0,
			rightName: '编辑', //头部右边按钮
			allChecked: true, //全选
			price: 0, //总价
			num: 0 ,//商品数量
			shopIndex:0
		};
	},
	mixins: [mixins],
	components: {
		sTabs,
		sTab,
		uniIcons,
		uniNumberBox
	},
	computed: {
		...mapState({
			flag: state => state.flag
		})
	},
	onPageScroll(e) {},
	onPullDownRefresh() {
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
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
			this.getcartList();
		}
	},
	onShow() {
		this.getUserInfo();
		if (this.$localstorageFactory.get('shoppingList')) {
			this.shoppingList = this.$localstorageFactory.get('shoppingList');
			this.changeShoppingList();
		}
		this.getcartList();
		var ctx = uni.createCanvasContext('firstCanvas')
		
		       ctx.moveTo(10, 10)
		       ctx.lineTo(100, 10)
		       ctx.lineTo(100, 100)
		       ctx.stroke()
		       ctx.draw()
	},
	methods: {
		//增加减少
		addTotal(type, index) {
			if (type == 'minus') {
				if(this.shoppingList[index].total == 1) {
					return
				}
				this.shoppingList[index].total--;
			} else {
				this.shoppingList[index].total++;
			}
			this.changeShoppingList();
		},
		//结算
		sumbit() {
			if (!this.flag) {
				this.$common.switchTab('./user');
			} else {
				//已经登录了
			}
		},
		//删除选择的商品
		deleteShopping(index) {
			let that = this;
			uni.showModal({
				title: '提示操作',
				content: '确定删除此商品吗？',
				cancelColor: '#fa436a',
				confirmColor: '#fa436a',
				success: function(res) {
					if (res.confirm) {
						that.shoppingList.splice(index, 1);
						that.$localstorageFactory.set('shoppingList', that.shoppingList);
						that.changeShoppingList();
					} else if (res.cancel) {}
				}
			});
		},
		//全选按钮
		allChangeRadio() {
			if (this.allChecked == true) {
				this.allChecked = false;
				for (let i = 0; i < this.shoppingList.length; i++) {
					this.shoppingList[i].checked = false;
				}
			} else {
				this.allChecked = true;
				for (let i = 0; i < this.shoppingList.length; i++) {
					this.shoppingList[i].checked = true;
				}
			}
			this.changeShoppingList();
		},
		//单选按钮
		changeRadio(index) {
			this.shoppingList[index].checked = !this.shoppingList[index].checked;
			this.changeShoppingList();
		},
		//获取相关商品接口
		getcartList(pageNo) {
			let that = this;
			buziAPI.getcartList({ pageNo: that.pagination.index, pageSize: 10, type: 'default', userId: that.login?that.login.userId:'', makeUp: true, coonType: '5', cityId: '010' }, res => {
				that.pagination.productList = [...that.pagination.productList, ...res.data];
				that.pagination.TotalCount = res.pagination.total;
			});
		},
		//改变商品列表公共函数
		changeShoppingList() {
			this.price = 0;
			this.num = 0;
			let checked = [];
			this.$localstorageFactory.set('shoppingList', this.shoppingList);
			for (let i = 0; i < this.shoppingList.length; i++) {
				checked.push(this.shoppingList[i].checked);
				if (this.shoppingList[i].checked) {
					this.price = this.price + this.shoppingList[i].total * Number(this.shoppingList[i].salePrice);
					this.num = Number(this.num) + Number(this.shoppingList[i].total);
				}
			}
			if (checked.every(x => x == false)) {
				this.allChecked = false;
			} else {
				this.allChecked = true;
			}
			if (this.num) {
				uni.setTabBarBadge({
					index: 3,
					text: this.num.toString()
				});
				this.$localstorageFactory.set('shoppingNum', this.num);
			} else {
				uni.removeTabBarBadge({
					index: 3
				});
				this.$localstorageFactory.remove('shoppingNum');
			}
		},
		//添加商品到购物车
		addShopping(item) {
			if (item.isStock === 1) {
				uni.showToast({
					icon:'none',
					title: '添加成功'
				});
				let newArr = [];
				newArr.push(item);
				let index = 0;
				for (let i = 0; i < this.shoppingList.length; i++) {
					if (this.shoppingList[i].goodsId == newArr[0].goodsId) {
						this.shoppingList[i].total = this.shoppingList[i].total + 1;
						index++;
					}
				}
				if (index === 0) {
					this.shoppingList.push(newArr[0]);
					this.$set(this.shoppingList[this.shoppingList.length - 1], 'total', 1);
					this.$set(this.shoppingList[this.shoppingList.length - 1], 'checked', true);
				}
				this.changeShoppingList();
			}
		},
		//头部右边按钮
		rightClick() {
			if (this.rightName === '编辑') {
				this.rightName = '完成';
			} else {
				this.rightName = '编辑';
			}
		}
	}
};
</script>
<style lang="scss" scoped>
@import '../../mixin';
.login {
	height: 80upx;
	padding: 0 20upx;
	background: $uni-color-warning;
	@include flex(space-between);
	view {
		@include sc(24upx, $uni-color-error);
	}
}
.cart {
	margin: 40upx auto;
	.empty {
		text-align: center;
		view:nth-of-type(1) {
			margin-bottom: 30upx;
			font-size: 28upx;
		}
	}
}
.accounts {
	position: fixed;
	/* #ifdef MP-WEIXIN */
	bottom: 0;
	/* #endif */
	/* #ifdef H5 */
	bottom: 105upx;
	/* #endif */
	width: 100vw;
	overflow-x: hidden;
	@include flex(space-between);
	background: $page-color-white;
	height: 80upx;
	z-index: 1000;
	.total {
		margin-left: 20upx;
	}
	.button {
		height: 80upx;
		line-height: 80upx;
		padding: 0 40upx;
		background-color: $base-color;
		@include sc(30upx, $page-color-white);
	}
}

.shopping-title {
	@include flex();
	padding: 10upx;
	.shopping-title-center,
	.shopping-title-right {
		margin: 0 30upx;
	}
	.shopping-title-right {
		@include sc(24upx, $base-color);
	}
}
.shopping-view {
	@include flex(space-between);
	padding: 10upx 0;
	.shopping-view-left {
		width: 10vw;
	}
	.shopping-view-center {
		width: 30vw;
		image {
			width: 20vw;
		}
	}
	,
	.shopping-view-right {
		width: 100vw;
		margin-left: 10upx;
		.skuTitle {
			@include wh(65vw, 80upx);
			font-size: 28upx;
			@include line-clamp(2,80upx);
		}
		.specification {
			@include sc(24upx, $font-color-disabled);
		}
		.info {
			@include flex(space-between);
			.salePrice {
				@include sc(28upx, $uni-color-primary);
			}
			.info-right {
				margin: 0 20upx;
				@include flex(space-between);
				.info-right-box {
					border: 1upx solid $border-color-dark;
					@include borderRadius(10upx);
					@include flex(space-between);

					.minus,
					.plus {
						padding: 0 10upx;
						font-size: 40upx;
						z-index: 1000;
					}
					.minus {
						padding: 0 15upx;
					}
					input {
						text-align: center;
						background: #fff;
						width: 50upx;
					}
				}
			}
		}
	}
}
</style>
