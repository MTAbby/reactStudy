/*
 * @Author: shuman 
 * @Date: 2018-08-15 16:20:26 
 * @Last Modified by: shuman
 * @Description:   欢迎界面 
 * @Last Modified time: 2018-08-16 14:13:27
 */

import React, { Component } from 'react'
import { Breadcrumb } from 'antd'

export default class EffectsList extends Component {
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    <p>hello, welcome to my application</p>
                </div> 
            </div>
        )
    }
}

