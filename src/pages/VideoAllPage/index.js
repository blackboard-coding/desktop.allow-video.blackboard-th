import React, { useEffect, useState, Fragment } from 'react';
import { VideoMediaCard } from '@blackboard-th/components'
import { useParams } from 'react-router-dom';


function VideoAllPage() {
    const [data, setData] = useState(null);
    const [total, setTotal] = useState(0);
    const { search_id } = useParams()
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("platform", "website");
        myHeaders.append("app_version", "1.0");
        myHeaders.append("language", "th");
        myHeaders.append("accept", "application/json");
        myHeaders.append("authorization", "Bearer " + sessionStorage.getItem("access_token") + "");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://app.blackboard-th.com/api/v1/my/lesson/", requestOptions)
            .then(response => response.text())
            .then(result => {
                let arr_data = [];
               
                let json_data = JSON.parse(result);
                // json_data.data.map(_data => {
                //     if (_data.status === 0) {
                //         arr_data.push(_data)
                //     }
                // })

                setData(arr_data)
                setTotal(arr_data.length)
                console.log(json_data.data)
            })
            .catch(error => console.log('error', error));

        // test data
        // setData(data_tast.results)
        // setTotal(data_tast.total)
    }, [])



    return (
        <div style={{
            margin: '0px 20px'
        }}>
            <div style={{
                display: 'grid'
            }}>
                <div style={{
                    width: '-webkit-fill-available',
                    display: 'flex',
                    alignItems: 'center',
                    padding: 10,
                    marginTop: 40
                }}>
                    <div style={{
                        width: '-webkit-fill-available',
                        color: 'rgba(97, 97, 97, 0.9)'
                    }}>
                        {/* <HeaderCategory id={category_id} /> */}

                        <h1 style={{
                            margin: 0
                        }}>วิดีโอทั้งหมด</h1>
                    </div>
                    <div style={{
                        width: '80px',
                        color: '#b0b0b0',
                    }}>
                        <h3 style={{
                            margin: 0
                        }}>{total} วิดีโอ</h3>
                    </div>
                </div>
                <div style={{
                    backgroundColor: '#d5d5d5',
                    width: '-webkit-fill-available',
                    height: '2px',
                    borderRadius: '10px',
                }}></div>
            </div>
            <div>
                {data !== null ? (
                    <VideoMediaCard data={data}></VideoMediaCard>
                ) : (<Fragment></Fragment>)}
            </div>
        </div>)
}

export default VideoAllPage;