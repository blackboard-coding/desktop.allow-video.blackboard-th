import React, { useState, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Redirect,
    useRouteMatch,
    useHistory
} from "react-router-dom";
import { VideoAllPage, VideoViewPage, SearchVideoPage } from '@blackboard-th/pages'

export default function PrivateStudioRoute(props) {
    const { path } = useRouteMatch()
    const { private_page } = useParams()
    const [user, setUser] = useState({ ...props.userData })
    const [room, setRoom] = useState({ ...props.roomData })
    // const [id, setID] = useState(sessionStorage.getItem("uid"))
    const history = useHistory()
    // console.log(private_page);
    // console.log(path);

    // useEffect(() => {
    //   // const user = {
    //   //   id: "01",
    //   //   name: "User Test"
    //   // }
    //   // console.log(sessionStorage.getItem("access_token"));

    // }, [])


    switch (private_page) {
        case 'login':
            return (<Switch>
                <Route exact={true} path={`${path}`}>
                    <Redirect to={`/videos`} />
                </Route>
            </Switch>)
            break;

        case 'videos':
            return (<Switch>
                <Route exact={true} path={`${path}`}>
                    <VideoAllPage />
                </Route>
                <Route path={`${path}/:info_id`}>
                    <VideoViewPage />
                </Route>

            </Switch>)
            break;

        case 'search':
            return (<Switch>
                <Route exact={true} path={`${path}`}>
                    <SearchVideoPage />
                </Route>
                <Route path={`${path}/video=:search_id`}>
                    <SearchVideoPage />

                    {/* <div>101</div> */}
                </Route>
            </Switch>)
            break;
        default: return (<Fragment />)
            break;
    }
}