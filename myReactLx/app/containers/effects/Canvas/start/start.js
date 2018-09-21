/*
 * @Author: shuman
 * @Date: 2018-09-05 09:34:53
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-21 16:24:38
 * @Description: 星河封装
 */

import _ from 'lodash'

class start {
  /**
   * 默认配置项
   */
  defaultSetting() {
    return {
      width: 800,
      height: 400,
      starSty: {
        starscolor: 230,  // 星星颜色(hsla的hue色调)
        starsamount: 1000,  // 星星数量
        starsradius: 60,    // 星星半径比
        movrange: 4,      // 星星移动范围(值越大范围越小)   
        speed: 50000,     // 星星移动速度(值越大速度越慢)
        trailing: 0.1    // 星星拖尾效果(0~1值越小拖尾越明显)
      }
    }
  }

  /**
   * 初始化内容
   * @param {string} select 容器的id
   * @param {object} opt 需要改变的配置项
   */
  constructor(select, opt) {
    const defaultSetting = this.defaultSetting()
    this.config = _.merge({}, defaultSetting, opt)

    // canvas的一些初始项
    this.canvas = document.getElementById(select)
  }

  /**
   * 绘制星河
   */
  drawCanvas() {
    let {
      starscolor, 
      starsamount, 
      starsradius, 
      speed, 
      trailing
    } = this.config.starSty
    let _this = this

    let ctx = this.canvas.getContext('2d')
    let w = this.config.width
    let h = this.config.height
    // 给画布添加高度
    this.canvas.width = w
    this.canvas.height = h

    let hue = starscolor
    let stars = []
    let count = 0
    // 星星数量
    let maxStars = starsamount
    // 调用返回单个星的样式
    let singleStar = this.singleStar()

    
    let Star = function () {
      this.orbitRadius = _this.random(_this.maxOrbit(w, h));
      this.radius = _this.random(starsradius, this.orbitRadius) / 8;
      //星星半径大小
      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.timePassed = _this.random(0, maxStars);
      this.speed = _this.random(this.orbitRadius) / speed;
      //星星移动速度
      this.alpha = _this.random(2, 10) / 10;

      count++;
      stars[count] = this;
    }

    Star.prototype.draw = function () {
      let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX
      let y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY
      let twinkle = _this.random(10)

      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
      }

      ctx.globalAlpha = this.alpha;
      ctx.drawImage(singleStar, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
      this.timePassed += this.speed;
    }

    for (var i = 0; i < maxStars; i++) {
      new Star();
    }

    function animation() {
      // ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = trailing; //尾巴
      ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)'
      // ctx.fillStyle = 'transparent'
      ctx.fillRect(0, 0, w, h)

      ctx.globalCompositeOperation = 'lighter'
      for (var i = 1, l = stars.length; i < l; i++) {
        stars[i].draw()
      }

      window.requestAnimationFrame(animation);
    }
    animation()
  }

  /**
   * 暂定还不知道是算什么的也应该和范围有关系
   * @param {*} min 
   * @param {*} max 
   */
  random(min, max) {
    if (arguments.length < 2) {
      max = min;
      min = 0;
    }

    if (min > max) {
      var hold = max;
      max = min;
      min = hold;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  /**
   * 暂定应该是算范围的
   * @param {*} x 
   * @param {*} y 
   */
  maxOrbit(x, y) {
    let { movrange } = this.config.starSty
    let max = Math.max(x, y)
    let diameter = Math.round(Math.sqrt(max * max + max * max))
    // 星星移动范围，值越大范围越小
    return diameter / movrange
  }

  /**
   * 定义单个星星的样式，方便后面应用
   * @return {object} singleStar   返回
   */
  singleStar() {
    let { starscolor } = this.config.starSty
    let hue = starscolor
    let singleStar = document.createElement('canvas')
    let ctx2 = singleStar.getContext('2d')
    singleStar.width = 100
    singleStar.height = 100
    let half = singleStar.width / 2
    // 渐变
    let gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
    gradient2.addColorStop(0.025, '#CCC')
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)')
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)')
    gradient2.addColorStop(1, 'transparent')

    ctx2.fillStyle = gradient2
    ctx2.beginPath()
    ctx2.arc(half, half, half, 0, Math.PI * 2)
    ctx2.fill()
    return singleStar
  }
}

export default start