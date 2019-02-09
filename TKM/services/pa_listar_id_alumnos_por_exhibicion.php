<?php

//se carga la conexion
require_once 'conexion.php';

//Se crea la sentencia que llama al procedimiento almacenado
$id = $_GET['id'];
$sentencia_sql = "CALL pa_listar_id_alumnos_por_exhibicion"."('$id')";


//Se ejecuta la sentencia sql y se alamcena el resultado
$result = $conexion->query($sentencia_sql);

if(!$result)die("Falló la sentencia sql " . $conexion->error);

$filas = array();

while($registro = mysqli_fetch_assoc($result)) {

    $filas[] = $registro;

}

echo json_encode($filas);

?>

