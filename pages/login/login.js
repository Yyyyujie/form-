// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginStatus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success: function (res) {
        wx.setStorage({
          key: 'code',
          data: res.code,
        })
      }
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

  },
  //获取输入的信息
  getMsg:function(e){
    let str = e.currentTarget.dataset.type;
    this.setData({
      [str]:e.detail.value,
      loginStatus: (str == "password" && (e.detail.value.length >= 6) && (this.data.userName)) || (str =="userName" && (e.detail.value.length > 0) && (this.data.password))?true:false
    });
  },
  //登录
  login:function(){
    let that = this;
    app.wxItools.wxItools.request(app.__config.InterfaceUrl.login, 'POST', {
      loginName: that.data.userName,
      password: that.data.password,
      // code: wx.getStorageSync('code')
      // token: wx.getStorageSync('userMsg').token
    }, (ret) => {
      console.log(ret)
    })
  }
})