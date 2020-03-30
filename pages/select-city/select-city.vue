<template>
	<view>
		<city-select
			@cityClick="cityClick"
			:formatName="formatName"
			:activeCity="activeCity"
			:hotCity="hotCity"
			:obtainCitys="obtainCitys"
			:isSearch="true"
			ref="citys"
		></city-select>
	</view>
</template>

<script>
import citys from './citys.js';
import { mapState, mapMutations } from 'vuex';
import citySelect from '@/components/city-select/city-select.vue';
export default {
	data() {
		return {
			formatName: 'cityName',
			activeCity: {
				cityCode: '110102',
				cityName: '北京'
			}, //当前城市
			hotCity: [
				//热门城市
				{
					cityCode: '110102',
					cityName: '北京'
				},
				{
					cityCode: '310100',
					cityName: '上海市'
				},
				{
					cityCode: '110100',
					cityName: '南京'
				},
				{
					cityCode: '330100',
					cityName: '杭州市'
				},
				{
					cityCode: '420100',
					cityName: '武汉市'
				},
				{
					cityCode: '510100',
					cityName: '成都市'
				},
				{
					cityCode: '430100',
					cityName: '长沙市'
				},
				{
					cityCode: '440100',
					cityName: '广州市'
				},
				{
					cityCode: '440300',
					cityName: '深圳市'
				}
			],
			obtainCitys: citys //显示的城市数据
		};
	},
	computed: {
		...mapState({
			city: state => state.city
		})
	},
	components: {
		citySelect
	},
	onLoad() {
		//修改当前城市
		this.activeCity = {
			cityName: this.city,
			cityCode: 110100
		};
	},
	methods: {
		...mapMutations(['setCity']),
		cityClick(item) {
			this.activeCity = {
				cityName: item.cityName,
				cityCode: item.cityCode
			};
			this.$localstorageFactory.set('city_type', true);
			this.setCity(item.cityName);
			uni.navigateBack({});
		}
	}
};
</script>

<style></style>
