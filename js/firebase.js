"use strict";

const firebaseConfig = {
    apiKey: "AIzaSyAUtqtQiT5tKRDgZeQQUkgMyZu_jbxMVXw",
    authDomain: "ggps-7904b.firebaseapp.com",
    projectId: "ggps-7904b",
    storageBucket: "ggps-7904b.appspot.com",
    messagingSenderId: "388785216977",
    appId: "1:388785216977:web:864dbbf4695030b9a054f0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();

const auth = firebase.auth();

const db = firebase.firestore();

var database = firebase.database();
