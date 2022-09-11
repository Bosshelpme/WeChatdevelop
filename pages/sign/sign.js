// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      user:'',
      pass:''
  },
  sign:function(e){
      var flag=true;
      //e.detail.value.表单元素的name值 获取表单元素的值
      //用户名的判断
       console.log(e)
      if(e.detail.value.user==''){
          this.setData({
              user:'用户名不能为空'
          })
          flag=false;
      }else{
          //如果用户名不是空的时候，首先进行查询数据的操作
          //使用数据库之前，一定要初始化
          const db=wx.cloud.database()
          //存储this 异步/同步
          var _this=this;
          //使用查询方法
          //where查询条件
          db.collection('student').where({
              user:e.detail.value.user
          })
          .get({
              //查询的结果
              success:function(res){
                  //查询成功以后的结果
                  console.log(res.data)
                  //res.data.length如果长度等于0说明不存在
                  if(res.data.length==0){
                      _this.setData({
                          user:''
                      })
                      
      if(flag){
          const db = wx.cloud.database()
          db.collection('student').add({
              data:{
                  user:e.detail.value.user,
                  pass:e.detail.value.pass
              },
              success:function(res){
                  console.log(res)
                  wx.navigateTo({
                    url: '/pages/login/login',
                  })
              }
          })
      }
              }else{
                  _this.setData({
                      user:'已存在用户'
                  })
                  flag=false
                  }
              }
          })
      }
      if(e.detail.value.pass==''){
          this.setData({
              pass:'密码不能为空'
          })
          flag=false
      }else{
          this.setData({
              pass:''
          })
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
          if(wx.getStorageSync('user')){
              wx.navigateTo({
                url: '/pages/first/first',
              })
          }
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