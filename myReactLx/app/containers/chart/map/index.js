/*
 * @Author: shuman 
 * @Date: 2018-08-15 15:37:46 
 * @Last Modified by: shuman
 * @Description:   动效练习列表组件 
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
        title: '地图飞线效果',
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


