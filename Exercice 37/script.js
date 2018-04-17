const Personnage = {

  initPersonnage: function (nom, sante, puissance) {
    this.nom = nom;
    this.sante = sante;
    this.puissance = puissance;
  },
  
  attaque: function (cible) {
    if (cible.sante > 0) {
      console.log(this.nom + " attaque " + cible.nom + " et lui inflige " + this.puissance + " points de dégâts.");
      cible.sante = cible.sante - this.puissance;
      if (cible.sante > 0) {
        console.log(cible.nom + " a encore " + cible.sante + " points de vie.");
      }
      else {
        console.log(cible.nom + " est mort.");
      }
    }
    else {
      console.log(this.nom + " ne peut pas attaquer, il est mort.");
    }
  }
};

const Joueur = Object.create(Personnage);

Joueur.initJoueur = function (nom, sante, puissance) {
  this.initPersonnage(nom, sante, puissance);
  this.experience = 0;
};

Joueur.descrire = function () {
  const description = this.nom + " a " + this.sante + " points de vie, " + this.puissance + " en puissance et " + this.experience + " points d'experience.";
  return description;
};

Joueur.combattre = function (adversaire) {
  this.attaque(adversaire);
  if (adversaire.sante <= 0) {
    console.log(this.nom + " à tué " + adversaire.nom + ", il gagne " + adversaire.valeurEnExperience + " points d'experience.");
    this.experience += adversaire.valeurEnExperience;
  }
};

const Monstre = Object.create(Personnage);

Monstre.initMonstre = function (nom, sante, puissance, valeurEnExperience) {
  this.initPersonnage(nom, sante, puissance);
  this.valeurEnExperience = valeurEnExperience;
};

let joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora", 150, 10);

let joueur2 = Object.create(Joueur);
joueur2.initJoueur("Glacius", 180, 15);

let monstre1 = Object.create(Monstre);
monstre1.initMonstre("Zog", 100, 10, 25);

console.log(joueur1.descrire());
console.log(joueur2.descrire());

joueur1.combattre(monstre1);
joueur2.combattre(monstre1);
monstre1.attaque(joueur1);

joueur1.combattre(monstre1);
joueur2.combattre(monstre1);
monstre1.attaque(joueur2);

joueur1.combattre(monstre1);
joueur2.combattre(monstre1);
monstre1.attaque(joueur1);

joueur1.combattre(monstre1);
joueur2.combattre(monstre1);

console.log(joueur1.descrire());
console.log(joueur2.descrire());