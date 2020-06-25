import React, { useEffect, useState, Fragment } from 'react';
import VideoPlayer from '@blackboard-th/components/VideoPlayer'
import { useParams, useHistory } from 'react-router-dom';
import { Link, Avatar, Button } from '@material-ui/core';
// import ShareIcon from '@material-ui/icons/Share';
// import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import InfoIcon from '@material-ui/icons/Info';
// import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import LockIcon from '@material-ui/icons/Lock';
import { AllowVideoDialog } from '@blackboard-th/components'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: '5px 0px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        position: 'relative'
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));


function VideoView(props) {
    const [data, setData] = useState(null)
    const [user, setUser] = useState(null)
    const [auth, setAuth] = useState(false)
    const [listVideo, setListVideo] = useState(null)
    const [video, setVideo] = useState(null);
    const history = useHistory()
    const { info_id, category_id } = useParams()
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // console.log(info_id);

    function ActiveAuth() {
        if (!auth) {
            history.push('/login')
        } else {

            console.log("กำลังพัฒนา function");

        }
    }
    // console.log(category_id);

    useEffect(() => {
        var myHeaders = new Headers();

        myHeaders.append("authorization", "Bearer " + sessionStorage.getItem("access_token") + "");

        var requestUserOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://app.blackboard-th.com/api/v1/account/profile", requestUserOptions)
            .then(response => response.text())
            .then(result => {
                var data = JSON.parse(result)
                setAuth(true)
                setUser(data.user)
            }).catch(error => console.log('error', error));



        // fetch("https://app.blackboard-th.com/api/v1/home/lesson/random/" + category_id, requestOptions)
        //     .then(response => response.text())
        //     .then(result => {
        //         var json_data = JSON.parse(result);
        //         setListVideo(json_data.results)
        //         // setVideo({
        //         //     autoplay: false,
        //         //     controls: json_data.product.type === 1 ? true : false,
        //         //     // controls: true ,
        //         //     sources: [{
        //         //         src: json_data.product.type === 1 ? json_data.vdo_list[0].url : "",
        //         //         type: 'video/mp4'
        //         //     }],
        //         //     poster: json_data.product.cover
        //         // })
        //         // setTotal(json_data.total)
        //         console.log(json_data)
        //     })
        //     .catch(error => console.log('error', error));

        fetch("https://app.blackboard-th.com/api/v1/lesson/" + info_id, requestOptions)
            .then(response => response.text())
            .then(result => {
                let json_data = JSON.parse(result);
                setData(json_data)
                setVideo({
                    autoplay: false,
                    controls: json_data.product.type === 1 ? true : false,
                    // controls: true ,
                    sources: [{
                        src: json_data.product.type === 1 ? json_data.vdo_list[0].url : "",
                        type: 'video/mp4' || 'video/mov'
                    }],
                    poster: json_data.product.cover
                })
                // setTotal(json_data.total)
                console.log(result)
            })
            .catch(error => console.log('error', error));





        // test data
        // setData(data_tast.results)
        // setTotal(data_tast.total)
    }, [])

    return (
        <div style={{

            // margin: '0px 100px',
            display: 'flex'
        }}>
            <IconButton
                onClick={() => {
                    history.goBack()
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    zIndex: 1000,
                    marginLeft: 15,
                    color: '#ffffff'

                }} aria-label="back" component="span">
                <ArrowBackIosIcon style={{
                    fontSize: 55
                }} />
            </IconButton>
            <div style={{
                width: '-webkit-fill-available',
            }}>
                <div style={{
                    display: 'grid',
                    // padding: 10
                }}>
                    {/* video view */}
                    <div style={{

                        height: ((window.innerWidth) / 1.7)
                    }}>
                        {video !== null ? (
                            <div style={{
                                position: 'relative',
                                height: '-webkit-fill-available',
                            }}>
                                {/* {data.product.type !== 1 ? (
                                    <div style={{
                                        position: 'absolute',
                                        zIndex: 1000,
                                        height: '-webkit-fill-available',
                                        width: '-webkit-fill-available',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}>
                                        <button style={{
                                            backgroundColor: '#9acd3200',
                                            border: '2px',
                                            fontSize: '47px',
                                            width: '-webkit-fill-available',
                                        }} className="vjs-big-lock-button" type="button" title="Play Video" ariaDisabled="false">
                                            <span ariaHidden="true" className="vjs-icon-placeholder"></span>
                                            <i className="vjs-icon-lock" />
                                        </button>
                                    </div>
                                ) : (<Fragment></Fragment>)} */}

                                <VideoPlayer {...video} />

                            </div>) : (<Fragment></Fragment>)}
                    </div>
                    <div style={{
                        display: 'grid',
                        padding: 10,
                        margin: '0px 100px',
                    }}>
                        {/* title */}
                        <div style={{
                            display: 'grid'
                        }}>
                            <div style={{
                                width: '-webkit-fill-available',
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: 10
                            }}>
                                <div style={{
                                    display: 'grid',
                                    width: '-webkit-fill-available',
                                }}>
                                    {/* tag */}
                                    {data !== null ? (
                                        <div>
                                            {data.product.tag.split("#").map(_tag => (
                                                <Link >{`#${_tag}`}</Link>
                                            ))}
                                        </div>

                                    ) : ""}

                                    {/* title */}
                                    <div>
                                        <h2>
                                            {data !== null ? data.product.title : ""}
                                        </h2>
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    width: '-webkit-fill-available',
                                    justifyContent: 'flex-end'
                                }}>
                                    {data !== null ? (<div style={{
                                        display: 'flex',
                                        width: '-webkit-fill-available',
                                        justifyContent: 'flex-end',
                                    }}>
                                        {data.product.type === 1 ? (
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <div style={{
                                                    margin: '0px 20px'
                                                }}>
                                                    <h1>ราคา: 0 บาท</h1>
                                                </div>
                                            </div>
                                        ) : (
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}>
                                                    <div>
                                                        <h1>ราคา: {data.product.net} บาท</h1>
                                                    </div>

                                                </div>

                                            )}

                                    </div>) : ""}

                                </div>

                            </div>
                            {/* view */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    width: 60,
                                }}>0 views</div>
                                {/* <div style={{
                                    display: 'flex',
                                    width: '-webkit-fill-available',
                                    justifyContent: 'flex-end'
                                }}>
                                    <Button
                                        // variant="contained"
                                        // color="default"
                                        style={{
                                            margin: 5
                                        }}
                                        startIcon={<VerifiedUserIcon />}
                                    >ใบรับรอง</Button>
                                    <Button
                                        style={{
                                            margin: 5
                                        }}
                                        // variant="contained"
                                        // color="default"
                                        startIcon={<ShareIcon />}
                                    >แชร์</Button>
                                    <Button
                                        // variant="contained"
                                        // color="default"
                                        style={{
                                            margin: 5
                                        }}
                                        onClick={ActiveAuth}
                                        startIcon={<InfoIcon />}
                                    >รายงาน</Button>
                                    <Button
                                        // variant="contained"
                                        // color="default"
                                        style={{
                                            margin: 5
                                        }}
                                        onClick={ActiveAuth}
                                        startIcon={<FavoriteIcon />}
                                    >ถูกใจบทเรียน</Button>
                                    <Button style={{
                                        backgroundColor: '#007AFF',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        margin: 5
                                    }} onClick={ActiveAuth}>ซื้อ</Button>
                                </div>
                            */}
                            </div>
                            <div style={{
                                width: '-webkit-fill-available',
                                height: 2,
                                backgroundColor: '#00000038',
                                borderRadius: 10,
                                margin: '15px 0px'
                            }}></div>
                        </div>
                        {/* owner */}
                        <div style={{

                            display: 'flex'
                        }}>
                            {/* data user */}
                            <div style={{
                                width: '-webkit-fill-available',
                                display: 'grid'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <div style={{
                                        marginRight: '15px'
                                    }}>
                                        <Avatar alt={data !== null ? data.owner.name : ""} src={data !== null ? data.owner.avatar : ""} />
                                    </div>

                                    <div>
                                        <h3>{data !== null ? data.owner.name : ""}</h3>
                                    </div>

                                </div>
                                <div style={{
                                    display: 'grid',
                                    marginLeft: 55
                                }}>
                                    <div>
                                        <p>{data !== null ? data.product.desc : ""}</p>
                                    </div>
                                </div>
                            </div>
                            {/* ปุ่มติดตาม */}
                            <div style={{
                                width: '-webkit-fill-available',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                height: 50,
                            }}>
                                <Button
                                    variant="contained"
                                    color="default"
                                    onClick={handleClickOpen}
                                    style={{
                                        margin: 5
                                    }}
                                    startIcon={<img src="" />}
                                >ตรวจสอบ</Button>
                            </div>

                        </div>
                        <div style={{
                            width: '-webkit-fill-available',
                            height: 2,
                            backgroundColor: '#00000038',
                            borderRadius: 10,
                            margin: '15px 0px'
                        }}></div>
                        {/* comment */}
                    </div>


                </div>
            </div>
            <AllowVideoDialog open={open} onClose={handleClose} />
        </div >
    )
}

export default VideoView