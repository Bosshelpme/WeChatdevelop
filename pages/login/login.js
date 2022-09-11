// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      user:'',
      pass:''
  },
  login(e){
      if(e.detail.value.user==''){
          this.setData({
              user:'用户名不能为空'
          })
      }
      if(e.detail.value.pass==''){
          this.setData({
              user:'密码不能为空'
          })
      }
      if(e.detail.value.user==''&&e.detail.value.pass==''){
          this.setData({
              user:'用户名和密码不能为空'
          })
      }
      if(e.detail.value.user!=''&&e.detail.value.pass!=''){
          const db = wx.cloud.database()
          var _this=this;
          db.collection('student').where({
                  user:e.detail.value.user,
                  pass:e.detail.value.pass
              })
              .get({
              success:function(res){
                  console.log(res.data)
                  if(res.data.length==0){
                      _this.setData({
                          user:'不存在'
                      })
                  }else{
                  wx.setStorageSync('user',e.detail.value.user)
                  wx.switchTab({
                    url: '/pages/zhuye/zhuye',
                  })
              }
              }
          })
      }
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

  }
})