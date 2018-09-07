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

import { Layout } from 'antd'
const { Content,  Footer } = Layout

import PrimaryHeader from '@/components/header/Header'
import PrimaryLeftMenu from '@/components/leftMenu/leftMenu'
import LoadingComponent from '@/components/loading/LoadingComponent'

import Loadable from 'react-loadable'

// 欢迎界面
const LoadableWelcome = Loadable({
  loader: () => import('./welcome/welcome'),
  loading: LoadingComponent
})
// 动效练习-SVG动画列表
const LoadableEffectsList = Loadable({
  loader: () => import('./effects/SVG/index'),
  loading: LoadingComponent
})

// svg动画子页面
const LoadableAnimation0 = Loadable({
  loader: () => import('./effects/SVG/animation0/animation'),
  loading: LoadingComponent
})

// 动效练习-canvas动画列表
const LoadableCanvasList = Loadable({
  loader: () => import('./effects/Canvas/index'),
  loading: LoadingComponent
})
// 动效练习-canvas动画子页面
const LoadableCanvas0 = Loadable({
  loader: () => import('./effects/Canvas/particle/index'),
  loading: LoadingComponent
})
const LoadableCanvas1 = Loadable({
  loader: () => import('./effects/Canvas/start/index'),
  loading: LoadingComponent
})
const LoadableCanvas2 = Loadable({
  loader: () => import('./effects/Canvas/ball/index'),
  loading: LoadingComponent
})

// 图表练习-地图
const LoadableMapList = Loadable({
  loader: () => import('./chart/map/index'),
  loading: LoadingComponent
})
// 图表练习-地图子页面
const LoadableFleLineMap = Loadable({
  loader: () => import('./chart/map/fleLineMap/index'),
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
                  <Route exact path={`${match.path}/svgList`} component={LoadableEffectsList} />
                  <Route exact path={`${match.path}/svgList/0`} component={LoadableAnimation0}/>
                  <Route exact path={`${match.path}/canvasList`} component={LoadableCanvasList} />
                  <Route exact path={`${match.path}/canvasList/0`} component={LoadableCanvas0}/>
                  <Route exact path={`${match.path}/canvasList/1`} component={LoadableCanvas1}/>
                  <Route exact path={`${match.path}/canvasList/2`} component={LoadableCanvas2}/>
                  <Route exact path={`${match.path}/mapList`} component={LoadableMapList} />
                  <Route exact path={`${match.path}/mapList/0`} component={LoadableFleLineMap}/>
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
