import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import PublicStudioRoute from '../PublicStudioRoute'

export default function RoutePublicStudioPage(props) {

  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to="/login" />
      </Route>
      <Route path={`/:public_page`}>
        <PublicStudioRoute />
      </Route>
    </Switch>

  )
}