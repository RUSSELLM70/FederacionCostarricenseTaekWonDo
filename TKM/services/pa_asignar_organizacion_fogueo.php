<?php
require_once 'conexion.php';

$id_fogueo = $_POST['pid_fogueo'];
$id_alumno = $_POST['pid_alumno'];

$sentencia_sql = "CALL pa_asignar_organizacion_fogueo"."('$id_fogueo', '$id_alumno')";

$result = $conexion->query($sentencia_sql);

if(!$result)die('Fallo la sentencia SQL' . $conexion->error);

echo $result;

?>
