const btn = document.querySelector(".circle-wrapper");
const icon = document.querySelector(".vault-icon");
const circles = document.querySelectorAll(".circle");

btn.addEventListener("click", () => {
  btn.classList.toggle("clicked");
  
  if (btn.classList.contains("clicked")) {
    icon.className = "fa-light fa-gear vault-icon";
    
    setTimeout(() => {
      icon.className = "fa-light fa-lock-open vault-icon";
    }, 1500);
  } else {
    icon.className = "fa-light fa-do-not-enter vault-icon";
  }
});