import React, { Component } from 'react'
import { Card, Button, Select, Input, Table, Divider } from 'antd'
import { getProductList } from '../../api'
import {Link} from 'react-router-dom'
const { Option } = Select 

export default class ProductHome extends Component {
  state = {
    list: []
  }
  // 获取商品列表
  getProductList = async () => {
   let res = await getProductList(1, 10)
   let { list } = res.data
   this.setState({
     list
   })
  }
  // 触发添加商品
  handleAddProduct = () => {

  }
  componentDidMount () {
    this.getProductList()
  }
  // chushi
  
  render() {
    const columns = [
      {
        title: '商品名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '商品描述',
        dataIndex: 'desc',
        key: 'age',
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'address',
      },
      {
        title: '状态',
        key: 'tags',
        dataIndex: 'tags',
        render: () => (
          <>
            <div>
              <Button type="primary">下架</Button>
            </div>
            <div>
              <span>已上架</span>
            </div>
          </>
        ),
      },
      {
        title: '操作',
        key: 'action',
        render: (row) => (
          <span>
            <Button type="link">详情</Button>
            <Divider type="vertical" />
            <Button type="link" onClick={() => {this.props.history.push('/product/add-edit', row)}}>修改</Button>
          </span>
        ),
      },
    ];

    const { list } = this.state
    
    const title = (
      <>
        <Select defaultValue="0" style={{ width: 150 }} >
          <Option value="0">按名称搜索</Option>
          <Option value="1">按描述搜索</Option>
        </Select>
        <Input placeholder="关键字" style={{ width: 250, margin: "0 10px" }} />
        <Button type="primary">搜索</Button>
      </>
    )
    const extra = (
      <Link to="/product/add-edit">
       <Button type="primary" icon="plus">添加商品</Button>
      </Link>
    )
    return (
      <Card title={title} extra={extra} bordered={false} style={{ width: '100%' }}>
        <Table
          columns={columns} 
          dataSource={list} 
          bordered
          pagination={{defaultPageSize: 5}}
        />
      </Card>
    )
  }
}
