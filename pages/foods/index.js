// pages/foods/index.js
var sellData = require('../../locationdata/testdata.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // input 输入
    inputdata: "",
    clearinput: false,
    searched: false,
    getresult: false,
    bookmark: sellData.foods,

    // 数据列表
    datalist:[],
    showbody:"navs",
    fatherkeys: ['name', 'cookingtime', 'peoplenum', 'tag','content'],


  },

  inputchange: function (e) {
    // let s_input = e.detail.value.replace(/[^a-zA-Z0-9]/g, '').toLocaleUpperCase()
    let that = this
    let s_input = e.detail.value
    let s_show = s_input.length != 0 ? true : false
    if (s_show === false){
      that.setData({
        inputdata: s_input,
        clearinput: s_show,
        datalist: [],
        showbody: "navs"
      })
    }else{
      that.setData({
        inputdata: s_input,
        clearinput: s_show,
      })
    }
  },

  inputClear: function (e) {
    let that = this
    that.setData({
      inputdata: "",
      clearinput: false,
      datalist: [],
      showbody: "navs"
    })
  },

  goSearch:function(e){
    let that = this
    let _keyword = that.data.inputdata
    if (_keyword.length<1){return}
    let _data = {
      "keyword": _keyword,
      "num":10,
      "appkey":"8161bfdc93a60ce6c5ffef194c3dd637"
    }
    wx.request({
      url: "https://way.jd.com/jisuapi/search",
      data: _data,
      method: 'post',
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      success: function (res) {
        if (res.data.result.msg == "没有信息"){
          that.setData({
            datalist: [],
            showbody: "navs"
          },()=>{
            wx.showToast({
              title: '未找到相关信息',
              icon:"loading",
              duration: 1000,
            })
          })
        }else{
          that.setData({
            datalist: res.data.result.result.list,
            showbody: "getdata"
          })
        }
      }
    })
  },

  inputmark: function (e) {
    let that = this
    let _data = e.target.dataset.values
    that.setData({
      inputdata: _data,
      clearinput: true
    },()=>{
      that.goSearch(e)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.setData({
      inputdata:"童子鸡"
    },()=>{
      that.goSearch()
    })
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