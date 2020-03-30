<template>
	<view>
		<view class="header">
			<view @click="$common.navigateBack()"><i class="iconfont">&#xe658;</i></view>
			<view class="center-header login-center-header">
				<view v-if="!login">{{ headerLoginType }}</view>
				<view v-if="login">个人中心</view>
			</view>
			<view>
				<view v-if="!login" class="right" @click="$common.navigateTo('../login/register')">注册</view>
				<view v-if="login" class="right" @click="$common.navigateTo('../login/register')">设置</view>
			</view>
		</view>
		<view class="space"></view>
		<view v-if="!login">
			<view class="form-list" v-if="headerLoginType == '会员登录'">
				<input class="uni-input" placeholder="请输入手机号码/用户名" v-model="member.name" />
				<view class="center-input">
					<view><input class="uni-input password-input" :password='member.passwordType' placeholder="密码" v-model="member.password" /></view>
					<view class="image-code password-image" v-if="member.passwordType==true" @click="member.passwordType=false"><i class="iconfont">&#xe637;</i></view>
					<view class="image-code password-image" v-if="member.passwordType==false" @click="member.passwordType=true"><i class="iconfont">&#xe638;</i></view>
				</view>
			</view>
			<view class="form-list" v-else>
				<input class="uni-input" placeholder="请输入手机号码" v-model="phone.name" />
				<view class="center-input">
					<view><input class="uni-input" placeholder="请输入图形验证码" v-model="phone.imageCode" /></view>
					<view class="image-code" @click="getImageCode"><image :src="imageCode"></image></view>
				</view>
				<view class="center-input">
					<view><input class="uni-input center-input" placeholder="请输入短信验证码" v-model="phone.smsCode" /></view>
					<view class="image-code sms-code" v-if="!countDown" @click="getSmsCode">获取验证码</view>
					<view class="image-code sms-code2" v-if="countDown">{{ time }}s后重新获取</view>
				</view>
			</view>
			<view v-if="showWarn" class="warning">{{ warningTitle }}</view>
			<view class="point">
				<view @click="$common.navigateTo('./home')">忘记密码？</view>
				<view @click="clickLoginTypeFuc">{{ clickLoginType }}</view>
			</view>
			<view class="login-button" @click="loginClick"><button type="warn">登录</button></view>
			<view class="third-party">
				<view class="title">第三方登录</view>
				<view v-if="type=='H5'">
					<image class="qq" src="https://m.ehaoyao.com/_nuxt/img/icon-qq.e1ee8aa.png" mode="widthFix"></image>
					<view class="title">QQ</view>
				</view>
				<view class="WX" v-if="type=='WX'">
					<button open-type="getUserInfo" @getuserinfo="wxLogin"><i class="iconfont">&#xe63a;</i></button>
					<view class="title">微信</view>
				</view>
				<view class="center-line"></view>
				<view class="tel"><image src="https://m.ehaoyao.com/_nuxt/img/icon-tel.fd59112.png" mode="widthFix"></image></view>
				<view class="dowload">下载好药师APP</view>
				<image class="home" src="https://m.ehaoyao.com/_nuxt/img/icon-index.371df99.png" mode="widthFix" @click="$common.switchTab('./home')"></image>
				<view class="bottom">
					<view class="image"><image src="https://m.ehaoyao.com/_nuxt/img/icon_tips_warn.82e1507.png" mode="widthFix"></image></view>
					<view class="title">
						好药师官方客服电话
						<text>400-648-5566</text>
						，不会以其他号码致电，谨防诈骗。
					</view>
				</view>
			</view>
		</view>
		<view class="logined" v-else>
			<view class="logined-h">
				<view class="logined-header">
					<view class="logined-header-img">
						<image :src="login.headImg?login.headImg:'https://m.ehaoyao.com/_nuxt/img/icon-head.9a358f8.png'" mode="widthFix"></image>
					</view>
					<view class="logined-header-name">
						{{login.name}}
					</view>
					<view class="logined-wallet">
						<i class="iconfont">&#xe612;</i>
						<view>充值</view>
					</view>
				</view>
				<view class="logined-header-content">
					<uni-grid :column="4" :show-border="false" :square="false">
						<uni-grid-item v-for="(item, index) in orderList" :key="index" @click.native="toCategory(item)">
							<view class="img"><image :src="item.image"></image></view>
							<view class="text">{{ item.title }}</view>
						</uni-grid-item>
					</uni-grid>
				</view>
			</view>
			<view class="logined-list">
				<view class="logined-header-content">
					<uni-grid :column="4" :show-border="false" :square="false">
						<uni-grid-item>
							<view class="img">￥1</view>
							<view class="text">余额</view>
						</uni-grid-item>
						<uni-grid-item>
							<view class="img">1</view>
							<view class="text">积分</view>
						</uni-grid-item>
						<uni-grid-item>
							<view class="img">{{couponCount}}</view>
							<view class="text">优惠券</view>
						</uni-grid-item>
						<uni-grid-item>
							<view class="img">1</view>
							<view class="text">我的收藏</view>
						</uni-grid-item>
						<uni-grid-item v-for="(item, index) in messageList" :key="index" @click.native="toCategory(item)">
							<view class="img"><image :src="item.image"></image></view>
							<view class="text">{{ item.title }}</view>
						</uni-grid-item>
					</uni-grid>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import md5 from "@/common/SDK/md5.min.js";
