import React, {useEffect, useState} from 'react';
import firebase from 'firebase/app';
//import 'firebase/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

let loginUI;
function Login() {
    useEffect(() => {
        if (!loginUI)
            loginUI = new firebaseui.auth.AuthUI(firebase.auth());

        loginUI.start('#firebaseui-auth-container', {
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    return false;
                },
            },
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
            signInSuccessUrl: '/',
            // Other config options...
        })
    }, [])
  return (
    <div id="modal-login" className="modal" style={{visibility: 'visible'}}>
      <div style={{textAlign: 'center', width:'100%'}}>
        <h1> Log in or Sign up</h1>
        <div id="firebaseui-auth-container" style={{margin:'0 auto'}}></div>
      </div>
    </div>
  )
}

export default Login;