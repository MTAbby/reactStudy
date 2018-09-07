/*
 * @Author: shuman
 * @Date: 2018-09-07 09:58:25
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-07 15:17:33
 * @Description: canvas 小球练习
 */

import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import  Ball1 from './ball1'

export default class Ball extends Component {
  componentDidMount(){
    let ball1 = new Ball1('myCanvas1')
    ball1.draw()
  }
  render() {
    return(
      <div className="com-content">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>动效练习</Breadcrumb.Item>
          <Breadcrumb.Item>canvas动画</Breadcrumb.Item>
          <Breadcrumb.Item>各种小球练习</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{background: '#fff', width: 800, height:400}}>
          <canvas id='myCanvas1' width='800' height='400'></canvas>
        </div>
      </div>
    )
  }
}
