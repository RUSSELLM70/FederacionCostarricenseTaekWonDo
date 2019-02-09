<?php
require_once 'conexion.php';

$pacademia = $_POST['pacademia'];
$pprofesor = $_POST['pprofesor'];
$pnombre = $_POST['pnombre'];
$papellido1 = $_POST['papellido1'];
$papellido2  = $_POST['papellido2'];
$pcorreo = $_POST['pcorreo'];
$pcedula = $_POST['pcedula'];
$ptelefono = $_POST['ptelefono'];
$pedad = $_POST['pedad'];
$pgenero = $_POST['pgenero'];
$pfecha_nacimiento = $_POST['pfecha_nacimiento'];
$ppeso = $_POST['ppeso'];
$paltura = $_POST['paltura'];
$pgrado = $_POST['pgrado'];
$pcategoria_edad = $_POST['pcategoria_edad'];
$pcategoria_peso = $_POST['pcategoria_peso'];
$ptorneos_participados = $_POST['ptorneos_participados'];
$ptorneos_ganados = $_POST['ptorneos_ganados'];
$pexhibiciones_participadas = $_POST['pexhibiciones_participadas'];
$pdireccion = $_POST['pdireccion'];


$sentencia_sql = "CALL pa_registrar_alumno"."('$pacademia', '$pprofesor', '$pnombre', '$papellido1', '$papellido2', '$pcorreo', '$pcedula', '$ptelefono', '$pedad', '$pgenero', '$pfecha_nacimiento', '$ppeso', '$paltura', '$pgrado', '$pcategoria_edad', '$pcategoria_peso', '$ptorneos_participados', '$ptorneos_ganados', '$pexhibiciones_participadas', '$pdireccion')";

$result = $conexion->query($sentencia_sql);

if(!$result)die('Fallo la sentencia SQL' . $conexion->error);

echo $result;

?>
