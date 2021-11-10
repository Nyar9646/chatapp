import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router'

import { AuthContext, AuthProvider } from './AuthService'

// 別名を設定
// ... : component以外の引数を配列で渡す
const LoggedInRoute = ({ element: Component, ...rest }) => {
    const user = useContext(AuthContext)

    return (
        <Route
            {...rest}
            element={(routeProps) =>
                user ? <Component {...routeProps} /> : <Navigate to="/login" />
            }
        />
    )
}

export default LoggedInRoute