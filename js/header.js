"use strict";

const header = document.getElementById("header");

// Top header
var header_top = document.createElement('div');
header_top.classList.add('flexbox');
header_top.classList.add('header_top');

// Top header --> Menu
var menu = document.createElement('div');
menu.classList.add('menu');
menu.classList.add('flexbox');
menu.setAttribute("onclick", "menu_open_fn()");
menu.onmouseover = function () {
  mouseOnMenu();
};
menu.onmouseout = function () {
  mouseOutMenu();
};

// Top header --> Menu --> Part 1
var menu_box = document.createElement('div');
menu_box.classList.add('menu_box');
menu_box.classList.add('flexbox');

// Top header --> Menu --> Part 1 --> First arrow
var first_line = document.createElement('h6');
first_line.classList.add('first_line');
first_line.innerHTML = `<svg width="25" height="3" viewBox="0 0 25 3"><path id="Menu_Line" data-name="Menu Line" d="M25,1.5H0v-3H25Z" transform="translate(0 1.5)" fill="#fff"/></svg>`;

// Top header --> Menu --> Part 1 --> Second arrow
var second_line = document.createElement('h6');
second_line.classList.add('second_line');
second_line.innerHTML = `<svg width="25" height="3" viewBox="0 0 25 3"><path id="Menu_Line" data-name="Menu Line" d="M25,1.5H0v-3H25Z" transform="translate(0 1.5)" fill="#fff"/></svg>`;

// Append Child for menu_box
menu_box.appendChild(first_line);
menu_box.appendChild(second_line);

// Top header --> Menu --> Part 2
var menu_text = document.createElement('h2');
menu_text.classList.add('menu_text');
menu_text.innerHTML = "MENU";

// Append Child for menu
menu.appendChild(menu_box);
menu.appendChild(menu_text);

// Top header --> Login
var login = document.createElement('button');
login.classList.add('flexbox');
login.classList.add('login');
login.setAttribute("onclick", "loginBox()");

// Top header --> Login --> Part 1 --> User_logo
var user_logo = document.createElement('div');
user_logo.classList.add('flexbox');
user_logo.classList.add('user_logo');
user_logo.innerHTML = `<img height="80%" src="./assets/svg/header/user.svg">`;

// Top header --> Login --> Part 2
var login_text = document.createElement('h2');
login_text.classList.add('login_text');
login_text.innerHTML = "Log in";

// Append Child for login
login.appendChild(user_logo);
login.appendChild(login_text);

// Append Child for header_top
header_top.appendChild(menu);
header_top.appendChild(login);

// Bottom header
var header_bottom = document.createElement('div');
header_bottom.classList.add('flexbox');
header_bottom.classList.add('header_bottom');

// Bottom header --> left_dot
var left_dot = document.createElement('div');
left_dot.classList.add('flexbox');
left_dot.classList.add('left_dot');
left_dot.innerHTML = `<img height="90%" src="./assets/svg/header/dot_left.svg">`;

// Bottom header --> main_header
var main_header = document.createElement('div');
main_header.classList.add('flexbox');
main_header.classList.add('main_header');

// Bottom header --> main_header --> Logo_GGPS_a
var logo_ggps_a = document.createElement('a');
logo_ggps_a.classList.add('logo_ggps_a');
logo_ggps_a.setAttribute('href', './index.html');

// Bottom header --> main_header --> Logo_GGPS
var logo_ggps = document.createElement('img');
logo_ggps.classList.add('logo_ggps');
logo_ggps.setAttribute('src', './assets/logo_ggps.png');
logo_ggps.setAttribute('alt', 'Logo GGPS');

// Append Child for main_header
logo_ggps_a.appendChild(logo_ggps);

// Bottom header --> main_header --> Text_GGPS
var ggps_text = document.createElement('div');
ggps_text.classList.add('flexbox');
ggps_text.classList.add('ggps_text');

// Bottom header --> main_header --> Text_GGPS --> Part 1
var ggps_name = document.createElement('div');
ggps_name.classList.add('flexbox');
ggps_name.classList.add('ggps_name');

// Bottom header --> main_header --> Text_GGPS --> Part 1 --> ggps_name_text
var ggps_name_text = document.createElement('h1');
ggps_name_text.classList.add('ggps_name_text');
ggps_name_text.innerHTML = "Gyan Ganga Public School";

// Append chile for ggps_name
ggps_name.appendChild(ggps_name_text);

// Bottom header --> main_header --> Text_GGPS --> Part 2
var ggps_address = document.createElement('div');
ggps_address.classList.add('flexbox');
ggps_address.classList.add('ggps_address');

// Bottom header --> main_header --> Text_GGPS --> Part 1 --> ggps_address_text
var ggps_address_text = document.createElement('h1');
ggps_address_text.classList.add('ggps_address_text');
ggps_address_text.innerHTML = "Bhadasi, Arwal, Bihar (India) - 804401";

// Append chile for ggps_address
ggps_address.appendChild(ggps_address_text);

// Append Child for ggps_text
ggps_text.appendChild(ggps_name);
ggps_text.appendChild(ggps_address);

// Append Child for main_header
main_header.appendChild(logo_ggps_a);
main_header.appendChild(ggps_text);

// Bottom header --> right_dot
var right_dot = document.createElement('div');
right_dot.classList.add('flexbox');
right_dot.classList.add('right_dot');
right_dot.innerHTML = `<img height="90%" src="./assets/svg/header/dot_right.svg">`;

// Append Child for header_bottom
header_bottom.appendChild(left_dot);
header_bottom.appendChild(main_header);
header_bottom.appendChild(right_dot);

// Append Child for header
header.appendChild(header_top);
header.appendChild(header_bottom);

// Functions
// Menu Hover On Functions
function mouseOnMenu() {
  menu_box.style.border = "2px solid var(--green)";
  menu_box.style.transition = "0.5s";
  first_line.innerHTML = `<svg width="25" height="3" viewBox="0 0 25 3"><path id="Menu_Line" data-name="Menu Line" d="M25,1.5H0v-3H25Z" transform="translate(0 1.5)" fill="#01ce5a"/></svg>`;
  first_line.style.transform = "translateX(0px) translateY(1px)";
  first_line.style.transition = "0.5s";
  second_line.innerHTML = `<svg width="25" height="3" viewBox="0 0 25 3"><path id="Menu_Line" data-name="Menu Line" d="M25,1.5H0v-3H25Z" transform="translate(0 1.5)" fill="#01ce5a"/></svg>`;
  second_line.style.transform = "rotate(180deg) translateX(0px) translateY(1px)";
  second_line.style.transition = "0.5s";
  menu_text.style.color = "var(--green)";
  menu_text.style.transition = "0.5s";
  menu.style.cursor = "pointer";
}

// Menu Hover Off Functions
function mouseOutMenu() {
  menu_box.style.border = "2px solid var(--lightGray)";
  first_line.innerHTML = `<svg width="25" height="3" viewBox="0 0 25 3"><path id="Menu_Line" data-name="Menu Line" d="M25,1.5H0v-3H25Z" transform="translate(0 1.5)" fill="#fff"/></svg>`;
  first_line.style.transform = "translateX(-5px) translateY(1px)";
  second_line.innerHTML = `<svg width="25" height="3" viewBox="0 0 25 3"><path id="Menu_Line" data-name="Menu Line" d="M25,1.5H0v-3H25Z" transform="translate(0 1.5)" fill="#fff"/></svg>`;
  second_line.style.transform = "rotate(180deg) translateX(-5px) translateY(1px)";
  menu_text.style.color = "var(--lightGray)";
  menu.style.cursor = "default";
}
