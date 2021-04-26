import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHoXTju08wCoPkj9V3v8m61U9WQZveuNA",
    authDomain: "frameworkm11.firebaseapp.com",
    databaseURL: "https://frameworkm11-default-rtdb.firebaseio.com",
    projectId: "frameworkm11",
    storageBucket: "frameworkm11.appspot.com",
    messagingSenderId: "728003997866",
    appId: "1:728003997866:web:08a9540d123dace48f20d3",
    measurementId: "G-QDVMWK7HZ6"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;