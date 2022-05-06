"use strict";


document.addEventListener('DOMContentLoaded', function () {
    const inputForm = document.getElementById('inputForm');
    const inputPhoto = document.getElementById('inputPhoto');

    var photourl = "";

    inputPhoto.addEventListener('change', () => {
        // alert("photo changed");

        const ref = storage.ref();
        const file = document.querySelector("#inputPhoto").files[0]
        const name = new Date() + '-' + file.name
        const metadata = {
            contentType: file.type
        }

        const task = ref.child(name).put(file, metadata)

        task.then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                const image = document.querySelector('#photo');
                // alert("Image uploaded successfully");
                image.src = url;
                photourl = url;
                // console.log(photourl);
            });

    });


    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputEmail = document.getElementById('inputEmail');
        const inputPassword = document.getElementById('inputPassword');
        const inputName = document.getElementById('inputName');
        const inputGender = document.getElementById('inputGender');
        const inputDob = document.getElementById('inputDob');
        const inputMobile = document.getElementById('inputMobile');
        const inputAddress = document.getElementById('inputAddress');
        const inputState = document.getElementById('inputState');
        const inputZip = document.getElementById('inputZip');
        const inputCountry = document.getElementById('inputCountry');



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
                const num = (Math.floor(Math.random() * 9000) + 1);
                var conDOB = inputDob.value.replace(/-/g, "");
                const URN = num + `${conDOB}`;
                // URN can be Date.now();

                db.collection('users').doc(`${user.uid}`).set({
                    inputEmail: inputEmail.value,
                    inputPassword: inputPassword.value,
                    inputName: inputName.value,
                    inputGender: inputGender.value,
                    inputDob: inputDob.value,
                    inputMobile: inputMobile.value,
                    inputAddress: inputAddress.value,
                    inputState: inputState.value,
                    inputZip: inputZip.value,
                    inputCountry: inputCountry.value,
                    profilePhoto: photourl,
                    URN: URN
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

