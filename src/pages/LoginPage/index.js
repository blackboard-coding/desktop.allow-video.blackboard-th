import React, { Suspense, useEffect, useState } from 'react';
import clsx from 'clsx';
// import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { useLogin } from '@blackboard-th/controllers';
import { useStyles } from './styles';
// import FacebookLogin from 'react-facebook-login';
// import axios from 'axios';
import { logo_text_b, bg_login } from '@blackboard-th/images'

// import { POST } from '@blackboard-th/requests';
import Axios from 'axios';


export default function LoginPage(props) {
    const classes = useStyles();
    const { username, password, showPassword, textComponent, setUsername, setPassword, setShowPassword } = useLogin();
    // const [facebookRes, setFaceBookRes] = useState(null);
    const history = useHistory();


    // const handleClose = () => {
    //     history.goBack()
    // };

    const handleChange = prop => event => {
        switch (prop) {
            case "username":
                setUsername(event.target.value)
                break;
            case "password":
                setPassword(event.target.value);
                break;
            default:
                throw new Error();
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    // function goPath() {
    //     history.push('/register');
    // }

    // const responseFacebook = (response) => {
    //     setFaceBookRes(response)
    //     // sessionStorage.setItem("uid", response.id);
    //     // sessionStorage.setItem("name", response.name);
    //     console.log(response);

    // }





    // useEffect(() => {
    //     if (facebookRes !== null) {
    //         // POST("https://app.blackboard-th.com/api/v1/facebook/register", {
    //         //     facebook: "2681774912054203",
    //         //     name: "Nutthapat Piasangka",
    //         //     first_name: "",
    //         //     last_name: "",
    //         //     tel_: ""
    //         // }).then(res => {
    //         //     console.log(res);
    //         //     console.log(res.data);
    //         // })

    //         POST("https://app.blackboard-th.com/api/v1/facebook/register", {
    //             facebook: facebookRes.id,
    //             name: facebookRes.name,
    //             first_name: "",
    //             last_name: "",
    //             tel_: ""
    //         }).then(res => {
    //             // console.log(res);
    //             setRegisAlert(res.status)

    //             if (res.status !== true) {
    //                 sessionStorage.setItem("uid", facebookRes.id);
    //                 sessionStorage.setItem("name", facebookRes.name);
    //                 console.log(res.status);
    //                 sessionStorage.setItem("access_token", null)
    //                 sessionStorage.setItem("token_type", null)
    //                 sessionStorage.setItem("status", res.status)
    //                 history.push('/facebook-register');

    //             } else {
    //                 console.log(res);
    //                 sessionStorage.setItem("uid", facebookRes.id);
    //                 sessionStorage.setItem("name", facebookRes.name);
    //                 sessionStorage.setItem("access_token", res.data.access_token)
    //                 sessionStorage.setItem("token_type", res.data.token_type)
    //                 sessionStorage.setItem("status", res.status)
    //                 history.push('/');
    //                 window.location.reload()
    //             }
    //         })
    //     }
    // }, [facebookRes])

    return (
                    <div className={classes.root}>
                        {/* <Paper className={classes.paper}> */}
                        <center>
                            <div className={classes.titleLoginContainer}>
                                <img style={{
                                    width: 300,
                                    marginBottom: 25
                                }} src={logo_text_b} />
                                {/* <Typography variant="h3" component="h3">{textComponent.header.text}</Typography> */}
                                {/* <Typography variant="h5" component="h5">{textComponent.title.text}</Typography> */}

                            </div>
                            <div className={classes.mainLoginContainer}>
                                <div>
                                    {/* <FacebookLogin
                                    appId="599464243936459"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                    cssClass="my-facebook-button-class"
                                    icon="fa-facebook"
                                /> */}
                                </div>
                                <div>
                                    <FormControl className={clsx(classes.margin, classes.textField)}>
                                        <InputLabel htmlFor="standard-adornment-username">{textComponent.labal.email.text}</InputLabel>
                                        <Input
                                            id="standard-adornment-username"
                                            type="text"
                                            value={username}
                                            onChange={handleChange('username')}
                                            // endAdornment={
                                            //     <InputAdornment position="end">
                                            //         <IconButton
                                            //             aria-label="toggle username visibility"
                                            //         // onClick={handleClickShowUsername}
                                            //         // onMouseDown={handleMouseDownUsername}
                                            //         >
                                            //             <AccountCircleIcon />
                                            //         </IconButton>
                                            //     </InputAdornment>
                                            // }
                                        />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl className={clsx(classes.margin, classes.textField)}>
                                        <InputLabel htmlFor="standard-adornment-password">{textComponent.labal.pass.text}</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </div>
                                <div>
                                    <Button
                                        style={{
                                            backgroundImage: `url("${bg_login}")`,
                                            width: 200,
                                            backgroundSize: '200px 40px',
                                            borderRadius: 50,
                                            border: '3px solid #e0e0e0',
                                            color: 'white',
                                        }}
                                        variant="outlined" size="large" color="primary" onClick={() => {
                                            Axios.post(`https://app.blackboard-th.com/api/v1/login`, {
                                                email: username,
                                                password: password
                                            }, "").then(res => {
                                                console.log(res);
                                                sessionStorage.setItem("uid", res.data.access_token)
                                                sessionStorage.setItem("access_token", res.data.access_token)
                                                sessionStorage.setItem("token_type", res.data.token_type)
                                                sessionStorage.setItem("status", true)
                                                history.push('/')
                                                window.location.reload()
                                            })
                                        }} className={classes.margin}>{textComponent.button.login.text}</Button>
                                </div>

                            </div>
                        </center>
                        {/* </Paper> */}
                    </div>

    )
}