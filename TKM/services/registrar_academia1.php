<?php
require_once   'conexion.php';
$nombre =$_POST['pnombre'];
$correo =$_POST['pcorreo'];
$telefono =$_POST['ptelefono'];
$direccion =$_POST['pdireccion'];

$sentencia_sql = "CALL pa_registrar_academia"."('$nombre','$correo','$telefono','$direccion')";

$result = $conexion->query($sentencia_sql);

if(!$result)die("Falló la sentencia sql " . $conexion->error);


echo $result;
?>
