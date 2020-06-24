import React, { useEffect, useState, Fragment } from 'react';
import { VideoMediaCard } from '@blackboard-th/components'
import { useParams } from 'react-router-dom';


function SearchVideoPage() {
    const [data, setData] = useState(null);
    const [total, setTotal] = useState(0);
    const { search_id } = useParams()
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://app.blackboard-th.com/api/v1/home/search/" + search_id, requestOptions)
            .then(response => response.text())
            .then(result => {
                let json_data = JSON.parse(result);
                setData(json_data.results)
                setTotal(json_data.results.length)
                console.log(json_data)
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
                        }}>ค้นหา</h1>
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

export default SearchVideoPage;