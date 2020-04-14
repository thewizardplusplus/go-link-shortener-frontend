import React from 'react'
import { Result, Input, Button, message } from 'antd'
import { useParams } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './Success.css'

export function Success() {
  const { protocol, host } = window.location
  const { code } = useParams()
  const url = `${protocol}//${host}/redirect/${code}`
  return (
    <Result
      className="success-component"
      status="success"
      title="Successfully Shortened the URL!"
      extra={
        <span>
          <Input readOnly defaultValue={url} />

          <CopyToClipboard
            text={url}
            onCopy={() => {
              message.success('Shortened URL has been copied!')
            }}
          >
            <Button>Copy</Button>
          </CopyToClipboard>
        </span>
      }
    />
  )
}
