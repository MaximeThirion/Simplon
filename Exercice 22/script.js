/**
 créer un paint qui permet en utilisant uniquement les listes déroulantes et des classes,
 - Au clic de la souris, créer :
 => une forme ( rond, carré, losange )
 => de la couleur sélectionnée ( bleu, jaune , rouge, vert ),
 => et du diametre sélectionné ( 10, 50, 100, 200 ) .
 - Bonus:
 1) rajouter des triangles,
 2) faire en sorte de voir la forme se déplacer sous la souris avant de cliquer,
 3) faire en sorte d'avoir plus de choix de couleur et de ne plus utiliser de classe .
 4) correction des coordonnées pour que le milieu de la forme soit à la position du clic
 **/

console.log("Script");

document.addEventListener("DOMContentLoaded", function (save) {

// récupération des éléments
    const board = document.getElementById("board");
    const select_shape = document.getElementById("select_shape");
    const select_color = document.getElementById("select_color");
    const select_size = document.getElementById("select_size");

// test
    const supprimer_erreur2 = function () {
        const errorDiv = document.querySelectorAll('#board div');
        for (let i = 0; i < (errorDiv.length - 1); i++) {
            const div = errorDiv[i];
            div.parentNode.removeChild(div);
        }
    };

// fonction de création d'un élément
    shape_creation = function (event) {

        // récupération des valeurs des selects
        const forme = select_shape.value;
        const couleur = select_color.value;
        const taille = select_size.value;
        const taille2 = parseInt(taille.substring(1, taille.length));
        // console.log(forme, couleur, taille);

        // récupération de la position du clic
        const position_a_gauche = event.pageX;
        const position_en_haut = event.pageY;

        // création d'un nouvel élément
        newDiv = document.createElement("div");

        // ajout des classes correspondantes
        newDiv.style.backgroundColor = couleur;
        newDiv.classList.add(forme, taille);

        // ajout de la position de l'élément
        // console.log(position_a_gauche, position_en_haut);
        newDiv.style.left = (position_a_gauche - (taille2 / 2)) + "px";
        newDiv.style.top = ((position_en_haut - 33) - (taille2 / 2)) + "px";

        // ajout du nouvel élément dans le tableau
        board.appendChild(newDiv);

    };

// ajout du listener
    board.addEventListener("click", shape_creation);
    // board.addEventListener("mousemove", shape_creation, setInterval(function () {supprimer_erreur2()}, 20));
    // board.addEventListener("mousemove", supprimer_erreur2);

});