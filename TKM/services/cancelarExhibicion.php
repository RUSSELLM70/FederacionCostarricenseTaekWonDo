<?php

//se carga la conexion
require_once 'conexion.php';

//Se crea la sentencia que llama al procedimiento almacenado
$idExhibicion = $_POST['id'];
$sentencia_sql = "CALL 	pa_cancelar_exhibicion"."('$idExhibicion')";


//Se ejecuta la sentencia sql y se alamcena el resultado
$result = $conexion->query($sentencia_sql);

if(!$result)die("Falló la sentencia sql " . $conexion->error);

echo $result;

?>
