<?php
require_once 'conexion.php';

$nombre = $_POST['pnombre'];
$correo = $_POST['pcorreo'];
$telefono = $_POST['ptelefono'];
$direccion = $_POST['pdireccion'];
$id_academia = $_POST['pid'];


$sentencia_sql = "CALL modificar_academia"."('$nombre','$correo','$telefono','$direccion','$id_academia')";

$result = $conexion->query($sentencia_sql);

if(!$result)die('Falló la sentencia SQL' . $conexion->error);

echo $result;

?>
