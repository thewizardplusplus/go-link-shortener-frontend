import React, { useState } from 'react'
import { Spin, Form as AntForm, Input, Button, message } from 'antd'
import { useHistory } from 'react-router-dom'

async function createLink(data) {
  const response = await fetch('/api/v1/links/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  const responseData = await response.json()
  if (!response.ok) {
    throw new Error(responseData.Error)
  }

  return responseData
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
            const route =
              link.ServerID !== undefined
                ? `/success/${link.ServerID}:${link.Code}`
                : `/success/${link.Code}`
            history.push(route)
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
