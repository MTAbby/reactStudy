/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 应用程序容器组件主文件
 * @Date: 2018-03-07 14:41:58 
 * @Last Modified by: shuman
 * @Last Modified time: 2018-08-15 16:06:15
  */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import Loadable from 'react-loadable'

import AuthorizedRoute from './authorizedRoute'
import LoadingComponent from '@/components/loading/LoadingComponent'

// Containers
import LoginContainer from './login/loginContainer'

// 按需加载
const LoadablePrimary = Loadable({
  loader: () => import('./primaryContainer'),
  loading: LoadingComponent,
  delay: 200,
  timeout: 10000
})

class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.shape({
      asyncReducers: PropTypes.object,
      asyncSagas: PropTypes.object,
      dispatch: PropTypes.func,
      getState: PropTypes.func,
      subscribe: PropTypes.func
    }).isRequired
  }

  /**
   * @description 渲染应用主render方法
   * @returns {document} 页面主框架
   * @memberof AppContainer
   */
  render() {
    const { store } = this.props

    return (
      <Provider store={store}>
        <ConnectedRouter history={store.history}>
          <Switch>
            <Route path='/app' component={LoadablePrimary} />
            <AuthorizedRoute path='/auth/login' component={LoginContainer} />
            <Redirect to='/app' />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default AppContainer
