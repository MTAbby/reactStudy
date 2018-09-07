/*
 * @Author: shuman 
 * @Date: 2018-08-16 13:49:20 
 * @Last Modified by: shuman
 * @Description:   粒子动画 
 * @Last Modified time: 2018-08-21 14:59:18
 */

import React, { Component } from 'react'
import { Breadcrumb } from 'antd'

export default class Animation0 extends Component {
  componentDidMount() {
    // 定义初始值
    let ctx = document.getElementById('myCanvas')
    let content = ctx.getContext('2d')
    let round = []
    let initRoundPopulation = 300
    let WIDTH = 800
    let HEIGHT = 500
    ctx.width = WIDTH
    ctx.height = HEIGHT

    function RoundItem(index, x, y) {
      this.index = index
      this.x = x
      this.y = y
      this.r = Math.random() * 2 + 2
      var alpha = (Math.floor(Math.random() * 10) + 1) / 12
      this.color = "rgba(255,255,255," + alpha + ")"
    }

    RoundItem.prototype.draw = function () {
      content.fillStyle = this.color
      content.shadowOffsetX = 0
      content.shadowOffsetY = 0
      content.shadowColor = this.color
      content.shadowBlur = 20
      content.shadowBlur = this.r * 2
      content.beginPath()
      content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
      content.closePath()
      content.fill()
    }

    function animate() {
      content.clearRect(0, 0, WIDTH, HEIGHT)
      for (var i in round)
        round[i].move()
      requestAnimationFrame(animate)
    }

    RoundItem.prototype.move = function () {
      this.y -= Math.random() * 0.55
      this.x += Math.random() * 0.25
      if (this.y <= -10){
        this.y = HEIGHT + 10
      }
      if (this.x >= WIDTH){
        this.x = -10
      }
      this.draw()
    }

    function init() {
      for (var i = 0; i < initRoundPopulation; i++) {
        round[i] = new RoundItem(i, Math.random() * WIDTH, Math.random() * HEIGHT);
        round[i].draw();
      }
      animate();
    }

    init()
  }

  render() {
    return (
      <div className="com-content">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>动效练习</Breadcrumb.Item>
          <Breadcrumb.Item>canvas动画</Breadcrumb.Item>
          <Breadcrumb.Item>粒子动画</Breadcrumb.Item>
        </Breadcrumb>
        {/* <div style={{ background: '#000', padding: 24, minHeight: 500 }}> */}
        <canvas id='myCanvas' style={{background: '#000' }} ></canvas>
        {/* </div> */}
      </div>
    )
  }
}