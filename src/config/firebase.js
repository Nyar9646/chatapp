import { initializeApp } from 'firebase/app'
import * as firebase from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBkXFE66hwOh___BmHlfRbX96l_E636Q3U",
    authDomain: "char-app-ea8bc.firebaseapp.com",
    projectId: "char-app-ea8bc",
    storageBucket: "char-app-ea8bc.appspot.com",
    messagingSenderId: "160962681519",
    appId: "1:160962681519:web:838bc002c61a59c0c4d25a"
}

initializeApp(firebaseConfig)

export default firebase
