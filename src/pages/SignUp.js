import React, { useState } from "react";
import { Link } from "react-router-dom";

import firebase from "../config/firebase";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        firebase.createUserWithEmailAndPassword(firebase.getAuth(), email, password)
            .catch(err => {
                console.log(err)
            })
    }

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    return (
        <div>
            <h1>Sign Up</h1>
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
                        placeholder='Password'
                        onChange={handlePassword}
                        value={password}
                    />
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
            <Link to='/Login'>Login</Link>
        </div>
    )
}

export default SignUp