import React from 'react'
import { PageHeader as AntPageHeader, Tag } from 'antd'
import packageInfo from '../../../package.json'
import './PageHeader.css'

export function PageHeader() {
  return (
    <AntPageHeader
      backIcon="false"
      title="go-link-shortener"
      tags={<Tag>{packageInfo.version}</Tag>}
    />
  )
}
