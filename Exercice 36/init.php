<?php

include ('connexion.php');
include ('Model/Activite.php');
include ('Manager/ActiviteManager.php');
include ('Model/Adherent.php');
include ('Manager/AdherentManager.php');
include ('Model/Planning.php');
include ('Model/Planning_2.php');
include ('Manager/PlanningManager.php');

use Exercice_5\Activite;
use Exercice_5\ActiviteManager;
use Exercice_5\Adherent;
use Exercice_5\AdherentManager;
use Exercice_5\Planning;
use Exercice_5\Planning_2;
use Exercice_5\PlanningManager;

echo "---init.php---<br><br>";

$date_du_jour = date('Y-m-d');
$date = date('m-d');
//$date = "%01-30%";

$activitemanager = new ActiviteManager();
$activitemanager->setBDD($base_de_donnee);

$planningmanager = new PlanningManager();
$planningmanager->setBDD($base_de_donnee);
$planningmanager->setDate($date_du_jour);
$planningmanager->setSemaine('2018-04-10');

$adherentmanager = new AdherentManager();
$adherentmanager->setBDD($base_de_donnee);

$date_anniversaire = $base_de_donnee->prepare("SELECT * FROM `Adherent` WHERE DATE (date_de_naissance) LIKE CONCAT('%',:date, '%')");
$date_anniversaire->bindParam(':date', $date, PDO::PARAM_STR);
$date_anniversaire->execute();
$donnee_anniversaire = $date_anniversaire->fetchAll();
$date_anniversaire->closeCursor();

if (empty($donnee_anniversaire)) {
    echo "Pas d'anniversaire aujourd'hui<br><br>";
}
else {
    foreach ($donnee_anniversaire as $anniversaire) {
        echo "On est le ".$date_du_jour.". C'est l'anniversaire de ".$anniversaire['prenom']." ".$anniversaire['nom']." aujourd'hui !<br><br>";
    }
}

?>