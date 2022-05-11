
"use strict";
document.addEventListener('DOMContentLoaded', function () {

    const tablebody = document.getElementById('tablebody');
    var num = 0;
    var outhtml = ``;

    db.collection("alumni").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            num++;
            // doc.data() is never undefined for query doc snapshots
            const data = doc.data();
            // console.log(doc.id, " => ", data);

            outhtml += `<tr>
                    <th scope="row">${num}</th>
                    <td>${data.URN}</td>
                    <td>${data.name}</td>
                    <td>${data.Gender}</td>
                    <td>${data.admissionDate}</td>
                    <td>${data.passingDate}</td>
                    
                  </tr>
            
            `;

            tablebody.innerHTML = outhtml;

        });
    });

});
