"use strict";

const footer = document.getElementById("footer");

// Top footer
var footer_top = document.createElement('div');
footer_top.classList.add('flexbox');
footer_top.classList.add('footer_top');

// Top footer --> Logo_GGPS
var footer_logo = document.createElement('div');
footer_logo.classList.add('flexbox');
footer_logo.classList.add('footer_logo');

// Top footer --> Logo_GGPS --> logo
var footer_logo_ggps = document.createElement('img');
footer_logo_ggps.classList.add('footer_logo_ggps');
footer_logo_ggps.setAttribute('src', './assets/logo_ggps.png')
footer_logo_ggps.setAttribute('alt', 'Logo GGPS');

// Append Child for footer_logo
footer_logo.appendChild(footer_logo_ggps);

// Top footer --> Reach us
var reach_us = document.createElement('div');
reach_us.classList.add('flexbox');
reach_us.classList.add('reach_us');

// Top footer --> Reach us --> Part 1
var reach_title = document.createElement('div');
reach_title.classList.add('flexbox');
reach_title.classList.add('reach_title');

// Top footer --> Reach us --> Part 1 --> text
var reach_title_text = document.createElement('h1');
reach_title_text.classList.add('reach_title_text');
reach_title_text.innerText = "Reach Us Out !";

// Top footer --> Reach us --> Part 1 --> line
var reach_title_line = document.createElement('hr');
reach_title_line.classList.add('reach_title_line');

// Append Child for Reach us Part 1
reach_title.appendChild(reach_title_text);
reach_title.appendChild(reach_title_line);

// Top footer --> Reach us --> Part 2
var reach_body = document.createElement('div');
reach_body.classList.add('flexbox');
reach_body.classList.add('reach_body');

// Top footer --> Reach us --> Part 2 --> location
var reach_location = document.createElement('div');
reach_location.classList.add('flexbox');
reach_location.classList.add('reach_location');

// Top footer --> Reach us --> Part 2 --> location --> logo
var reach_location_logo = document.createElement('div');
reach_location_logo.classList.add('flexbox');
reach_location_logo.classList.add('reach_location_logo');
reach_location_logo.innerHTML = `<img src="./assets/svg/footer/location.svg"></img>`;

// Top footer --> Reach us --> Part 2 --> location --> text
var reach_location_text = document.createElement('div');
reach_location_text.classList.add('flexbox');
reach_location_text.classList.add('reach_location_text');

// Top footer --> Reach us --> Part 2 --> location --> text --> head
var reach_location_text_head = document.createElement('div');
reach_location_text_head.classList.add('flexbox');
reach_location_text_head.classList.add('reach_location_text_head');
reach_location_text_head.innerText = "Location";

// Top footer --> Reach us --> Part 2 --> location --> text --> body
var reach_location_text_body = document.createElement('div');
reach_location_text_body.classList.add('flexbox');
reach_location_text_body.classList.add('reach_location_text_body');
reach_location_text_body.innerText = "Bhadasi, Arwal, Bihar - 804401 (India)";

// Append Child for location_text
reach_location_text.appendChild(reach_location_text_head);
reach_location_text.appendChild(reach_location_text_body);

// Append Child for location
reach_location.appendChild(reach_location_logo);
reach_location.appendChild(reach_location_text);

// Top footer --> Reach us --> Part 2 --> phone
var reach_phone = document.createElement('div');
reach_phone.classList.add('flexbox');
reach_phone.classList.add('reach_phone');

// Top footer --> Reach us --> Part 2 --> phone --> logo
var reach_phone_logo = document.createElement('div');
reach_phone_logo.classList.add('flexbox');
reach_phone_logo.classList.add('reach_phone_logo');
reach_phone_logo.innerHTML = `<img height="30%" src="./assets/svg/footer/phone.svg"></img>`;

// Top footer --> Reach us --> Part 2 --> phone --> text
var reach_phone_text = document.createElement('div');
reach_phone_text.classList.add('flexbox');
reach_phone_text.classList.add('reach_phone_text');

// Top footer --> Reach us --> Part 2 --> phone --> text --> head
var reach_phone_text_head = document.createElement('div');
reach_phone_text_head.classList.add('flexbox');
reach_phone_text_head.classList.add('reach_phone_text_head');
reach_phone_text_head.innerText = "Phone";

// Top footer --> Reach us --> Part 2 --> phone --> text --> body
var reach_phone_text_body = document.createElement('div');
reach_phone_text_body.classList.add('flexbox');
reach_phone_text_body.classList.add('reach_phone_text_body');
reach_phone_text_body.innerHTML = `<a href="tel:9771852570">(+91) 9771-852570,
8804-542971, 7979-702867</a>`;

// Append Child for phone_text
reach_phone_text.appendChild(reach_phone_text_head);
reach_phone_text.appendChild(reach_phone_text_body);

