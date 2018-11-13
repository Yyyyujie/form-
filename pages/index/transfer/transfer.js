// pages/index/transfer/transfer.js
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
    console.log(e);
    let str = e.currentTarget.dataset.type;
    this.setData({
      [str]:e.detail.value
    });
  },
  sub:function(){
    let that = this;
    let phone=this.data.phone;
    let number= this.data.number;
    let mobile = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    if(!phone){
      wx.showToast({
        title: '请输入下级会员账号',
        icon: 'none'
      });
      return false
    };
    if(!mobile.test(phone)){
      wx.showToast({
        title: '会员账号格式有误',
        icon: 'none'
      });
      return false
    };
    if(!number){
      wx.showToast({
        title: '请输入积分',
        icon: 'none'
      });
      return false
    };
    app.wxItools.wxItools.request(app.__config.InterfaceUrl.transferMarketScore, 'GET', {
      phone:that.data.phone,
      number:that.data.number,
      token: wx.getStorageSync('userMsg').token
    }, (ret) => {
      console.log(ret);
    })
  }
})