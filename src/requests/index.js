import React from 'react';

const headers = {
    'Content-Type': '*',
    'platform': 'website',
    'app_version': '1.0',
    'language': 'th',
    'accept': '*'
}

export async function POST(url = '', data = {}, mode = '',header={}) {
    // Default options are marked with *
    console.log("ไม่แปลง JSON.stringif:",data);
    console.log("แปลง JSON.stringif:",JSON.stringify(data));
    
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: `${mode !== '' ? mode : "cors"}`, // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {...headers,...header},
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
};

export async function GET(url = '', mode = '',header={}) {
    console.log( {...headers,...header});
    
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: `${mode !== '' ? mode : "cors"}`, // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {...headers,...header},
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

export async function PUT(url = '', data = {}, mode = '',header={}, ) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: `${mode !== '' ? mode : "cors"}`, // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {...headers,...header},
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

export async function REMOVE(url = '', data = {}, mode = '',header={},) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: `${mode !== '' ? mode : "cors"}`, // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {...headers,...header},
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}