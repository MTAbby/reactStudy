/*
 * @Author: shuman
 * @Date: 2018-09-04 09:43:48
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-04 09:59:26
 * @Description: 公用的普通列表
 */

 import React, {Component} from 'react'
 import { NavLink } from 'react-router-dom'
 import { List, Card, Avatar  } from 'antd'
 const { Meta } = Card

 export default class ComList extends Component {
   render() {
    const {valueData, match} = this.props
     return(
      <List
      grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 5  }}
      dataSource={valueData}
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
     )
   }
 }