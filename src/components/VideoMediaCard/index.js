import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
// import Rating from '@material-ui/lab/Rating';
import GridList from '@material-ui/core/GridList';
import { useHistory, useRouteMatch } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        // width: 300,
        margin: 10
    },
    media: {
        height: 200,
    },
});

function FavoriteButton() {
    const [favorite, setFavorite] = useState(false)
    const history = useHistory();
    return (
        <IconButton
            style={{
                padding: 0
            }}
            color="secondary" aria-label="delete" onClick={() => {
                // setFavorite(!favorite)
                history.push('/login')
            }} >
            {favorite ? (
                <FavoriteIcon style={{
                    // color: "rad"
                }} />
            ) : (
                    <FavoriteBorderIcon />
                )}
        </IconButton>
    )
}

export default function VideoMediaCard(props) {
    const classes = useStyles();
    const history = useHistory();
    const { path } = useRouteMatch()

    return (
        <div>
            <GridList cellHeight={180} style={{
                justifyContent: 'center'
            }}>
                {props.data.map((_data, index) => (
                    <Card key={index}
                        style={{
                            width: 300,
                            height: '-webkit-fill-available',
                            padding: '2px',
                        }}
                        onClick={() => {
                            history.push(`/videos/${_data.id}`)
                            // window.location.reload()
                        }}
                        className={classes.root}>
                        <CardActionArea style={{
                            // height: 232
                        }}>
                            <div style={{
                                position: 'relative'
                            }}>
                                <CardMedia
                                    className={classes.media}
                                    image={_data.cover}
                                    title={_data.title}
                                />
                            </div>
                            <CardContent style={{
                                // marginRight: '37px'
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0px 16px'
                            }}>
                                <div style={{
                                    width: '-webkit-fill-available',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <div style={{
                                        marginRight: 10

                                    }}>
                                        <FavoriteButton />
                                    </div>
                                    <div>
                                        <p>{_data.favorites}</p>
                                    </div>
                                </div>
                                {_data.type === 1 ? (
                                    <div style={{
                                        padding: '2px 12px',
                                        border: '1px solid #2980ff',
                                        borderRadius: 28,
                                    }}>
                                        <h3 style={{
                                            color: '#2880FF',
                                            margin: 0,
                                            width: 'max-content'
                                        }}>ฟรี</h3>
                                    </div>
                                ) : (
                                        <div style={{
                                            padding: '2px 12px',
                                            border: '1px solid #2980ff',
                                            borderRadius: 28,
                                        }}>
                                            <h3 style={{
                                                color: '#2880FF',
                                                margin: 0,
                                                width: 'max-content'
                                            }}>{_data.net} บาท</h3>
                                        </div>
                                    )}


                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <div style={{
                                width: '-webkit-fill-available'
                            }}>
                                <div>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {_data.title}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {_data.owner}
                                    </Typography>
                                </div>
                                <div></div>
                            </div>
                        </CardActions>
                    </Card>

                ))}
            </GridList>
        </div >
    );
}
