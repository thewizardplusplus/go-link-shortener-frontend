import React, { Fragment } from 'react'
import { Result, Input, Button, message } from 'antd'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useParams } from 'react-router-dom'
import './Success.css'

function generateUrl(code) {
  const { protocol, host } = window.location
  return `${protocol}//${host}/redirect/${code}`
}

export function Success() {
  const { code } = useParams()
  const url = generateUrl(code)
  return (
    <Result
      className="success-component"
      status="success"
      title="Successfully Shortened the URL!"
      extra={
        <Fragment>
          <Input readOnly defaultValue={url} />

          <CopyToClipboard
            text={url}
            onCopy={() => {
              message.success('Shortened URL has been copied!')
            }}
          >
            <Button>Copy</Button>
          </CopyToClipboard>
        </Fragment>
      }
    />
  )
}
