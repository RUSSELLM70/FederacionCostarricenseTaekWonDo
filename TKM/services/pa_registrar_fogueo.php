<?php
require_once 'conexion.php';

$nombre = $_POST['pnombre'];
$fecha_inicio = $_POST['pfecha_inicio'];
$fecha_fin = $_POST['pfecha_fin'];
$precio_entrada = $_POST['pprecio_entrada'];
$estado = $_POST['pestado'];

$sentencia_sql = "CALL pa_registrar_fogueo"."('$nombre', '$fecha_inicio', '$fecha_fin', '$precio_entrada','$estado')";

$result = $conexion->query($sentencia_sql);

if(!$result)die('Fallo la sentencia SQL' . $conexion->error);

echo $result;

?>
