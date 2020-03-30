<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
			if(uni.getStorageSync('shoppingNum')){
				uni.setTabBarBadge({
				  index: 3,
				  text: uni.getStorageSync('shoppingNum').toString()
				})
			}
		},
		onLoad() {},
		onHide: function () {
			console.log('App Hide')
		},
	}
</script>

<style lang="scss">
	@import "./mixin";
@font-face {
  font-family: 'iconfont';  /* project id 1706238 */
  src: url('//at.alicdn.com/t/font_1706238_p7xnhbwesn.eot');
  src: url('//at.alicdn.com/t/font_1706238_p7xnhbwesn.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1706238_p7xnhbwesn.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1706238_p7xnhbwesn.woff') format('woff'),
  url('//at.alicdn.com/t/font_1706238_p7xnhbwesn.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1706238_p7xnhbwesn.svg#iconfont') format('svg');
}
/* #ifdef APP-PLUS */
@font-face {
  font-family: 'iconfont';  /* project id 1706238 */
  src: url('https//at.alicdn.com/t/font_1706238_p7xnhbwesn.eot');
  src: url('https//at.alicdn.com/t/font_1706238_p7xnhbwesn.eot?#iefix') format('embedded-opentype'),
  url('https//at.alicdn.com/t/font_1706238_p7xnhbwesn.woff2') format('woff2'),
  url('https//at.alicdn.com/t/font_1706238_p7xnhbwesn.woff') format('woff'),
  url('https//at.alicdn.com/t/font_1706238_p7xnhbwesn.ttf') format('truetype'),
  url('https//at.alicdn.com/t/font_1706238_p7xnhbwesn.svg#iconfont') format('svg');
}
/* #endif */
.iconfont{
    font-family:"iconfont" !important;
    font-size:50upx;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2upx;
    -moz-osx-font-smoothing: grayscale;
}
page{
	width: 100vw;
	overflow-x: hidden;
	background: $page-color-main;
}
	/*每个页面公共css */
.center-line{
	@include wh(92vw,2upx);
	background: $line;
	margin: 0 auto;
}
.line{
	@include wh(100vw,2upx);
	margin: 10upx auto;
	background: $line;
}
.thick-line{
	@include wh(100vw,20upx);
	background: $line;
	margin: 0 auto;
}
.place{
	height: 20upx;
}
.header {
	@include wh(92%, 100upx);
	padding: 0 4%;
	@include flex();
	position: fixed;
	top: 0;
	z-index: 10;
	@include sc(30upx,#FFF);
	background: $base-color;
	.city{
		@include relative(-2upx,-3px);
		display: inline-block;
	}
	.iconfont{
		font-size: 40upx;
		display: inline-block;
	}
	.center-header {
		background-color: #FFF;
		position: relative;
		margin: 0 20upx;
		@include flex(center);
		border-radius: 10upx;
		flex: 1;
		height: 60upx;
		input{
			color: #000;
		}
		.icon {
			position: absolute;
			top: 0;
			right: 30upx;
			@include sc(34upx, $border-color-dark);
		}
	}
	.login-center-header{
		background: rgba(0,0,0,0);
	}
}
.shopping-list {
	.title {
		text-align: center;
		font-size: 24upx;
		font-weight: 600;
		margin-bottom: 40upx;
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
				display: inline-block;
				width: 60%;
				margin: 20upx 20%;
			}
			.name {
				@include line-clamp(1, 40upx) padding: 0 4%;
				text-align: start;
				font-size: 30upx;
			}
			.smallName {
				padding: 0 4%;
				@include line-clamp(1, 35upx);
				@include sc(25upx, $font-color-light);
			}
				
			.label{
				height: 30upx;
				color:$base-color;
				padding: 0 0 10upx 20upx;
				@include line-clamp(1,50upx);
				text{
					@include sc(25upx, $base-color);
					padding: 0 10upx;
					line-height: 25upx;
					@include borderRadius(10upx);
					border: 1upx solid $base-color;
					margin-right: 10upx;
					width: 100upx;
				}
			}
			.info {
				@include flex(space-between, flex-end);
				padding: 0 4%;
				.price {
					@include sc(30upx, $base-color);
					/* #ifdef H5 */
					@include relative(15upx);
					/* #endif */
				}
				.market-price {
					@include sc(24upx, $font-color-light);
					text-decoration: line-through;
					@include relative(-10upx);
				}
				view:nth-of-type(2) {
					@include relative(-10upx);
					@include borderRadius(5upx);
				}
				.effective,.disibled {
					background: $uni-color-primary;
					width: 50upx;
					text-align: center;
				}
				.disibled{
					background: $font-color-disabled;
				}
			}
		}
	}
}
.loading-text {
	@include wh(100%, 60upx);
	@include flex(center);
	@include sc(24upx, $font-color-light);
}
.keyword{
	padding: 30upx;
	font-size: 26upx;
}
.space{
	height: 100upx;
}
.tabs-title {
			color: #fff;
		}
		.check-view{
			text{
				
				display: inline-block;
				font-size: 26upx;
				border-radius: 10upx;
				width: 150upx;
				margin: 20upx;
				padding: 10upx 0;
				text-align: center;
			}
			.checked{
				border: 1upx solid #fa436a;
				background: #FFEAED;
				color: #fa436a;
			}
			.no-checked{
				border: none;
				background: #F0F2F5;
				color: #333;
			}
		}
		$box-height: 25px;
		/* #ifdef APP-NVUE */
		$box-line-height: 35px;
		/* #endif */
		$box-line-height: 26px;
		$box-width: 35px;
		
		.uni-numbox {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			height: $box-height;
			line-height: $box-height;
			width: 80px;
		}
		
		.uni-numbox__value {
			background-color: $uni-bg-color;
			width: 40px;
			height: $box-height;
			text-align: center;
			font-size: $uni-font-size-lg;
			border-width: 1rpx;
			border-style: solid;
			border-color: $uni-border-color;
			border-left-width: 0;
			border-right-width: 0;
		}
		
		.uni-numbox__minus {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			align-items: center;
			justify-content: center;
			width: $box-width;
			height: $box-height;
			// line-height: $box-line-height;
			// text-align: center;
			font-size: 20px;
			color: $uni-text-color;
			background-color: $uni-bg-color-grey;
			border-width: 1rpx;
			border-style: solid;
			border-color: $uni-border-color;
			border-top-left-radius: $uni-border-radius-base;
			border-bottom-left-radius: $uni-border-radius-base;
			border-right-width: 0;
		}
		
		.uni-numbox__plus {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			align-items: center;
			justify-content: center;
			width: $box-width;
			height: $box-height;
			border-width: 1rpx;
			border-style: solid;
			border-color: $uni-border-color;
			border-top-right-radius: $uni-border-radius-base;
			border-bottom-right-radius: $uni-border-radius-base;
			background-color: $uni-bg-color-grey;
			border-left-width: 0;
		}
		
		.uni-numbox--text {
			font-size: 40rpx;
			color: $uni-text-color;
		}
		
		.uni-numbox--disabled {
			color: $uni-text-color-disable;
		}
</style>
