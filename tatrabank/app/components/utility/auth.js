"use server"

import React from 'react'

// cookies
import { cookies } from 'next/headers'


const setToken = async (data) => {

    // set cookie
    return cookies().set('token', data, { secure: true });
}


const removeToken = async () => {
    // remove cookie

    console.log(cookies().get('token'));

    return cookies().delete('token');
}

const getToken = async () => {

    console.log(cookies().get('token'));
    return cookies().get('token');
}




export {
    setToken, removeToken, getToken
}