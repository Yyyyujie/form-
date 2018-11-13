// pages/me/me.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:['女','男'],
    index:0
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
  //查看我的订单
  order:function(){
    wx.navigateTo({
      url: './order/order',
    })
  },
  //上传头像
  changeHead:function(){
    wx.chooseImage({
      count:1,
      sourceType: ['album'],
      success: function(res) {
          console.log(res);
        const tempFilePaths = res.tempFilePaths;
        wx.showLoading({
          title: '上传头像中',
        })
          wx.uploadFile({
            url: app.__config.basePath + app.__config.InterfaceUrl.imageUpload ,
            filePath: tempFilePaths[0],
            name: 'file',
            header: {
              'content-type': 'multipart/form-data'
            },
            formData: {
              'token': wx.getStorageSync('userMsg').token
            },
            success:function(ret){
              wx.hideLoading();
              console.log(ret)
            }
          })
      },
    })
  },
  //修改性别
  changeSex:function(){
    app.wxItools.wxItools.request(app.__config.InterfaceUrl.updateSex, 'POST', {
      sex: Number(this.data.index)+1,
      token: wx.getStorageSync('userMsg').token
    }, (ret) => {
      console.log(ret);
      
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    });
    this.changeSex();
  },
})