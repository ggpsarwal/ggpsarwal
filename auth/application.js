"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const inputForm = document.getElementById('inputForm');
    const parent1Image = document.getElementById('parent1Image');
    const parent2Image = document.getElementById('parent2Image');
    const childImage = document.getElementById('childImage');

    var parent1photourl = "";
    var parent2photourl = "";
    var childphotourl = "";



    parent1Image.addEventListener('change', () => {
        // alert("photo changed");

        const ref = storage.ref();
        const file = document.querySelector("#parent1Image").files[0]
        const name = Date.now() + '-' + file.name
        const metadata = {
            contentType: file.type
        }

        const task = ref.child(name).put(file, metadata)

        task.then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                const image = document.querySelector('#parent1photo');
                // alert("Image uploaded successfully");
                image.src = url;
                parent1photourl = url;
                // console.log(parent1photourl);
            });

    });

    parent2Image.addEventListener('change', () => {
        // alert("photo changed");

        const ref = storage.ref();
        const file = document.querySelector("#parent2Image").files[0]
        const name = Date.now() + '-' + file.name
        const metadata = {
            contentType: file.type
        }

        const task = ref.child(name).put(file, metadata)

        task.then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                const image = document.querySelector('#parent2photo');
                // alert("Image uploaded successfully");
                image.src = url;
                parent2photourl = url;
                // console.log(parent2photourl);
            });

    });

    childImage.addEventListener('change', () => {
        // alert("photo changed");

        const ref = storage.ref();
        const file = document.querySelector("#childImage").files[0]
        const name = Date.now() + '-' + file.name
        const metadata = {
            contentType: file.type
        }

        const task = ref.child(name).put(file, metadata)

        task.then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                const image = document.querySelector('#childphoto');
                // alert("Image uploaded successfully");
                image.src = url;
                childphotourl = url;
                // console.log(childphotourl);
            });

    });

    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();


        const parent1Name = document.getElementById('parent1Name');
        const parent1Relation = document.getElementById('parent1Relation');
        const parent1MaritalStatus = document.getElementById('parent1MaritalStatus');
        const parent1Occupation = document.getElementById('parent1Occupation');
        const parent2Name = document.getElementById('parent2Name');
        const parent2Relation = document.getElementById('parent2Relation');
        const parent2MaritalStatus = document.getElementById('parent2MaritalStatus');
        const parent2Occupation = document.getElementById('parent2Occupation');
        const inputEmail = document.getElementById('inputEmail');
        const inputMobile = document.getElementById('inputMobile');
        const inputAddress = document.getElementById('inputAddress');
        const inputCity = document.getElementById('inputCity');
        const inputState = document.getElementById('inputState');
        const inputZip = document.getElementById('inputZip');
        const inputCountry = document.getElementById('inputCountry');

        const childName = document.getElementById('childName');
        const inputDob = document.getElementById('inputDob');
        const currentGrade = document.getElementById('currentGrade');
        const interesetedGrade = document.getElementById('interesetedGrade');
        const inputGender = document.getElementById('inputGender');
        const visit = document.getElementById('visit');
        const contact = document.getElementById('contact');
        const qa = document.getElementById('qa');

        const URN = Date.now();
        // console.log(URN);
        db.collection('admissionForm').doc(`${URN}`).set({
            parent1Name: parent1Name.value,
            parent1Relation: parent1Relation.value,
            parent1MaritalStatus: parent1MaritalStatus.value,
            parent1Occupation: parent1Occupation.value,
            parent2Name: parent2Name.value,
            parent2Relation: parent2Relation.value,
            parent2MaritalStatus: parent2MaritalStatus.value,
            parent2Occupation: parent2Occupation.value,
            inputEmail: inputEmail.value,
            inputMobile: inputMobile.value,
            inputAddress: inputAddress.value,
            inputCity: inputCity.value,
            inputState: inputState.value,
            inputZip: inputZip.value,
            inputCountry: inputCountry.value,
            childName: childName.value,
            inputDob: inputDob.value,
            currentGrade: currentGrade.value,
            interesetedGrade: interesetedGrade.value,
            inputGender: inputGender.value,
            visit: visit.value,
            contact: contact.value,
            qa: qa.value,
            parent1photourl: parent1photourl,
            parent2photourl: parent2photourl,
            childphotourl: childphotourl,
            URN: URN
        }).then(() => {
            alert("Admission form submitted successfully!");
            document.querySelector('#parent1photo').src = "camera.jpg";
            document.querySelector('#parent2photo').src = "camera.jpg";
            document.querySelector('#childphoto').src = "camera.jpg";
            inputForm.reset();

            // getting data
            var docRef = db.collection("admissionForm").doc(`${URN}`);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    const userData = doc.data();

                    alert(`
                    Your URN is : ${userData.URN} 
                    please save it for future use`);


                    let text = "Have saved your URN!\nEither OK or Cancel.";
                    if (confirm(text) == true) {
                        text = "You need to fill more Details!";
                        alert(text);
                        window.location('./search.html');
                    } else {
                        
                        alert(`
                                Your URN is : ${userData.URN} 
                                please save it for future use`);
                    }

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            // getting data



        }).catch((error) => {
            console.error("Error writing document: ", error);
        });

    });


});