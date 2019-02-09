<?php
  require_once 'credenciales.php';

  $conexion = new mysqli($host_name,$user_name,$password,$data_base);

  if($conexion->connect_error)die(($conexion->error).' No se pudo establecer la conexión, revise las credenciales');

  $conexion->set_charset("utf8");
?>
