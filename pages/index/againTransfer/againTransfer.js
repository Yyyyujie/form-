// pages/index/againTransfer/againTransfer.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  getMsg:function(e){
    let str = e.currentTarget.dataset.type;
    this.setData({
      [str]: e.detail.value
    });
  },
  //提交
  active:function(){
    let number= this.data.number;
    let that= this;
    if(!number){
      wx.showToast({
        title: '请输入市场积分',
        icon:'none'
      });
      return false
    };
    app.wxItools.wxItools.request(app.__config.InterfaceUrl.transferConsumeScore, 'GET', {
      number: that.data.number,
      token: wx.getStorageSync('userMsg').token
    }, (ret) => {
      console.log(ret);
    })
  }
})