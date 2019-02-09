<?php
require_once 'conexion.php';

$nombre_patrocinador = $_POST['pnombre_patrocinador'];
$nombre_sociedad_anonima = $_POST['pnombre_sociedad_anonima'];
$correo = $_POST['pcorreo'];
$tipo_patrocinio = $_POST['ptipo_patrocinio'];
$telefono = $_POST['ptelefono'];
$monto = $_POST['pmonto'];
$descripcion_producto = $_POST['pdescripcion_producto'];
$id = $_POST['pid'];

$sentencia_sql = "CALL 	pa_modicar_patrocinador"."('$nombre_patrocinador','$nombre_sociedad_anonima','$correo','$tipo_patrocinio','$telefono','$monto', '$descripcion_producto','$id')";

$result = $conexion->query($sentencia_sql);

if(!$result)die('Falló la sentencia SQL' . $conexion->error);

echo $result;

?>
