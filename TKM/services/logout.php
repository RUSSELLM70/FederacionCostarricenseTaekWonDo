<?php
  require_once 'conexion.php';
session_start();

unset ($SESSION['id_usuario']);

session_destroy();

?>
