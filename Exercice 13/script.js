console.log("test");

//exercice 1

exo1 = function () {
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] % 2 === 0) {
            console.log("L'argument " + arguments[i] + " est pair")
        }
        else {
            console.log("L'argument " + arguments[i] + " est impair")
        }
    }
};

exo1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);

//exercice 2

exo2 = function () {
    for (i = 0; i < arguments.length; i++) {
        resultat = arguments[i] * 9;
        console.log(arguments[i] + " * 9 = " + resultat);
    }
};

exo2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//exercice 3

tableau = [];
nombre_saisie = [];

console.log(tableau);

exo3 = function () {
    resultat = 0;
    while (nombre_saisie.length < 5) {
        saisie = prompt("Saisissez un chiffre");
        nombre = parseInt(saisie);
        nombre_saisie.push(nombre);
    }
    for (i = 0; i < nombre_saisie.length; i++) {
        tableau.push(nombre_saisie[i]);
        resultat = (resultat + tableau[i]);
    }
    result = resultat / tableau.length;
    console.log(tableau);
    console.log(result);
};

exo3();

//exercice 4

exo4 = function (x) {
    for (i = 2; i < x; i++) {
        if(x % i === 0) {
            return console.log (x + " n'est pas premier");
        }
        else {
            console.log(x + " est premier");
        }
    }
};

exo4(12);