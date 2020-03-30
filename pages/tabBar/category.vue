<template>
	<view>
		<view class="header">
			<view @click="$common.navigateTo('../select-city/select-city')">
				<i class="iconfont">&#xe611;</i>
				<text class="city">
					{{ city.substring(0, 2) }}
					<text v-if="city.length > 2">...</text>
				</text>
			</view>
			<view class="center-header">
				<input placeholder="输入商品名称" placeholder-style="color:#c0c0c0;" @click="toSearch()" />
				<view class="icon"><i class="iconfont">&#xe615;</i></view>
			</view>
			<view @click="$common.switchTab('./user')">
				<view v-if="!login">登录</view>
				<view v-if="login"><i class="iconfont">&#xe699;</i></view>
			</view>
		</view>
		<view class="space"></view>
		<view class="category-list">
			<scroll-view scroll-y="true" class="left">
				<view class="row" v-for="(item, index) in categoryList" :key="item.cid" :class="[index == showCategoryIndex ? 'on' : '']" @click="showCategory(index)">
					<view class="text">
						<view class="block"></view>
						{{ item.name }}
					</view>
				</view>
			</scroll-view>
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="right">
				<view class="category" v-for="(item, index) in categoryList" :key="item.cid" v-if="index == showCategoryIndex">
					<!-- <view class="button-list">
						<uni-grid :column="4" :show-border="false" :square="false">
							<uni-grid-item v-for="(subItem, subIndex) in item.list" :key="subIndex" @click.native="scrollTo(subItem.cid)">
								<view class="view">{{ subItem.name }}</view>
							</uni-grid-item>
						</uni-grid>
					</view> -->
					<view class="title-list" v-for="(subItem, subIndex) in item.list" :id="subItem.cid" :key="subIndex" @click="toCategory(box)">
						<view class="title-header">
							<view class="title-line"></view>
							<view class="content">{{ subItem.name }}</view>
							<view class="title-line"></view>
						</view>
						<view class="title-content">
							<uni-grid :column="3" :show-border="false" :square="false">
								<uni-grid-item v-for="(grandSonItem, grandSonIndex) in subItem.list" :key="grandSonIndex" @click="toCategory(grandSonItem)">
									<view class="img"><image :src="grandSonItem.imageUrl"></image></view>
									<view class="text">{{ grandSonItem.name }}</view>
								</uni-grid-item>
							</uni-grid>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
import { buziAPI } from '@/api';
import { mapState } from 'vuex';
import uniGrid from '@/components/uni-grid/uni-grid.vue';
import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue';
import mixins from '@/mixins/myMixins';
export default {
	components: {
		uniGrid,
		uniGridItem
	},
	mixins: [mixins],
	computed: {
		...mapState({
			city: state => state.city
		})
	},
	data() {
		return {
			scrollTop: 100,
			showCategoryIndex: 0,
			categoryList: []
		};
	},
	onPageScroll(e) {},
	onLoad() {
		this.getcategoryList();
		this.getUserInfo();
	},
	methods: {
		//获取分类信息
		getcategoryList() {
			let that = this;
			buziAPI.getcategoryList(res => {
				that.categoryList = res.data;
			});
		},
		scrollTo(item) {
			console.log('#' + item);
		},
		showCategory(index) {
			this.showCategoryIndex = index;
		},
		toCategory(e) {
			uni.navigateTo({
				url: '../goods/goods-list?cid=' + e.id + '&name=' + e.name
			});
		},
		toSearch() {
			this.$nextTick(function() {
				this.scrollTop = 100;
			});
			uni.showToast({ title: '搜索功能' });
		}
	}
};
</script>
<style lang="scss" scoped>
@import '../../mixin';
.category-list {
	width: 100%;
	background-color: $page-color-white;
	display: flex;
	.left,
	.right {
		position: absolute;
		top: 100upx;
		bottom: 0upx;
	}
	.left {
		width: 24%;
		left: 0upx;
		background-color: $font-color-disabled;
		.row {
			@include wh(100%, 90upx);
			@include flex() .text {
				width: 100%;
				position: relative;
				@include flex(center) @include sc(28upx, $font-color-base) .block {
					position: absolute;
					width: 0upx;
					left: 0;
				}
			}
			&.on {
				height: 100upx;
				background-color: $page-color-white;
				.text {
					font-size: 30upx;
					font-weight: 600;
					color: $base-color;
					.block {
						@include wh(10upx, 100%);
						background-color: $base-color;
					}
				}
			}
		}
	}
	.right {
		width: 76%;
		left: 24%;
		.category {
			width: 94%;
			padding: 20upx 3%;
			.button-list {
				.view {
					border: 1upx solid $uni-color-primary;
					@include borderRadius(10upx);
					margin: 10upx;
					padding: 10upx 5upx 25upx 5upx;
					text-align: center;
					font-size: 24upx;
					@include line-clamp(1, 20upx);
				}
			}
			.title-list {
				.title-header {
					@include flex(center);
					margin: 30upx 0;
					.title-line {
						@include wh(100upx, 2upx);
						background: $uni-color-success;
						margin: 0 20upx;
					}
				}
				.title-content {
					.img {
						width: 100%;
						@include flex(center);
						image {
							@include wh(15vw, 15vw);
						}
					}
					.text {
						margin: 16upx auto;
						@include flex(center);
						@include sc(24upx, $font-color-light);
					}
				}
			}
		}
	}
}
</style>
