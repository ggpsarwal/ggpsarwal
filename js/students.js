
"use strict";
document.addEventListener('DOMContentLoaded', function () {

    const tablebody = document.getElementById('tablebody');
    var num = 0;
    var outhtml = ``;

    db.collection("admissionForm").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            num++;
            // doc.data() is never undefined for query doc snapshots
            const data = doc.data();
            // console.log(doc.id, " => ", data);
            console.log(data);

            outhtml += `<tr>
                    <th scope="row">${num}</th>
                    <td>${data.URN}</td>
                    <td>${data.childName}</td>
                    <td>${data.inputGender}</td>
                    <td></td>
                    <td></td>
                  </tr>
            
            `;

            tablebody.innerHTML = outhtml;



        });
    });

});
