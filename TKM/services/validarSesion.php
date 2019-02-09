<?php
require_once 'conexion.php';
session_start();

if (isset($_SESSION['id_rol']) != true) {
  $Usuario = array(
    'id_rol' => -1,
  );
}else {
  $id = $_SESSION['id_actor'];
  $sentencia_sql = "CALL pa_datos_administrador_por_id"."('$id')";
  $result = $conexion->query($sentencia_sql);
  $filas = array();
  while($registro = mysqli_fetch_assoc($result)) {
      $filas[] = $registro;
  }
  $Usuario = array(
    'id_usuario' => $_SESSION['id_usuario'],
    'nombre' => $filas[0]['nombre1'],
    'nombre2' => $filas[0]['nombre2'],
    'correo' => $_SESSION['correo'],
    'cedula' => $filas[0]['cedula'],
    'apellido1' => $filas[0]['apellido1'],
    'apellido2' => $filas[0]['apellido2'],
    'telefono' => $filas[0]['telefono'],
    'estado' => $_SESSION['estado'],
    'id_rol' => $_SESSION['id_rol'],
    'id_actor' => $_SESSION['id_actor']
  );
}

echo json_encode($Usuario);
?>
