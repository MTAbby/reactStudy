/*
 * @Author: shuman
 * @Date: 2018-08-27 17:26:39
 * @LastEditors: shuman
 * @LastEditTime: 2018-08-27 17:33:52
 * @Description: 练习页面1
 */

import React, {Component} from 'react'
import { Breadcrumb } from 'antd'

export default class practicePage1 extends Component{
    render(){
        return (
            <div className="com-content">
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>练习页面</Breadcrumb.Item>
                    <Breadcrumb.Item>传值</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    <div id="CSStransforms">
                        <canvas id="glcanvas" width="640" height="480">
                            Your browser doesn't appear to support the HTML5 <code>&lt;canvas&gt;</code> element.
                        </canvas>
                    </div>
                </div>
            </div>
        )
    }

}