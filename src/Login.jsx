import React from 'react';
import './Login.css'
import {Button} from "@mui/material";
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer"
import {auth, provider} from './firebase'
import 'firebase/compat/auth';
import firebase from "firebase/compat/app";

const Login = () =>  {
    const [state, dispatch] = useStateValue()

    const signIn = () => {

      firebase.auth().signInWithPopup(provider).then(res => {

            dispatch({
                type: actionTypes.SET_USER,
                user: res.user
            })
            console.log(res.user)


        }).catch((error) => {
            alert(error.message)

        })
    }
    return (
            <div className="login">
                <div className="login__logo">
                    <img src="https://www.dropbox.com/s/2tglt5lq0poxs01/froglogotransparent.png?raw=1" alt=""/>

                </div>
                <Button type="submit" onClick={signIn}>Sign In</Button>
            </div>
        );
}

export default Login;