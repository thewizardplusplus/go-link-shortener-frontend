import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Navigation } from '../Navigation/Navigation.js'
import { NavigationButton } from '../NavigationButton/NavigationButton.js'
import { Form } from '../Form/Form.js'
import { Success } from '../Success/Success.js'
import { Error } from '../Error/Error.js'

export function Router() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <span>Home</span>
            <NavigationButton />
            <Form />
          </Route>
          <Route path="/success/:code">
            <Success />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route>
            <Redirect to="/error" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
