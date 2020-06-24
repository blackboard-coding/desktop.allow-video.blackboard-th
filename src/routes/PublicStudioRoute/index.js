import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Redirect,
    useRouteMatch,
    useHistory
} from "react-router-dom";

import { LoginPage } from '@blackboard-th/pages';

export default function PublicStudioRoute() {

    // const { path } = useRouteMatch()
    const { public_page } = useParams()


    switch (public_page) {
        case "login":
            // setShow({ ...show, [public_page]: true, [!public_page]: false })
            return (<LoginPage />);
            break;
        default: return (<Fragment />)
            break;
    }
}