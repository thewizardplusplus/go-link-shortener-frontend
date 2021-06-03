import React from 'react'
import { PageHeader as AntPageHeader, Tooltip, Tag } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import packageInfo from '../../../package.json'
import './PageHeader.css'

export function PageHeader() {
  return (
    <AntPageHeader
      backIcon={
        <Tooltip title="Home page">
          <Link to="/">
            <HomeOutlined />
          </Link>
        </Tooltip>
      }
      title={
        <Tooltip title="Home page">
          <Link to="/">{'go-link-shortener'}</Link>
        </Tooltip>
      }
      tags={<Tag>{packageInfo.version}</Tag>}
      onBack={() => null}
    />
  )
}
