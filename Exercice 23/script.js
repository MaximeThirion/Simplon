/*
 * vaisseau spatial de la terre à mars :
    - en pressant sur les flêches du clavier, on déplace le vaisseau
    - quand il arrive sur la planète mars le jeu est gagné
     ( faire une vérification sur la position du vaisseau )
 *
 */

console.log("Script");

document.addEventListener("DOMContentLoaded", function (save) {

    const vaisseau = document.querySelector('#spaceship');
    let position_a_gauche = 30;
    let position_en_haut = 30;

    document.addEventListener('keydown', function (event) {

        // console.log('test');
        let touche = event.keyCode;

        if (touche == 37) {

            // console.log('gauche');
            position_a_gauche -= 10;
            vaisseau.style.left = position_a_gauche + "px";
        }

        if (touche == 38) {

            // console.log('haut');
            position_en_haut -= 10;
            vaisseau.style.top = position_en_haut + "px"
        }

        if (touche == 39) {

            // console.log('droite');
            position_a_gauche += 10;
            vaisseau.style.left = position_a_gauche + "px";
        }

        if (touche == 40) {

            // console.log('bas');
            position_en_haut += 10;
            vaisseau.style.top = position_en_haut + "px"
        }
    });

});