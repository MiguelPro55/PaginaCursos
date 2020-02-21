<?php
echo "<link rel=stylesheet href=complemento.css>";
echo "somos un equipo de desarrolladores";
$nosotros = array("Carlos Daniel Olvera Magno","Jose Miguel Procopio Esteban","Ivan Alejandro Gutierrez Garcia","Christian Cuellar","Adolfo Taquillo");

echo "<title>Grupo de trabajo</title>";
echo "<h1>DREAM TEAM</h1>";

for ($i=0;$i<=4;$i++){
    echo "<div class=nombresprogramadores>";
    echo "<br><h2>Programador: $nosotros[$i]</h2>";
    echo "</div>";
}

?>
