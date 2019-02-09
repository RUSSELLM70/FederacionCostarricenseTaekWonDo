<?php
require_once   'conexion.php';
$nombre_lugar =$_POST['pnombre_lugar'];
$nombre_encargado =$_POST['pnombre_encargado'];
$capacidad =$_POST['pcapacidad'];
$telefono =$_POST['ptelefono'];
$correo =$_POST['pcorreo'];
$direccion =$_POST['pdireccion'];
$cx =$_POST['pcx'];
$cy =$_POST['pcy'];
$estado =$_POST['pestado'];





$sentencia_sql = "CALL registrar_lugar"."('$nombre_lugar','$nombre_encargado','$capacidad','$telefono','$correo','$direccion','$cx','$cy','$estado')";

$result = $conexion->query($sentencia_sql);

if(!$result)die("Falló la sentencia sql " . $conexion->error);


echo $result;
?>
