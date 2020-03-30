<template>
	<view>
		<view class="login-header">
			<view @click="$common.navigateBack()"><i class="iconfont">&#xe658;</i></view>
			<view class="center-header login-center-header">注册账号</view>
			<view  @click="common.switchTab('../tabBar/user')">
				<view>登录</view>
			</view>
		</view>
        <view class="form-list">
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
			<view class="center-input">
				<view><input class="uni-input password-input" :password='member.passwordType' placeholder="请输入6-20位字符,建议使用数组或字符" v-model="member.password" /></view>
				<view class="image-code password-image" v-if="member.passwordType==true" @click="member.passwordType=false"><i class="iconfont">&#xe637;</i></view>
				<view class="image-code password-image" v-if="member.passwordType==false" @click="member.passwordType=true"><i class="iconfont">&#xe638;</i></view>
			</view>
			<view class="center-input">
				<view><input class="uni-input password-input" :password='member.confirmPasswordType' placeholder="确认密码,字符注意区分大小写" v-model="member.confirmPassword" /></view>
				<view class="image-code password-image" v-if="member.confirmPasswordType==true" @click="member.confirmPasswordType=false"><i class="iconfont">&#xe637;</i></view>
				<view class="image-code password-image" v-if="member.confirmPasswordType==false" @click="member.confirmPasswordType=true"><i class="iconfont">&#xe638;</i></view>
			</view>
			<view v-if="showWarn" class="warning">{{ warningTitle }}</view>
			<view class="agreement">
				<i v-if='agree' @click="agree=false" class="iconfont">&#xe6b0;</i>
				<i v-if='!agree' @click="agree=true" class="iconfont">&#xe6ae;</i>
				<view>已阅读同意<text @click="$refs.popup.open()">《好药师用户注册协议》</text>
				</view>
			</view>
			<view class="login-button" @click="registerClick"><button type="warn">注册</button></view>
        </view>
		<uni-popup ref="popup">
			<view class="agreement-content">
				<view class="agree-name">
					<view class="title">好药师用户注册协议</view>
					<view class="title-red">第1条 本站服务条款的确认和接纳</view>
					<view class="center">
						1.1 本站的各项电子服务的所有权和运作权归好药师所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。
					</view>
					<view class="center">
						1.2 用户点击同意本协议的，即视为用户确认自己具有享受本站服务、下单购物等相应的权利能力和行为能力，能够独立承担法律责任。
					</view>
					<view class="title-red">第2条 本站服务</view>
					<view class="center">
						2.1 好药师通过互联网依法为用户提供互联网信息等服务，用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。
					</view>
					<view class="center">
						2.2 用户必须自行准备如下设备和承担如下开支：（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；（2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。
					</view>
					<view class="title-red">第3条 用户信息</view>
					<view class="center">
						2.1 好药师通过互联网依法为用户提供互联网信息等服务，用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。
					</view>
					<view class="center">
						2.2 用户必须自行准备如下设备和承担如下开支：（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；（2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。
					</view>
					<view class="center">
						2.1 好药师通过互联网依法为用户提供互联网信息等服务，用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。
					</view>
					<view class="center">
						2.2 用户必须自行准备如下设备和承担如下开支：（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；（2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。
					</view>
					<view class="title-red">第4条 用户依法言行义务</view>
					<view class="center">
						2.1 好药师通过互联网依法为用户提供互联网信息等服务，用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。
					</view>
					<view class="center">
						2.2 用户必须自行准备如下设备和承担如下开支：（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；（2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。
					</view>
					<view class="title-red">第5条 商品信息</view>
					<view class="center">
						2.1 好药师通过互联网依法为用户提供互联网信息等服务，用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。
					</view>
					<view class="center">
						2.2 用户必须自行准备如下设备和承担如下开支：（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；（2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。
					</view>
					<view class="title-red">第6条 订单</view>
					<view class="center">
						2.1 好药师通过互联网依法为用户提供互联网信息等服务，用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。
					</view>
					<view class="center">
						2.2 用户必须自行准备如下设备和承担如下开支：（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；（2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。
					</view>
				</view>
				<view class="agree-button">
					<button @click="agreenClick(false)" type="warn" plain>不同意</button>
					<button @click="agreenClick(true)" type="warn">同意</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import md5 from "@/common/SDK/md5.min.js";
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import { buziAPI } from '@/api';
	export default {
		components:{
		uniPopup	
		},
		watch: {
			time(n, o) {
				if (n == 0) {
					this.countDown = false;
				}
			}
		},
		data() {
			return {
				member: {
					password: '',
					confirmPassword:'',//确认密码
					passwordType:true,//密码是否可见
					confirmPasswordType:true//确认密码是否可见
				},
				phone: {
					name: '',
					imageCode: '',
					smsCode: ''
				},
				imageCode: '', //图形验证码
				countDown: false, //是否倒计时
				warningTitle: '', //警告文字
				showWarn: false, //是否显示警告文字
				time: '', //倒计时时间
				agree:false,//是否同意协议
			}
		},
		onLoad() {
this.getImageCode();
		},
		methods: {
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
			//是否同意协议
			agreenClick(type){
				this.agree = type
				this.$refs.popup.close()
			},
			//注册
			registerClick(){
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
					}
				}
				if (this.member.password.length<6||this.member.password.length>20) {
					this.showWarn = true;
					this.warningTitle = '密码长度不符合规定';
					return false;
				}
				if (this.member.password!=this.member.confirmPassword) {
					this.showWarn = true;
					this.warningTitle = '两次输入的密码不一样';
					return false;
				}
				if (!this.agree) {
					this.showWarn = true;
					this.warningTitle = '请先阅读并同意《好药师用户注册协议》';
					return false;
				}
				this.showWarn = false;
				this.warningTitle = '';
				buziAPI.register(
					{
						mobile: this.phone.name,
						mobileCode: this.phone.smsCode,
						uniqueIdentifier: 'pc_uniqueIdentifier',
						password: this.member.password,
						coonType: 5,
						cityId: '010'
					},
					res => {
						if (res.msg == '注册成功!') {
							this.countDown = false;
							this.common.switchTab('./home')
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
</script>

<style lang="scss" scoped>
@import '../../mixin';
.login-header {
	padding: 0 20upx;
	height: 80upx;
	background: $base-color;
	@include flex(space-between);
	color: #fff;
	.center-header {
		height: auto;
		overflow: visible;
	}
}
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
	.agreement{
		padding: 20upx;
		@include flex(flex-start);
		i{
			font-size: 30upx;
			margin-right: 10upx;
		}
	}
	.agreement-content{
		@include wh(80vw,800upx);
		margin: 0 auto;
		padding: 20upx;
		background-color: #FFF;
		.agree-name{
			height: 725upx;
			overflow: scroll;
			.title{
			text-align: center;	
			font-size: 50upx;
			font-weight: 600;
			}
			.title-red{
				color: $base-color;
				font-weight: 600;
			}
		}
		.agree-button{
			margin-top: 20upx;
			@include flex(space-between);
			button{
				width: 35vw;
				height: 70upx;
				line-height: 70upx;
			}
				
		}
	}
	.login-button {
		padding: 50upx;
	}
</style>
