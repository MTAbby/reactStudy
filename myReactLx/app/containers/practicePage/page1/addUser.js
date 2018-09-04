/*
 * @Author: shuman
 * @Date: 2018-08-30 16:53:58
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-03 22:17:47
 * @Description: 新增用户
 */

 import React, { Component }  from 'react'
 import { connect } from 'react-redux'
 import {Row, Col, Form, Input, Button, Icon } from 'antd'
 import { NavLink } from 'react-router-dom'
 import './index.scss'
 import { addUserRequest } from '@/actions/practiceAction/addUser'

 const FormItem = Form.Item

/**
 * @description 筛选state
 * @param {object} loggedUser 从reducer中筛选的对象
 * @return {object} state对象
 */
const addUserProps = ({ addUser }) => {
  return {
    addUser: addUser
  }
}
 @connect(addUserProps)

class addUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueData: ''
    }
    Form.create()
  }

  // 点击提交按钮后提交用户信息
  handleSubmit = (e) => {
    e.preventDefault()
    let { valueData } = this.state
    let { dispatch } = this.props
    this.props.form.validateFields((err, values) => {
      if(!err){
        valueData = values
        console.log(valueData, this.state)
        try {
          dispatch(addUserRequest(valueData))
        } catch(exception) {
         console.log(exception)
        }
        // this.props.history.push('/app/practice')
        alert('成功！')
      }
    })
  }

   render(){
     let { getFieldDecorator } = this.props.form
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
     return(
       <div className="add-user-box" style={{ background: '#fff', padding: '0'}}>
          <h2 className="title">
            <span>新增用户</span>
            <NavLink to='/app/practice'>
              <i className="but-return"></i>
            </NavLink>
          </h2>
           <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col span={8}>
                <FormItem
                  {...formItemLayout}
                  label="用户ID"
                >
                  {getFieldDecorator('id', {
                    rules: [{
                      pattern: /^[0-9]*$/,
                      message: '请输入支持数字0-9的输入',
                    }, {
                      required: true, 
                      message: '该选项必填',
                    }]
                  })(
                    <Input placeholder="请输入用户ID"/>
                  )} 
                  
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem
                  {...formItemLayout}
                  label="用户姓名"
                >
                  {getFieldDecorator('name', {
                      rules: [{
                        type: 'string',
                        message: '请输入用户名称',
                      }, {
                        required: true, 
                        message: '该选项必填',
                      }]
                    })(
                      <Input placeholder="请输入用户名称"/>
                    )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Button type="primary" style={{marginRight: '20px'}}  htmlType='submit' >
                <Icon type="search" />添加
              </Button>            
            </Row>
          </Form> 
       </div>
     )
   }
 }

 export default Form.create()(addUser)