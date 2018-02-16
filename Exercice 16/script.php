<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?PHP

/**
 * Creer un script permettant de creer plusieurs rectangles de tailles differentes
 * et placer y des ronds a l'interieur de couleur differentes.
 * Creer un formulaire demandant le nombre de carre ainsi que le nombre de rond par carre.
 */

echo "<form method='post'><input type='text' placeholder='Nombre de carre' name='nombre_de_carre'><br>
<input type='text' placeholder='Nombre de rond' name='nombre_de_rond'><br>
<input type='submit' name='envoyer'></form>";

$nombre_de_carre = $_POST['nombre_de_carre'];
$nombre_de_rond = $_POST['nombre_de_rond'];
$couleur_carre = ['crouge', 'cbleu', 'cvert'];
$taille_carre = ['petit', 'moyen', 'grand'];
$couleur_rond = ['rouge', 'bleu', 'vert'];
$taille_rond = ['petit_rond', 'moyen_rond', 'grand_rond'];

if (isset($_POST[envoyer])) {
    for ($i = 0; $i < $nombre_de_carre; $i++) {
        $random = rand(0, 2);
        $random2 = rand(0, 2);
        $random_couleur_carre = $couleur_carre[$random];
        $random_taille_carre = $taille_carre[$random2];
        echo "<div class='$random_couleur_carre $random_taille_carre'>";
            for ($j = 0; $j < $nombre_de_rond; $j++) {
                $random3 = rand(0, 2);
                $random4 = rand(0, 2);
                $random_couleur_rond = $couleur_rond[$random3];
                $random_taille_rond = $taille_rond[$random4];
                echo "<div class='$random_couleur_rond $random_taille_rond'></div>";
            }
        echo "</div>";
    }
};

?>
</body>
</html>