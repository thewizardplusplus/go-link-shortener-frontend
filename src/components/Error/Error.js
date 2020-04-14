import React from 'react'
import { Result } from 'antd'
import './Error.css'

export function Error() {
  return (
    <Result status="error" title="Failure" subTitle="Something went wrong." />
  )
}
