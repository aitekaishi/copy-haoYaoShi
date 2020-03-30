import ajax from './api'
import CommonUtils from '@/common/common.js'
let kad = 'https://www.360kad.com/'
let fangkuaiyi = 'http://gateway.fangkuaiyi.com/'
// #ifdef H5
kad = '/kad'
fangkuaiyi = '/fangkuaiyi'
// #endif

export default {
	//获取新品上市数据
    queryProductsList (listParams, success, fail, error) {
		ajax.get(`${kad}DataPlatform/GetIndexGuessLikeProducts${CommonUtils.json2url(listParams)}`,'application/json', null, success, fail, error)
    },
	//小程序根据经纬度获取位置
	getLocation (listParams, success, fail, error) {
	  ajax.get(`https://apis.map.qq.com/ws/geocoder/v1/${CommonUtils.json2url(listParams)}`,'application/json', null, success, fail, error)
	},
	//H5IP定位获取城市
	getIpLocation (listParams, success, fail, error) {
	  ajax.get(`https://restapi.amap.com/v3/ip${CommonUtils.json2url(listParams)}`,'application/json', null, success, fail, error)
	},
	//获取List
	getHeadDataList (listParams, success, fail, error) {
	  ajax.get(`${fangkuaiyi}mobile/home/getHeadData${CommonUtils.json2url(listParams)}`,'application/json', null, success, fail, error)
	},
	getTailDataList (listParams, success, fail, error) {
	  ajax.get(`${fangkuaiyi}mobile/home/getTailData${CommonUtils.json2url(listParams)}`,'application/json', null, success, fail, error)
	},
	//获取健康新闻
	getNewList (listParams, success, fail, error) {
	  ajax.get(`${fangkuaiyi}layout/h5/index${CommonUtils.json2url(listParams)}`,'application/json', null, success, fail, error)
	},
	//获取分类信息
	getcategoryList (success, fail, error) {
	  ajax.get(`https://m.ehaoyao.com/front_api/item/adapter/v1/front-classes?coonType=5&cityId=010`,'application/json', null, success, fail, error)
	},
	//获取购物车相关商品List
	getcartList (body,success, fail, error) {
	  ajax.post(`https://m.ehaoyao.com/front_api/recommend/order-cart`,'application/json', body, success, fail, error)
	},
	//获取购物车相关商品List
	getDoctorList (success, fail, error) {
	  ajax.get(`https://m.ehaoyao.com/api/mds/api/app/apiv3_0/consultDoctor.json?coonType=5&cityId=010`,'application/json', null, success, fail, error)
	},
	//手机号登录
	phoneLogin (body,success, fail, error) {
	  ajax.post(`https://m.ehaoyao.com/front_api/user/v1/mobile/account/mobileFastLogin.json`,'application/x-www-form-urlencoded', body, success, fail, error)
	},
	//用户名密码登录
	memberLogin(body,success, fail, error) {
	  ajax.post(`https://m.ehaoyao.com/front_api/user/v1/mobile/account/login.json`,'application/x-www-form-urlencoded', body, success, fail, error)
	},
	//获取短信验证码
	getSmsCode(body,success, fail, error) {
	  ajax.post(`https://m.ehaoyao.com/front_api/user/v1/mobile/account/getPicCode.json`,'application/x-www-form-urlencoded', body, success, fail, error)
	},
	//获取图形验证码
	getVerifyCode(listParams,success, fail, error) {
	  ajax.get(`https://m.ehaoyao.com/front_api/user/v1/mobile/account/getVerifyCode.json${CommonUtils.json2url(listParams)}`,'application/json', null, success, fail, error)
	},
	//注册
	register(body,success, fail, error) {
	  ajax.post(`https://m.ehaoyao.com/front_api/user/v1/mobile/account/register.json`,'application/x-www-form-urlencoded', body, success, fail, error)
	},
	//获取优惠券数量
	getCouponCount(listParams,success, fail, error) {
	  ajax.get(`https://m.ehaoyao.com/front_api/adapter/memberCoupon/couponCount${CommonUtils.json2url(listParams)}`,'application/json', null, success, fail, error)
	},
	//好药师防疫专区
	pagepurchases (body,success, fail, error) {
	  ajax.post(`https://m.ehaoyao.com/front_api/adapter/pagepurchases`,'application/json', body, success, fail, error)
	},
	//获取好药师防疫专区商品详情
	getShoppingDetail(pharmacyId,itemId,listParams,success, fail, error) {
	  ajax.get(`https://m.ehaoyao.com/front_api/item/adapter/v1/item/${pharmacyId}/${itemId}${CommonUtils.json2url(listParams)}`,'application/json', null, success, fail, error)
	},
	//获取搜索关键字
	getSuggests(listParams,success, fail, error) {
	  ajax.get(`https://m.ehaoyao.com/front_api/search/suggests${CommonUtils.json2url(listParams)}`,'application/json', null, success, fail, error)
	},
	//获取热门关键字
	getHotwords(success, fail, error) {
	  ajax.get(`https://m.ehaoyao.com/front_api/search/hotwords?coonType=5&cityId=010`,'application/json', null, success, fail, error)
	},
	//搜索
	searchGoods(body,success, fail, error) {
	  ajax.post(`https://m.ehaoyao.com/front_api/search/goods`,'application/x-www-form-urlencoded', body, success, fail, error)
	},
	//获取购物车商品数量
	getCartCount(userId,success, fail, error) {
	  ajax.get(`https://m.ehaoyao.com/front_api/trade/shopcart/v1/shopcarts/item/catalog/count?userKey=&userId=${userId}&coonType=5&cityId=010`,'application/x-www-form-urlencoded', null, success, fail, error)
	},
	//获取商品优惠
	getPromotions(body,success, fail, error) {
	  ajax.post(`https://m.ehaoyao.com/front_api/adapter/goods/promotions`,'application/json', body, success, fail, error)
	},
}
