/*
 * @Author: shuman 
 * @Date: 2018-08-15 15:37:46 
 * @Last Modified by: shuman
 * @Description:   SVG动效练习列表组件 
 * @Last Modified time: 2018-08-21 15:25:18
 */

import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './login'

import SubPage from './subPage'
export default class EffectsList extends Component {
  render() {
    const { match } = this.props
    const data = [
      {
        title: '有关线条的一些练习',
        page: '/0',
        component: SubPage.page0
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
      }
    ]
    console.log(match.path)
    return (
      <div className="com-content-frame">
        <Switch>
          {
            data.map((d, i) => {
              console.log(`${match.path}${d.page}`)
              return(
                <Route path={`${match.path}${d.page}`} component={d.component} />
              )
            })
          }
          <Route path={`${match.path}`} component={Login} /> 
        </Switch>
      </div>
    )
  }
}


