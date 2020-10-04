import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBwNBEZMOm789DzgAxb5h2vY-2zU7WtuP8",
    authDomain: "messenger-f4dcd.firebaseapp.com",
    databaseURL: "https://messenger-f4dcd.firebaseio.com",
    projectId: "messenger-f4dcd",
    storageBucket: "messenger-f4dcd.appspot.com",
    messagingSenderId: "339499557640",
    appId: "1:339499557640:web:5038ab9ec650b0fc2142bd",
    measurementId: "G-0GJGTR3SSN"
});

const db = firebaseApp.firestore();

export default db;