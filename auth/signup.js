"use strict";


document.addEventListener('DOMContentLoaded', function () {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
            if (uid == "VmFjXALslNhSbYff2gNeqH0eVdU2") {



                // console.log("You are Admin");

                const inputForm = document.getElementById('inputForm');

                inputForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const inputEmail = document.getElementById('inputEmail');
                    const inputPassword = document.getElementById('inputPassword');
                    const inputURN = document.getElementById('inputURN');

                    auth.createUserWithEmailAndPassword(inputEmail.value, inputPassword.value)
                        .then((userCredential) => {
                            // Signed up and Signed in 
                            // console.log(userCredential);
                        })
                        .catch((error) => {
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            console.log(errorCode);
                            console.log(errorMessage);
                        });



                    db.collection('students').doc(`${user.uid}`).set({
                        inputEmail: inputEmail.value,
                        inputPassword: inputPassword.value,
                        URN: inputURN.value
                    }).then(() => {
                        inputForm.reset();
                        // console.log("Document successfully written!");
                    }).catch((error) => {
                        console.error("Error writing document: ", error);
                    });
                });

            } else {
                console.log("Only Admin is allowed to add users");
                setTimeout(() => {
                    window.location = "https://ggpsarwal.github.io/ggpsarwal/school_login.html"
                }, 10);
            }


        } else {
            alert("No Active user Found / User is signed out");
            setTimeout(() => {
                window.location = "https://ggpsarwal.github.io/ggpsarwal"
            }, 10);
        }
    });



});

