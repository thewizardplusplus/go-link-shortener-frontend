import React from 'react'
import { PageHeader as AntPageHeader, Tag } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import packageInfo from '../../../package.json'
import './PageHeader.css'

export function PageHeader() {
  const history = useHistory()
  return (
    <AntPageHeader
      backIcon={<HomeOutlined />}
      title="go-link-shortener"
      tags={<Tag>{packageInfo.version}</Tag>}
      onBack={() => history.push('/')}
    />
  )
}
