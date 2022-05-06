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


const auth = firebase.auth();

var storage = firebase.storage();
const db = firebase.firestore();

var database = firebase.database();



//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // alert("Active user " + user.email);
        document.getElementById('useremail').innerHTML = user.email;
    } else {
        document.getElementById('useremail').innerHTML = "No Active user Found";
    }
});

//signup function
function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    console.log(promise);
    promise.then((u) => {
        console.log(u);
    })

    promise.catch(e => alert(e.message));
    // alert("SignUp Successfully");
    clear();
}



//signIN function
function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.then((userCredential) => {

        // window.location.replace("/");
        const user = userCredential.user;
        // console.log(user);
        console.log(user.uid);
        console.log(user.displayName);
        console.log(user.photoURL);
        console.log(user.email);
        console.log(user.emailVerified);
        console.log(user.phoneNumber);

    })
    promise.catch(e => alert(e.message));
    clear();

}


//signOut

function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
    document.getElementById('useremail').innerHTML = "";
    document.getElementById('data').innerHTML = "";
}

function getUserProfile() {
    // [START auth_get_user_profile]
    const user = firebase.auth().currentUser;
    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        // const emailVerified = user.emailVerified;

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getIdToken() instead.

        const uid = user.uid;
        const data = document.getElementById('data');
        data.innerHTML = `${uid} <br/> ${displayName} <br/> ${email} <br/> <img src="${photoURL}" alt="user photo" >  <br/>`;

        // console.log(uid);
        // console.log(displayName);
        // console.log(email);
        // console.log(photoURL);
        // console.log(emailVerified);
    } else {
        console.log("No User");
    }
    // [END auth_get_user_profile]
}



function addedPhoto() {
    console.log("added photo");
    document.querySelector('#uploadphotobtn').style.display = "block";

}

var photourl = "";

function uploadimage() {
    document.querySelector('#uploadphotobtn').style.display = "none";
    const updateBtn = document.getElementById('updateBtn');
    updateBtn.style.display = "block";
    const ref = storage.ref();
    const file = document.querySelector("#photo").files[0]
    const name = new Date() + '-' + file.name
    const metadata = {
        contentType: file.type
    }

    const task = ref.child(name).put(file, metadata)

    task.then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            // console.log(url);

            const image = document.querySelector('#userimg');
            alert("Image uploaded successfully");
            image.src = url;
            photourl = url;
        })
}



function updateUserProfile() {
    getUserProfile();
    // [START auth_update_user_profile]
    const user = firebase.auth().currentUser;
    const updatedName = document.getElementById('updatedName');

    user.updateProfile({
        displayName: updatedName.value,
        photoURL: photourl
    }).then(() => {
        alert("Update successful");
    }).catch((error) => {
        console.log(error);
    });
    // [END auth_update_user_profile]
}


function clear() {
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
}