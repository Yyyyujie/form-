Page({

  /**
   * 页面的初始数据
   */
  data: {
    cellList:[
      {
        name:'注册会员',
        icon:'icon-zhuce',
        path:'./reg/reg'
      },
      {
        name: '激活自己',
        icon: 'icon-jihuo',
        path: './active/active'
      },
      {
        name: '激活下级会员',
        icon: 'icon-jihuo',
        path: './activeOther/activeOther'
      },
      {
        name: '重消',
        icon: 'icon-jihuo',
        path: './again/again'
      },
      {
        name: '市场积分转账',
        icon: 'icon-zhuanzhang',
        path: './transfer/transfer'
      },
      {
        name: '重消积分转账',
        icon: 'icon-zhuanzhang',
        path: './againTransfer/againTransfer'
      },
      {
        name: '人员查看',
        icon: 'icon-people',
        path: './memberList/memberList'
      }
    ]
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
  //九宫格页面跳转
  jump:function(e){
    console.log(e);
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
    })
  }
})