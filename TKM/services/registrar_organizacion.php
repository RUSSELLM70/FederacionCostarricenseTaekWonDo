<?php
require_once   'conexion.php';
$nombre =$_POST['pnombre'];
$tipo =$_POST['ptipo'];
$direccion =$_POST['pdireccion'];
$telefono =$_POST['ptelefono'];
$correo =$_POST['pcorreo'];



$sentencia_sql = "CALL 	registrar_organizacion"."('$nombre','$tipo','$direccion','$telefono','$correo')";

$result = $conexion->query($sentencia_sql);

if(!$result)die("Falló la sentencia sql " . $conexion->error);


echo $result;
?>
