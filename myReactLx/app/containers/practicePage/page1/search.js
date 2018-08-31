/*
 * @Author: shuman
 * @Date: 2018-08-30 09:47:04
 * @LastEditors: shuman
 * @LastEditTime: 2018-08-30 16:51:29
 * @Description: 
 */

import React, { Component } from 'react'
import { Divider, Row, Col, Icon, Form, Input, Select, Button } from 'antd'
import { NavLink } from 'react-router-dom'

const FormItem = Form.Item
const Option = Select.Option

export default class searchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
　}
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 12 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 18 },
      },
    }
    return (
      <div className="search-box">
        <Divider orientation="left"><Icon type="profile" />按条件搜索</Divider>
        <Form>
          <Row>
            <Col span={8}>
              <FormItem
                {...formItemLayout}
                label="用户姓名"
              >
                <Input placeholder="请输入用户名称" />
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem
                {...formItemLayout}
                label="登录账户"
              >
                <Input placeholder="请输入登录账户" />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <FormItem
                {...formItemLayout}
                label="所属机构"
              >
                <Input placeholder="请输入所诉机构" />
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem
                {...formItemLayout}
                label="职位岗位"
              >
                <Select placeholder="请选择" style={{ width: "100%" }} onChange={this.handleChange}>
                  <Option value="民警">民警</Option>
                  <Option value="处长">处长</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span={8}>
              <Button type="primary" style={{marginRight: '20px'}}  htmlType='submit' >
                <Icon type="search" />搜索
              </Button>
              <NavLink to='/app/practice/addUser'>
                <Button type="dashed"><Icon type="plus" />添加</Button>
              </NavLink>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}