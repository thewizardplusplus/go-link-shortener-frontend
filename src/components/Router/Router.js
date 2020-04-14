import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Navigation } from '../Navigation/Navigation.js'
import { NavigationButton } from '../NavigationButton/NavigationButton.js'
import { Form } from '../Form/Form.js'

export function Router() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />

        <Switch>
          <Route exact path="/">
            Home <NavigationButton />
            <Form />
          </Route>
          <Route path="/success/:code">Success</Route>
          <Route path="/error">Error</Route>
          <Route>
            <Redirect to="/error" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
