const flashSaleTimer = document.querySelector('#flash-sale-timer-display');

// Set the date we're counting down to
let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function () {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("flash-sale-timer-display").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("flash-sale-timer-display").innerHTML = "EXPIRED";
  }
}, 1000);


// TOGGLE MOBILE MENU DRAWER
const body = document.querySelector('body');
const overlay = document.querySelector('#overlay');
const headerMenuBtn = document.querySelector('.header-menu-btn');
const drawer = document.querySelector('.mobile-menu-drawer');
const drawerCloseBtn = document.querySelector('.mobile-menu-drawer_close-btn');

headerMenuBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
  body.style.overflowY = 'hidden'
  drawer.style.transform = 'translateX(0)'
})

drawerCloseBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  body.style.overflowY = 'scroll'
  drawer.style.transform = 'translateX(-100%)'
})

// DISPLAY DRAWER CONTENT
const drawerContent = document.querySelectorAll('.drawer-content li');
const drawerContentItem = document.querySelectorAll('.drawer-content-item ul');

drawerContent.forEach((e) => {
  e.addEventListener('click', () => {
    drawerContent.forEach((elem) => {
      elem.classList.remove('active')
    })
    e.classList.toggle('active')
    drawerContentItem.forEach((item) => {
      item.classList.toggle('active')
    })
  })
})



// document.querySelectorAll('*').forEach((e) => {
//   let a = e.innerText.toLowerCase();
//   let b = a.includes('boat');
//   // console.log(b);
//   if(b) {
//     e.innerText = e.innerText.replace('boAt', `bo <span style="color: red;">A</span> t`)
//   }
// })


// BANNER CAROUSEL
// const banner_img = document.querySelectorAll('.banner-img[mobile]');

// banner_img.forEach((e) => {
// for (let i = 0; i < banner_img.length; ) {
//   setTimeout(() => {
//     banner_img[i].style.display = 'none'
//     i++
//   }, 3000)
// }
// })

