const listItems = document.querySelectorAll("#myList li");
const button = document.getElementById("button");
let value = 0;

listItems.forEach(item => {
  item.addEventListener("click", () => {
    value = item.textContent; 
  });
}); 

button.addEventListener("click", () => {
    localStorage.setItem("score" ,value);
    window.location.href = "thanks.html";
});