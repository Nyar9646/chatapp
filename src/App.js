import React from 'react'
import { AuthProvider } from './AuthService'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Login from './pages/Login'
import Room from './pages/Room'
import SignUp from './pages/SignUp'
import LoggedInRoute from './LoggedInRoute'

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* ログインしているユーザのみが閲覧できるページ */}
                    <LoggedInRoute path='/' element={<Room />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App
