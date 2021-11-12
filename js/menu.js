// assign who's gonna listen
var hamButton, x, sideRight;
window.onload = () => {
  //   gets the hamburguer button
  hamButton = document.getElementById("menu");
  sideRight = document.getElementById("sidebar-right");
  x = document.getElementById("close");
  //   image = document.getElementById("imagen1");

  hamButton.addEventListener("click", () => {
    //   toggle means change from "no class" to "hide"
    sideRight.classList.toggle("hide");
  });

  x.addEventListener("click", () => {
    sideRight.classList.toggle("hide");
  });
};

function closeNav() {
  alert("cierro");
  //   change element css properties
}
