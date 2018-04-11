<?php

include('init.php');

echo "---index.php---<br><br>"

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Evaluation MySQL</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <table>
        <tbody>
        <?php

            echo "<tr>";
            echo "<td colspan='100' style='background-color: #ababab'>Planning</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>".$planningmanager->getDate()."</td>";

            foreach ($planningmanager->getAll() as $categorie) {
                echo "<td>".$categorie->getCategorie()."</td>";
                break;
            }

            foreach ($planningmanager->getAll() as $donnee_debut) {
                echo "<td>".$donnee_debut->getHeureDeDebut()."</td>";
                break;
            }

            foreach ($planningmanager->getAll() as $donnee_fin) {
                echo "<td>".$donnee_fin->getHeureDeFin()."</td>";
                break;
            }

            foreach ($planningmanager->getAll() as $planning) {
                echo "<td>".$planning->getStatut().": ".$planning->getPrenom()."</td>";
            }

        ?>
        </tbody>
    </table>
    <table>
        <tbody>
        <?php

        echo "<br><br>";

        echo "<td colspan='100' style='background-color: #ababab'>Planning de la semaine du : ".$planningmanager->getSemaine2()."</td>";

        $tableau = [];

        foreach ($planningmanager->getSemaine() as $semaine) {

            if (in_array($semaine->getDate(), $tableau) != $semaine->getDate()) {

                $tableau[] = $semaine->getDate();
                echo "<tr>";
                echo "<td>".$semaine->getDate()."</td>";
                $tableau[] = $semaine->getCategorie();
                echo "<td>".$semaine->getCategorie()."</td>";
                echo "<td>".$semaine->getHeureDeDebut()."</td>";
                echo "<td>".$semaine->getHeureDeFin()."</td>";
                echo "<td>".$semaine->getStatut().": ".$semaine->getPrenom()."</td>";
            }
            elseif (in_array($semaine->getCategorie(), $tableau) != $semaine->getCategorie()) {

                $tableau[] = $semaine->getCategorie();
                echo "<td>".$semaine->getCategorie()."</td>";
            }
            else {

                echo "<td>".$semaine->getStatut().": ".$semaine->getPrenom()."</td>";
            }
        }

        ?>
        </tbody>
    </table>
    </body>
</html>