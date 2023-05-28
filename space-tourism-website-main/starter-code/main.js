
const menuButton = document.getElementById('menu-btn');
const menuItems = document.getElementById('nav-list');
const hamburger = document.getElementById('hamburger-icon');
const closeImageURL = 'assets/shared/icon-close.svg';
const menuImageURL = 'assets/shared/icon-hamburger.svg';


menuButton.addEventListener('click', (f) =>{

        if(menuItems.style.display === 'none'){
            menuItems.style.display='flex';
             hamburger.src = closeImageURL;
          }else{
             menuItems.style.display='none';
             hamburger.src = menuImageURL
         }
});

const contentImg = document.getElementById('content-img');

window.addEventListener('resize', () => {
  if (window.innerWidth >= 900 && contentImg.src !== "assets/technology/image-space-capsule-portrait.jpg") {
    menuItems.style.display = 'flex';
    console.log(contentImg);
    contentImg.src = "assets/technology/image-space-capsule-portrait.jpg";
    console.log(contentImg);
  } else {
    menuItems.style.display = 'none';
    contentImg.src = "assets/technology/image-space-capsule-landscape.jpg";
  }
});





