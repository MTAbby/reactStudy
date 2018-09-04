/*
 * @Author: shuman
 * @Date: 2018-09-04 15:50:35
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-04 15:55:39
 * @Description: 绘制星空效果
 */

import React, { Component } from 'react'
import { Breadcrumb } from 'antd'

 export default class starrySky extends Component {
  render() {
    return (
      <div className="com-content">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>动效练习</Breadcrumb.Item>
          <Breadcrumb.Item>canvas动画</Breadcrumb.Item>
          <Breadcrumb.Item>星空效果</Breadcrumb.Item>
        </Breadcrumb>
        <canvas id='myCanvas' style={{background: '#000' }} ></canvas>
      </div>
    )
  }
 }
