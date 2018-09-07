/*
 * @Author: shuman
 * @Date: 2018-09-04 15:50:35
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-05 11:37:53
 * @Description: 绘制星空效果
 */

import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import start from './start'

 export default class starrySky extends Component {
  componentDidMount(){
    let Start = new start('myCanvas')
    Start.drawCanvas()
  }
  render() {
    return (
      <div className="com-content">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>动效练习</Breadcrumb.Item>
          <Breadcrumb.Item>canvas动画</Breadcrumb.Item>
          <Breadcrumb.Item>星空效果</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{background: '#000', width: 800, height:400}}>
          <canvas id='myCanvas' style={{background: 'transparent'}} ></canvas>
          
        </div>
      </div>
    )
  }
 }
