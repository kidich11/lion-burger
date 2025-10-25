let mobBtn = document.querySelector('#mobile-btn');
let closeMobNav = document.querySelector("#close_mob_nav")
let mobNav = document.querySelector(".mobile-nav");
let shopBtn = document.querySelector('#shopping-cart');
let userBtn = document.querySelector('#user');


function handleNotification(){
    alert('На данный момент находится в разработке 😊')
}

mobBtn.onclick = () => {
    mobNav.style.display = 'flex';
}


closeMobNav.onclick = () => {
    mobNav.style.display = 'none';
}

shopBtn.onclick = () => {
    handleNotification();
}

userBtn.onclick = () => {
    handleNotification();
}