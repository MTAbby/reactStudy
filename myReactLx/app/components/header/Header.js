import React from 'react'
import { Layout , Menu, Avatar, Row, Col} from 'antd'
import { NavLink } from 'react-router-dom'

import './index.scss'
const { Header } = Layout
const { SubMenu } = Menu

const PrimaryHeader = () => (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Row className="app-header">
            <Col span={10} className="app-name">
                <NavLink to="/app">PracticeSummary</NavLink>
            </Col>
            <Col className="app-user" span={4} >
                <Avatar size={40} icon="user" />
                <div className="name">漫途，你好</div>
            </Col>
        </Row>
    </Header>
)
export default PrimaryHeader