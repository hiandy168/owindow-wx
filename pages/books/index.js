// var sellData = require('../../locationdata/sellmarket.js')
// pages/books/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputdata: "",
    clearinput: false,
    searched: false,
    getresult: false,
    bookmark: ['鱼香茄子', '水煮鱼', '糖醋排骨','小炒肉','红烧肉','童子鸡']
  },

  inputchange:function(e){
    // let s_input = e.detail.value.replace(/[^a-zA-Z0-9]/g, '').toLocaleUpperCase()
    let s_input = e.detail.value    
    let s_show = s_input.length != 0 ? true : false
    this.setData({
      inputdata: s_input,
      clearinput: s_show,
    })
  },

  inputClear:function(e){
    this.setData({
      inputdata: "",
      clearinput: false
    })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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