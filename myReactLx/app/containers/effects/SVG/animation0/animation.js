/*
 * @Author: shuman 
 * @Date: 2018-08-16 13:49:20 
 * @Last Modified by: shuman
 * @Description:   动画0 
 * @Last Modified time: 2018-08-21 14:59:18
 */

import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import './index.scss'

export default class Animation0 extends Component {

  render() {
    return (
      <div className="com-content">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>动效练习</Breadcrumb.Item>
          <Breadcrumb.Item>animation0</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          
        </div>
      </div>
    )
  }
}