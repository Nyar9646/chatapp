import { Navigate } from 'react-router'

import firebase from "../config/firebase";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Room = () => {
    const eventhandleLogout = () => {
        firebase.signOut(firebase.getAuth()).then(() => {
            //
        }).catch(err => { console.log(err) })
    }

    return (
        <>
            <h1>Room</h1>
            <button onClick={eventhandleLogout}>Logout</button>
        </>
    )
}

export default Room
