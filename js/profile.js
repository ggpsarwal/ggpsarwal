"use strict";

document.addEventListener('DOMContentLoaded', () => {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {

            document.getElementById('contain').style.display = "block";
            var uid = user.uid;
            // var tenantId = user.tenantId;
            // const emailVerified = user.emailVerified
            // const creationTime = user.metadata.creationTime;
            // const lastSignInTime = user.metadata.lastSignInTime;
            // alert(uid);
            // console.log(user);

            var docRef = db.collection("students").doc(`${uid}`);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    // console.log(doc.data().URN);
                    var docRef2 = db.collection("admissionForm").doc(`${doc.data().URN}`);
                    docRef2.get().then((doc) => {
                        if (doc.exists) {
                            // console.log("Document data:", doc.data());
                            var Data = doc.data();
                            // console.log(Data);

                            document.getElementById('stuName').innerText = `${Data.childName}`;
                            document.getElementById('stuImg').src = `${Data.childphotourl}`;

                            document.getElementById('main').innerHTML = `
                                <div class="row p-5">
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                            <h5 class="card-title text-center">Personal Details</h5>
                                            <p class="card-text">
                                                <strong>Parents</strong><br> ${Data.parent1Name},${Data.parent2Name} <br> <strong>D.O.B</strong><br> ${Data.inputDob} <br> <strong>Grade</strong><br> ${Data.interesetedGrade} <br>
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                            <h5 class="card-title text-center">Communication Details</h5>
                                            <p class="card-text">
                                                <strong>E-mail</strong><br> <a href="mailto:${Data.inputEmail}">${Data.inputEmail}</a><br> 
                                                <strong>Mobile No.</strong><br><a href="tel:${Data.inputMobile}">${Data.inputMobile}</a><br> 
                                                <strong>Address</strong><br> ${Data.inputAddress} ${Data.inputCity} ${Data.inputState}, ${Data.inputZip},${Data.inputCountry}<br>
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row p-5">
                                    <div class="col-sm-12">
                                        <div class="card">
                                            <div class="card-body">
                                            <h5 class="card-title text-center">Admission Details</h5>
                                            <p class="card-text">
                                                <strong>U R N</strong><br> ${Data.URN}<br> <strong>Aadhaar No.</strong><br> ${Data.studentaadhar} <br>
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            
                            `;



                        } else {
                            // doc.data() will be undefined in this case
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });


                } else {
                    // doc.data() will be undefined in this case
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

        } else {
            alert("No Active user Found / User is signed out");
            setTimeout(() => {
                window.location = "https://ggpsarwal.github.io/ggpsarwal/student_login.html"
            }, 5);
        }
    });

});


function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");

}

