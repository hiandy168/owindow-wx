// pages/foods/index.js
var sellData = require('../../locationdata/testdata.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 数据列表
    datalist: [],
    color: ['Plum1', 'SlateBlue1', 'Tomato1', 'Bisque1', 'Pink1', 'Honeydew1', 'LavenderBlush1', 'Maroon1','LightGreen'],
    colorclass:[]
  },

  goSearch: function (e) {
    let that = this
    let _data = {
      "maxResult": 50,
      "page": 1,
      "showapi_appid":"50529",
      "showapi_sign": "032e5298b4ab47eb90c728771d8ac584"
    }
    wx.request({
      url: "https://route.showapi.com" + "/341-1",
      data: _data,
      method: 'post',
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      success: function (res) {
        let _resdata = res.data.showapi_res_body.contentlist
        let _random = that.data.color
        let _class = []
        _resdata.forEach((item, index, _resdata)=>{
          let _index = parseInt(Math.random()*9)
          _class.push(_random[_index])
        })
          that.setData({
            datalist: _resdata ,
            colorclass: _class
          })
      }
    })
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