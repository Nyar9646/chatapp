import React, { useContext, useState } from "react";
import { Navigate } from "react-router";
import { Link } from 'react-router-dom'

import firebase from "../config/firebase";
import { AuthContext } from "../AuthService";

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        firebase.signInWithEmailAndPassword(firebase.getAuth(), email, password)
            .then(() => {
                // ページ遷移情報に追加
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const user = useContext(AuthContext)

    // 初めてログインしたとき
    if (user) return <Navigate to="/" />

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={handleEmail}
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                        onChange={handlePassword}
                        value={password}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
            <Link to='/signup'>Sign Up</Link>
        </>
    )
}

export default Login
