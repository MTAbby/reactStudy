/*
 * @Author: shuman
 * @Date: 2018-08-27 17:26:39
 * @LastEditors: shuman
 * @LastEditTime: 2018-08-29 14:49:42
 * @Description: 练习页面1
 */

import React, { Component } from 'react'
import { Breadcrumb, Divider, Row, Col, Icon, Form, Input, Select } from 'antd'
const FormItem = Form.Item
const Option = Select.Option
export default class practicePage1 extends Component {
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
            <div className="com-content">
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>练习页面</Breadcrumb.Item>
                    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: '1px 0 24px 0', minHeight: 380 }}>
                    {/* 条件搜索框 */}
                    <div>
                        <Divider orientation="left"><Icon type="search" />按条件搜索</Divider>
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
                                        <Select placeholder="请选择"  style={{ width: "100%"}} onChange={this.handleChange}>
                                            <Option value="民警">民警</Option>
                                            <Option value="处长">处长</Option>
                                        </Select>
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>

                    </div>
                </div>
            </div>
        )
    }

}