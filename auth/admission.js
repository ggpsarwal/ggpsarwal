"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const search = document.getElementById('search');
    search.addEventListener('click', () => {
        var inputURN = document.getElementById('inputURN').value;
        if (inputURN.length == 13) {
            // getting data
            var docRef = db.collection("admissionForm").doc(`${inputURN}`);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    const userData = doc.data();
                    var outhtml = `URN: ${userData.URN} <br> Student Name: ${userData.childName} <br> Email: ${userData.inputEmail} <br> Mobile: ${userData.inputMobile} <br> Gender: ${userData.inputGender}`;
                    
                    document.getElementById("data").innerHTML = outhtml;

                } else {
                    // doc.data() will be undefined in this case
                    document.getElementById("data").innerHTML = `Please Enter Correct URN!`;
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            // getting data
        } else {
            alert("make sure URN is of 13 Digits");
            
        }
    })
});