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
            echo "<td colspan='100'>Planning</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>Aujourd'hui</td>";
            echo "<td>$date_du_jour</td>";
            foreach ($planningmanager->getAll() as $categorie) {
                echo "<td>".$categorie->getCategorie()."</td>";
                break;
            }
            foreach ($planningmanager->getAll() as $date_debut) {
                echo "<td>".$date_debut->getHeureDeDebut()."</td>";
                break;
            }
            foreach ($planningmanager->getAll() as $date_fin) {
                echo "<td>".$date_fin->getHeureDeFin()."</td>";
                break;
            }
            foreach ($planningmanager->getAll() as $planning) {
                echo "<td>".$planning->getPrenom()."</td>";
            }
        ?>
        </tbody>
    </table>
<?php

//foreach ($planningmanager->getAll() as $planning) {
//    var_dump($planning->getPrenom());
//}

?>
    </body>
</html>