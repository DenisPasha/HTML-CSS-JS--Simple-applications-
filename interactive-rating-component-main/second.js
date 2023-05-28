const element = document.querySelector("#actual-score");
console.log(element);
element.textContent = localStorage.getItem("score");

