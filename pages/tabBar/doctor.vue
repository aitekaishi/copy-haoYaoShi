<template>
	<view>
		<view class="doctor-title">
			药师承诺：不推荐无关价格昂贵的药品
		</view>
		<view class="doctor-list" v-for="(item,index) in doctorList" :key=index>
			<view class="doctor-list-content">
				<view class="image">
					<image :src="item.imgPath" mode="widthFix"></image>
				</view>
				<view class="content">
					<view class="title">
						<text>{{item.doctorName}}</text>
						<text>{{item.title}}</text>
					</view>
					<view class="code">资质编号 {{item.code}}</view>
					<view class="specialty">{{item.specialty.replace(',','  ')}}</view>
				</view>
				<view class="message">
					<view class="message-image">
						<i class="iconfont">&#xe61b;</i>
					</view>
					<view class="message-title">
						立即咨询
					</view>
				</view>
			</view>
			<view class="line" v-if="index!=doctorList.length-1"></view>
		</view>
	</view>
</template>

<script>
import { buziAPI } from '@/api';
export default {
	data() {
		return {
			doctorList:[]
		};
	},
	components: {},
	computed: {},
	onPageScroll(e) {},
	onPullDownRefresh() {
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	onReachBottom() {
	},
	onLoad() {
		this.getDoctorList()
	},
	methods: {
		getDoctorList(){
			let that = this
			buziAPI.getDoctorList(
				res => {
					that.doctorList = res.datas[0].datas;
					
				}
			);
		}
	}
};
</script>
<style lang="scss" scoped>
@import '../../mixin';
.doctor-title{
	text-align: center;
	@include sc (24upx,$uni-color-primary);
	background-color: $uni-color-warning;
	padding: 10upx;
}
.doctor-list{
	background: #FFF;
	padding: 30upx;
	.doctor-list-content{
		@include flex(space-between);
		.image{
			image{
				@include wh(15vw,15vw);
			}
		}
		.content{
			-webkit-flex-basis: 60vw; /* Safari 6.1+ */
			    flex-basis: 60vw;
			.title{
				text:nth-of-type(2){
					@include sc(24upx,$font-color-light);
					margin-left: 20upx;
				}
			},
			.code{
				font-size:24upx;
			}
			.specialty{
				@include sc(24upx,$font-color-spec);
			}
		}
		.message{
			text-align: center;
			font-size: 28upx;
		}
			
	}
}
</style>
