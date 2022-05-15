"use strict";

document.addEventListener('DOMContentLoaded', function () {
    // contact form
    const contactForm = document.querySelector(".contact-form");
    const fullName = document.getElementById("fullname");
    const emailAddress = document.getElementById("emailaddress");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('contact-form').doc().set({
            fullName: fullName.value,
            emailAddress: emailAddress.value,
            subject: subject.value,
            message: message.value,
        }).then(() => {
            contactForm.reset();
            alert("thank you for your message");
        });
    });
    // contact form

});



