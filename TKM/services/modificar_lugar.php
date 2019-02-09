<?php
require_once 'conexion.php';
$nombre_lugar =$_POST['pnombre_lugar'];
$nombre_encargado =$_POST['pnombre_encargado'];
$capacidad =$_POST['pcapacidad'];
$direccion =$_POST['pdireccion'];
$telefono =$_POST['ptelefono'];
$correo =$_POST['pcorreo'];
$cx =$_POST['pcx'];
$cy =$_POST['pcy'];
$id = $_POST['pid'];








$sentencia_sql = "CALL pa_modificar_lugar"."('$nombre_lugar','$nombre_encargado','$capacidad','$direccion','$telefono','$correo','$cx','$cy','$id')";


$result = $conexion->query($sentencia_sql);

if(!$result)die('Falló la sentencia SQL' . $conexion->error);

echo $result;

?>
