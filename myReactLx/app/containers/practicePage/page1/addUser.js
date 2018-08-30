/*
 * @Author: shuman
 * @Date: 2018-08-30 16:53:58
 * @LastEditors: shuman
 * @LastEditTime: 2018-08-30 18:04:44
 * @Description: 新增用户
 */

 import React, { Component }  from 'react'
 import { Divider, Icon } from 'antd'
 import { NavLink } from 'react-router-dom'
 import './index.scss'

 export default class addUser extends Component {
   
   render(){
     return(
       <div className="add-user-box" style={{ background: '#fff', padding: '0'}}>
          <h2 className="title">
            <span>新增用户</span>
            <NavLink to='/app/practice'>
              <i className="but-return"></i>
            </NavLink>
          </h2>
          
       </div>
     )
   }
 }