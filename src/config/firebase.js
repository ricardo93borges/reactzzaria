import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBJq-V2vf8-0Q7S1Ks85XuC8osO6ePksvs",
    authDomain: "reactzzaria-7b804.firebaseapp.com",
    databaseURL: "https://reactzzaria-7b804.firebaseio.com",
    projectId: "reactzzaria-7b804",
    storageBucket: "reactzzaria-7b804.appspot.com",
    messagingSenderId: "73259144310",
    appId: "1:73259144310:web:bfbe0a37f269b160f1bb57"
};

firebase.initializeApp(config);

//export const db = firebase.database();
export const githubAuthProvider = firebase.auth.GithubAuthProvider()