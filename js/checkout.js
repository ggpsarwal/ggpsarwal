
document.addEventListener('DOMContentLoaded', () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
            console.log(user.email);

            let urlString = window.location.href;
            // console.log(urlString);

            let paramString = urlString.split('?')[1];
            if (!paramString) {
                console.log("no params");
                setTimeout(() => {
                    window.location = "https://ggpsarwal.github.io/ggpsarwal"
                }, 1);
            }
            let queryString = new URLSearchParams(paramString);
            var newPassword;
            for (let pair of queryString.entries()) {
                console.log("Key is:" + pair[0]);
                console.log("Value is:" + pair[1]);
                newPassword = pair[1];
            }

            // console.log(newPassword);

            user.updatePassword(newPassword).then(() => {
                document.getElementById("pay").innerHTML = "Payment Successfull";
                // Update successful.
                setTimeout(() => {
                    window.location = "https://ggpsarwal.github.io/ggpsarwal"
                }, 10);
            }).catch((error) => {
                // An error ocurred
                // ...
            });

        } else {
            alert("No Active user Found / User is signed out");

        }
    });

});

