import React from 'react'
import { Layout } from 'antd'
import { PageHeader } from '../PageHeader/PageHeader.js'
import { RouteSwitch } from '../RouteSwitch/RouteSwitch.js'
import 'antd/dist/antd.css'
import './App.css'

export function App() {
  const { Header, Footer, Content } = Layout
  return (
    <Layout>
      <Header>
        <PageHeader />
      </Header>

      <Content>
        <RouteSwitch />
      </Content>

      <Footer>Copyright &copy; 2020 thewizardplusplus</Footer>
    </Layout>
  )
}
