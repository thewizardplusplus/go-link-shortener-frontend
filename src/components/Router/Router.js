import React from 'react'
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom'
import { Menu } from 'antd'
import './Router.css'

export function Router() {
  return (
    <BrowserRouter>
      <div>
        <Menu mode="horizontal" defaultSelectedKeys={['home']}>
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

        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/success">Success</Route>
          <Route path="/error">Error</Route>
          <Route>
            <Redirect to="/error" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
