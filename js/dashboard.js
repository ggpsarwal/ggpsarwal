"use strict";

document.addEventListener('DOMContentLoaded', () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
            // console.log(uid);
            if (uid == "VmFjXALslNhSbYff2gNeqH0eVdU2") {




                // console.log("You are Admin");

                document.getElementById('dashboard').style.display = "block";
            } else {
                // console.log("Not admin");
                setTimeout(() => {
                    window.location = "https://ggpsarwal.github.io/ggpsarwal/school_login.html"
                }, 1);
            }


        } else {
            alert("No Active user Found / User is signed out");
            setTimeout(() => {
                window.location = "https://ggpsarwal.github.io/ggpsarwal"
            }, 10);
        }
    });


});


function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");

}

var studentouthtml = ``;
var alumniouthtml = ``;
// get students
function getStudents() {
    studentouthtml = ``;
    alumniouthtml = ``;
    document.getElementById('alumnitable').style.display = "none";
    document.getElementById('message').style.display = "none";
    document.getElementById('studenttable').style.display = "block";
    const tablebody = document.getElementById('studenttablebody');

    var num = 0;


    db.collection("admissionForm").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            num++;
            // doc.data() is never undefined for query doc snapshots
            const data = doc.data();
            // console.log(doc.id, " => ", data);



            studentouthtml += `<tr>
                    <th scope="row">${num}</th>
                    <td>${data.URN}</td>
                    <td>${data.childName}</td>
                    <td>${data.inputEmail}</td>
                    <td>${data.inputGender}</td>
                    <td><button type="button"  class="btn btn-outline-success viewBtn" data-toggle="modal" data-target="#exampleModal2Long" >View Details</button></td>
                  </tr>
            
            `;

            tablebody.innerHTML = studentouthtml;




        });

        viewStudentDetails();
    });


}
// get students


// get alumni
function getAlumni() {
    studentouthtml = ``;
    alumniouthtml = ``;
    document.getElementById('studenttable').style.display = "none";
    document.getElementById('message').style.display = "none";
    document.getElementById('alumnitable').style.display = "block";
    const tablebody = document.getElementById('alumnitablebody');
    var num = 0;


    db.collection("alumni").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            num++;
            // doc.data() is never undefined for query doc snapshots
            const data = doc.data();
            // console.log(doc.id, " => ", data);

            alumniouthtml += `<tr>
                <th scope="row">${num}</th>
                <td>${data.URN}</td>
                <td>${data.name}</td>
                <td>${data.Gender}</td>
                <td>${data.admissionDate}</td>
                <td>${data.passingDate}</td>
                <td><button type="button"  class="btn btn-outline-success viewBtn" data-toggle="modal" data-target="#exampleModalLong" >View Details</button></td>
                
              </tr>
        
        `;

            tablebody.innerHTML = alumniouthtml;

        });

        viewAlumniDetails();
    });
}
// get alumni


function getDownloads() {
    document.getElementById('studenttable').style.display = "none";
    document.getElementById('alumnitable').style.display = "none";
    document.getElementById('message').style.display = "none";

}


function getCirculars() {
    document.getElementById('studenttable').style.display = "none";
    document.getElementById('alumnitable').style.display = "none";
    document.getElementById('message').style.display = "none";

}

var messageouthtml = ``;
function getMessage() {
    messageouthtml = ``;
    document.getElementById('message').style.display = "block";
    document.getElementById('studenttable').style.display = "none";
    document.getElementById('alumnitable').style.display = "none";
    const tablebody = document.getElementById('messagebody');
    var num = 0;


    db.collection("contact-form").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            num++;
            // doc.data() is never undefined for query doc snapshots
            const data = doc.data();
            // console.log(doc.id, " => ", data);

            messageouthtml += `<tr>
                <th scope="row">${num}</th>
                <td>${data.fullName}</td>
                <td>${data.emailAddress}</td>
                <td>${data.subject}</td>
                <td>${data.message}</td>
                
              </tr>
        
        `;

            tablebody.innerHTML = messageouthtml;

        });

    });


}