import { mapState,mapMutations } from 'vuex';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import uniGrid from '@/components/uni-grid/uni-grid.vue';
import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue';
import { buziAPI } from '@/api';
import mixins from '@/mixins/myMixins'
export default {
	components: {
		uniIcons,
		uniGrid,
		uniGridItem
	},
	mixins:[mixins],
	data() {
		return {
			type:'H5',
			headerLoginType: '会员登录', //头部中间文字
			clickLoginType: '短信快捷登录', //登录方式
			member: {
				name: '',
				password: '',
				passwordType:true//密码是否可见
			},
			phone: {
				name: '',
				imageCode: '',
				smsCode: ''
			},
			imageCode: '', //图形验证码
			countDown: false, //是否倒计时
			time: '', //倒计时时间
			warningTitle: '', //警告文字
			showWarn: false, //是否显示警告文字
			password: true ,//是否显示密码
			orderList:[//订单列表
				{image:'https://m.ehaoyao.com/_nuxt/img/icon-all.c5c33db.png',title:'全部订单'},
				{image:'https://m.ehaoyao.com/_nuxt/img/icon-prepay.fbf9e6c.png',title:'待付款'},
				{image:'https://m.ehaoyao.com/_nuxt/img/icon-prerecieved.22a1720.png',title:'待收货'},
				{image:'https://m.ehaoyao.com/_nuxt/img/icon-evaluate.9270dbe.png',title:'待评价'}
			],
			messageList:[
				{image:'https://m.ehaoyao.com/_nuxt/img/icon-distribution.d7e5ea2.png',title:'分销赚钱'},
				{image:'https://m.ehaoyao.com/_nuxt/img/icon-require.cfd6eb7.png',title:'我的需求'},
				{image:'https://m.ehaoyao.com/_nuxt/img/icon-addr.b98f2d5.png',title:'地址管理'},
				{image:'https://m.ehaoyao.com/_nuxt/img/icon-history.8a487cf.png',title:'浏览记录'},
				{image:'https://m.ehaoyao.com/_nuxt/img/icon-olserve.d3bf7c3.png',title:'在线客服'},
				{image:'https://m.ehaoyao.com/_nuxt/img/icon-doctor-wx.fc6bb6b.png',title:'药师微信'}
			],
			couponCount:0,//优惠券数量
		};
	},
	computed: {
		...mapState({
			//flag: state => state.flag,
			//login: state => state.login
		})
	},
	watch: {
		time(n, o) {
			if (n == 0) {
				this.countDown = false;
			}
		}
	},
	onLoad() {
		// #ifdef MP-WEIXIN
		this.type = 'WX'
		// #endif
		if(!this.$localstorageFactory.get('userInfo')){
			this.getImageCode()
			return
		}
		this.login = this.$localstorageFactory.get('userInfo')
		this.getCouponCount(this.login.userId)
	},
	methods: {
		wxLogin({ detail}) {
			console.log(detail)
			if (detail.errMsg === 'getUserInfo:ok') {
				uni.showToast({
					title: '登陆成功，用户名为'+detail.userInfo.nickName,
					icon: 'none',
				});
			} else {
				uni.showToast({
					title: '登陆失败！请重新授权',
					icon: 'none',
					duration: 1000
				});
			}
		},
		//...mapMutations(['setFlag']),
		//获取优惠券数量
		getCouponCount(memberId){
			let that = this
			buziAPI.getCouponCount(
				{
					memberId: memberId,
					coonType: 5,
					cityId: '010'
				},
				res => {
					that.couponCount = res.data
				}
			);
		},
		//获取短信验证码
		getSmsCode() {
			if (!this.phone.name) {
				this.showWarn = true;
				this.warningTitle = '请输入手机号';
				return false;
			}
			if (this.phone.name) {
				let myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
				if (!myreg.test(this.phone.name)) {
					this.showWarn = true;
					this.warningTitle = '请输入正确的手机号';
					return false;
				} else {
					this.showWarn = false;
					this.warningTitle = '';
					buziAPI.getSmsCode(
						{
							mobile: this.phone.name,
							type: 13,
							verifyCode: this.phone.imageCode,
							timestamp: this.$localstorageFactory.get('get_time'),
							coonType: 5,
							cityId: '010'
						},
						res => {
							if (res.msg == '验证码发送成功') {
								let that = this;
								this.countDown = true;
								this.time = 59;
								setInterval(function() {
									that.time--;
								}, 1000);
							}
							uni.showToast({
								icon: 'none',
								title: res.msg
							});
						}
					);
				}
			}
		},
		//获取图形验证码
		getImageCode() {
			let that = this;
			this.$localstorageFactory.set('get_time',new Date().getTime())
			that.imageCode = 'https://m.ehaoyao.com/front_api/user/v1/mobile/account/getVerifyCode.json?timestamp='+this.$localstorageFactory.get('get_time')
		},
		//切换登录类型
		clickLoginTypeFuc() {
			if (this.clickLoginType == '短信快捷登录') {
				this.clickLoginType = '会员账号登录';
				this.headerLoginType = '手机登录';
			} else {
				this.clickLoginType = '短信快捷登录';
				this.headerLoginType = '会员登录';
			}
		},
		//登录提交
		loginClick() {
			if (this.headerLoginType == '会员登录') {
				if (!this.member.name) {
					this.showWarn = true;
					this.warningTitle = '请输入账号';
				} else if (!this.member.password) {
					this.showWarn = true;
					this.warningTitle = '请输入密码';
				} else {
					this.showWarn = false;
					this.warningTitle = '';
					//用户名密码登录
					buziAPI.memberLogin(
						{
							username: this.member.name,
							password: md5(this.member.password),
							rememberMe: true,
							coonType: 5,
							cityId: '010'
						},
						res => {
							if (res.msg == '请求成功') {
								this.$localstorageFactory.set('userInfo',res.data)
								this.login = this.$localstorageFactory.get('userInfo')
								//this.setFlag(res.data)
								this.countDown = false;
								console.log(res.data)
								this.getCouponCount(res.data.userId)
							}
							uni.showToast({
								icon: 'none',
								title: res.msg
							});
						}
					);
				}
			} else {
				if (!this.phone.name) {
					this.showWarn = true;
					this.warningTitle = '请输入手机号';
					return false;
				}
				if (this.phone.name) {
					let myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
					if (!myreg.test(this.phone.name)) {
						this.showWarn = true;
						this.warningTitle = '请输入正确的手机号';
						return false;
					} else {
						this.getImageCode();
						this.showWarn = false;
						this.warningTitle = '';
						//手机登录
						buziAPI.phoneLogin(
							{
								mobile: this.phone.name,
								code: this.phone.smsCode,
								coonType: 5,
								cityId: '010'
							},
							res => {
								if (res.msg == '登录成功') {
									this.$localstorageFactory.set('userInfo',res.data)
									//this.setFlag(res.data)
									this.login = this.$localstorageFactory.get('userInfo')
									this.countDown = false;
									this.getCouponCount(res.data.userId)
								}
								uni.showToast({
									icon: 'none',
									title: res.msg
								});
							}
						);
					}
				}
			}
		},
	}
};
</script>
<style lang="scss" scoped>
@import '../../mixin';
.form-list {
		.uni-input {
			background: #fff;
			height: 60upx;
			margin: 20upx;
			padding: 20upx;
			@include borderRadius(5upx);
		}
		.center-input {
			@include flex(space-between);
			.uni-input {
				width: 60vw;
				margin-right: 0;
			}
			.image-code {
				width: 40vw;
				text-align: center;
				background: $base-color;
				height: 100upx;
				line-height: 100upx;
				margin-right: 20upx;
				color: #fff;
				image{
					width: 223upx;
					height: 100upx;
				}
			}
			.password-input{
				width: 80vw;
			}
			.password-image{
				width: 10vw;
				color: $font-color-base;
				background: #FFF;
				text-align: right;
				padding-right: 20upx;
			}
			.sms-code {
				font-size: 24upx;
			}
			.sms-code2 {
				font-size: 22upx;
				background: $font-color-base;
			}
		}
	}
