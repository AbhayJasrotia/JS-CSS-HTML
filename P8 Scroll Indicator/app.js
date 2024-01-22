let indicator = document.querySelector(".scroll-indicator .progress");
let scrollHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", scroll);

function scroll() {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrolled = (scrollTop / scrollHeight) * 100;
  indicator.style.width = `${scrolled}%`;
}
