<?php
require_once 'conexion.php';

$cedula = $_POST['pcedula'];
$nombre = $_POST['pnombre'];
$apellido1 = $_POST['papellido1'];
$apellido2 = $_POST['papellido2'];
$correo = $_POST['pcorreo'];
$telefono = $_POST['ptelefono'];
$genero = $_POST['pgenero'];
$fecha_nacim = $_POST['pfechanacim'];
$id_asistente = $_POST['pid'];

$sentencia_sql = "CALL pa_modificar_asistente"."('$cedula','$nombre','$apellido1','$apellido2','$correo', '$telefono','$genero','$fecha_nacim','$id_asistente')";
$result = $conexion->query($sentencia_sql);

if(!$result)die('Falló la sentencia SQL' . $conexion->error);

echo $result;
?>
