<?php

echo "*** index.php<br><br>";

try {
    echo "Connexion à la BD LMS en cours <br><br>";

    $base_de_donnee = new PDO('mysql:host=localhost;dbname=place;charset=utf8', 'root', 'formationsimplon');
    $base_de_donnee->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connecté !<br><br>";
}

catch (PDOException $ex) {
    die('Erreur : '.$ex->getMessage());
}

//Requête de sélection de l'ID du cours du 22/02/2018

$requete = $base_de_donnee->query("SELECT idCours FROM Cours WHERE dateCours = '2018-02-22'");
$donnees = $requete->fetch();
$idcours = $donnees['idCours'];
echo "Cours n° ".$donnees['idCours']." du 22/02/2018<br>";
$requete->closeCursor();

//Requête de sélection de l'ID du cours du 22/02/2018

$requete = $base_de_donnee->query("SELECT Place.Etudiant_idEtudiant, Place.numeroPlace, Etudiant.prenomEtudiant FROM Place INNER JOIN Etudiant ON Etudiant.idEtudiant = Place.Etudiant_idEtudiant WHERE Cours_idCours = 1;");

//On affiche chaque entrée une à une

while ($donnees = $requete->fetch()) {
    ?>
    <p>
        <strong>Etudiant</strong> : <?php echo $donnees['prenomEtudiant']; ?>, place n° <?php echo $donnees['numeroPlace']; ?><br>
    </p>
    <?php
}

$requete->closeCursor();

?>