import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNPWvD2588fTx9e1Nv5oPOvpsUPpTVRPs",
    authDomain: "rookas-slack-app-challenge.firebaseapp.com",
    projectId: "rookas-slack-app-challenge",
    storageBucket: "rookas-slack-app-challenge.appspot.com",
    messagingSenderId: "538070622014",
    appId: "1:538070622014:web:28641e658e83856886166f",
    measurementId: "G-3R4P71ZN25"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;