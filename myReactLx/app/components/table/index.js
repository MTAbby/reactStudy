/*
 * @Author: shuman
 * @Date: 2018-08-30 10:06:19
 * @LastEditors: shuman
 * @LastEditTime: 2018-08-30 16:44:14
 * @Description: 公用表格组件
 */

import React, { Component } from 'react'
import { Table, Button  } from 'antd';

const columns = [{
  title: '姓名',
  dataIndex: 'name'
}, {
  title: '登录账号',
  dataIndex: 'id',
}, {
  title: '状态',
  dataIndex: 'state',
}, {
  title: '所属机构',
  dataIndex: 'org',
}, {
  title: '用户角色',
  dataIndex: 'role',
}, {
  title: '操作',
  dataIndex: 'operation',
  render: () => <a href="javascript:;"><Button>编辑</Button></a>
}]

export default class tableList extends Component {
  render() {
    let {data} = this.props
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    }
    return (
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    )
  }
}
