/**
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
document.addEventListener("DOMContentLoaded", function (save) {

    const subscription_login_input = document.getElementById('subscription_login');
    const subscription_password_input = document.getElementById('subscription_password');
    const subscription_password2_input = document.getElementById('subscription_password2');

    // const supprimer_erreur = function (nom_de_classe, emplacement_enfant) {
    //     while (nom_de_classe.parentNode.children[emplacement_enfant] != null) {
    //         nom_de_classe.parentNode.removeChild(nom_de_classe.parentNode.children[emplacement_enfant])
    //     }
    // };

    const supprimer_erreur2 = function (emplacement) {
        const errorDiv = document.querySelectorAll(emplacement);
        for (let i = 0; i < errorDiv.length; i++) {
            const div = errorDiv[i];
            div.parentNode.removeChild(div);
        }
    };

    const creerDiv = function (emplacement, texte) {
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error2');
        errorDiv.textContent = texte;
        emplacement.parentNode.appendChild(errorDiv);
    };

    // evenement keyup pour tous les input text
    // je récupère le champs input

    // j'ajoute un écouter d'événement "keyup"
    subscription_login_input.addEventListener("keyup", function (event) {
        // => si saisie entre 4 et 8 caractères,
        const list = subscription_login_input.classList;
        const saisie = subscription_login_input.value;
        const parent = subscription_login_input.parentNode;

        supprimer_erreur2('input ~ div');

        if (saisie.length >= 4 && saisie.length <= 8) {
            // ajouter la class "success" sur le input, + retirer error
            list.add('success');
            list.remove('error');
            // supprimer_erreur(subscription_login_input, 2);

        } else {
            list.add('error');
            list.remove('succes');

            const errorDiv = document.createElement('div');
            errorDiv.classList.add('error');
            errorDiv.textContent = 'Le login doit contenir entre 4 et 8 caractères';

            parent.appendChild(errorDiv);

            // supprimer_erreur(subscription_login_input, 3);

            // while (parent.children[3] != null) {
            //     parent.removeChild(parent.children[3]);
            // }
        }
    });

    subscription_password_input.addEventListener('keyup', function (event) {

        const list = subscription_password_input.classList;
        const saisie = subscription_password_input.value;
        const parent = subscription_password_input.parentNode;

        supprimer_erreur2('input ~ div');

        if (saisie.length >= 4 && saisie.length <= 8) {
            list.add('success');
            list.remove('error');

        } else {
            list.add('error');
            list.remove('succes');

            const errorDiv = document.createElement('div');
            errorDiv.classList.add('error');
            errorDiv.textContent = 'Le mot de passe doit contenir entre 4 et 8 caractères';

            parent.appendChild(errorDiv);
        }
    });

    // évènement à la soumission du formulaire
    const formulaire = document.querySelector('form');

    formulaire.addEventListener('submit', function (event) {

        supprimer_erreur2('input ~ div');

        event.preventDefault();

        const login = subscription_login_input.value;
        const password = subscription_password_input.value;
        const password2 = subscription_password2_input.value;
        console.log(subscription_login_input.value);

        const fieldsRequired = document.querySelectorAll('form input[type=text], form input[type=password]');
        const checkboxRequired = document.querySelector(    'form input[type=checkbox]');

        for (let i = 0; i < fieldsRequired.length; i++) {

            const field = fieldsRequired[i];
            const value = field.value;

            if (value.length === 0) {
                field.classList.add('error');
                creerDiv(field, 'ce champs est requis')
            }
        }

        if (checkboxRequired.checked === true) {
            console.log('Check')
        }
        else {
            console.log('Pas Check')
        }

        if (login !== password) {
            console.log('Login et Password sont differents');

            if (password === password2) {
                console.log('Mots de passe identiques');

                if (login != "admin" && login != "administrator" && login != "superadmin" && login != "chuck" && login != "root" && login != "postmaster") {
                    console.log('Login correct');

                }
                else {
                    console.log('Login incorrect');
                }
            }
            else {
                console.log('Mots de passe differents');
            }
        }
        else {
            console.log('Login et Password sont identiques');
        }
    })
    // => supprimer toutes les div>div dans le formulaire
    // => vérifier que tous les champs sont renseignés
    // => vérifier que le login est différent du mot de passe
    // => vérifier que les mots de passe sont identiques
    // => vérifier que le login ne contient pas "admin","administrator","superadmin","chuck", "root", "postmaster"
    // => créer une div juste avant contenant le message d'erreur pour chaque erreur
});