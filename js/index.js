let mobBtn = document.querySelector('#mobile-btn');
let closeMobNav = document.querySelector("#close_mob_nav")
let mobNav = document.querySelector(".mobile-nav");


mobBtn.onclick = () => {
    mobNav.style.display = 'flex';
}


closeMobNav.onclick = () => {
    mobNav.style.display = 'none';
}