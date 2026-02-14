window.onload = () => {
  document.querySelectorAll(".bar").forEach(bar=>{
    bar.style.width = bar.dataset.width;
  });
};

const roles = ["student", "engineer"];
let index = 0;

const roleElement = document.getElementById("role");

setInterval(() => {
  index = (index + 1) % roles.length;
  roleElement.textContent = roles[index];
}, 2000); // change every 2 seconds

