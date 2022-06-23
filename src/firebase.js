// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAp_pTmVj5h6I-wq4S6UHqC6o5XDV5UGls",
    authDomain: "frogbook2-317b0.firebaseapp.com",
    projectId: "frogbook2-317b0",
    storageBucket: "frogbook2-317b0.appspot.com",
    messagingSenderId: "617651621015",
    appId: "1:617651621015:web:9377ad6e31cf853c506dd2",
    measurementId: "G-1WG7QQXY39"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const auth = firebase.auth;

const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider}
export default db