"use strict";


document.addEventListener('DOMContentLoaded', function () {
    const inputForm = document.getElementById('inputForm');

    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputEmail = document.getElementById('inputEmail');
        const inputPassword = document.getElementById('inputPassword');
        const inputURN = document.getElementById('inputURN');

        auth.createUserWithEmailAndPassword(inputEmail.value, inputPassword.value)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // console.log(user);
                // console.log(user.uid);
                // console.log(user.email);


                firebase.auth().currentUser.sendEmailVerification()
                    .then(() => {
                        alert("Email verification sent!")

                    });

                alert("Sign Up Successfull!");

                db.collection('users').doc(`${user.uid}`).set({
                    inputEmail: inputEmail.value,
                    inputPassword: inputPassword.value,
                    URN: inputURN.value
                }).then(() => {
                    inputForm.reset();
                    // console.log("Document successfully written!");
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                alert(errorMessage);
            });
    });

});

