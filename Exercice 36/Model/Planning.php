<?php

namespace Exercice_5;

class Planning {

    public $date;
    public $categorie;
    public $heure_de_debut;
    public $heure_de_fin;
    public $prenom;

    public function getDate() {
        return $this->date;
    }

    public function getCategorie() {
        return $this->categorie;
    }

    public function getHeureDeDebut() {
        return $this->heure_de_debut;
    }

    public function getHeureDeFin() {
        return $this->heure_de_fin;
    }

    public function getPrenom() {
        return $this->prenom;
    }
}