const header = document.getElementById("header");

// Top header
var header_top = document.createElement('div');
header_top.classList.add('flexbox');
header_top.classList.add('header_top');

// Top header --> Menu
var menu = document.createElement('div');
menu.classList.add('menu');
menu.classList.add('flexbox');
menu.onmouseover = function () {
  mouseOnMenu();
}
menu.onmouseout = function () {
  mouseOutMenu();
}

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
login.setAttribute("onclick", "loginBox()")

// Top header --> Login --> Part 1 --> User_logo
var user_logo = document.createElement('div');
user_logo.classList.add('flexbox');
user_logo.classList.add('user_logo');
user_logo.innerHTML = `<svg width="30" height="30" viewBox="0 0 31.5 31.5"><g id="User" transform="translate(-1705 -22.5)"><path id="Path_1" data-name="Path 1" d="M18,2.25A15.75,15.75,0,1,0,33.75,18,15.75,15.75,0,0,0,18,2.25Zm9,25.784V27.35a5.86,5.86,0,0,0-5.625-5.975h-6.75a5.85,5.85,0,0,0-5.614,5.974c0,.012-.011.025-.011.037v.658a13.506,13.506,0,1,1,18-.011Z" transform="translate(1702.75 20.25)" fill="#fff"/><path id="Path_2" data-name="Path 2" d="M18,7.875A5.625,5.625,0,1,0,23.625,13.5,5.625,5.625,0,0,0,18,7.875Z" transform="translate(1702.75 20.25)" fill="#fff"/></g></svg>`;

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
left_dot.innerHTML = `<svg width="90" height="216" viewBox="0 0 115 231">
    <g id="Dot_Left" data-name="Dot Left" transform="translate(2791 2748)">
      <circle id="Ellipse_1" data-name="Ellipse 1" cx="5" cy="5" r="5" transform="translate(-2791 -2748)" fill="#d6d6d6"/>
      <path id="Ellipse_1_-_Outline" data-name="Ellipse 1 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-2791 -2748)" fill="#707070"/>
      <circle id="Ellipse_14" data-name="Ellipse 14" cx="5" cy="5" r="5" transform="translate(-2770 -2748)" fill="#d6d6d6"/>
      <path id="Ellipse_14_-_Outline" data-name="Ellipse 14 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2770 -2748)" fill="#707070"/>
      <circle id="Ellipse_26" data-name="Ellipse 26" cx="5" cy="5" r="5" transform="translate(-2749 -2747)" fill="#d6d6d6"/>
      <path id="Ellipse_26_-_Outline" data-name="Ellipse 26 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2749 -2747)" fill="#707070"/>
      <circle id="Ellipse_6" data-name="Ellipse 6" cx="5" cy="5" r="5" transform="translate(-2791 -2668)" fill="#d6d6d6"/>
      <path id="Ellipse_6_-_Outline" data-name="Ellipse 6 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-2791 -2668)" fill="#707070"/>
      <circle id="Ellipse_18" data-name="Ellipse 18" cx="5" cy="5" r="5" transform="translate(-2770 -2668)" fill="#d6d6d6"/>
      <path id="Ellipse_18_-_Outline" data-name="Ellipse 18 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2770 -2668)" fill="#707070"/>
      <circle id="Ellipse_30" data-name="Ellipse 30" cx="5" cy="5" r="5" transform="translate(-2749 -2667)" fill="#d6d6d6"/>
      <path id="Ellipse_30_-_Outline" data-name="Ellipse 30 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2749 -2667)" fill="#707070"/>
      <circle id="Ellipse_42" data-name="Ellipse 42" cx="5" cy="5" r="5" transform="translate(-2728 -2667)" fill="#d6d6d6"/>
      <path id="Ellipse_42_-_Outline" data-name="Ellipse 42 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2728 -2667)" fill="#707070"/>
      <circle id="Ellipse_54" data-name="Ellipse 54" cx="5" cy="5" r="5" transform="translate(-2707 -2667)" fill="#d6d6d6"/>
      <path id="Ellipse_54_-_Outline" data-name="Ellipse 54 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2707 -2667)" fill="#707070"/>
      <circle id="Ellipse_66" data-name="Ellipse 66" cx="5" cy="5" r="5" transform="translate(-2686 -2667)" fill="#d6d6d6"/>
      <path id="Ellipse_66_-_Outline" data-name="Ellipse 66 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2686 -2667)" fill="#707070"/>
      <circle id="Ellipse_10" data-name="Ellipse 10" cx="5" cy="5" r="5" transform="translate(-2791 -2588)" fill="#d6d6d6"/>
      <path id="Ellipse_10_-_Outline" data-name="Ellipse 10 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2791 -2588)" fill="#707070"/>
      <circle id="Ellipse_22" data-name="Ellipse 22" cx="5" cy="5" r="5" transform="translate(-2770 -2588)" fill="#d6d6d6"/>
      <path id="Ellipse_22_-_Outline" data-name="Ellipse 22 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2770 -2588)" fill="#707070"/>
      <circle id="Ellipse_34" data-name="Ellipse 34" cx="5" cy="5" r="5" transform="translate(-2749 -2587)" fill="#d6d6d6"/>
      <path id="Ellipse_34_-_Outline" data-name="Ellipse 34 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2749 -2587)" fill="#707070"/>
      <circle id="Ellipse_46" data-name="Ellipse 46" cx="5" cy="5" r="5" transform="translate(-2728 -2587)" fill="#d6d6d6"/>
      <path id="Ellipse_46_-_Outline" data-name="Ellipse 46 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2728 -2587)" fill="#707070"/>
      <circle id="Ellipse_58" data-name="Ellipse 58" cx="5" cy="5" r="5" transform="translate(-2707 -2587)" fill="#d6d6d6"/>
      <path id="Ellipse_58_-_Outline" data-name="Ellipse 58 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2707 -2587)" fill="#707070"/>
      <circle id="Ellipse_70" data-name="Ellipse 70" cx="5" cy="5" r="5" transform="translate(-2686 -2587)" fill="#d6d6d6"/>
      <path id="Ellipse_70_-_Outline" data-name="Ellipse 70 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2686 -2587)" fill="#707070"/>
      <circle id="Ellipse_4" data-name="Ellipse 4" cx="5" cy="5" r="5" transform="translate(-2791 -2708)" fill="#d6d6d6"/>
      <path id="Ellipse_4_-_Outline" data-name="Ellipse 4 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-2791 -2708)" fill="#707070"/>
      <circle id="Ellipse_16" data-name="Ellipse 16" cx="5" cy="5" r="5" transform="translate(-2770 -2708)" fill="#d6d6d6"/>
      <path id="Ellipse_16_-_Outline" data-name="Ellipse 16 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2770 -2708)" fill="#707070"/>
      <circle id="Ellipse_28" data-name="Ellipse 28" cx="5" cy="5" r="5" transform="translate(-2749 -2707)" fill="#d6d6d6"/>
      <path id="Ellipse_28_-_Outline" data-name="Ellipse 28 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2749 -2707)" fill="#707070"/>
      <circle id="Ellipse_40" data-name="Ellipse 40" cx="5" cy="5" r="5" transform="translate(-2728 -2707)" fill="#d6d6d6"/>
      <path id="Ellipse_40_-_Outline" data-name="Ellipse 40 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2728 -2707)" fill="#707070"/>
      <circle id="Ellipse_52" data-name="Ellipse 52" cx="5" cy="5" r="5" transform="translate(-2707 -2707)" fill="#d6d6d6"/>
      <path id="Ellipse_52_-_Outline" data-name="Ellipse 52 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2707 -2707)" fill="#707070"/>
      <circle id="Ellipse_8" data-name="Ellipse 8" cx="5" cy="5" r="5" transform="translate(-2791 -2628)" fill="#d6d6d6"/>
      <path id="Ellipse_8_-_Outline" data-name="Ellipse 8 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-2791 -2628)" fill="#707070"/>
      <circle id="Ellipse_20" data-name="Ellipse 20" cx="5" cy="5" r="5" transform="translate(-2770 -2628)" fill="#d6d6d6"/>
      <path id="Ellipse_20_-_Outline" data-name="Ellipse 20 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2770 -2628)" fill="#707070"/>
      <circle id="Ellipse_32" data-name="Ellipse 32" cx="5" cy="5" r="5" transform="translate(-2749 -2627)" fill="#d6d6d6"/>
      <path id="Ellipse_32_-_Outline" data-name="Ellipse 32 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2749 -2627)" fill="#707070"/>
      <circle id="Ellipse_44" data-name="Ellipse 44" cx="5" cy="5" r="5" transform="translate(-2728 -2627)" fill="#d6d6d6"/>
      <path id="Ellipse_44_-_Outline" data-name="Ellipse 44 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2728 -2627)" fill="#707070"/>
      <circle id="Ellipse_56" data-name="Ellipse 56" cx="5" cy="5" r="5" transform="translate(-2707 -2627)" fill="#d6d6d6"/>
      <path id="Ellipse_56_-_Outline" data-name="Ellipse 56 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2707 -2627)" fill="#707070"/>
      <circle id="Ellipse_68" data-name="Ellipse 68" cx="5" cy="5" r="5" transform="translate(-2686 -2627)" fill="#d6d6d6"/>
      <path id="Ellipse_68_-_Outline" data-name="Ellipse 68 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2686 -2627)" fill="#707070"/>
      <circle id="Ellipse_12" data-name="Ellipse 12" cx="5" cy="5" r="5" transform="translate(-2791 -2548)" fill="#d6d6d6"/>
      <path id="Ellipse_12_-_Outline" data-name="Ellipse 12 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2791 -2548)" fill="#707070"/>
      <circle id="Ellipse_24" data-name="Ellipse 24" cx="5" cy="5" r="5" transform="translate(-2770 -2548)" fill="#d6d6d6"/>
      <path id="Ellipse_24_-_Outline" data-name="Ellipse 24 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2770 -2548)" fill="#707070"/>
      <circle id="Ellipse_36" data-name="Ellipse 36" cx="5" cy="5" r="5" transform="translate(-2749 -2547)" fill="#d6d6d6"/>
      <path id="Ellipse_36_-_Outline" data-name="Ellipse 36 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2749 -2547)" fill="#707070"/>
      <circle id="Ellipse_48" data-name="Ellipse 48" cx="5" cy="5" r="5" transform="translate(-2728 -2547)" fill="#d6d6d6"/>
      <path id="Ellipse_48_-_Outline" data-name="Ellipse 48 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2728 -2547)" fill="#707070"/>
      <circle id="Ellipse_3" data-name="Ellipse 3" cx="5" cy="5" r="5" transform="translate(-2791 -2728)" fill="#d6d6d6"/>
      <path id="Ellipse_3_-_Outline" data-name="Ellipse 3 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-2791 -2728)" fill="#707070"/>
      <circle id="Ellipse_15" data-name="Ellipse 15" cx="5" cy="5" r="5" transform="translate(-2770 -2728)" fill="#d6d6d6"/>
      <path id="Ellipse_15_-_Outline" data-name="Ellipse 15 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2770 -2728)" fill="#707070"/>
      <circle id="Ellipse_27" data-name="Ellipse 27" cx="5" cy="5" r="5" transform="translate(-2749 -2727)" fill="#d6d6d6"/>
      <path id="Ellipse_27_-_Outline" data-name="Ellipse 27 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2749 -2727)" fill="#707070"/>
      <circle id="Ellipse_39" data-name="Ellipse 39" cx="5" cy="5" r="5" transform="translate(-2728 -2727)" fill="#d6d6d6"/>
      <path id="Ellipse_39_-_Outline" data-name="Ellipse 39 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2728 -2727)" fill="#707070"/>
      <circle id="Ellipse_7" data-name="Ellipse 7" cx="5" cy="5" r="5" transform="translate(-2791 -2648)" fill="#d6d6d6"/>
      <path id="Ellipse_7_-_Outline" data-name="Ellipse 7 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-2791 -2648)" fill="#707070"/>
      <circle id="Ellipse_19" data-name="Ellipse 19" cx="5" cy="5" r="5" transform="translate(-2770 -2648)" fill="#d6d6d6"/>
      <path id="Ellipse_19_-_Outline" data-name="Ellipse 19 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2770 -2648)" fill="#707070"/>
      <circle id="Ellipse_31" data-name="Ellipse 31" cx="5" cy="5" r="5" transform="translate(-2749 -2647)" fill="#d6d6d6"/>
      <path id="Ellipse_31_-_Outline" data-name="Ellipse 31 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2749 -2647)" fill="#707070"/>
      <circle id="Ellipse_43" data-name="Ellipse 43" cx="5" cy="5" r="5" transform="translate(-2728 -2647)" fill="#d6d6d6"/>
      <path id="Ellipse_43_-_Outline" data-name="Ellipse 43 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2728 -2647)" fill="#707070"/>
      <circle id="Ellipse_55" data-name="Ellipse 55" cx="5" cy="5" r="5" transform="translate(-2707 -2647)" fill="#d6d6d6"/>
      <path id="Ellipse_55_-_Outline" data-name="Ellipse 55 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2707 -2647)" fill="#707070"/>
      <circle id="Ellipse_67" data-name="Ellipse 67" cx="5" cy="5" r="5" transform="translate(-2686 -2647)" fill="#d6d6d6"/>
      <path id="Ellipse_67_-_Outline" data-name="Ellipse 67 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2686 -2647)" fill="#707070"/>
      <circle id="Ellipse_11" data-name="Ellipse 11" cx="5" cy="5" r="5" transform="translate(-2791 -2568)" fill="#d6d6d6"/>
      <path id="Ellipse_11_-_Outline" data-name="Ellipse 11 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2791 -2568)" fill="#707070"/>
      <circle id="Ellipse_23" data-name="Ellipse 23" cx="5" cy="5" r="5" transform="translate(-2770 -2568)" fill="#d6d6d6"/>
      <path id="Ellipse_23_-_Outline" data-name="Ellipse 23 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2770 -2568)" fill="#707070"/>
      <circle id="Ellipse_35" data-name="Ellipse 35" cx="5" cy="5" r="5" transform="translate(-2749 -2567)" fill="#d6d6d6"/>
      <path id="Ellipse_35_-_Outline" data-name="Ellipse 35 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2749 -2567)" fill="#707070"/>
      <circle id="Ellipse_47" data-name="Ellipse 47" cx="5" cy="5" r="5" transform="translate(-2728 -2567)" fill="#d6d6d6"/>
      <path id="Ellipse_47_-_Outline" data-name="Ellipse 47 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2728 -2567)" fill="#707070"/>
      <circle id="Ellipse_59" data-name="Ellipse 59" cx="5" cy="5" r="5" transform="translate(-2707 -2567)" fill="#d6d6d6"/>
      <path id="Ellipse_59_-_Outline" data-name="Ellipse 59 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2707 -2567)" fill="#707070"/>
      <circle id="Ellipse_5" data-name="Ellipse 5" cx="5" cy="5" r="5" transform="translate(-2791 -2688)" fill="#d6d6d6"/>
      <path id="Ellipse_5_-_Outline" data-name="Ellipse 5 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-2791 -2688)" fill="#707070"/>
      <circle id="Ellipse_17" data-name="Ellipse 17" cx="5" cy="5" r="5" transform="translate(-2770 -2688)" fill="#d6d6d6"/>
      <path id="Ellipse_17_-_Outline" data-name="Ellipse 17 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2770 -2688)" fill="#707070"/>
      <circle id="Ellipse_29" data-name="Ellipse 29" cx="5" cy="5" r="5" transform="translate(-2749 -2687)" fill="#d6d6d6"/>
      <path id="Ellipse_29_-_Outline" data-name="Ellipse 29 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2749 -2687)" fill="#707070"/>
      <circle id="Ellipse_41" data-name="Ellipse 41" cx="5" cy="5" r="5" transform="translate(-2728 -2687)" fill="#d6d6d6"/>
      <path id="Ellipse_41_-_Outline" data-name="Ellipse 41 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2728 -2687)" fill="#707070"/>
      <circle id="Ellipse_53" data-name="Ellipse 53" cx="5" cy="5" r="5" transform="translate(-2707 -2687)" fill="#d6d6d6"/>
      <path id="Ellipse_53_-_Outline" data-name="Ellipse 53 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2707 -2687)" fill="#707070"/>
      <circle id="Ellipse_65" data-name="Ellipse 65" cx="5" cy="5" r="5" transform="translate(-2686 -2687)" fill="#d6d6d6"/>
      <path id="Ellipse_65_-_Outline" data-name="Ellipse 65 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2686 -2687)" fill="#707070"/>
      <circle id="Ellipse_9" data-name="Ellipse 9" cx="5" cy="5" r="5" transform="translate(-2791 -2608)" fill="#d6d6d6"/>
      <path id="Ellipse_9_-_Outline" data-name="Ellipse 9 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-2791 -2608)" fill="#707070"/>
      <circle id="Ellipse_21" data-name="Ellipse 21" cx="5" cy="5" r="5" transform="translate(-2770 -2608)" fill="#d6d6d6"/>
      <path id="Ellipse_21_-_Outline" data-name="Ellipse 21 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2770 -2608)" fill="#707070"/>
      <circle id="Ellipse_33" data-name="Ellipse 33" cx="5" cy="5" r="5" transform="translate(-2749 -2607)" fill="#d6d6d6"/>
      <path id="Ellipse_33_-_Outline" data-name="Ellipse 33 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2749 -2607)" fill="#707070"/>
      <circle id="Ellipse_45" data-name="Ellipse 45" cx="5" cy="5" r="5" transform="translate(-2728 -2607)" fill="#d6d6d6"/>
      <path id="Ellipse_45_-_Outline" data-name="Ellipse 45 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2728 -2607)" fill="#707070"/>
      <circle id="Ellipse_57" data-name="Ellipse 57" cx="5" cy="5" r="5" transform="translate(-2707 -2607)" fill="#d6d6d6"/>
      <path id="Ellipse_57_-_Outline" data-name="Ellipse 57 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2707 -2607)" fill="#707070"/>
      <circle id="Ellipse_69" data-name="Ellipse 69" cx="5" cy="5" r="5" transform="translate(-2686 -2607)" fill="#d6d6d6"/>
      <path id="Ellipse_69_-_Outline" data-name="Ellipse 69 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2686 -2607)" fill="#707070"/>
      <circle id="Ellipse_13" data-name="Ellipse 13" cx="5" cy="5" r="5" transform="translate(-2791 -2528)" fill="#d6d6d6"/>
      <path id="Ellipse_13_-_Outline" data-name="Ellipse 13 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2791 -2528)" fill="#707070"/>
      <circle id="Ellipse_25" data-name="Ellipse 25" cx="5" cy="5" r="5" transform="translate(-2770 -2528)" fill="#d6d6d6"/>
      <path id="Ellipse_25_-_Outline" data-name="Ellipse 25 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2770 -2528)" fill="#707070"/>
      <circle id="Ellipse_37" data-name="Ellipse 37" cx="5" cy="5" r="5" transform="translate(-2749 -2527)" fill="#d6d6d6"/>
      <path id="Ellipse_37_-_Outline" data-name="Ellipse 37 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"    transform="translate(-2749 -2527)" fill="#707070"/>
    </g>
</svg>`;

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
right_dot.innerHTML = `<svg width="90" height="216" viewBox="0 0 115 231">
  <g id="Dots" transform="translate(3128 -54)">
    <circle id="Ellipse_1" data-name="Ellipse 1" cx="5" cy="5" r="5" transform="translate(-3023 54)" fill="#d6d6d6"/>
    <path id="Ellipse_1_-_Outline" data-name="Ellipse 1 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-3023 54)" fill="#707070"/>
    <circle id="Ellipse_14" data-name="Ellipse 14" cx="5" cy="5" r="5" transform="translate(-3044 54)" fill="#d6d6d6"/>
    <path id="Ellipse_14_-_Outline" data-name="Ellipse 14 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3044 54)" fill="#707070"/>
    <circle id="Ellipse_26" data-name="Ellipse 26" cx="5" cy="5" r="5" transform="translate(-3065 55)" fill="#d6d6d6"/>
    <path id="Ellipse_26_-_Outline" data-name="Ellipse 26 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3065 55)" fill="#707070"/>
    <circle id="Ellipse_6" data-name="Ellipse 6" cx="5" cy="5" r="5" transform="translate(-3023 134)" fill="#d6d6d6"/>
    <path id="Ellipse_6_-_Outline" data-name="Ellipse 6 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-3023 134)" fill="#707070"/>
    <circle id="Ellipse_18" data-name="Ellipse 18" cx="5" cy="5" r="5" transform="translate(-3044 134)" fill="#d6d6d6"/>
    <path id="Ellipse_18_-_Outline" data-name="Ellipse 18 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3044 134)" fill="#707070"/>
    <circle id="Ellipse_30" data-name="Ellipse 30" cx="5" cy="5" r="5" transform="translate(-3065 135)" fill="#d6d6d6"/>
    <path id="Ellipse_30_-_Outline" data-name="Ellipse 30 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3065 135)" fill="#707070"/>
    <circle id="Ellipse_42" data-name="Ellipse 42" cx="5" cy="5" r="5" transform="translate(-3086 135)" fill="#d6d6d6"/>
    <path id="Ellipse_42_-_Outline" data-name="Ellipse 42 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3086 135)" fill="#707070"/>
    <circle id="Ellipse_54" data-name="Ellipse 54" cx="5" cy="5" r="5" transform="translate(-3107 135)" fill="#d6d6d6"/>
    <path id="Ellipse_54_-_Outline" data-name="Ellipse 54 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3107 135)" fill="#707070"/>
    <circle id="Ellipse_66" data-name="Ellipse 66" cx="5" cy="5" r="5" transform="translate(-3128 135)" fill="#d6d6d6"/>
    <path id="Ellipse_66_-_Outline" data-name="Ellipse 66 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3128 135)" fill="#707070"/>
    <circle id="Ellipse_10" data-name="Ellipse 10" cx="5" cy="5" r="5" transform="translate(-3023 214)" fill="#d6d6d6"/>
    <path id="Ellipse_10_-_Outline" data-name="Ellipse 10 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3023 214)" fill="#707070"/>
    <circle id="Ellipse_22" data-name="Ellipse 22" cx="5" cy="5" r="5" transform="translate(-3044 214)" fill="#d6d6d6"/>
    <path id="Ellipse_22_-_Outline" data-name="Ellipse 22 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3044 214)" fill="#707070"/>
    <circle id="Ellipse_34" data-name="Ellipse 34" cx="5" cy="5" r="5" transform="translate(-3065 215)" fill="#d6d6d6"/>
    <path id="Ellipse_34_-_Outline" data-name="Ellipse 34 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3065 215)" fill="#707070"/>
    <circle id="Ellipse_46" data-name="Ellipse 46" cx="5" cy="5" r="5" transform="translate(-3086 215)" fill="#d6d6d6"/>
    <path id="Ellipse_46_-_Outline" data-name="Ellipse 46 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3086 215)" fill="#707070"/>
    <circle id="Ellipse_58" data-name="Ellipse 58" cx="5" cy="5" r="5" transform="translate(-3107 215)" fill="#d6d6d6"/>
    <path id="Ellipse_58_-_Outline" data-name="Ellipse 58 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3107 215)" fill="#707070"/>
    <circle id="Ellipse_70" data-name="Ellipse 70" cx="5" cy="5" r="5" transform="translate(-3128 215)" fill="#d6d6d6"/>
    <path id="Ellipse_70_-_Outline" data-name="Ellipse 70 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3128 215)" fill="#707070"/>
    <circle id="Ellipse_4" data-name="Ellipse 4" cx="5" cy="5" r="5" transform="translate(-3023 94)" fill="#d6d6d6"/>
    <path id="Ellipse_4_-_Outline" data-name="Ellipse 4 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-3023 94)" fill="#707070"/>
    <circle id="Ellipse_16" data-name="Ellipse 16" cx="5" cy="5" r="5" transform="translate(-3044 94)" fill="#d6d6d6"/>
    <path id="Ellipse_16_-_Outline" data-name="Ellipse 16 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3044 94)" fill="#707070"/>
    <circle id="Ellipse_28" data-name="Ellipse 28" cx="5" cy="5" r="5" transform="translate(-3065 95)" fill="#d6d6d6"/>
    <path id="Ellipse_28_-_Outline" data-name="Ellipse 28 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3065 95)" fill="#707070"/>
    <circle id="Ellipse_40" data-name="Ellipse 40" cx="5" cy="5" r="5" transform="translate(-3086 95)" fill="#d6d6d6"/>
    <path id="Ellipse_40_-_Outline" data-name="Ellipse 40 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3086 95)" fill="#707070"/>
    <circle id="Ellipse_52" data-name="Ellipse 52" cx="5" cy="5" r="5" transform="translate(-3107 95)" fill="#d6d6d6"/>
    <path id="Ellipse_52_-_Outline" data-name="Ellipse 52 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3107 95)" fill="#707070"/>
    <circle id="Ellipse_8" data-name="Ellipse 8" cx="5" cy="5" r="5" transform="translate(-3023 174)" fill="#d6d6d6"/>
    <path id="Ellipse_8_-_Outline" data-name="Ellipse 8 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-3023 174)" fill="#707070"/>
    <circle id="Ellipse_20" data-name="Ellipse 20" cx="5" cy="5" r="5" transform="translate(-3044 174)" fill="#d6d6d6"/>
    <path id="Ellipse_20_-_Outline" data-name="Ellipse 20 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3044 174)" fill="#707070"/>
    <circle id="Ellipse_32" data-name="Ellipse 32" cx="5" cy="5" r="5" transform="translate(-3065 175)" fill="#d6d6d6"/>
    <path id="Ellipse_32_-_Outline" data-name="Ellipse 32 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3065 175)" fill="#707070"/>
    <circle id="Ellipse_44" data-name="Ellipse 44" cx="5" cy="5" r="5" transform="translate(-3086 175)" fill="#d6d6d6"/>
    <path id="Ellipse_44_-_Outline" data-name="Ellipse 44 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3086 175)" fill="#707070"/>
    <circle id="Ellipse_56" data-name="Ellipse 56" cx="5" cy="5" r="5" transform="translate(-3107 175)" fill="#d6d6d6"/>
    <path id="Ellipse_56_-_Outline" data-name="Ellipse 56 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3107 175)" fill="#707070"/>
    <circle id="Ellipse_68" data-name="Ellipse 68" cx="5" cy="5" r="5" transform="translate(-3128 175)" fill="#d6d6d6"/>
    <path id="Ellipse_68_-_Outline" data-name="Ellipse 68 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3128 175)" fill="#707070"/>
    <circle id="Ellipse_12" data-name="Ellipse 12" cx="5" cy="5" r="5" transform="translate(-3023 254)" fill="#d6d6d6"/>
    <path id="Ellipse_12_-_Outline" data-name="Ellipse 12 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3023 254)" fill="#707070"/>
    <circle id="Ellipse_24" data-name="Ellipse 24" cx="5" cy="5" r="5" transform="translate(-3044 254)" fill="#d6d6d6"/>
    <path id="Ellipse_24_-_Outline" data-name="Ellipse 24 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3044 254)" fill="#707070"/>
    <circle id="Ellipse_36" data-name="Ellipse 36" cx="5" cy="5" r="5" transform="translate(-3065 255)" fill="#d6d6d6"/>
    <path id="Ellipse_36_-_Outline" data-name="Ellipse 36 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3065 255)" fill="#707070"/>
    <circle id="Ellipse_48" data-name="Ellipse 48" cx="5" cy="5" r="5" transform="translate(-3086 255)" fill="#d6d6d6"/>
    <path id="Ellipse_48_-_Outline" data-name="Ellipse 48 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3086 255)" fill="#707070"/>
    <circle id="Ellipse_3" data-name="Ellipse 3" cx="5" cy="5" r="5" transform="translate(-3023 74)" fill="#d6d6d6"/>
    <path id="Ellipse_3_-_Outline" data-name="Ellipse 3 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-3023 74)" fill="#707070"/>
    <circle id="Ellipse_15" data-name="Ellipse 15" cx="5" cy="5" r="5" transform="translate(-3044 74)" fill="#d6d6d6"/>
    <path id="Ellipse_15_-_Outline" data-name="Ellipse 15 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3044 74)" fill="#707070"/>
    <circle id="Ellipse_27" data-name="Ellipse 27" cx="5" cy="5" r="5" transform="translate(-3065 75)" fill="#d6d6d6"/>
    <path id="Ellipse_27_-_Outline" data-name="Ellipse 27 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3065 75)" fill="#707070"/>
    <circle id="Ellipse_39" data-name="Ellipse 39" cx="5" cy="5" r="5" transform="translate(-3086 75)" fill="#d6d6d6"/>
    <path id="Ellipse_39_-_Outline" data-name="Ellipse 39 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3086 75)" fill="#707070"/>
    <circle id="Ellipse_7" data-name="Ellipse 7" cx="5" cy="5" r="5" transform="translate(-3023 154)" fill="#d6d6d6"/>
    <path id="Ellipse_7_-_Outline" data-name="Ellipse 7 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-3023 154)" fill="#707070"/>
    <circle id="Ellipse_19" data-name="Ellipse 19" cx="5" cy="5" r="5" transform="translate(-3044 154)" fill="#d6d6d6"/>
    <path id="Ellipse_19_-_Outline" data-name="Ellipse 19 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3044 154)" fill="#707070"/>
    <circle id="Ellipse_31" data-name="Ellipse 31" cx="5" cy="5" r="5" transform="translate(-3065 155)" fill="#d6d6d6"/>
    <path id="Ellipse_31_-_Outline" data-name="Ellipse 31 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3065 155)" fill="#707070"/>
    <circle id="Ellipse_43" data-name="Ellipse 43" cx="5" cy="5" r="5" transform="translate(-3086 155)" fill="#d6d6d6"/>
    <path id="Ellipse_43_-_Outline" data-name="Ellipse 43 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3086 155)" fill="#707070"/>
    <circle id="Ellipse_55" data-name="Ellipse 55" cx="5" cy="5" r="5" transform="translate(-3107 155)" fill="#d6d6d6"/>
    <path id="Ellipse_55_-_Outline" data-name="Ellipse 55 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3107 155)" fill="#707070"/>
    <circle id="Ellipse_67" data-name="Ellipse 67" cx="5" cy="5" r="5" transform="translate(-3128 155)" fill="#d6d6d6"/>
    <path id="Ellipse_67_-_Outline" data-name="Ellipse 67 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3128 155)" fill="#707070"/>
    <circle id="Ellipse_11" data-name="Ellipse 11" cx="5" cy="5" r="5" transform="translate(-3023 234)" fill="#d6d6d6"/>
    <path id="Ellipse_11_-_Outline" data-name="Ellipse 11 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3023 234)" fill="#707070"/>
    <circle id="Ellipse_23" data-name="Ellipse 23" cx="5" cy="5" r="5" transform="translate(-3044 234)" fill="#d6d6d6"/>
    <path id="Ellipse_23_-_Outline" data-name="Ellipse 23 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3044 234)" fill="#707070"/>
    <circle id="Ellipse_35" data-name="Ellipse 35" cx="5" cy="5" r="5" transform="translate(-3065 235)" fill="#d6d6d6"/>
    <path id="Ellipse_35_-_Outline" data-name="Ellipse 35 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3065 235)" fill="#707070"/>
    <circle id="Ellipse_47" data-name="Ellipse 47" cx="5" cy="5" r="5" transform="translate(-3086 235)" fill="#d6d6d6"/>
    <path id="Ellipse_47_-_Outline" data-name="Ellipse 47 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3086 235)" fill="#707070"/>
    <circle id="Ellipse_59" data-name="Ellipse 59" cx="5" cy="5" r="5" transform="translate(-3107 235)" fill="#d6d6d6"/>
    <path id="Ellipse_59_-_Outline" data-name="Ellipse 59 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3107 235)" fill="#707070"/>
    <circle id="Ellipse_5" data-name="Ellipse 5" cx="5" cy="5" r="5" transform="translate(-3023 114)" fill="#d6d6d6"/>
    <path id="Ellipse_5_-_Outline" data-name="Ellipse 5 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-3023 114)" fill="#707070"/>
    <circle id="Ellipse_17" data-name="Ellipse 17" cx="5" cy="5" r="5" transform="translate(-3044 114)" fill="#d6d6d6"/>
    <path id="Ellipse_17_-_Outline" data-name="Ellipse 17 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3044 114)" fill="#707070"/>
    <circle id="Ellipse_29" data-name="Ellipse 29" cx="5" cy="5" r="5" transform="translate(-3065 115)" fill="#d6d6d6"/>
    <path id="Ellipse_29_-_Outline" data-name="Ellipse 29 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3065 115)" fill="#707070"/>
    <circle id="Ellipse_41" data-name="Ellipse 41" cx="5" cy="5" r="5" transform="translate(-3086 115)" fill="#d6d6d6"/>
    <path id="Ellipse_41_-_Outline" data-name="Ellipse 41 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3086 115)" fill="#707070"/>
    <circle id="Ellipse_53" data-name="Ellipse 53" cx="5" cy="5" r="5" transform="translate(-3107 115)" fill="#d6d6d6"/>
    <path id="Ellipse_53_-_Outline" data-name="Ellipse 53 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3107 115)" fill="#707070"/>
    <circle id="Ellipse_65" data-name="Ellipse 65" cx="5" cy="5" r="5" transform="translate(-3128 115)" fill="#d6d6d6"/>
    <path id="Ellipse_65_-_Outline" data-name="Ellipse 65 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3128 115)" fill="#707070"/>
    <circle id="Ellipse_9" data-name="Ellipse 9" cx="5" cy="5" r="5" transform="translate(-3023 194)" fill="#d6d6d6"/>
    <path id="Ellipse_9_-_Outline" data-name="Ellipse 9 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z" transform="translate (-3023 194)" fill="#707070"/>
    <circle id="Ellipse_21" data-name="Ellipse 21" cx="5" cy="5" r="5" transform="translate(-3044 194)" fill="#d6d6d6"/>
    <path id="Ellipse_21_-_Outline" data-name="Ellipse 21 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3044 194)" fill="#707070"/>
    <circle id="Ellipse_33" data-name="Ellipse 33" cx="5" cy="5" r="5" transform="translate(-3065 195)" fill="#d6d6d6"/>
    <path id="Ellipse_33_-_Outline" data-name="Ellipse 33 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3065 195)" fill="#707070"/>
    <circle id="Ellipse_45" data-name="Ellipse 45" cx="5" cy="5" r="5" transform="translate(-3086 195)" fill="#d6d6d6"/>
    <path id="Ellipse_45_-_Outline" data-name="Ellipse 45 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3086 195)" fill="#707070"/>
    <circle id="Ellipse_57" data-name="Ellipse 57" cx="5" cy="5" r="5" transform="translate(-3107 195)" fill="#d6d6d6"/>
    <path id="Ellipse_57_-_Outline" data-name="Ellipse 57 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3107 195)" fill="#707070"/>
    <circle id="Ellipse_69" data-name="Ellipse 69" cx="5" cy="5" r="5" transform="translate(-3128 195)" fill="#d6d6d6"/>
    <path id="Ellipse_69_-_Outline" data-name="Ellipse 69 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3128 195)" fill="#707070"/>
    <circle id="Ellipse_13" data-name="Ellipse 13" cx="5" cy="5" r="5" transform="translate(-3023 274)" fill="#d6d6d6"/>
    <path id="Ellipse_13_-_Outline" data-name="Ellipse 13 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3023 274)" fill="#707070"/>
    <circle id="Ellipse_25" data-name="Ellipse 25" cx="5" cy="5" r="5" transform="translate(-3044 274)" fill="#d6d6d6"/>
    <path id="Ellipse_25_-_Outline" data-name="Ellipse 25 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3044 274)" fill="#707070"/>
    <circle id="Ellipse_37" data-name="Ellipse 37" cx="5" cy="5" r="5" transform="translate(-3065 275)" fill="#d6d6d6"/>
    <path id="Ellipse_37_-_Outline" data-name="Ellipse 37 - Outline" d="M5,1A4,4,0,1,0,9,5,4,4,0,0,0,5,1M5,0A5,5,0,1,1,0,5,5,5,0,0,1,5,0Z"  transform="translate(-3065 275)" fill="#707070"/>
  </g>
</svg>`;

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
