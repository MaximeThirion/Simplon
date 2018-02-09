produits = [
    {code:'livre', nom:'Fondation foudroyée', prix:10 },
    {code:'console', nom:'PS3', prix:200 },
    {code:'fleur', nom:'Orchidée', prix:20 }
];

/*
 * fonction pour ajouter un produit
 */
function add(type){

    // chercher tous les aliments qui conviennent et les afficher

    display();
}

/*
 * fonction pour supprimer un produit
 */
function del(type){

    display();
}

/*
 * fonction pour afficher la liste des produits
 */
function display(){
    list = "";
    document.getElementById("resultat").innerHTML = list;
}