function viewAlumniDetails() {
    const viewBtn = document.querySelectorAll('.viewBtn');

    viewBtn.forEach(element => {
        element.addEventListener('click', () => {
            const urn = element.parentNode.parentNode.children[1].innerHTML;
            // console.log(urn);
            // alert("clicked");
            var docRef = db.collection("admissionForm").doc(`${urn}`);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    const userData = doc.data();
                    // console.log(userData);

                    document.querySelector('.modal-title').innerHTML = `${userData.childName} Details`;
                    var modelBody = document.querySelector('.modal-body');
                    modelBody.innerHTML = `
                    <div class="row justify-content-md-center">
                                <div class="col col-lg-5">
                                    <img src="${userData.childphotourl}" alt="student image" id="AluImg"
                                        class="img-thumbnail py-3 my-3">
                                </div>
                                <div class="col-md-auto ">
                                    <p><strong>${userData.childName}</strong></p>
                                    <p class="py-2 my-2">${userData.inputGender}</p>
                                </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                            <h5 class="card-title">Personal Details</h5>
                            <p class="card-text">
                                <strong>Parents</strong><br> ${userData.parent1Name},${userData.parent2Name} <br> <strong>D.O.B</strong><br> ${userData.inputDob} <br> <strong>Grade</strong><br> ${userData.interesetedGrade} <br>
                            </p>
                            </div>
                        </div>
                        </div>
                        <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                            <h5 class="card-title">Communication Details</h5>
                            <p class="card-text">
                            <strong>E-mail</strong><br> ${userData.inputEmail} <br> 
                            
                            <br>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <form id="inputForm">
                            <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputMobile">Mobile Number*</label>
                                        <input type="tel" class="form-control" id="inputMobile" placeholder="${userData.inputMobile}" required>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputAddress">Address*</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="${userData.inputAddress}" required>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputCity">City*</label>
                                        <input type="text" class="form-control" id="inputCity" placeholder="${userData.inputCity}" required>
                                    </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="inputState">State*</label>
                                    <input type="text" class="form-control" id="inputState" placeholder="${userData.inputState}" required>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="inputZip">Zip*</label>
                                    <input type="text" class="form-control" id="inputZip" placeholder="${userData.inputZip}" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputCountry">Country*</label>
                                    <input type="text" class="form-control" id="inputCountry" placeholder="${userData.inputCountry}" required>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary my-5 ">Update Details</button>
                            </div>
                    </form>
                    `;

                    document.getElementById('delAlu').addEventListener('click', () => {
                        db.collection("admissionForm").doc(`${urn}`).delete().then(() => {
                            alert("Account successfully deleted!");
                        }).catch((error) => {
                            console.log("Error removing document: ", error);
                        });
                    })

                    // update
                    inputForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        const inputMobile = document.getElementById('inputMobile');
                        const inputAddress = document.getElementById('inputAddress');
                        const inputCity = document.getElementById('inputCity');
                        const inputState = document.getElementById('inputState');
                        const inputZip = document.getElementById('inputZip');
                        const inputCountry = document.getElementById('inputCountry');
                        var setWithMerge = docRef.set({
                            inputMobile: inputMobile.value,
                            inputAddress: inputAddress.value,
                            inputCity: inputCity.value,
                            inputState: inputState.value,
                            inputZip: inputZip.value,
                            inputCountry: inputCountry.value,
                        }, { merge: true });


                        alert("Details Updated Successfully!");
                    });


                } else {
                    // doc.data() will be undefined in this case
                    console.log("No data");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        })
    });
}


function viewStudentDetails() {
    const viewBtn = document.querySelectorAll('.viewBtn');

    viewBtn.forEach(element => {
        element.addEventListener('click', () => {
            const urn = element.parentNode.parentNode.children[1].innerHTML;
            // console.log(urn);
            // alert("clicked");
            var docRef = db.collection("admissionForm").doc(`${urn}`);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    const userData = doc.data();
                    // console.log(userData);

                    document.querySelector('#exampleModal2LongTitle').innerHTML = `${userData.childName} Details`;
                    var modelBody = document.querySelector('#stuBody');
                    modelBody.innerHTML = `
                    <div class="row justify-content-md-center">
                                <div class="col col-lg-5">
                                    <img src="${userData.childphotourl}" alt="student image" id="AluImg"
                                        class="img-thumbnail py-3 my-3">
                                </div>
                                <div class="col-md-auto ">
                                    <p><strong>${userData.childName}</strong></p>
                                    <p class="py-2 my-2">${userData.inputGender}</p>
                                </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                            <h5 class="card-title">Personal Details</h5>
                            <p class="card-text">
                                <strong>Parents</strong><br> ${userData.parent1Name},${userData.parent2Name} <br> <strong>D.O.B</strong><br> ${userData.inputDob} <br> <strong>Grade</strong><br> ${userData.interesetedGrade} <br>
                            </p>
                            </div>
                        </div>
                        </div>
                        <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                            <h5 class="card-title">Communication Details</h5>
                            <p class="card-text">
                            <strong>E-mail</strong><br> ${userData.inputEmail} <br> 
                            
                            <br>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <form id="inputForm">
                            <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputMobile">Mobile Number*</label>
                                        <input type="tel" class="form-control" id="inputMobile" placeholder="${userData.inputMobile}" required>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputAddress">Address*</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="${userData.inputAddress}" required>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputCity">City*</label>
                                        <input type="text" class="form-control" id="inputCity" placeholder="${userData.inputAddress}" required>
                                    </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="inputState">State*</label>
                                    <input type="text" class="form-control" id="inputState" placeholder="${userData.inputState}" required>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="inputZip">Zip*</label>
                                    <input type="text" class="form-control" id="inputZip" placeholder="${userData.inputZip}" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputCountry">Country*</label>
                                    <input type="text" class="form-control" id="inputCountry" placeholder="${userData.inputCountry}" required>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary my-5 ">Update Details</button>
                            </div>
                    </form>
                    `;

                    document.getElementById('delStu').addEventListener('click', () => {
                        db.collection("admissionForm").doc(`${urn}`).delete().then(() => {
                            alert("Account successfully deleted!");
                        }).catch((error) => {
                            console.log("Error removing document: ", error);
                        });
                    })

                    // update
                    inputForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        const inputMobile = document.getElementById('inputMobile');
                        const inputAddress = document.getElementById('inputAddress');
                        const inputCity = document.getElementById('inputCity');
                        const inputState = document.getElementById('inputState');
                        const inputZip = document.getElementById('inputZip');
                        const inputCountry = document.getElementById('inputCountry');
                        var setWithMerge = docRef.set({
                            inputMobile: inputMobile.value,
                            inputAddress: inputAddress.value,
                            inputCity: inputCity.value,
                            inputState: inputState.value,
                            inputZip: inputZip.value,
                            inputCountry: inputCountry.value,
                        }, { merge: true });


                        alert("Details Updated Successfully!");
                    });



                } else {
                    // doc.data() will be undefined in this case
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        })
    });
}


