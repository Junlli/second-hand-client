export default {
  URL: 'http://mwc.ac.cn:81/',
  FILEURL: 'http://mwc.ac.cn:81/second-hand',
  // URL: '139.199.88.199:4444',
  PATH: 'second-hand/api/',
  GET_PROVINCELIST: 'common/provinceList', // 省份
  GET_CITYLIST: 'common/cityList', // 城市
  GET_SCHOOILIST: 'common/schoolList', // 学校
  POST_UPIMG: 'common/upFile', // 上传图片

  // 用户
  POST_LOGIN: 'user/login', // 登录
  GET_ISLOGIN: 'user/isLogin', // 检查是否登录
  GET_QUIT: 'user/quit', // 退出登录
  GET_CURRENTUSERINFO: 'user/currentInfo', // 拿到当前登录人信息
  POST_ADDUSER: 'user/add', // 添加用户
  GET_USERLIST: 'user/list',//查询用户列表
  GET_USERINFO: 'user/info', // 用户信息
  POST_UPUSERINFO: 'user/upInfo',//更新用户信息

  //商品分类
  GET_TYPELIST: 'type/list',//分类列表
  POST_TYPEADD: 'type/add',//添加分类
  GET_TYPEINFO: 'type/info',//分类详情
  POST_TYPEUPINFO: 'type/upInfo',//分类更新
  GET_TYPEDEL: 'type/del',//分类删除
  //商品管理
  GET_COMMODITYLIST: 'commodity/list',//商品列表
  POST_COMMODITYADD: 'commodity/add',//添加商品
  GET_COMMODITYINFO: 'commodity/info',//商品详情
  POST_COMMODITYUPINFO: 'commodity/upInfo',//商品更新
  GET_COMMODITYDEL: 'commodity/del', // 商品删除

  // 收藏商品
  POST_COLLECTIONADD: 'collection/add', // 收藏商品
  GET_COLLECTIONLIST: 'collection/list', // 收藏列表
  GET_COLLECTIONDEL: 'collection/del', // 取消收藏

  // 订单管理
  POST_ORDERADD: 'order/add', // 创建订单
  GET_ORDERLIST: 'order/list', // 订单列表
  POST_ORDERUPDATE: 'order/upInfo', // 更新订单

  // 轮播图
  GET_BANNERLIST: 'banner/list', // 轮播图列表

  // 认证中心
  POST_PROVEADD: 'prove/add' // 添加认证
}
