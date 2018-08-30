/*
 * @Author: shuman 
 * @Date: 2018-08-15 17:22:54 
 * @Last Modified by: shuman
 * @Description:   主布局界面 
 * @Last Modified time: 2018-08-21 15:27:32
 */

 
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Layout, Menu, Breadcrumb, Icon} from 'antd'
const { Content,  Footer } = Layout

import PrimaryHeader from '@/components/header/Header'
import PrimaryLeftMenu from '@/components/leftMenu/leftMenu'
import LoadingComponent from '@/components/loading/LoadingComponent'

import Loadable from 'react-loadable'

// // 按需加载组件
const LoadableEffectsList = Loadable({
  loader: () => import('./effects/effectsList'),
  loading: LoadingComponent
})
// 欢迎界面
const LoadableWelcome = Loadable({
  loader: () => import('./welcome/welcome'),
  loading: LoadingComponent
})
// 欢迎界面
const LoadableAnimation0 = Loadable({
  loader: () => import('./effects/animation0/animation'),
  loading: LoadingComponent
})

// 练习界面
const practicePage = Loadable({
  loader: () => import('./practicePage/page1/index'),
  loading: LoadingComponent
})
// 练习界面-添加用户
const practicePageAddUser = Loadable({
  loader: () => import('./practicePage/page1/addUser'),
  loading: LoadingComponent
})

@connect(null)
export default class PrimaryHeaderContainer extends Component {
  render() {
    const { match } = this.props
    console.log(match)
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <PrimaryHeader/>
        <Layout style={{marginTop: 64 }}>
          <PrimaryLeftMenu/>
          <Layout>
             <Content style={{ margin: '0 16px' }}>
                <Switch>
                  <Route exact path={`${match.path}/effectsList`} component={LoadableEffectsList} />
                  <Route exact path={`${match.path}/effectsList/0`} component={LoadableAnimation0}/>
                  <Route exact path={`${match.path}/effectsList/1`} component={LoadableAnimation0}/>
                  <Route exact path={`${match.path}/practice`} component={practicePage}/>
                  <Route exact path={`${match.path}/practice/addUser`} component={practicePageAddUser}/>
                  <Route path={`${match.path}`} component={LoadableWelcome} />
                </Switch>
            </Content> 
            <Footer>我是底部</Footer>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
