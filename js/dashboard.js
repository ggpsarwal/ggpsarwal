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



    // document.getElementById('stuBtn').addEventListener('click', viewDetails);


});

var studentouthtml = ``;
var alumniouthtml = ``;
// get students
function getStudents() {
    studentouthtml = ``;
    alumniouthtml = ``;
    document.getElementById('alumnitable').style.display = "none";
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
                    <td><button class="btn btn-outline-success viewBtn">View Details</button></td>
                  </tr>
            
            `;

            tablebody.innerHTML = studentouthtml;




        });



        viewDetails();
    });


}
// get students


// get alumni
function getAlumni() {
    studentouthtml = ``;
    alumniouthtml = ``;
    document.getElementById('studenttable').style.display = "none";
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
                <td><button class="btn btn-outline-success">View Details</button></td>
                
              </tr>
        
        `;

            tablebody.innerHTML = alumniouthtml;

        });
    });
}
// get alumni


function getDownloads() {
    document.getElementById('studenttable').style.display = "none";
    document.getElementById('alumnitable').style.display = "none";

}


function getCirculars() {
    document.getElementById('studenttable').style.display = "none";
    document.getElementById('alumnitable').style.display = "none";

}



function viewDetails() {
    const viewBtn = document.querySelectorAll('.viewBtn');

    viewBtn.forEach(element => {
        element.addEventListener('click', () => {
            const urn = element.parentNode.parentNode.children[1].innerHTML;
            console.log(urn);
            // alert("clicked");
            var docRef = db.collection("admissionForm").doc(`${urn}`);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    const userData = doc.data();
                    console.log(userData);


                } else {
                    // doc.data() will be undefined in this case
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        })
    });
}