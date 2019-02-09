
<?php
require_once 'conexion.php';

$academia = $_POST['pid_academia'];
$nombre1 = $_POST['pnombre1'];
$nombre2 = $_POST['pnombre2'];
$apellido1 = $_POST['papellido1'];
$apellido2 = $_POST['papellido2'];
$cedula = $_POST['pcedula'];
$telefono = $_POST['ptelefono'];
$correo = $_POST['pcorreo'];
$genero = $_POST['pgenero'];
$fecha = $_POST['pfecha'];
$estado = 1;


$sentencia_sql = "CALL pa_registrar_profesor"."('$academia','$nombre1','$nombre2','$apellido1','$apellido2','$cedula','$telefono','$correo','$genero','$fecha','$estado')";

$result = $conexion->query($sentencia_sql);

if(!$result)die('Falló la sentencia SQL' . $conexion->error);

echo $result;

?>
