// pages/foods/index.js
var sellData = require('../../locationdata/testdata.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // input 输入
    bookmark: sellData.girls,
    errorimg: sellData.errorimg,
    // 数据列表
    datalist: [],
    showWhich:"imgs",
    swiperimglist:[],
    
    swiperCurrent: 0 
  },

  binderrorimg: function(e){
    console.log("aaaaaaaaaaa")
    let that = this
    let _errObj = {}
    let _errorImgIndex = e.target.dataset.errorimg
    // if (_errorImgIndex < that.data.errorimg.length){
    //   _errObj[_errorImgIndex] = that.data.errorimg[_errorImgIndex]
    // }else{
    //   let random = Math.round(Math.random() * 7)
    //   _errObj[_errorImgIndex] = that.data.errorimg[random]
    // }
    // console.log(_errObj)
    // that.setData(_errObj)
  },

  showswiper:function(e){
    let _swiperdata = e.target.dataset.listvalue
    if (_swiperdata.length < 2) { return } 
    console.log(_swiperdata)   
    let that = this
    that.setData({
      showWhich: "swiper",
      swiperimglist: _swiperdata,
    })

  },
  //轮播图的切换事件  
  swiperChange: function (e) {
    let _data = e.detail.current
    this.setData({
      swiperCurrent: _data
    })
  },
  //点击指示点切换  
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  } ,

  backimg:function(){
    let that = this
    that.setData({
      showWhich: "imgs"
    })
  },

  goSearch: function (searchtype="日系") {
    let that = this
    let _keyword = searchtype
    if (_keyword.length < 1) { return }
    let _data = {
      "order":1, 
      "page":1,
      "showapi_appid":50529,
      "showapi_test_draft":false,
      // "showapi_timestamp":20171122000445,
      "type": _keyword,
      "showapi_sign":"032e5298b4ab47eb90c728771d8ac584",
      "num": 10,
      "appkey": "8161bfdc93a60ce6c5ffef194c3dd637"
    }
    wx.request({
      url: "https://route.showapi.com/126-2",
      data: _data,
      method: 'get',
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      success: function (res) {
        console.log(res.data.showapi_res_body.pagebean)
        that.setData({
          datalist: res.data.showapi_res_body.pagebean.contentlist,
          showWhich: "imgs",
        })
      }
    })
  },

  inputmark: function (e) {
    let that = this
    let _data = e.target.dataset.values
    that.goSearch(_data)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.goSearch()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      showWhich: "imgs",
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})