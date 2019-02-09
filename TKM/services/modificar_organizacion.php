<?php
require_once 'conexion.php';

$nombre =$_POST['pnombre'];
$tipo =$_POST['ptipo'];
$direccion =$_POST['pdireccion'];
$telefono =$_POST['ptelefono'];
$correo =$_POST['pcorreo'];
$id = $_POST['pid'];


$sentencia_sql = "CALL pa_modificar_organizacion"."('$nombre','$tipo','$direccion','$telefono','$correo','$id')";

$result = $conexion->query($sentencia_sql);

if(!$result)die('Falló la sentencia SQL' . $conexion->error);

echo $result;

?>
