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
          <svg width="600" height="600" style={{background: '#000'}}>
            <defs>
              <mask id="Mask">
                <circle r="100" fill="url(#grad)" cx="40" cy="40">
                <animateMotion path="M20,90 C90,40 130,40 480,120" begin="0s" dur="3s" rotate="auto" repeatCount="indefinite"/>
                </circle>
              </mask>
              <mask id="Mask1">
                <g style={{transform: "translate(0, 58px) rotate(-9deg)"}}>
                  <path d="M20,90 C90,40 130,40 480,120" stroke="#fff" fill="none" style={{ strokeWidth: '80px' }}></path>
                </g>
              </mask>
              <radialGradient
                id="grad"
                cx="0.5"
                cy="0.5"
                r="0.5" >
                <stop offset="0%" stopColor="#ff0" stopOpacity='1' />
                <stop offset="100%" stopColor="#fff" stopOpacity='0' />
              </radialGradient>
              <linearGradient id="orange1" x1="0%" y1="50%" x2="0%" y2="0%">
                <stop offset="0%" style={{stopColor:"#00feb4", stopOpacity:"1"}} />
                <stop offset="100%" style={{stopColor:"#0052ff", stopOpacity:"1"}}/>
              </linearGradient>
            </defs>
            {/* 流动的线条 */}
            <path d="M20,90 C90,40 130,40 480,120" mask="url(#Mask)" stroke="#ff0" fill="none" style={{ strokeWidth: '5px' }}></path>
            {/* 线条尾部 */}
            <g style={{transform: "translate(0,80px)"}}>
              <path d="M20,90 C90,40 130,40 480,120" stroke="#ff0" fill="none" style={{ strokeWidth: '10px' }}></path>
            </g>
            <g style={{transform: "translate(0,80px)"}}>
              {/* <path d="M0,0 L0,10 C0,10 75.826,-9.253 112.610,7.610 C112.610,7.610 57.054,-9.134 0,0 Z"  */}
              <path d="M18,86 L24,95 C90,46 130,55 280,82 C100,30 80,60 18,86 Z" 
                stroke="red" fill="none" style={{ strokeWidth: '1px' }}></path>
            </g>
          </svg>
        </div>
      </div>
    )
  }
}