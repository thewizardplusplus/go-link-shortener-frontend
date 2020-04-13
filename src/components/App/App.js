import React from 'react'
import { Layout, PageHeader, Tag } from 'antd'
import packageInfo from '../../../package.json'
import 'antd/dist/antd.css'
import './App.css'

export function App() {
  const { Header, Footer, Content } = Layout
  return (
    <Layout>
      <Header>
        <PageHeader
          backIcon="false"
          title="go-link-shortener"
          tags={<Tag>{packageInfo.version}</Tag>}
        />
      </Header>
      <Content>Content</Content>
      <Footer>Copyright &copy; 2020 thewizardplusplus</Footer>
    </Layout>
  )
}
