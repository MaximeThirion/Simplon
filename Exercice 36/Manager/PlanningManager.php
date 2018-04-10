<?php

namespace Exercice_5;

class PlanningManager {

    public $bdd;
    public $date_du_jour;

    public function setBDD($bdd) {
        $this->bdd = $bdd;
    }

    public function setDate($date_du_jour) {
        $this->date_du_jour = $date_du_jour;
    }

    public function getDate() {
        return $this->date_du_jour;
    }

    public function getAll() {

        $requete = $this->bdd->prepare("SELECT Activite.date, Activite.categorie, DATE_FORMAT(Activite.heure_de_debut, '%H:%i') as heure_de_debut, DATE_FORMAT(Activite.heure_de_fin, '%H:%i') as heure_de_fin, Adherent.prenom FROM `Planning` INNER JOIN Activite ON Planning.id_Activite = Activite.idActivite INNER JOIN Adherent ON Planning.id_Adherent = Adherent.idAdherent WHERE Activite.date = :date");
        $requete->bindParam(':date', $this->date_du_jour, \PDO::PARAM_STR);
        $requete->execute();
        $donnees = $requete->fetchAll(\PDO::FETCH_CLASS, 'Exercice_5\Planning');

        return $donnees;
    }
}