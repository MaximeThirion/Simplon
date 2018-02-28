recettes = [
    {name:'ratatouille', ingredients: [
            {name: "tomate", count: 4},
            {name: "poivron", count: 4},
            {name: "aubergine", count: 4},
            {name: "oignon", count: 4},
            {name: "courgette", count: 4}
        ]},
    {name:'velouté de tomate', ingredients: [
            {name: "tomate", count: 10},
            {name: "poivron", count: 0},
            {name: "aubergine", count: 0},
            {name: "oignon", count: 2},
            {name: "courgette", count: 0}
        ]},
    {name:'légume farci', ingredients: [
            {name: "tomate", count: 6},
            {name: "poivron", count: 6},
            {name: "aubergine", count: 0},
            {name: "oignon", count: 0},
            {name: "courgette", count: 6}
        ]}
];

function add(recipe){
    for (i = 0; i < recettes.length; i++) {
        const recette = recettes[i];
        if (recipe === recette.name) {
            titre = "";
            selected = [];
            titre += recette.name;
            for (j = 0; j < recette.ingredients.length; j++) {
                selected += ("<br>" + recette.ingredients[j].count + " " + recette.ingredients[j].name)
            }
        }
    }
    display();
}

function display(){
    list = "<br>" + titre + " : " + "<br>" + selected;
    document.getElementById("resultat").innerHTML = list;
}