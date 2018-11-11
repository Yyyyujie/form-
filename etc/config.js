export default {
	//接口IP
  // basePath: 'http://qiyuan.iok.la:8080',
  // basePath: 'http://192.168.124.234:8080',
  basePath:'https://www.nuochetie.cn',
	//接口地址
	InterfaceUrl:{
    //注册接口
    reg:'/api/register',
    //发送验证码
    code:'/api/code',
    //登录接口
    login:'/api/login',
    //退出登录
    loginOut:'/api/logout',
    //首页地图地标
    map:'/api/shop/list',
    //添加订单
    addOrder:'/api/order/add',
    //发出的留言
    message:'/api/message/list',
    //添加留言
    addMessage:'/api/message/add',
    //上传头像
    upload:'/api/user/photo',
    //修改个人信息
    save:'/api/user/save',
    //查看订单
    orderList:'/api/order/list',
    //扫一扫
    scan:'/api/user/scan'
	}
}