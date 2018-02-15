/*
 * Gestion avancée :
 * selecteur : document.querySelector(cssRule) et document.querySelectorAll(cssRule)
 * gestion classes :
 element.classList.add(className);
 element.classList.remove(className);
 element.classList.contains(className);
 element.classList.toggle(className)
 * gestion select : element.selectedIndex; element.options;
 */

// inputsText = document.querySelectorAll("form input[type='text']");

document.addEventListener("DOMContentLoaded", function(){

    // evenement keyup pour tous les input text
    // => si saisie entre 4 et 8 caractères, ajouter la class "success" sur le input, sinon ajouter la classe "error" sur le input

const creerdiv = document.createElement("div");
creerdiv.setAttribute('id', 'erreur');
const apres_div = document.getElementById("ancre");

test = function () {

    login = document.getElementById("subscription_login").value;

    if (login.length > 3 && login.length < 9) {
        document.getElementById("subscription_login").classList.remove("error");
        document.getElementById("subscription_login").classList.add("success");
    }
    else {
        document.getElementById("subscription_login").classList.remove("success");
        document.getElementById("subscription_login").classList.add("error");
    }
};

test2 = function () {

    pass = document.getElementById("subscription_password").value;

    if (pass.length > 3 && pass.length < 9) {
        document.getElementById("subscription_password").classList.remove("error");
        document.getElementById("subscription_password").classList.add("success");
    }
    else {
        document.getElementById("subscription_password").classList.remove("success");
        document.getElementById("subscription_password").classList.add("error");
    }
};

test3 = function () {

    pass2 = document.getElementById("subscription_password2").value;

    if (pass2.length > 3 && pass2.length < 9) {
        document.getElementById("subscription_password2").classList.remove("error");
        document.getElementById("subscription_password2").classList.add("success");
    }
    else {
        document.getElementById("subscription_password2").classList.remove("success");
        document.getElementById("subscription_password2").classList.add("error");
    }
};

    // évènement à la soumission du formulaire

soumettre = function (event) {

    login = document.getElementById("subscription_login").value;
    pass = document.getElementById("subscription_password").value;
    pass2 = document.getElementById("subscription_password2").value;

    // => vérifier que tous les champs sont renseignés

    if (login && pass && pass2 != "") {

        // => vérifier que le login est différent du mot de passe

        if (login != pass) {

            // => vérifier que le login est différent du mot de passe

            if (pass == pass2) {

                // => vérifier que le login ne contient pas "admin","administrator","superadmin","chuck", "root", "postmaster"

                if (login != "admin" && login != "administrator" && login != "superadmin" && login != "chuck" && login != "root" && login != "postmaster") {

                    // => supprimer toutes les div>div dans le formulaire

                    console.log("reussi");
                    erreur = document.getElementById("erreur");
                    erreur.parentNode.removeChild(erreur);

                    while (apres_div.firstChild) {
                        apres_div.removeChild(apres_div.firstChild);
                    }
                }
                else {
                    // => créer une div juste avant contenant le message d'erreur pour chaque erreur

                    message = document.createTextNode("Login invalide");
                    creerdiv.appendChild(message);
                    document.body.insertBefore(creerdiv, apres_div);
                    console.log("Login invalide");
                }
            }
            else {
                // => créer une div juste avant contenant le message d'erreur pour chaque erreur

                message = document.createTextNode("Les mots de passe ne sont pas identiques");
                creerdiv.appendChild(message);
                document.body.insertBefore(creerdiv, apres_div);
            }
        }
        else {
            // => créer une div juste avant contenant le message d'erreur pour chaque erreur

            message = document.createTextNode("Login et Pass sont identiques");
            creerdiv.appendChild(message);
            document.body.insertBefore(creerdiv, apres_div);

        }
    }
    else {
        // => créer une div juste avant contenant le message d'erreur pour chaque erreur

        message = document.createTextNode("Champs vides");
        creerdiv.appendChild(message);
        document.body.insertBefore(creerdiv, apres_div);
    }
};
});