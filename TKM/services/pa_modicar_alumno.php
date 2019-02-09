<?php
require_once 'conexion.php';

$academia = $_POST['pacademia'];
$profesor = $_POST['pprofesor'];
$nombre = $_POST['pnombre'];
$apellido1 = $_POST['papellido1'];
$apellido2  = $_POST['papellido2'];
$correo = $_POST['pcorreo'];
$cedula = $_POST['pcedula'];
$telefono = $_POST['ptelefono'];
$edad = $_POST['pedad'];
$genero = $_POST['pgenero'];
$fecha_nacimiento = $_POST['pfecha_nacimiento'];
$peso = $_POST['ppeso'];
$altura = $_POST['paltura'];
$grado = $_POST['pgrado'];
$categoria_edad = $_POST['pcategoria_edad'];
$categoria_peso = $_POST['pcategoria_peso'];
$torneos_participados = $_POST['ptorneos_participados'];
$torneos_ganados = $_POST['ptorneos_ganados'];
$exhibiciones_participadas = $_POST['pexhibiciones_participadas'];
$direccion = $_POST['pdireccion'];
$id = $_POST['pid'];


$sentencia_sql = "CALL 	pa_modicar_alumno"."('$academia', '$profesor', '$nombre', '$apellido1', '$apellido2', '$correo', '$cedula', '$telefono', '$edad', '$genero', '$fecha_nacimiento', '$peso', '$altura', '$grado', '$categoria_edad', '$categoria_peso', '$torneos_participados', '$torneos_ganados', '$exhibiciones_participadas', '$direccion', '$id')";

$result = $conexion->query($sentencia_sql);

if(!$result)die('Falló la sentencia SQL' . $conexion->error);

echo $result;

?>
