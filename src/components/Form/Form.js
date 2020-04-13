import React from 'react'
import { Form as AntForm, Input, Button } from 'antd'
import './Form.css'

export function Form() {
  const { Item } = AntForm
  return (
    <AntForm
      layout="inline"
      initialValues={{ url: '' }}
      onFinish={data => console.log(data)}
    >
      <Item label="URL" name="url">
        <Input placeholder="http://example.com/" />
      </Item>
      <Item>
        <Button type="primary" htmlType="submit">
          Shorten
        </Button>
      </Item>
    </AntForm>
  )
}
