/**
 * Création d'une image point par point, chaque point est représenté par une DIV
 * Utiliser une double boucle for ( boucles imbriquées )
 * il faut placer les divs en positionnement absolu
 */

document.addEventListener("DOMContentLoaded", function (save) {

    var picture = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 2, 2, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 0, 0],
        [0, 0, 3, 3, 2, 0, 3, 3, 0, 2, 3, 3, 0, 0],
        [0, 0, 3, 3, 2, 0, 3, 3, 0, 2, 3, 3, 0, 0],
        [0, 0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 0],
        [0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0],
        [0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0],
        [0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0],
        [0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0],
        [0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0],
        [0, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 0],
        [0, 0, 0, 0, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0],
        [0, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    var colors = [
        "#ffffff", // blanc 0
        "#ffdf04", // jaune 1
        "#808080", // gris 2
        "#000000", // noir 3
        "#0026ff", // bleu 4
    ];

    var colors2 = [
        "#ffffff", // blanc 0
        "#37ff2b", // jaune 1
        "#808080", // gris 2
        "#000000", // noir 3
        "#ff0001", // bleu 4
    ];

    const picture1 = document.getElementById('picture1');

// créer une boucle qui va parcourir tous les éléments du tableau

    const drawMinion = function (couleur_du_minion) {

        for (let i = 0; i < picture.length; i++) {

            // créer une boucle à l'intérieur de cette boucle pour
            // parcourir chaque élément de la ligne du tableau

            for (let j = 0; j < picture[j].length; j++) {

                const valeur = picture[i][j];
                const couleur = couleur_du_minion[valeur];
                const creerDiv = document.createElement('div');

                picture1.appendChild(creerDiv);
                creerDiv.style.backgroundColor = couleur;
                creerDiv.style.left = (j * 20) + "px";
                creerDiv.style.top = (i * 20) + "px";
            }
        }
    };

    drawMinion(colors);

    document.addEventListener('keydown', function () {
        drawMinion(colors2);
    });

    document.addEventListener('keyup', function () {
        drawMinion(colors);
    });

// chaque élément du tableau correspond à l'indice d'une couleur
// il faut récupérer la couleur correspondante
// créer une div dont la couleur de fond sera cette couleur
// spécifier la position de cette div avec "top" et "left" grâce à div.style
// et ajouter cette div à #picture1

});