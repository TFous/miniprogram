//index.js
//获取应用实例
const app = getApp()
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    background: ['../asset/img/1.jpg', '../asset/img/2.jpg', '../asset/img/3.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    current: 0
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  imageLoad(e) {
    this.imgheights = []
    // 获取图片真实宽度
    var imgwidth = e.detail.width
    var imgheight = e.detail.height
    // 宽高比
    var ratio = imgwidth / imgheight
    console.log(imgwidth, imgheight)
    // 计算的高度值
    var viewHeight = 750 / ratio
    imgheight = viewHeight
    // 把每一张图片的高度记录到数组里
    this.imgheights.push(imgheight)
    // 取出图片数组中最高的一个值
    this.imgBoxSize = Math.max.apply(null, this.imgheights)
    this.$apply()
  },
  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})