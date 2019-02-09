<?php
require_once 'conexion.php';

$id_torneo = $_POST['pid_torneo'];
$id_alumno = $_POST['pid_alumno'];

$sentencia_sql = "CALL pa_asignar_patrocinador_torneo"."('$id_torneo', '$id_alumno')";

$result = $conexion->query($sentencia_sql);

if(!$result)die('Fallo la sentencia SQL' . $conexion->error);

echo $result;

?>
