// pages/index/active/active.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['美国', '中国', '巴西', '日本'],
    index:0,
    number:1,
    pickWay:['自提','物流'],
    pickIndex:0
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
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  changeNumber:function(e){
    console.log(e);
    if (e.currentTarget.dataset.type=='add'){
        this.setData({
          number: this.data.number+1
        })
    } else if (e.currentTarget.dataset.type == 'jian'){
      this.setData({
        number: this.data.number==1?1:this.data.number - 1
      })
    }
  },
  number:function(e){
    this.setData({
      number: Number(e.detail.value)
    })
  },
  getMsg:function(e){
    let str=e.currentTarget.dataset.type;
    this.setData({
      [str]:e.detail.value
    })
  },
  active:function(){
    let that = this;
    let str ='product.id';
    app.wxItools.wxItools.request(app.__config.InterfaceUrl.addActivitySelf, 'GET', {
      [str]: that.data.array[that.data.index].id,
      amount:1,
      receiveType: that.data.pickIndex,//自提是0
      receiveName: that.data.pickname,
      receivePhone: that.data.pickphone,
      receiveAddress: that.data.pickaddress,
      token: wx.getStorageSync('userMsg').token
    }, (ret) => {
      console.log(ret);
    })
  },
  bindPickerChange1:function(e){
    this.setData({
      pickIndex: e.detail.value
    })
  },
  //产品名称下拉框
  produce:function(){
    app.wxItools.wxItools.request(app.__config.InterfaceUrl.productList, 'GET', {
      token: wx.getStorageSync('userMsg').token
    }, (ret) => {
      console.log(ret);
    })
  }
})