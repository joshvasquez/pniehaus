const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".navbar");

hamburger.addEventListener("click", toggle);
list.addEventListener("click", toggle);

function toggle() {
  list.classList.toggle("visible");
}
