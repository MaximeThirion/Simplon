<?php

namespace Exercice_5;

class ActiviteManager {

    public $bdd;

    public function setBDD($bdd) {
        $this->bdd = $bdd;
    }

    public function getAll() {

        $requete = $this->bdd->query('SELECT * FROM `Activite`');
        $donnees = $requete->fetchAll(\PDO::FETCH_CLASS, 'Exercice_5\Activite');

        return $donnees;
    }
}