import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { NavLink } from 'react-router-dom'
const { Sider } =  Layout
const { SubMenu } =  Menu

export default class PrimarySider extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key='effectsList'>
            <NavLink to='/app/effectsList'>
                <Icon type="heart" />
                <span>动效练习</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="pie-chart" />
            <span>图表练习</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="star" />
            <span>webGL练习</span>
          </Menu.Item>
          <SubMenu
            key="4"
            title={<span><Icon type="user" /><span>单纯练习</span></span>}
          >
            <Menu.Item key="practice1">
              <NavLink to='/app/practice'>
               用户管理（练习）
              </NavLink>
            </Menu.Item>
            <Menu.Item key="practice2">Bill</Menu.Item>
            <Menu.Item key="practice3">Alex</Menu.Item>
          </SubMenu>
          <Menu.Item key="7">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  } 
}