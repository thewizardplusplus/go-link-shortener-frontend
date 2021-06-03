import React from 'react'
import { PageHeader as AntPageHeader, Tag } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import packageInfo from '../../../package.json'
import './PageHeader.css'

export function PageHeader() {
  return (
    <AntPageHeader
      backIcon={
        <Link to="/">
          <HomeOutlined />
        </Link>
      }
      title={<Link to="/">{'go-link-shortener'}</Link>}
      tags={<Tag>{packageInfo.version}</Tag>}
      onBack={() => null}
    />
  )
}
