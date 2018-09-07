/*
 * @Author: shuman 
 * @Date: 2018-08-15 15:37:46 
 * @Last Modified by: shuman
 * @Description:   canvas动效练习列表组件 
 * @Last Modified time: 2018-08-21 15:25:18
 */

import React, { Component } from 'react'
import ComList from '@/components/list/index'
import './index.scss'

export default class EffectsList extends Component {
  render() {
    const { match } = this.props
    const data = [
      {
        title: '随机粒子上升',
      },
      {
        title: '星空效果',
      },
      {
        title: '各种小球运动练习',
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


