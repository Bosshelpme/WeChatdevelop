// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[
        {
            src:'https://image.360kad.com/group1/M00/5E/E3/CgAgD2J8W22AMq2IAAD5gzYqkG0173.jpg',
        },
        {
            src:'https://image.360kad.com/group1/M00/5C/67/CgAgD2J4rrKAYlY-AAFjBJSgfFQ234.jpg',
        },
        {
            src:'https://image.360kad.com/group1/M00/60/02/CgAgD2J-A4CANZp_AADcCGsVr6s428.jpg',
        }
    ],
    lists:[
      {
      hots:[
          {
              src:'https://image.360kad.com/group2/M00/D2/FA/CgAgFF2xBViAXjgtAAAe87Ke49A017.png',
              top:'全部分类',
          },
          {
              src:'https://image.360kad.com/group2/M00/D2/FA/CgAgFV2xBWuAfRNOAAAc8bq72x0865.png',
              top:'签到有礼',
          },
          {
              src:'https://image.360kad.com/group2/M00/E3/BF/CgAgFV3p6a2AHgOmAAAlEnhRCbE663.png',
              top:'家庭用药',
          },
          {
              src:'https://image.360kad.com/group2/M00/D2/FA/CgAgFF2xBcKAQk0ZAAAfLvmCM64267.png',
              top:'男性专科',
          },
          {
            src:'https://image.360kad.com/group2/M00/E5/54/CgAgFF322WyAK29GAAAhF3WixHk064.png',
            top:'女性专科',
        },
        {
          src:'https://image.360kad.com/group1/M00/2E/B9/CgAgDmDmxkCAD8q3AAAUc1TQNZs087.png',
          top:'健康体检',
      }
      ]
  },
    ],
    boxs:[
      {
        title:'健康汇',
        tit:'省钱有妙招',
        sans:[
            {
                src:'https://image.360kad.com/group1/M00/4A/2A/CgAgD2EDoVyAUITVAACuWITlzSI175.jpg',
            },
            {
                src:'https://image.360kad.com/group2/M00/AB/9C/CgAgFFyZj4WAWQ-TAACMUw-HbOA513.jpg',
            },
            {
                src:'https://image.360kad.com/group1/M00/4A/2A/CgAgD2EDoXKAAkQ9AACxK2hOiFA098.jpg',
            },
            {
                src:'https://image.360kad.com/group1/M00/3A/5D/CgAgDmJGoD-AJRnrAABRPOgGvaU394.jpg',
            },
            
        ]
    },
      {
      title:'爱精选',
      tit:'发现更多好货',
      sans:[
          {
              src:'https://image.360kad.com/group2/M00/F2/D9/CgAgFV5y2iuAPFprAAG8Sl7gS6c598.jpg_180x180.jpg',
              top:'康恩贝 肠炎宁片 0.42g*24片',
              des:'￥23.00'
          },
          {
              src:'https://image.360kad.com/group1/M00/A6/1F/CgAgD2FkATOAVcLqAAKZEPy-Cy8020.jpg_180x180.jpg',
              top:'同仁堂 附子理中丸 9g*10丸',
              des:'￥28.00'
          },
          {
              src:'https://image.360kad.com/group1/M00/95/68/CgAgDmFQGR6AWMhOAAGqpPTokdg106.jpg_180x180.jpg',
              top:'敖东 安神补脑液 10ml*10支',
              des:'￥25.00'
          },
          {
              src:'https://image.360kad.com/group1/M00/0C/3D/CgAgEVYc_0WAcn28AAAgAJ5osis89.jpeg',
              top:'奇正 消痛贴膏 (2.5ml:1.2g)*5贴',
              des:'￥75.00'
          }
      ]
  },
  {
    title:'猜你喜欢',
    tit:'药物有妙效',
    sans:[
        {
            src:'https://image.360kad.com/group1/M00/10/88/CgAgEVaA0WSAT2ASAAAgAIGZPCY96.jpeg',
            top:'都乐 金嗓子喉片',
            des:'￥15.00'
        },
        {
            src:'https://image.360kad.com/group1/M00/3E/1C/CgAgDl9iAC6AMnHiAAJl3H6x-GQ838.jpg_180x180.jpg',
            top:'众生丸(浓缩丸)',
            des:'￥22.90'
        },
        {
            src:'https://image.360kad.com/group1/M00/A5/C3/CgAgEFke_HCAdcEXAAGbt02bDII362.jpg_180x180.jpg',
            top:'辅舒良松鼻喷雾剂 0.05%',
            des:'￥81.00'
        },
        {
          src:'https://image.360kad.com/group1/M00/1D/D6/CgAgEVapv0uAZSJJAAAgAJWAbuA94.jpeg',
          top:'999 小儿感冒颗粒',
          des:'￥19.80'
      },
      {
          src:'https://image.360kad.com/group1/M00/DE/49/CgAgD2CDf2KALe7uAAMSAC268Wc954.jpg_180x180.jpg',
          top:'江中 健胃消食片',
          des:'￥11.50'
      },
      {
          src:'https://image.360kad.com/group2/M00/01/0E/CgAgFFmwoeOABc9SAAEUxtsins0080.jpg_180x180.jpg',
          top:'必利劲 盐酸达泊西汀片',
          des:'￥280.00'
      },
      {
        src:'https://image.360kad.com/group1/M00/DC/91/CgAgDmCBDtCATxkTAAMiJs7lMMo554.jpg_180x180.jpg',
        top:'三公仔 小儿七星茶颗粒',
        des:'￥27.00'
    },
    {
        src:'https://image.360kad.com/group2/M00/37/B8/CgAgFVp8DCmAYpa6AAG3uHyG77U898.jpg_180x180.jpg',
        top:'伊可新 维生素AD滴剂',
        des:'￥55.50'
    },
    {
        src:'https://image.360kad.com/group2/M00/ED/D2/CgAgFV5R0i-AWjyDAAJMkH_BkD0166.jpg_180x180.jpg',
        top:'三精 双黄连口服液',
        des:'￥25.00'
    },
    ]
},
]
  },
  change:function(e){
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