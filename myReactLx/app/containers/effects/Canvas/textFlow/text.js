/*
 * @Author: shuman
 * @Date: 2018-09-21 15:36:09
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-21 18:12:19
 * @Description: 字体流效果
 */

import _ from 'lodash'

 class Text {
  /**
   * 默认配置项
   */
  defaultSetting() {
    return {
      width: 800,
      height: 400,
      textSty: {
        textStr: '01',
        fontSize: 14
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
   * 主绘制方法
   */
  drawCanvas(){
    let { width, height} = this.config
    let { textStr, fontSize } = this.config.textSty
    let ctx = this.canvas.getContext('2d')
    let textStrs = textStr.split('')
    
    // 计算列数
    let columns = width / fontSize
    let drops = []

    // 给画布添加高度
    this.canvas.width = width
    this.canvas.height = height
    let num = 0

    for(let i = 0; i < columns; i++){
      drops[i] = 1
    }

    function animation(){
      num++ 
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = "#0F0"
      ctx.font = fontSize + "px arial"
      for(let i = 0; i < drops.length; i++){
        let text = textStrs[ Math.floor(Math.random() * textStrs.length) ]
        ctx.clearRect(i * fontSize, drops[i] * fontSize, i * fontSize + 5, drops[i] * fontSize + 5)
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        if(drops[i] * fontSize > height && Math.random() > 0.975){
          drops[i] = 1
        }
        drops[i]++
      }
    }
    setInterval(animation, 84)
  }
 }

 export default Text