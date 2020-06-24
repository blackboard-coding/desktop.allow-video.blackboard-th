import React, { useState, Fragment, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { RoutePrivateStudioRoute, RoutePublicStudioRoute } from '@blackboard-th/routes'

function App() {
  const [
    auth,
    setAuth
  ] = useState(false);

  const [
    user,
    setUser
  ] = useState(null);
  const [room, setRoom] = useState(null)

  useEffect(() => {
    // const user = {
    //   id: "01",
    //   name: "User Test"
    // }
    // console.log(sessionStorage.getItem("access_token"));

    var myHeaders = new Headers();

    myHeaders.append("authorization", "Bearer " + sessionStorage.getItem("access_token") + "");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    if (sessionStorage.getItem("access_token") !== null) {
      fetch("https://app.blackboard-th.com/api/v1/account/profile", requestOptions)
        .then(response => response.text())
        .then(result => {
          var data = JSON.parse(result)
          setAuth(true)
          console.log('setAuth(true)');
          
          setUser(data.user)
          if (data.user.room !== 0) {

            fetch("https://app.blackboard-th.com/api/v1/shop/profile", requestOptions)
              .then(response => response.text())
              .then(result => {
                var res = JSON.parse(result)
                setRoom(res.result)
                console.log(res)
              })
              .catch(error => console.log('error', error));
          }

          console.log(data.user)
        })
        .catch(error => {
          setAuth(false)
          setUser(null)
          console.log('error', error)
        });
    }



  }, [])

  function OnPage() {
    switch (auth) {
      case true:
        return (<RoutePrivateStudioRoute userData={user} roomData={room} />)
        break;
      case false:
        return (<RoutePublicStudioRoute />)
        break;
      default: return (<Fragment></Fragment>)
        break;
    }
  }

  return (
    <OnPage />
  );
}

export default App;
