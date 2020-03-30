<template>
	<view class="keyword-page">
		<view class="header">
			<view @click="$common.switchTab('../tabBar/home')"><i class="iconfont">&#xe658;</i></view>
			<view class="center-header">
				<input placeholder="输入商品名称" v-model="keyWords" placeholder-style="color:#c0c0c0;" />
				<view @click="keyWords=''" class="icon"><i class="iconfont">&#xe62a;</i></view>
			</view>
			<view @click="serach(keyWords)">
				<view>搜索</view>
			</view>
		</view>
		<view class="space"></view>
		<view class="hot-keywords-title" v-if="!keyWordsList.length">热门搜索</view>
		<view class="hot-keywords" v-if="!keyWordsList.length">
			<view v-for="(item,index) in hotKeywordsList" :key=index class="hot-keywords-center" @click="serach(item.keysValue)">
				{{item.keysValue}}
			</view>
		</view>
		<view class="history" v-if="!keyWordsList.length">
			<view class="history-title">
				<view>历史搜索</view>
				<view @click="deleteHistory"><i class="iconfont">&#xe614;</i></view>
			</view>
			<view class="hot-keywords">
				<view v-for="(item,index) in historyList" :key=index class="hot-keywords-center" @click="serach(item)">
					{{item}}
				</view>
			</view>
			
		</view>
		<view v-for="(item,index) in keyWordsList" @click="serach(item)" :key=index>
			<view class="keyword">{{item}}</view>
			<view class="center-line"></view>
		</view>
	</view>
</template>

<script>
import { buziAPI } from '@/api';
import mixins from '@/mixins/myMixins';
export default {
	data() {
		return {
			hotKeywordsList:[],//热门关键字
			historyList:[],//历史搜索
		};
	},
	mixins:[mixins],
	onLoad() {
		this.historyList = this.$localstorageFactory.get('hisory_list')
		buziAPI.getHotwords(res=>{
			this.hotKeywordsList = res.data
		});
	},
	methods: {
		//清除搜索历史
		deleteHistory(){
			this.$localstorageFactory.remove('hisory_list')
			this.historyList = []
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../../mixin';
.keyword-page {
	background: #fff;
	min-height: 90vh;
}
.input-box {
	.iconfont {
		color: $font-color-base;
		font-size: 30upx !important;
		margin-left: 20upx;
	}
}
.icon-btn {
	margin-left: 20upx;
}
.space{
	height: 100upx;
}
.hot-keywords{
	padding: 20upx;
	display: flex;
	justify-content: flex-start;
	flex-wrap:wrap;
	.hot-keywords-center{
		font-size: 26upx;
			word-break: keep-all;
			margin: 10upx;
			background: $font-color-light;
			padding: 10upx 20upx;
		}
}

.hot-keywords-title{
	margin: 30upx 0 0 30upx;
	font-size: 28upx;
}
.history{
	padding: 20upx;
	.history-title{
		font-size: 28upx;
		@include flex(space-between);
		.iconfont{
			font-size: 40upx;
		}
	}
}

</style>
