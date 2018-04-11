<?php

namespace Exercice_5;

class Planning_2 {

    public $date;
    public $categorie;
    public $heure_de_debut;
    public $heure_de_fin;
    public $prenom;
    public $statut;

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

    public function getStatut() {
        return $this->statut;
    }
}