.warning {
	padding: 0 20upx 20upx 20upx;
	@include sc(24upx, $base-color);
}
.point {
	@include flex(space-between);
	padding: 0 20upx;
	font-size: 24upx;
	view:nth-of-type(1) {
		color: $font-color-base;
	}
}
.login-button {
	padding: 50upx;
}
.third-party {
	text-align: center;
	.title {
		margin-bottom: 30upx;
	}
	.qq {
		width: 90upx;
		margin-bottom: 10upx;
	}
	.home {
		width: 50upx;
	}
	.tel {
		image {
			margin-top: 30upx;
			width: 350upx;
		}
	}
	.dowload {
		margin: 20upx;
		@include sc(24upx, $base-color);
	}
	.bottom {
		padding: 20upx;
		text-align: start;
		@include flex(space-between);
		image {
			width: 25upx;
			@include relative(-30upx);
		}
		.title {
			margin-left: 10upx;
			@include sc(24upx, $font-color-base);
			text {
				color: $base-color;
			}
		}
	}
}
.logined{
	.logined-h{
		padding: 20upx;
		background: $base-color;
		border-top:1upx solid $font-color-disabled;
		color: #FFF;
		height: 200upx;
		.logined-header{
			@include flex(space-between);
			.logined-header-img{
				image{
					 width: 100upx;
				}
			}
			.logined-header-name{
				margin: 0 10upx;
				flex: 1;
				text-align: left;
			}
			.logined-wallet{
				@include flex(space-between);
				view{
					margin-left: 10upx;
				}
			}
		}
	}
	.logined-header-content{
		margin: 0 auto;
		padding: 40upx 0 20upx 0;
		width: 95%;
		background: #FFF;
		@include sc(24upx,$font-color-base);
		@include relative(30upx);
		text-align: center;
		.img {
			width: 100%;
			@include flex(center);
			image {
				@include wh(7vw, 7vw);
			}
		}
		.text {
			margin: 16upx auto;
		}
	}
	.logined-list{
		margin-top: 60upx;
		padding: 20upx;
	}
}
.WX{
	background: $page-color-main;
	button::after{
		border: none;
	}
	button{
		line-height: 1;
		background: $page-color-main;
	}
	.iconfont{
		font-size: 100upx;
		color: $wx-color;
	}
}
</style>
