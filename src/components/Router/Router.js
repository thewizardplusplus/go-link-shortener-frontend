import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Form } from '../Form/Form.js'
import { Success } from '../Success/Success.js'
import { Error } from '../Error/Error.js'

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
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
    </BrowserRouter>
  )
}
