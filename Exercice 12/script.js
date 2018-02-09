// simple ligne de commentaire
/*
  commentaire multiligne
 */

// créer une variable
prenom="yannick";
//console.log(prenom);

/* type de variable */
// variable simple
une_string="yannick"; // chaine de caractère / string
un_entier = 2; // entier / int
un_nombre_flottant = 2.2; // nombre à virgule  / float
un_booleen = true; // booleen true ou false / boolean

// variable complexe
un_tableau = ["chat","chien","poisson","dindon"]; // tableau / array
un_objet = { type:"chat", name:"fichelecamp", age:6}; // object / object

/* opérations */
// types simples
// + - * / %
str = "bon" + "jour"; // concaténation

// types complexes
// array
premier_element = un_tableau[0]; // recupere le premier element du tableau un_tableau : chat
deuxieme_element = un_tableau[1]; // recupere le deuxième element du tableau un_tableau : chien

// object
propriete_type = un_objet.type; // récupère la propriété "type" de l'objet un_object : chat
propriete_type = un_objet["type"]; // récupère la propriété "type" de l'objet un_object : chat
propriete_name = un_objet.name; // récupère la propriété "name" de l'objet un_object : fichelecamp
propriete_name = un_objet["name"]; // récupère la propriété "name" de l'objet un_object : fichelecamp


/* les fonctions */
// déclaration
une_fonction = function(x,y){  }; // x et y sont les noms des paramètres passés à la fonction
function une_fonction(x,y){  };

// retourner un résultat
// mot clef "return";
une_fonction = function(x,y){ return 20; };

// exécution les parenthèses sont requises, même quand il n'y a pas de paramètres
une_fonction(1,2);
une_fonction(1,2);

// affectation de la valeur de retour d'une fonction dans une variable
resultat = une_fonction(1,2);

// function du langage
// alert(message) affiche une popup qui contient le paramètre "message"
// prompt(message) affiche le paramètre "message" et demande à l'internaute de saisir une données
// console.log(variable) affiche le contenu de la variable dans la console

/* exercices */
// créer une fonction qui affiche "bonjour" dans la console
bonj = function(a) {
    console.log(a);
}
bonj("bonjour");
// créer un tableau d'objets
tableau1 = [objet1 = {test: "Test1"}, objet2 = {test2: "Test3"}];
console.log(tableau1[0]);
// créer un objet de tableaux
objet3 = {
    tableau2 : [1, 2],
    tableau3 : [3, 4]
};
console.log(objet3["tableau3"]);
// créer une fonction qui calcule le produit de deux nombres
calcul = function(a, b) {
    return a + b;
};
console.log(calcul(5, 2));
// créer une fonction qui demande le nom et prénom et qui l'affiche dans la console
demande = function() {
    reponse = prompt ("Quel est votre nom et prénom ?")
    console.log(reponse);
};

// créer une fonction qui demande nom + prénom + age + ville et qui l'affiche dans la console
demande2 = function (a, b, c, d) {
    a = prompt("Nom ?")
    b = prompt("Prénom ?")
    c = prompt("Age ?")
    d = prompt("Ville ?")
    return console.log(a + " " + b + " " + c + " " + d);
};

// créer une fonction qui calcule pythagore(longueur,largeur) ( racine carrée de la somme des carrés ) avec Math.sqrt
calcul2 = function (a, b) {
    return Math.sqrt((a * a) + (b * b));
};
console.log(calcul2(10, 9));
// avancés :
// créer une fonction qui indique si un nombre est pair
calcul3 = function (a) {
    if (a % 2 == 0) {
        return console.log("Le nombre est pair");
    }
    else {
        return console.log("Le nombre est impair");
    }
};
calcul3(3);
/* créer un nombre aléatoire entre min et max */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
trouve_chiffre = function(min,max){
    // 1) générer un chiffre entre min et max
    const nombre_a_trouver = getRandomInt(min,max)
    // 2) demander un chiffre à l'internaute
    chiffre_saisie = prompt("Chiffre ?")
    // 3) indiquer si la saisie est plus grande ou plus petite
    while (isNaN(chiffre_saisie)) {
        chiffre_saisie = prompt("Entrez un chiffre")
    }
    while (chiffre_saisie != nombre_a_trouver) {
        if (chiffre_saisie < nombre_a_trouver) {
            chiffre_saisie = prompt("Trop petit")
            console.log("Trop petit")
        }
        else if (chiffre_saisie > nombre_a_trouver) {
            chiffre_saisie = prompt("Trop grand")
            console.log("Trop grand")
        }
    }
    alert("Trouvé");
    console.log("Trouvé");
    // 4) si la saisie est juste, finir la partie
    // aide : pour convertir une chaine de caractère en nombre
    // 			=> parseInt(string)
}

// créer une fonction qui indique si une chaîne de caractère à plus de 7 caractères
trouve = function (chaine) {
    if (chaine.length < 7) {
        console.log("Moins de 7")
    }
    else if (chaine.length > 7) {
        console.log("Plus de 7")
    }
    else {
        console.log("Egal à 7")
    }
}
trouve("aaaaaaa");
// créer une fonction récursive qui calcule factorielle x
calcul4 = function (x) {
    resultat = 1;
    for (a = 1; a < (x + 1); a++) {
        resultat = a * resultat
    }
    console.log(resultat);
}
calcul4(6);
// créer une fonction qui prends un nombre illimité de paramètres et qui calcule la somme de tous ces paramètres
calcul5 = function () {
    result = 0;
    for (a = 0; a < arguments.length; a++) {
        result = result + arguments[a];
    }
    console.log(result)
}
calcul5(5, 10, 2, 30);