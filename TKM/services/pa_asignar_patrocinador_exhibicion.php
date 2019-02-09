<?php
require_once 'conexion.php';

$id_exhibicion = $_POST['pid_exhibicion'];
$id_alumno = $_POST['pid_alumno'];

$sentencia_sql = "CALL 	pa_asignar_patrocinador_exhibicion"."('$id_exhibicion', '$id_alumno')";

$result = $conexion->query($sentencia_sql);

if(!$result)die('Fallo la sentencia SQL' . $conexion->error);

echo $result;

?>
