<?php
require_once 'conexion.php';

$nombre =$_POST['pnombre'];
$nombre2 =$_POST['pnombre2'];
$apellido1 =$_POST['papellido1'];
$apellido2 =$_POST['papellido2'];
$cedula =$_POST['pcedula'];
$telefono = $_POST['ptelefono'];
$id = $_POST['pid'];


$sentencia_sql = "CALL pa_modificar_administrador"."('$nombre','$nombre2','$apellido1','$apellido2','$cedula','$telefono','$id')";

$result = $conexion->query($sentencia_sql);

if(!$result)die('Falló la sentencia SQL' . $conexion->error);

echo $result;

?>
