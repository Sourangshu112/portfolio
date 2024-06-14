const button = document.getElementById("side-nav-toggle");
const sidenav = document.getElementById("side");
const overlay = document.getElementById("fulloverlay");
const image = document.getElementById("menu");
const sidebutton1 = document.getElementById("nav-Home")
const sidebutton2 = document.getElementById("nav-About")
const sidebutton3 = document.getElementById("nav-Skill")
const sidebutton4 = document.getElementById("nav-WhatIOffer")
const sidebutton5 = document.getElementById("nav-Projects")
const sidebutton6 = document.getElementById("nav-Contant")

let hidden = true;

function work() {
    if(hidden) {
        sidenav.classList.remove('side-nav');
        sidenav.classList.add('side-nav-visible');
        hidden=false;
        overlay.classList.remove('full-overlay');
        overlay.classList.add('full-overlay-visible');
        image.src = "image/icons8-cross-50.png";
    }
    else {
        sidenav.classList.remove('side-nav-visible');
        sidenav.classList.add('side-nav');
        hidden=true;
        overlay.classList.remove('full-overlay-visible');
        overlay.classList.add('full-overlay-add');
        image.src = "image/icons8-menu-50.png";
    }
}

function check() {
    if (window.innerWidth < 1365) {
        work();
    }

}


button.addEventListener('click', work);

overlay.addEventListener('click',work);

sidebutton1.addEventListener('click',check);
sidebutton2.addEventListener('click',check);
sidebutton3.addEventListener('click',check);
sidebutton4.addEventListener('click',check);
sidebutton5.addEventListener('click',check);
sidebutton6.addEventListener('click',check);
