import React,{useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Redirect,
    useRouteMatch,
    useHistory
  } from "react-router-dom";
  import PrivateStudioRoute from '../PrivateStudioRoute'

export default function RoutePrivateStudioRoute(props) {
    const [user] = useState({ ...props.userData })
    const [room] = useState({ ...props.roomData })
    const [open, setOpen] = React.useState(false);





    return (
        <Switch>
            <Route exact={true} path="/">
                <Redirect to={`/videos`} />
            </Route>
            <Route path={`/:private_page`}>
                <PrivateStudioRoute userData={user} roomData={room} />
            </Route>
            {/* <Route path={`/search=:search_id`}>
            <SearchVideo/>
          </Route> */}
        </Switch>
    )
}