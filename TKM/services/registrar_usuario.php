
<?php
require_once 'conexion.php';

$nombre = $_POST['pnombre'];
$correo = $_POST['pcorreo'];
$contrasenna = $_POST['pcontrasenna'];
$estado = $_POST['pestado'];;
$rol = $_POST['prol'];


$sentencia_sql = "CALL pa_registrar_usuario"."('$nombre','$correo','$contrasenna','$estado','$rol')";

$result = $conexion->query($sentencia_sql);

if(!$result)die('Falló la sentencia SQL' . $conexion->error);

echo $result;

?>
