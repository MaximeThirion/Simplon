
creer_icone = function (event) {

  const map = document.getElementById("div_map");
  const position_a_gauche = event.pageX;
  const position_en_haut = event.pageY;

  newDiv = document.createElement("i");

  newDiv.classList.add("fas", "fa-map-pin", "point");
  newDiv.style.left = (position_a_gauche - 490) + "px";
  newDiv.style.top = (position_en_haut - 183) + "px";

  map.appendChild(newDiv);
};

map.addEventListener("click", creer_icone);