/*
 * @Author: shuman
 * @Date: 2018-09-21 15:31:52
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-21 17:41:55
 * @Description: 字体流
 */

import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import Text from './text'

 export default class starrySky extends Component {
  componentDidMount(){
    let text = new Text('myCanvas')
    text.drawCanvas()
  }
  render() {
    return (
      <div className="com-content">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>动效练习</Breadcrumb.Item>
          <Breadcrumb.Item>canvas动画</Breadcrumb.Item>
          <Breadcrumb.Item>字体流效果</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{background: '#fff', width: 800, height:400}}>
          <canvas id='myCanvas' style={{background: 'transparent', opacity: '1'}} ></canvas>
          
        </div>
      </div>
    )
  }
 }