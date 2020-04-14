import React from 'react'
import { Result } from 'antd'

export function Error() {
  return (
    <Result status="error" title="Failure" subTitle="Something went wrong." />
  )
}
