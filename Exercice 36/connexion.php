<?php

try {
    echo "Connexion à la BD 'evaluation' en cours <br><br>";

    $base_de_donnee = new PDO('mysql:host=localhost;dbname=evaluation;charset=utf8', 'root', 'formationsimplon');
    $base_de_donnee->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connecté !<br><br>";
}

catch (PDOException $ex) {
    die('Erreur : '.$ex->getMessage());
}

?>