// pages/ss/ss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      menus:['医疗器械','隐形眼镜','专科用药','家庭用药','健康体检'],
      num:0,
      boxs:[
    {
        title:'医疗器械',
        sans:[
            {
                src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_02.jpg',
                top:'体温计',
            },
            {
                src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_05.jpg',
                top:'血压计',
            },
            {
                src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_07.jpg',
                top:'血糖仪',
            },
            {
              src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_10.jpg',
              top:'血氧仪',
          },
          {
              src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_11.jpg',
              top:'测量仪',
          },
          {
              src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_12.jpg',
              top:'胎心仪',
          },
          {
            src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_13.jpg',
            top:'心电仪',
        },
        {
            src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_14.jpg',
            top:'计步器',
        },
        {
            src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_15.jpg',
            top:'听诊器',
        },
        {
            src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/kffz/ylqx_kffz_03.jpg',
            top:'代步车',
        },
        {
            src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/kffz/ylqx_kffz_02.jpg',
            top:'轮椅',
        },
        ]
     },
],
  },
change:function(e){
    if(e.target.dataset.id==0){
        this.setData({
            boxs: [{
                title:'医疗器械',
                sans:[
                    {
                        src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_02.jpg',
                        top:'体温计',
                    },
                    {
                        src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_05.jpg',
                        top:'血压计',
                    },
                    {
                        src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_07.jpg',
                        top:'血糖仪',
                    },
                    {
                      src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_10.jpg',
                      top:'血氧仪',
                  },
                  {
                      src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_11.jpg',
                      top:'测量仪',
                  },
                  {
                      src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_12.jpg',
                      top:'胎心仪',
                  },
                  {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_13.jpg',
                    top:'心电仪',
                },
                {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_14.jpg',
                    top:'计步器',
                },
                {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/jcqx/ylqx_jcqx_15.jpg',
                    top:'听诊器',
                },
                {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/kffz/ylqx_kffz_03.jpg',
                    top:'代步车',
                },
                {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/ylqx/kffz/ylqx_kffz_02.jpg',
                    top:'轮椅',
                },
                ]
             }]
          })
    }else if(e.target.dataset.id==1){
        this.setData({
            boxs: [{
                title:'隐形眼镜',
                sans:[
                    {
                        src:'https://res.360kad.com/theme/mobile/img/allCategory/yxyj/yxyj_01.jpg',
                        top:'隐形清洗器',
                    },
                    {
                        src:'https://res.360kad.com/theme/mobile/img/allCategory/yxyj/yxyj_02.jpg',
                        top:'眼镜盒子',
                    },
                    {
                        src:'https://res.360kad.com/theme/mobile/img/allCategory/yxyj/yxyj_03.jpg',
                        top:'护理液',
                    },
                    {
                      src:'https://res.360kad.com/theme/mobile/img/allCategory/yxyj/yxyj_04.jpg',
                      top:'透明隐形',
                  },
                  {
                      src:'https://res.360kad.com/theme/mobile/img/allCategory/yxyj/yxyj_05.jpg',
                      top:'彩色隐形',
                  },
                
                ]
             }]
        })
    }else if(e.target.dataset.id==2){
        this.setData({
            boxs:   [ {
                title:'专科用药',
                sans:[
                    {
                        src:'https://res.360kad.com/theme/mobile/img/allCategory/zkyy/gdk/zkyy_gdk_03.jpg',
                        top:'胆结石',
                    },
                    {
                        src:'https://res.360kad.com/theme/mobile/img/allCategory/zkyy/gdk/zkyy_gdk_05.jpg',
                        top:'脂肪肝',
                    },
                    {
                        src:'https://res.360kad.com/theme/mobile/img/allCategory/zkyy/gdk/zkyy_gdk_04.jpg',
                        top:'胆囊炎',
                    },
                    {
                      src:'https://res.360kad.com/theme/mobile/img/allCategory/zkyy/gdk/zkyy_gdk_02.jpg',
                      top:'肝纤维化',
                  },
                  {
                      src:'https://res.360kad.com/theme/mobile/img/allCategory/zkyy/gdk/zkyy_gdk_08.jpg',
                      top:'保肝护肝',
                  },
                  {
                      src:'https://res.360kad.com/theme/mobile/img/allCategory/zkyy/gdk/zkyy_gdk_09.jpg',
                      top:'肝炎中成药',
                  },
                  {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/zkyy/gdk/zkyy_gdk_06.jpg',
                    top:'肝硬化',
                },
                {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/zkyy/gdk/zkyy_gdk_07.jpg',
                    top:'酒精肝',
                },
                {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/zkyy/zlk/zkyy_zlk_04.jpg',
                    top:'食道癌',
                },
                ]
                }]
        })
    }else if(e.target.dataset.id==3){
        this.setData({
            boxs:    [ {
                title:'家庭用药',
                sans:[
                    {
                        src:'https://res.360kad.com/theme/mobile/img/allCategory/jtyy/jtyy_04.jpg',
                        top:'感冒灵',
                    },
                    {
                        src:'https://res.360kad.com/theme/mobile/img/allCategory/jtyy/jtyy_05.jpg',
                        top:'中暑',
                    },
                    {
                        src:'https://res.360kad.com/theme/mobile/img/allCategory/jtyy/jtyy_06.jpg',
                        top:'清热解毒',
                    },
                    {
                      src:'https://res.360kad.com/theme/mobile/img/allCategory/jtyy/jtyy_14.jpg',
                      top:'蚊虫叮咬',
                  },
                  {
                      src:'https://res.360kad.com/theme/mobile/img/allCategory/jtyy/jtyy_15.jpg',
                      top:'晕车晕船',
                  },
                  {
                      src:'https://res.360kad.com/theme/mobile/img/allCategory/jtyy/jtyy_13.jpg',
                      top:'外用退热',
                  },
                  {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/jtyy/jtyy_16.jpg',
                    top:'创口护理',
                },
                {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/jtyy/jtyy_19.jpg',
                    top:'外用常备',
                },
                {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/jtyy/jtyy_18.jpg',
                    top:'日常护理',
                },
                {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/jtyy/jtyy_12.jpg',
                    top:'药箱',
                },
                {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/jtyy/jtyy_09.jpg',
                    top:'腋臭',
                },
                {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/jtyy/jtyy_11.jpg',
                    top:'口罩',
                },
                ]
             }]
        })
    }else if(e.target.dataset.id==4){
        this.setData({
            boxs:[{
                title:'健康体检',
                sans:[
                    {
                        src:'https://res.360kad.com/theme/mobile/img/allCategory/jktj/jktj_01.jpg',
                        top:'全身体检',
                    },
                    {
                        src:'https://res.360kad.com/theme/mobile/img/allCategory/jktj/jktj_02.jpg',
                        top:'中青年',
                    },
                    {
                        src:'https://res.360kad.com/theme/mobile/img/allCategory/jktj/jktj_03.jpg',
                        top:'中老年',
                    },
                    {
                      src:'https://res.360kad.com/theme/mobile/img/allCategory/jktj/jktj_04.jpg',
                      top:'男女通用',
                  },
                  {
                      src:'https://res.360kad.com/theme/mobile/img/allCategory/jktj/jktj_05.jpg',
                      top:'婚检',
                  },
                  {
                      src:'https://res.360kad.com/theme/mobile/img/allCategory/jktj/jktj_06.jpg',
                      top:'商务体检',
                  },
                  {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/jktj/jktj_07.jpg',
                    top:'职场白领',
                },
                {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/jktj/jktj_08.jpg',
                    top:'肿瘤',
                },
                {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/jktj/jktj_09.jpg',
                    top:'疾病检测',
                },
                {
                    src:'https://res.360kad.com/theme/mobile/img/allCategory/jktj/jktj_10.jpg',
                    top:'其他慢性疾病',
                },
                ]
             }]
        })
    }
    this.setData({
        num:e.target.dataset.id
      })
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