// Append Child for phone
reach_phone.appendChild(reach_phone_logo);
reach_phone.appendChild(reach_phone_text);

// Top footer --> Reach us --> Part 2 --> email
var reach_mail = document.createElement('div');
reach_mail.classList.add('flexbox');
reach_mail.classList.add('reach_mail');

// Top footer --> Reach us --> Part 2 --> email --> logo
var reach_email_logo = document.createElement('div');
reach_email_logo.classList.add('flexbox');
reach_email_logo.classList.add('reach_email_logo');
reach_email_logo.innerHTML = `<img src="./assets/svg/footer/mail.svg"></img>`;

// Top footer --> Reach us --> Part 2 --> email --> text
var reach_email_text = document.createElement('div');
reach_email_text.classList.add('flexbox');
reach_email_text.classList.add('reach_email_text');

// Top footer --> Reach us --> Part 2 --> email --> text --> head
var reach_email_text_head = document.createElement('div');
reach_email_text_head.classList.add('flexbox');
reach_email_text_head.classList.add('reach_email_text_head');
reach_email_text_head.innerText = "E-mail";

// Top footer --> Reach us --> Part 2 --> email --> text --> body
var reach_email_text_body = document.createElement('div');
reach_email_text_body.classList.add('flexbox');
reach_email_text_body.classList.add('reach_email_text_body');
reach_email_text_body.innerHTML = `<a href="mailto:gyangangaschool07@gmail.com" >gyangangaschool07@gmail.com</a>`;

// Append Child for reach_email_text
reach_email_text.appendChild(reach_email_text_head);
reach_email_text.appendChild(reach_email_text_body);

// Append Child for reach_email
reach_mail.appendChild(reach_email_logo);
reach_mail.appendChild(reach_email_text);

// Append Child for reach_body
reach_body.appendChild(reach_location);
reach_body.appendChild(reach_phone);
reach_body.appendChild(reach_mail);

// Append Child for Reach us
reach_us.appendChild(reach_title);
reach_us.appendChild(reach_body);

// Top footer --> Links
var links = document.createElement('div');
links.classList.add('flexbox');
links.classList.add('links');

// Top footer --> Links --> Part 1
var links_title = document.createElement('div');
links_title.classList.add('flexbox');
links_title.classList.add('links_title');

// Top footer --> Links --> Part 1 --> text
var links_title_text = document.createElement('h1');
links_title_text.classList.add('links_title_text');
links_title_text.innerText = "Quick Links";

// Top footer --> Links --> Part 1 --> line
var links_title_line = document.createElement('hr');
links_title_line.classList.add('links_title_line');

// Append Child for Links Part 1
links_title.appendChild(links_title_text);
links_title.appendChild(links_title_line);

// Top footer --> Links --> Part 2
var links_body = document.createElement('div');
links_body.classList.add('links_body');

// Top footer --> Links --> Part 2 --> Text 1
var links_body_text_1 = document.createElement('div');
links_body_text_1.classList.add('flexbox');
links_body_text_1.classList.add('links_body_text_1');

// Top footer --> Links --> Part 2 --> Text 1 --> Link
var links_body_text_1_link = document.createElement('h3');
links_body_text_1_link.classList.add('links_body_text_1_link');
links_body_text_1_link.innerHTML = `<a href="https://ggpsarwal.github.io/ggpsarwal/admission.html"
>Admission</a>`;

// Append Child for links_body_text_1
links_body_text_1.appendChild(links_body_text_1_link);

// Top footer --> Links --> Part 2 --> Text 2
var links_body_text_2 = document.createElement('div');
links_body_text_2.classList.add('flexbox');
links_body_text_2.classList.add('links_body_text_2');

// Top footer --> Links --> Part 2 --> Text 2 --> Link
var links_body_text_2_link = document.createElement('h3');
links_body_text_2_link.classList.add('links_body_text_2_link');
links_body_text_2_link.innerHTML = `<a href="https://ggpsarwal.github.io/ggpsarwal/gallery.html"
>Gallery</a>`;

// Append Child for links_body_text_2
links_body_text_2.appendChild(links_body_text_2_link);

// Top footer --> Links --> Part 2 --> Text 3
var links_body_text_3 = document.createElement('div');
links_body_text_3.classList.add('flexbox');
links_body_text_3.classList.add('links_body_text_3');

// Top footer --> Links --> Part 2 --> Text 3 --> Link
var links_body_text_3_link = document.createElement('h3');
links_body_text_3_link.classList.add('links_body_text_3_link');
links_body_text_3_link.innerHTML = `<a href="https://ggpsarwal.github.io/ggpsarwal/alumni.html"
>Alumni</a>`;

// Append Child for links_body_text_3
links_body_text_3.appendChild(links_body_text_3_link);

// Top footer --> Links --> Part 2 --> Text 4
var links_body_text_4 = document.createElement('div');
links_body_text_4.classList.add('flexbox');
links_body_text_4.classList.add('links_body_text_4');

