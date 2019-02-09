<?php
$manejador="mysql";
$servidor="localhost";
$usuario="root";
$pass="root";
$base="bd_proyecto";
$cadena="$manejador:host=$servidor;dbname=$base";
$cnx = new PDO($cadena,$usuario,$pass);
?>
