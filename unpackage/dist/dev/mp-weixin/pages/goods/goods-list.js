(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods/goods-list"],{

/***/ 45:
/*!**********************************************************************************!*\
  !*** D:/myProjects/copy-haoYaoShi/main.js?{"page":"pages%2Fgoods%2Fgoods-list"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _goodsList = _interopRequireDefault(__webpack_require__(/*! ./pages/goods/goods-list.vue */ 46));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_goodsList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 46:
/*!***************************************************************!*\
  !*** D:/myProjects/copy-haoYaoShi/pages/goods/goods-list.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_list_vue_vue_type_template_id_1f07f062_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods-list.vue?vue&type=template&id=1f07f062&scoped=true& */ 47);
/* harmony import */ var _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods-list.vue?vue&type=script&lang=js& */ 49);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_list_vue_vue_type_style_index_0_id_1f07f062_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods-list.vue?vue&type=style&index=0&id=1f07f062&lang=scss&scoped=true& */ 51);
/* harmony import */ var _mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_list_vue_vue_type_template_id_1f07f062_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_list_vue_vue_type_template_id_1f07f062_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f07f062",
  null,
  false,
  _goods_list_vue_vue_type_template_id_1f07f062_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "myProjects/copy-haoYaoShi/pages/goods/goods-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 47:
/*!**********************************************************************************************************!*\
  !*** D:/myProjects/copy-haoYaoShi/pages/goods/goods-list.vue?vue&type=template&id=1f07f062&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_1f07f062_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-list.vue?vue&type=template&id=1f07f062&scoped=true& */ 48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_1f07f062_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_1f07f062_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_1f07f062_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_1f07f062_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 48:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/myProjects/copy-haoYaoShi/pages/goods/goods-list.vue?vue&type=template&id=1f07f062&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  "uni-icons": () =>
    Promise.all(/*! import() | components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/components/uni-icons/uni-icons.vue */ 155)),
  "uni-drawer": () =>
    __webpack_require__.e(/*! import() | components/uni-drawer/uni-drawer */ "components/uni-drawer/uni-drawer").then(__webpack_require__.bind(null, /*! @/components/uni-drawer/uni-drawer.vue */ 205))
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      return _vm.$common.navigateBack()
    }

    _vm.e1 = function($event) {
      _vm.keyWords = ""
    }

    _vm.e2 = function($event) {
      _vm.drawerVisible = true
    }

    _vm.e3 = function($event) {
      _vm.drawerVisible = false
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 49:
/*!****************************************************************************************!*\
  !*** D:/myProjects/copy-haoYaoShi/pages/goods/goods-list.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-list.vue?vue&type=script&lang=js& */ 50);
/* harmony import */ var _mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 50:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/myProjects/copy-haoYaoShi/pages/goods/goods-list.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;







































































































