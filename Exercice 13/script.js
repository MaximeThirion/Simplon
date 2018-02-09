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

console.log(tableau);

exo3 = function () {
    resultat = 0;
    for (i = 0; i < arguments.length; i++) {
        tableau.push(arguments[i]);
    }
    for (a = 0; a < tableau.length; a++) {
        resultat = (resultat + tableau[a]);
    }
    result = resultat / tableau.length;
    console.log(tableau);
    console.log(result);
};

exo3(10, 5, 15, 12, 7, 9, 6);