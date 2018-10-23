/*
 * @Author: shuman
 * @Date: 2018-09-28 13:28:26
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-28 16:34:40
 * @Description: 板块组件
 */

import React, {Component} from 'react'

class ValueBox extends Component{
  render(){
    let {data} = this.props
    return(
      <div className='value-box'>
        <p>{data}</p>
      </div>
    )
  }
} 
export default ValueBox