/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 登录测试页面
 * @Date: 2018-03-07 14:43:06 
 * @Last Modified by: shuman
 * @Last Modified time: 2018-08-15 14:10:45
  */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Tooltip } from 'antd'
import { loginRequest } from '@/actions/loginAction'
import reduxSagaInjector from '@/util/reduxSagaInjector'

const mapStateToProps = (store) => {
  store.demo
  return {
  }
}

@connect(mapStateToProps)
class LoginContainer extends Component {
  /**
   * @description 点击登录按钮，触发action
   * @memberof LoginPage
   */
  login = () => {
    const { dispatch } = this.props
    dispatch(loginRequest())
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <p>
          <Tooltip placement="right" title='用户名'>
            <input type="text" placeholder="用户名"/>
          </Tooltip>
        </p>
        <p>
        <Tooltip placement="right" title='密码'>
          <input type="password" placeholder="密码"/>
        </Tooltip>
        </p>
        <Button type='primary' onClick={ this.login }>Login</Button>
      </div>
    )
  }
}

export default LoginContainer
