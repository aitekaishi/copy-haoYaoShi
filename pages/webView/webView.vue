<template>
	<view>
		 <web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:''
			};
		},
		onLoad(option) {
			this.src = JSON.parse(decodeURIComponent(option.url))
		}
	}
</script>

<style lang="scss">

</style>
