<?php
require_once 'conexion.php';

$nombre = $_POST['pnombre'];
$fecha_inicio = $_POST['pfecha_inicio'];
$fecha_fin = $_POST['pfecha_fin'];
$precio_entrada = $_POST['pprecio_entrada'];
$invitado = $_POST['pinvitado'];
$estado = $_POST['pestado'];
$id_exhibicion = $_POST['pid']

$sentencia_sql = "CALL modificar_academia"."('$nombre','$correo','$telefono','$direccion','$id_academia','$id_exhibicion')";

$result = $conexion->query($sentencia_sql);

if(!$result)die('Falló la sentencia SQL' . $conexion->error);

echo $result;

?>