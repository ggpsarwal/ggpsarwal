"use strict";


document.addEventListener('DOMContentLoaded', () => {

    const inputEmail = document.getElementById('inputEmail');
    const inputPassword = document.getElementById('inputPassword');

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            var tenantId = user.tenantId;
            const emailVerified = user.emailVerified
            const creationTime = user.metadata.creationTime;
            const lastSignInTime = user.metadata.lastSignInTime;
            // console.log(user);
            // console.log(tenantId);
            // console.log(emailVerified);
            // console.log("creationTime : " + creationTime);
            // console.log("lastSignInTime : " + lastSignInTime);
            // getting data
            var docRef = db.collection("users").doc(`${uid}`);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    const userData = doc.data();

                    // console.log(userData.inputEmail);
                    // console.log(userData.inputMobile);
                    // console.log(userData.inputName);
                    // console.log(userData.profilePhoto);

                    var outhtml = `<div class="container">
                                    <div class="row">
                                        <div class="col">
                                            Your URN: <p style="color: green;"> ${userData.URN}</p>  <br/>
                                            Email: <a href="mailto:${userData.inputEmail}">${userData.inputEmail}</a> <br/>
                                            Name: ${userData.inputName} <br/>
                                            Mobile: ${userData.inputMobile} <br/>
                                            Gender: ${userData.inputGender} <br/>
                                            DOB: ${userData.inputDob} <br/>
                                            Address: ${userData.inputAddress} <br/>
                                            State: ${userData.inputState} <br/>
                                           Zip:  ${userData.inputZip} <br/>
                                           Country: ${userData.inputCountry} <br/>
                                        </div>
                                        `;
                    if (userData.profilePhoto == "") {
                        outhtml += `
                        </div>
                        <br><br><br><br>
                        <button class="btn btn-outline-success my-2 my-sm-0" onclick="signOut()" id="signOut">Sign Out</button>
                        <br><br>
                        </div>`;
                    } else {
                        outhtml += `<div class="col">
                                    <img src="${userData.profilePhoto}" class="main-img" alt="profilePhoto">
                            </div>
                        </div>
                        <br>
                        <br><br><br><br>
                        <button class="btn btn-outline-success my-2 my-sm-0" onclick="signOut()" id="signOut">Sign Out</button>
                        <br><br>
                        </div>`;
                    }

                    outhtml += `<button class="btn btn-outline-success my-2 my-sm-0" onclick="resetPassword()" id="resetPassword">Reset Password</button>
                    <br><br><button class="btn btn-outline-danger my-2 my-sm-0" onclick="deleteUser()" id="deleteAccount">Delete Account</button>
                    <br><br>
                    
                    `;

                    document.querySelector('.userdata').innerHTML = outhtml;

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            // getting data
            
        } else {
            document.querySelector('.userdata').innerHTML = "No Active user Found / User is signed out";
        }
    });

    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // console.log(user);
                // console.log(user.uid);
                // console.log(user.email);

                alert("Sign In Successfull!");

                inputForm.reset();



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


function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
    document.querySelector('.userdata').innerHTML = "";

}



function resetPassword() {
    const user = firebase.auth().currentUser;
    firebase.auth().sendPasswordResetEmail(user.email)
        .then(() => {
            alert("Password reset email sent!");

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);

        });
}

function deleteUser() {
    const user = firebase.auth().currentUser;
    alert(`${user.uid}`);
    db.collection("users").doc(`${user.uid}`).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.log("Error removing document: ", error);
    });

    user.delete().then(() => {
        alert("User deleted.");
        
    }).catch((error) => {
        console.log(error);
    });
}