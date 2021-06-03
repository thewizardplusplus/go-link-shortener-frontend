import React, { useState } from 'react'
import { Spin, Form as AntForm, Input, Button, message } from 'antd'
import { useHistory } from 'react-router-dom'

async function createLink(data) {
  const response = await fetch('/api/v1/links/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return await response.json()
}

export function Form() {
  const { Item } = AntForm,
    [loading, setLoading] = useState(false),
    history = useHistory()
  return (
    <Spin spinning={loading}>
      <AntForm
        layout="inline"
        initialValues={{ url: '' }}
        onFinish={async data => {
          setLoading(true)

          try {
            const link = await createLink(data)
            history.push('/success/' + link.Code)
          } catch (exception) {
            setLoading(false)
            message.error(exception.toString())
          }
        }}
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
    </Spin>
  )
}
