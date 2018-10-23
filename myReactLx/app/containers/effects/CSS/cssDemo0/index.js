/*
 * @Author: shuman
 * @Date: 2018-09-28 10:16:34
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-28 18:08:18
 * @Description: 3D旋转效果
 */

import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import './index.scss'

class rotate3D extends Component {
  constructor(props) {
    super(props)
    this.placeData = this.styleData()
    this.state = {
      optIndex: 0
    }
    this.valueData = ['板块1', '板块2', '板块3', '板块4', '板块5']
  }

  // 初始计算元素位置
  styleData() {
    let placeData = []
    let num = 5
    // 半数
    let halfNum = Math.floor(num / 2)
    // x轴最长半径
    let maxXR = 150
    // Y轴最长半径
    let maxYR = -190
    
    // 判断奇偶
    if ((num % 2) === 0) {
      return
    } else {
      let numX = Math.floor(maxXR / (halfNum))
      let numY = Math.floor(maxYR / (halfNum + 1))
      let aNum = 0
      let leftX
      let leftY
      let scale = 1
      for (let i = 0; i < num; i++) {
        if (i <= halfNum) {
          if (i === 0) {
            leftX = 0
            leftY = 0
            scale = 1
          } else {
            leftX = maxXR - (i - 1) * numX
            leftY = numY * i
            scale = 1 - 0.1 * i
          }
        } else {
          halfNum--
          leftX = -(maxXR - numX * halfNum)
          leftY = numY * (halfNum + 1)
          aNum++
          scale = 1 - 0.1 * (halfNum + 1)
        }
        placeData.push({ leftX, leftY, scale })
      }
    } 
    return placeData
  }

  componentDidMount() {
    this.placeData = this.styleData()
    console.log(this.placeData)
    setInterval(() => {
      this.setState({
        optIndex: 0
      })
    }, 2000)
  }

  componentDidUpdate(){
    this.placeData.push(this.placeData.shift())
  }

  render() {
    return (
      <div className='com-content'>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>动效练习</Breadcrumb.Item>
          <Breadcrumb.Item>3D旋转效果</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <div className='parcel'>
            {
              this.valueData.map((d, i) => {
                return (
                  <div className='value-box' key={i} 
                    style={{ transform: `translate(${this.placeData[i].leftX}px,${this.placeData[i].leftY}px) scale(${this.placeData[i].scale})`}}>
                    <p>{d}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default rotate3D