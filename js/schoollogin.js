"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const inputForm = document.getElementById('inputForm');

    const inputEmail = document.getElementById('inputEmail');
    const inputPassword = document.getElementById('inputPassword');


    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // console.log(user);
                // console.log(user.uid);
                // console.log(user.email);

                alert("Logged in successfully!");

                inputForm.reset();

                setTimeout(() => {
                    window.location = "./dashboard.html"
                }, 2000);


            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                alert(errorCode);
            });
    });

});
