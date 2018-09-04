/*
 * @Author: shuman
 * @Date: 2018-09-04 10:36:07
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-04 11:30:54
 * @Description: 地图飞线练习
 */

import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import './index.scss'

// 引入D3组件高阶组件
import D3ChartFactory from '@/util/d3ChartFactory'
import fleLineMap from '@/charts/allMap/fleLineMap/index'

const FleLineMap = D3ChartFactory(fleLineMap)

export default class Chart0 extends Component {
  render() {
    let data = []
    return (
      <div className="com-content">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>图表练习</Breadcrumb.Item>
          <Breadcrumb.Item>地图</Breadcrumb.Item>
          <Breadcrumb.Item>地图飞线</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <FleLineMap data={data} />
        </div>
      </div>
    )
  }
}
