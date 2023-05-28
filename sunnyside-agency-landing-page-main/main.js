const button = document.querySelector(".hamburger");
const menuDropdown = document.querySelector(".menu-dropdown");

window.addEventListener('resize', handleResize);

function handleResize() {
  var screenWidth = window.innerWidth;
  if (screenWidth > 800) {
    menuDropdown.style.display = 'flex';
  }else if(screenWidth < 800){
    console.log(screenWidth)
    menuDropdown.style.display = 'none';
  }
}


button.addEventListener('click', function() {
  if (menuDropdown.style.display === 'none') {
    menuDropdown.style.display = 'flex';
    console.log(menuDropdown.style.display);
  } else{
    menuDropdown.style.display = 'none';
    console.log(menuDropdown.style.display);
  }
});
  
  console.log(window.innerWidth);

 