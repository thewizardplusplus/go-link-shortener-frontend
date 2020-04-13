import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import './Navigation.css'

export function Navigation() {
  const location = useLocation()
  const key = location.pathname.slice(1) || 'home'
  return (
    <Menu mode="horizontal" selectedKeys={[key]}>
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="success">
        <Link to="/success">Success</Link>
      </Menu.Item>
      <Menu.Item key="error">
        <Link to="/error">Error</Link>
      </Menu.Item>
    </Menu>
  )
}
