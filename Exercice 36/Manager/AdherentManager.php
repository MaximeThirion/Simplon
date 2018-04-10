<?php

namespace Exercice_5;

class AdherentManager {

    public $bdd;

    public function setBDD($bdd) {
        $this->bdd = $bdd;
    }

    public function getAll() {

        $requete = $this->bdd->query('SELECT * FROM `Adherent`');
        $donnees = $requete->fetchAll(\PDO::FETCH_CLASS, 'Exercice_5\Adherent');

        return $donnees;
    }
}