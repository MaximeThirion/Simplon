<?php

namespace Exercice_5;

class Adherent {

    public $idAdherent;
    public $prenom;
    public $nom;
    public $date_de_naissance;
    public $statut;

    public function getIdAdherent() {
        return $this->idAdherent;
    }

    public function getPrenom() {
        return $this->prenom;
    }

    public function getNom() {
        return $this->nom;
    }

    public function getDateDeNaissance() {
        return $this->date_de_naissance;
    }

    public function getStatut() {
        return $this->statut;
    }
}