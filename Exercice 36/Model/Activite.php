<?php

namespace Exercice_5;

class Activite {

    public $id_Activite;
    public $categorie;
    public $date;
    public $heure_de_debut;
    public $heure_de_fin;

    public function getIdActivite() {
        return $this->id_Activite;
    }

    public function getCategorie() {
        return $this->categorie;
    }

    public function getDate() {
        return $this->date;
    }

    public function getHeureDeDebut() {
        return $this->heure_de_debut;
    }

    public function getHeureDeFin() {
        return $this->heure_de_fin;
    }
}