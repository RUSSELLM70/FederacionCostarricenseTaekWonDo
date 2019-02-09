<?php
require_once 'conexion.php';
$nombre =$_POST['pnombre'];
$fecha_inicio =$_POST['pfecha_inicio'];
$fecha_fin =$_POST['pfecha_fin'];
$precio_entrada =$_POST['pprecio_entrada'];
$invitado =$_POST['pinvitado'];
$id =$_POST['pid'];



$sentencia_sql = "CALL pa_modificar_exhibicion"."('$nombre','$fecha_inicio','$fecha_fin','$precio_entrada','$invitado','$id')";


$result = $conexion->query($sentencia_sql);

if(!$result)die('Falló la sentencia SQL' . $conexion->error);

echo $result;

?>
