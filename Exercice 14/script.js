const productsList = [
    {code: 'livre', name: 'Fondation foudroyée', price: 10, total: 0 },
    {code: 'console', name: 'PS3', price: 200, total: 0 },
    {code: 'fleur', name: 'Orchidée', price: 20, total: 0 }
];

/*
 * fonction pour ajouter un produit
 */
function addProduct(code){

    // chercher l'objet correspondant à ce code
    for (i = 0; i < productsList.length; i++) {
        const produit = productsList[i];
        if (produit.code === code) {
            // modifier la propriété nombre de cet objet
            produit.total++;
            // pour représenter le fait d'avoir un élément de plus sélectionné
            console.log(produit);
        }
    }
    displayCaddie();
}

/**
 * fonction pour supprimer un produit
 */
function deleteProduct(code){

    // chercher l'objet correspondant à ce code
    for (j = 0; j < productsList.length; j++) {
        const produit = productsList[j];
        if (produit.code === code) {
            // modifier la propriété nombre de cet objet
            produit.total--;
            // pour représenter le fait d'avoir un élément de moins sélectionné
            console.log(produit);
        }
    }
    displayCaddie();
}

/**
 * fonction pour afficher la liste des produits
 */
function displayCaddie(){
    let list = "Livre : " + "<br>" + "Console : " + "<br>" + "Fleur : ";
    document.getElementById("resultat").innerHTML = list;
}