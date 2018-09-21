/*
 * @Author: shuman
 * @Date: 2018-09-18 13:58:42
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-18 14:23:13
 * @Description: 流程图首页
 * @PS:这里主要应该是针对go.js的学习
 */

import React, { Component } from 'react'
import ComList from '@/components/list/index'
// import './index.scss'

export default class FlowList extends Component {
  render() {
    const { match } = this.props
    const data = [
      {
        title: '简单的流程图',
      },
      {
        title: 'Title 2',
      },
      {
        title: 'Title 3',
      },
      {
        title: 'Title 4',
      },
      {
        title: 'Title 4',
      },
      {
        title: 'Title 3',
      },
      {
        title: 'Title 4',
      },
      {
        title: 'Title 4',
      },
      {
        title: 'Title 2',
      },
      {
        title: 'Title 3',
      },
      {
        title: 'Title 4',
      },
      {
        title: 'Title 4',
      },
      {
        title: 'Title 3',
      },
      {
        title: 'Title 4',
      },
      {
        title: 'Title 4',
      }
    ]
    return (
      <div className="com-content-frame">
        <ComList valueData={data} match={match} />
      </div>
    )
  }
}
