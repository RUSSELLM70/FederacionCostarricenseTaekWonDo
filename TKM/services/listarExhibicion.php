<?php

require_once 'conexion.php';

$sentencia_sql = "CALL 	pa_listar_exhibicion";

$result = $conexion->query($sentencia_sql);

if(!$result)die("Falló la sentencia sql " . $conexion->error);

$filas = array();


while($registro = mysqli_fetch_assoc($result)) {

    $filas[] = $registro;

}


echo json_encode($filas);

?>