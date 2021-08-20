import React, { Fragment } from 'react'
import { Result, Input, Button, message } from 'antd'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useParams } from 'react-router-dom'
import './Success.css'

function generateUrl(serverID, code) {
  const { protocol, host } = window.location
  return serverID !== undefined
    ? `${protocol}//${host}/redirect/${serverID}:${code}`
    : `${protocol}//${host}/redirect/${code}`
}

export function Success() {
  const { serverID, code } = useParams()
  const url = generateUrl(serverID, code)
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
