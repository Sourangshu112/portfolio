const button = document.getElementById("side-nav-toggle");
const sidenav = document.getElementById("side");
const overlay = document.getElementById("fulloverlay");
const image = document.getElementById("menu");
let hidden = true;

button.addEventListener('click', function(){
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
});

overlay.addEventListener('click',function(){
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
});