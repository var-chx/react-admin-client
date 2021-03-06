import React, { Component } from 'react'
import { Form, Input, Tree } from 'antd'
const { TreeNode } = Tree;

export default class SetRoleAuth extends Component {
  render() {
    const {role} = this.props
    return (
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
        <Form.Item label="角色名称">
          <Input
            disabled
            value={role.name}
          />
        </Form.Item>
        <Tree
          checkable
          defaultExpandedKeys={['0-0-0', '0-0-1']}
          defaultSelectedKeys={['0-0-0', '0-0-1']}
          defaultCheckedKeys={['0-0-0', '0-0-1']}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="parent 1-0" key="0-0-0" disabled>
              <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
              <TreeNode title="leaf" key="0-0-0-1" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
            </TreeNode>
          </TreeNode>
        </Tree>
      </Form>
    )
  }
}
