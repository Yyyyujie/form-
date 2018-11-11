// pages/index/reg/reg.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex: [
      {
        name: '女',
        value: 0
      }, {
        name: '男',
        value: 1
      }],
    sexValue: 0,
    sendStatus: false,
    send: '获取验证码'
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
  radioChange: function (e) {
    this.setData({
      sexValue: e.currentTarget.dataset.index
    })
  },
  getMsg: function (e) {
    let mobile = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    let str = e.currentTarget.dataset.type;
    if (str == "phone") {
      console.log(mobile.test(e.detail.value))
      this.setData({
        sendStatus: mobile.test(e.detail.value)
      })
    };
    this.setData({
      [str]: e.detail.value
    })

  },
  //点击获取验证码
  sendCode: function () {
    wx.showLoading({
      title: '发送中...',
      mask: true
    })
    let sendCon = this.data.send;
    let that = this;
    if (sendCon == "获取验证码") {
      app.wxItools.wxItools.request(app.__config.InterfaceUrl.sendCode, 'GET', {
        phone: that.data.phone,
        token: wx.getStorageSync('userMsg').token
      }, (ret) => {
        wx.hideLoading();
        if (ret.code == 200) {
          wx.showToast({
            title: '验证码已发送到' + that.data.phone + '请注意查收',
            icon: 'none'

          })
          that.secondTime();
        }
      })
    }

  },
  //发送验证码的倒计时
  secondTime: function () {
    let that = this;
    let second = 60;
    that.setData({
      send: second + "S后重发"
    })
    let inter = setInterval(function () {
      second--;
      that.setData({
        send: second + "S后重发"
      })
      if (second == 0) {
        clearInterval(inter);
        that.setData({
          send: "获取验证码",
          sendStatus: false
        })
      }
    }, 1000);
    that.setData({
      sendStatus: true
    })
  },
  reg: function () {
    let phone = this.data.phone;
    let code = this.data.code;
    let name = this.data.name;
    // let referee = this.data.referee;
    if (!phone) {
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none'
      });
      return false
    };
    if (!code) {
      wx.showToast({
        title: '请输入验证码',
        icon: 'none'
      });
      return false
    };
    if (!name) {
      wx.showToast({
        title: '请输入新密码',
        icon: 'none'
      });
      return false
    };
    //忘记密码
    app.wxItools.wxItools.request(app.__config.InterfaceUrl.forgetPwd, 'GET', {
      loginName: that.data.phone,
      code:that.data.code,
      newPwd: that.data.newPwd
    }, (ret) => {
        console.log(ret)
    })
  },
  //点击注册
  gotoReg: function () {
    wx.reLaunch({
      url: '../register/register',
    })
  },
  //点击登录
  forget: function () {
    wx.reLaunch({
      url: '../login/login',
    })
  }
})