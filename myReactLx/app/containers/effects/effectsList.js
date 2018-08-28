/*
 * @Author: shuman 
 * @Date: 2018-08-15 15:37:46 
 * @Last Modified by: shuman
 * @Description:   动效练习列表组件 
 * @Last Modified time: 2018-08-21 15:25:18
 */

import React, { Component } from 'react'
import { List, Card, Row, Col, Avatar  } from 'antd'
const { Meta } = Card
import { NavLink } from 'react-router-dom'
import './index.scss'

export default class EffectsList extends Component {
    render() {
        const { match } = this.props
        console.log(`${match.path}`)
        const data = [
            {   
                title: 'Title 1',
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
            }
        ]
        return (
            <div className="com-content-frame">
                <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 5  }}
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <NavLink to={`${match.path}/${index}`}>
                        <Card
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        >
                            <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={item.title}
                            description="This is the description"
                            />
                        </Card>
                        </NavLink>
                    </List.Item>
                )}/>
            </div>
            
        )
    }
}


