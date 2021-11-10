import React, { useState, useEffect } from 'react'
import firebase from './config/firebase'

const AuthContext = React.createContext()

// provider : コンテキストで渡したい値を指定するもの
// children : Reactによって自動的に与えられる
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // 認証済みユーザを取得して、userに格納

    // レンダリングの後に実行される = レンダリング内に挟まない
    // 引数1：レンダリング後に実行したいcallback
    // 引数2：副作用を実行する頻度 *必ず記述
    //      省略すると、コンポーネントの描写毎に実行される
    //      []：初回のレンダリングのみ実行
    //      変数指定：変数指定の値が変わった場合だけ実行
    useEffect(() => {
        // 上下は同じ意味の記述
        // 非推奨 = 副作用が起こる：外部APIとの通信にDOMを直接的に扱う
        //  DOMの操作 => レンダリングが終わらないとDOMが存在しないので、操作しようがない
        //  外部APIとの通信 => レンダリングとは関係ない
        //  =>=> useEffectを使用
        // firebase.onAuthStateChanged(firebase.getAuth(), user => {
        //     setUser(user)
        // })
        firebase.onAuthStateChanged(firebase.getAuth(), setUser)
    }, [])

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider, AuthContext
}