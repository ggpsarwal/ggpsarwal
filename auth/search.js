"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const search = document.getElementById('search');

    const inputForm = document.getElementById('inputForm');

    const studentname = document.getElementById('studentname');
    const name = document.getElementById('name');
    const img = document.getElementById('img');
    const URN = document.getElementById('URN');
    const allotedgrade = document.getElementById('allotedgrade');


    const studentaadharpdf = document.getElementById('studentaadharpdf');
    const studentdobpdf = document.getElementById('studentdobpdf');

    const parent1aadharpdf = document.getElementById('parent1aadharpdf');
    const parent2aadharpdf = document.getElementById('parent2aadharpdf');

    search.addEventListener('click', () => {
        var inputURN = document.getElementById('inputURN').value;
        if (inputURN.length == 13) {
            // getting data
            var docRef = db.collection("admissionForm").doc(`${inputURN}`);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    const userData = doc.data();
                    // console.log(userData);

                    studentname.innerText = userData.childName;
                    name.value = userData.childName;
                    URN.value = userData.URN;
                    allotedgrade.value = userData.interesetedGrade;
                    img.src = userData.childphotourl;

                    document.getElementById("admission").style.display = "block";

                } else {
                    // doc.data() will be undefined in this case
                    document.getElementById("data").innerHTML = `Please Enter Correct URN!`;
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            // getting data

            // add extra data back

            var studentaadharpdfurl = "";
            var studentdobpdfurl = "";
            var parent1aadharpdfurl = "";
            var parent2aadharpdfurl = "";

            studentaadharpdf.addEventListener('change', () => {
                const ref = storage.ref();
                const file = document.querySelector("#studentaadharpdf").files[0]
                const name = Date.now() + '-' + file.name
                const metadata = {
                    contentType: file.type
                }

                const task = ref.child(name).put(file, metadata)

                task.then(snapshot => snapshot.ref.getDownloadURL())
                    .then(url => {
                        studentaadharpdfurl = url;
                        alert("Student Aadhaar Uploaded Successfully!");
                    });

            });

            studentdobpdf.addEventListener('change', () => {
                const ref = storage.ref();
                const file = document.querySelector("#studentdobpdf").files[0]
                const name = Date.now() + '-' + file.name
                const metadata = {
                    contentType: file.type
                }

                const task = ref.child(name).put(file, metadata)

                task.then(snapshot => snapshot.ref.getDownloadURL())
                    .then(url => {
                        studentdobpdfurl = url;
                        alert("Birth Certificate Uploaded Successfully!");
                    });

            });

            parent1aadharpdf.addEventListener('change', () => {
                const ref = storage.ref();
                const file = document.querySelector("#parent1aadharpdf").files[0]
                const name = Date.now() + '-' + file.name
                const metadata = {
                    contentType: file.type
                }

                const task = ref.child(name).put(file, metadata)

                task.then(snapshot => snapshot.ref.getDownloadURL())
                    .then(url => {
                        parent1aadharpdfurl = url;
                        alert("Parent 1 Aadhar Document Uploaded Successfully!");
                    });

            });

            parent2aadharpdf.addEventListener('change', () => {
                const ref = storage.ref();
                const file = document.querySelector("#parent2aadharpdf").files[0]
                const name = Date.now() + '-' + file.name
                const metadata = {
                    contentType: file.type
                }

                const task = ref.child(name).put(file, metadata)

                task.then(snapshot => snapshot.ref.getDownloadURL())
                    .then(url => {
                        parent2aadharpdfurl = url;
                        alert("Parent 2 Aadhar Document Uploaded Successfully!");
                    });

            });




            inputForm.addEventListener('submit', (e) => {
                const studentaadhar = document.getElementById('studentaadhar');
                const parent1aadhar = document.getElementById('parent1aadhar');
                const parent2aadhar = document.getElementById('parent2aadhar');
                e.preventDefault();
                if ((studentaadhar.value.length == 12 && parent1aadhar.value.length == 12) || parent2aadhar.value.length == 12) {
                    var setWithMerge = docRef.set({
                        studentaadhar: studentaadhar.value,
                        parent1aadhar: parent1aadhar.value,
                        parent2aadhar: parent2aadhar.value,
                        studentaadharpdfurl: studentaadharpdfurl,
                        studentdobpdfurl: studentdobpdfurl,
                        parent1aadharpdfurl: parent1aadharpdfurl,
                        parent2aadharpdfurl: parent2aadharpdfurl,
                    }, { merge: true });


                    alert("Details & Documents Submitted Successfully!");
                    


                    window.location("./pay.html");


                } else {
                    alert("Aadhaar should be of 12 Digits ")
                }


            });



        } else {
            alert("make sure URN is of 13 Digits");

        }
    })

    
});