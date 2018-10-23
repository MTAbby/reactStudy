/*
 * @Author: shuman
 * @Date: 2018-09-28 09:59:55
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-28 10:13:47
 * @Description: CSS动效练习组件
 */

 import React,{ Component } from 'react'
 import ComList from '@/components/list/index'
 import './index.scss'

 class CssAnimationList extends Component {
  render(){
    const { match } = this.props
    const data = [
      {
        title: '3D旋转',
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
    return(
      <div className="com-content-frame">
        <ComList valueData={data} match={match} />
      </div>
    )
  }
 }

 export default CssAnimationList