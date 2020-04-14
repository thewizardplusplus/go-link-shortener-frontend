import React from 'react'
import { Layout as AntLayout } from 'antd'
import { PageHeader } from '../PageHeader/PageHeader.js'
import { RouteSwitch } from '../RouteSwitch/RouteSwitch.js'
import 'antd/dist/antd.css'
import './Layout.css'

export function Layout() {
  const { Header, Footer, Content } = AntLayout
  return (
    <AntLayout>
      <Header>
        <PageHeader />
      </Header>

      <Content>
        <RouteSwitch />
      </Content>

      <Footer>Copyright &copy; 2020 thewizardplusplus</Footer>
    </AntLayout>
  )
}