// Top footer --> Links --> Part 2 --> Text 4 --> Link
var links_body_text_4_link = document.createElement('h3');
links_body_text_4_link.classList.add('links_body_text_4_link');
links_body_text_4_link.innerHTML = `<a href="https://ggpsarwal.github.io/ggpsarwal/about.html"
>About Us</a>`;

// Append Child for links_body_text_4
links_body_text_4.appendChild(links_body_text_4_link);

// Top footer --> Links --> Part 2 --> Text 5
var links_body_text_5 = document.createElement('div');
links_body_text_5.classList.add('flexbox');
links_body_text_5.classList.add('links_body_text_5');

// Top footer --> Links --> Part 2 --> Text 5 --> Link
var links_body_text_5_link = document.createElement('h3');
links_body_text_5_link.classList.add('links_body_text_5_link');
links_body_text_5_link.innerHTML = `<a href="https://ggpsarwal.github.io/ggpsarwal/circulars.html"
>Circulars</a>`;

// Append Child for links_body_text_5
links_body_text_5.appendChild(links_body_text_5_link);

// Top footer --> Links --> Part 2 --> Text 6
var links_body_text_6 = document.createElement('div');
links_body_text_6.classList.add('flexbox');
links_body_text_6.classList.add('links_body_text_6');

// Top footer --> Links --> Part 2 --> Text 6 --> Link
var links_body_text_6_link = document.createElement('h3');
links_body_text_6_link.classList.add('links_body_text_6_link');
links_body_text_6_link.innerHTML = `<a href="https://ggpsarwal.github.io/ggpsarwal/contactus.html"
>Contact Us</a>`;

// Append Child for links_body_text_6
links_body_text_6.appendChild(links_body_text_6_link);

// Append Child for links_body
links_body.appendChild(links_body_text_1);
links_body.appendChild(links_body_text_2);
links_body.appendChild(links_body_text_3);
links_body.appendChild(links_body_text_4);
links_body.appendChild(links_body_text_5);
links_body.appendChild(links_body_text_6);

// Append Child for Links
links.appendChild(links_title);
links.appendChild(links_body);

// Top footer --> Get in touch
var social = document.createElement('div');
social.classList.add('flexbox');
social.classList.add('social');

// Top footer --> Social --> Part 1
var social_title = document.createElement('div');
social_title.classList.add('flexbox');
social_title.classList.add('social_title');

// Top footer --> Social --> Part 1 --> text
var social_title_text = document.createElement('h1');
social_title_text.classList.add('social_title_text');
social_title_text.innerText = "Get In Touch !";

// Top footer --> Social --> Part 1 --> line
var social_title_line = document.createElement('hr');
social_title_line.classList.add('social_title_line');

// Append Child for Social Part 1
social_title.appendChild(social_title_text);
social_title.appendChild(social_title_line);

// Top footer --> Social --> Part 2
var social_body = document.createElement('div');
social_body.classList.add('flexbox');
social_body.classList.add('social_body');

// Top footer --> Social --> Part 2 --> Icon 1
var social_body_facebook = document.createElement('div');
social_body_facebook.classList.add('flexbox');
social_body_facebook.classList.add('social_body_facebook');
social_body_facebook.innerHTML = `<img height="25%" src="./assets/svg/footer/facebook.svg"></img>`;

// Top footer --> Social --> Part 2 --> Icon 2
var social_body_instagram = document.createElement('div');
social_body_instagram.classList.add('flexbox');
social_body_instagram.classList.add('social_body_instagram');
social_body_instagram.innerHTML = `<img height="25%" src="./assets/svg/footer/instagram.svg"></img>`;

// Top footer --> Social --> Part 2 --> Icon 3
var social_body_twitter = document.createElement('div');
social_body_twitter.classList.add('flexbox');
social_body_twitter.classList.add('social_body_twitter');
social_body_twitter.innerHTML = `<img height="25%" src="./assets/svg/footer/twitter.svg"></img>`;

// Append Child for social_body
social_body.appendChild(social_body_facebook);
social_body.appendChild(social_body_instagram);
social_body.appendChild(social_body_twitter);

// Append Child for Social
social.appendChild(social_title);
social.appendChild(social_body);

// Append Child for Top footer
footer_top.appendChild(footer_logo);
footer_top.appendChild(reach_us);
footer_top.appendChild(links);
footer_top.appendChild(social);

// Bottom footer
var footer_bottom = document.createElement('div');
footer_bottom.classList.add('flexbox');
footer_bottom.classList.add('footer_bottom');

// bottom footer --> Menu
var copyright = document.createElement('h1');
copyright.classList.add('copyright');
copyright.innerHTML = "&copy 2022 GGPS. All Rights Reserved.";

// Append Child for footer_bottom
footer_bottom.appendChild(copyright);

// Append Child for footer
footer.appendChild(footer_top);
footer.appendChild(footer_bottom);
