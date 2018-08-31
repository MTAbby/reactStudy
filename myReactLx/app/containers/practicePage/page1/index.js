/*
 * @Author: shuman
 * @Date: 2018-08-30 09:21:39
 * @LastEditors: shuman
 * @LastEditTime: 2018-08-30 17:12:57
 * @Description: 练习页面
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, Divider, Icon } from 'antd'
import SearchForm from './search'
import UserTable from '@/components/table/index'
import { page1Request } from '@/actions/practiceAction/page1Action'
import './index.scss'

/**
 * @description 筛选state
 * @param {object} loggedUser 从reducer中筛选的对象
 * @return {object} state对象
 */
const pageListProps = ({ practicePageData1 }) => {
  return {
    pageList: practicePageData1.pageList
  }
}

@connect(pageListProps)
export default class practicePage1 extends Component {
  constructor () {
    super()
  }
  componentDidMount() {
    this.props.dispatch(page1Request())
  }
  
  render() {
    console.log(this.props)
    let { pageList } = this.props
    // 给数据添加key属性，用于antd组件
    const newData = pageList
    if(pageList) {
      pageList.map((d, i) => {
        newData[i].key = d.id
      })
    }
    return (
      <div className="com-content">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>练习页面</Breadcrumb.Item>
          <Breadcrumb.Item>用户管理</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: '1px 0 24px 0', minHeight: 380 }}>
          {/* 条件搜索框 */}
          <SearchForm />
          {/* 用户列表显示 */}
          <Divider orientation="left"><Icon type="profile" />用户列表</Divider>
          <UserTable data={newData} />
        </div>
      </div>
    )
  }
}
