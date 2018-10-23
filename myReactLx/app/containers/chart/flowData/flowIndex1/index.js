/*
 * @Author: shuman
 * @Date: 2018-09-18 14:16:08
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-18 18:07:11
 * @Description: 简单的流程图练习
 */

import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import * as hyflow from 'hyflow'
import '../index.scss'

export default class Flow1 extends Component {

  componentDidMount(){
    const ele = document.getElementById('flowIndex')
    const flow = new hyflow.Flow(ele,{
      editable:true,
      onNodeMouseEnter: () => {
        console.log(1111)
      }
    })
    
    flow.setOption({
      editable:true,
      nodeDataArray: [{
        category: 'normal',
        key: 1,
        strokeDashArray: '5 5',
        label:{
          text: '纸厂'
        }
      }, {
        category: 'normal',
        key: 2,
        strokeDashArray: '5 5',
        label:{
          text: '印刷厂'
        }
      },{
        category: 'normal',
        key: 3,
        label:{
          text: '图书馆'
        }
      }],
      linkDataArray: [{
        key: 'link', from: 1, to: 2
      }, {
        key: 'link', from: 2, to: 3,
        symbols:{
          start: {
            show: false
          }
        }
      }]
    })
  }
  render() {
    return(
      <div className="com-content">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>图表练习</Breadcrumb.Item>
          <Breadcrumb.Item>流程图</Breadcrumb.Item>
          <Breadcrumb.Item>简单的流程图</Breadcrumb.Item>
        </Breadcrumb>
        <div id="flowIndex" style={{width: '700px', height: '500px', border: '1px solid #ddd'}}>

        </div>
      </div>
    )
  }
}