var _api = __webpack_require__(/*! @/api */ 21);
var _myMixins = _interopRequireDefault(__webpack_require__(/*! @/mixins/myMixins */ 34));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}var uniDrawer = function uniDrawer() {__webpack_require__.e(/*! require.ensure | components/uni-drawer/uni-drawer */ "components/uni-drawer/uni-drawer").then((function () {return resolve(__webpack_require__(/*! @/components/uni-drawer/uni-drawer.vue */ 205));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var sTabs = function sTabs() {__webpack_require__.e(/*! require.ensure | components/s-tabs/index */ "components/s-tabs/index").then((function () {return resolve(__webpack_require__(/*! @/components/s-tabs */ 177));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var sTab = function sTab() {__webpack_require__.e(/*! require.ensure | components/s-tab/index */ "components/s-tab/index").then((function () {return resolve(__webpack_require__(/*! @/components/s-tab */ 184));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =
{
  components: {
    sTabs: sTabs,
    sTab: sTab,
    uniDrawer: uniDrawer },

  mixins: [_myMixins.default],
  data: function data() {
    return {
      saleIndex: 0, //销量排序
      priceIndex: 0, //价格排序
      activeTab: 0,
      drawerVisible: false, //侧边栏显示
      oneCheckList: [// 海外购与仅看有货
      {
        name: '海外购',
        checked: false },

      {
        name: '仅看有货',
        checked: false }],


      expressType: [// 快递方式
      {
        name: '2-5天送达',
        checked: false },

      {
        name: '海外购',
        checked: false }],


      discountType: [// 折扣服务
      {
        name: '仅看有货',
        checked: false },

      {
        name: '自营',
        checked: false },

      {
        name: '促销优惠',
        checked: false }],


      //商品品牌
      shappingType: [] };

  },
  onLoad: function onLoad(option) {
    var that = this;
    that.keyWords = option.name;
    that.getUserInfo();
    var body = {};
    if (this.$localstorageFactory.get('query_body')) {
      body = this.$localstorageFactory.get('query_body');
    } else {
      body = {
        isSelf: '', //自营 ''否 1是
        isStore: 0, //仅看有货 0否 1是
        type: 1, //1综合排序，2价格 3销量
        descs: '', // desc降序 asc升序
        cid: '',
        searchGoodsBrief: option.name,
        page: 1,
        rows: 10,
        brandId: '', //商品品牌ID
        memberId: that.login ? that.login.userId : '',
        sendMethod: '',
        isMarket: 0, // 促销优惠 0否 1是
        shippingId: '', //海外购 ''否 9是
        coonType: 5,
        cityId: '010' };

    }
    that.searchGoods(body);
    that.$localstorageFactory.set('first_good_list', true);
    that.$localstorageFactory.set('query_body', body);
  },
  //上拉加载更多
  onReachBottom: function onReachBottom() {
    var body = this.$localstorageFactory.get('query_body');
    var len = this.pagination.productList.length;
    if (len >= this.pagination.TotalCount) {
      this.pagination.loadingText = '到底了';
      return false;
    } else {
      this.pagination.index++;
      this.pagination.loadingText = '正在加载...';
      body.page = this.pagination.index;
      this.$localstorageFactory.set('query_body', body);
      this.searchGoods(body);
    }
  },
  methods: {
    //综合排序
    comprehensive: function comprehensive() {
      this.pagination.productList = [];
      this.priceIndex = 0;
      this.saleIndex = 0;
      var body = this.$localstorageFactory.get('query_body');
      body.page = 1;
      body.type = 1;
      this.searchGoods(body);
    },
    //销量、价格排序
    indexClick: function indexClick(type, index) {
      this.pagination.productList = [];
      var body = this.$localstorageFactory.get('query_body');
      body.page = 1;
      if (index == 2) {
        index = 1;
      } else {
        index++;
      }
      if (type == 1) {
        this.saleIndex = index;
        this.priceIndex = 0;
        body.type = 3;
      } else {
        body.type = 2;
        this.priceIndex = index;
        this.saleIndex = 0;
      }
      if (index == 1) {
        body.descs = 'desc';
      } else {
        body.descs = 'asc';
      }
      this.searchGoods(body);
      this.$localstorageFactory.set('query_body', body);
    },
    searchGoods: function searchGoods(body) {
      var that = this;
      that.empty = false;
      _api.buziAPI.searchGoods(body, function (res) {
        if (that.$localstorageFactory.get('first_good_list')) {
          for (var i = 0; i < res.data.brandList.length; i++) {
            that.shappingType.push({
              name: res.data.brandList[i].brandName,
              value: res.data.brandList[i].brandId,
              checked: false });

          }
          that.$localstorageFactory.set('first_good_list', false);
        }
        that.pagination.productList = [].concat(_toConsumableArray(that.pagination.productList), _toConsumableArray(res.data.goodsList));
        if (!that.pagination.productList.length) {
          that.empty = true;
        }
        that.pagination.TotalCount = res.pagination.total;
      });
    },
    //首页多选筛选
    oneCheckClick: function oneCheckClick(index, item) {
      item.checked = !item.checked;
      this.pagination.productList = [];
      var body = this.$localstorageFactory.get('query_body');
      body.page = 1;
      body.shippingId = '';
      body.isStore = 0;
      if (this.oneCheckList[0].checked) {
        this.expressType[1].checked = true;
        body.shippingId = 9;
      }
      if (this.oneCheckList[1].checked) {
        this.discountType[0].checked = true;
        body.isStore = 1;
      }
      if (!this.oneCheckList[0].checked) {
        this.expressType[1].checked = false;
      }
      if (!this.oneCheckList[1].checked) {
        this.discountType[0].checked = false;
      }

      this.searchGoods(body);
      this.$localstorageFactory.set('query_body', body);
    },
    //配送方式
    expressTypeClick: function expressTypeClick(index, item) {
      item.checked = !item.checked;
      this.pagination.productList = [];
      var body = this.$localstorageFactory.get('query_body');
      body.page = 1;
      body.shippingId = '';
      if (this.expressType[0].checked && !this.expressType[1].checked) {
        body.shippingId = 6;
      }
      if (this.expressType[1].checked && !this.expressType[0].checked) {
        this.oneCheckList[0].checked = true;
        body.shippingId = 9;
      }
      if (this.expressType[1].checked && this.expressType[0].checked) {
        this.oneCheckList[0].checked = true;
        body.shippingId = '9 6';
      }
      if (!this.expressType[1].checked) {
        this.oneCheckList[0].checked = false;
      }
      this.searchGoods(body);
      this.$localstorageFactory.set('query_body', body);
    },
    //折扣服务
    discountTypeClick: function discountTypeClick(index, item) {
      item.checked = !item.checked;
      this.pagination.productList = [];
      var body = this.$localstorageFactory.get('query_body');
      body.page = 1;
      body.isSelf = '';
      body.isStore = 0;
      body.isMarket = 0;
      if (this.discountType[0].checked) {
        this.oneCheckList[1].checked = true;
        body.isStore = 1;
      }
      if (!this.discountType[0].checked) {
        this.oneCheckList[1].checked = false;
      }
      if (this.discountType[1].checked) {
        body.isSelf = 1;
      }
      if (this.discountType[2].checked) {
        body.isMarket = 1;
      }
      this.searchGoods(body);
      this.$localstorageFactory.set('query_body', body);
    },
    //商品品牌
    shappingTypeClick: function shappingTypeClick(index, item) {
      item.checked = !item.checked;
      this.pagination.productList = [];
      var body = this.$localstorageFactory.get('query_body');
      body.page = 1;
      body.brandId = '';
      console.log(this.shappingType);
      for (var i = 0; i < this.shappingType.length; i++) {
        if (this.shappingType[i].checked) {
          body.brandId = body.brandId + ' ' + this.shappingType[i].value;
        }
      }
      this.searchGoods(body);
      this.$localstorageFactory.set('query_body', body);
    } } };exports.default = _default;

/***/ }),

/***/ 51:
/*!*************************************************************************************************************************!*\
  !*** D:/myProjects/copy-haoYaoShi/pages/goods/goods-list.vue?vue&type=style&index=0&id=1f07f062&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_2_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_1f07f062_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-2!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../mySoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-list.vue?vue&type=style&index=0&id=1f07f062&lang=scss&scoped=true& */ 52);
/* harmony import */ var _mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_2_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_1f07f062_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_2_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_1f07f062_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_2_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_1f07f062_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_2_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_1f07f062_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_2_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mySoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_1f07f062_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 52:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/myProjects/copy-haoYaoShi/pages/goods/goods-list.vue?vue&type=style&index=0&id=1f07f062&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[45,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goods/goods-list.js.map