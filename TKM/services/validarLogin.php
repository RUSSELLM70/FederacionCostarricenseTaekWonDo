<?php
  require_once 'conexion.php';

  $txtUsuario = $_POST['pUsuario'];
  $txtContrasena = $_POST['pContrasenna'];

  $sentencia_sql = "CALL pa_verificar_usuario"."('$txtUsuario','$txtContrasena')";
  $result = $conexion->query($sentencia_sql);
  $resultado = 0;

  if(!$result)
    die('Falló la sentencia SQL' . $conexion->error);

  if ($result->num_rows > 0) {
      // Obtenermos los datos de la consulta
      session_start();
      $row = $result->fetch_assoc();

      #$sentencia_sql2 = "CALL pa_datos_administrador_por_id"."('$id')";
      #$result2 = $conexion->query($sentencia_sql2);
      #$row2 = $result2->fetch_assoc();

      if($row["estado"] == 1){
        $_SESSION["id_usuario"] = $row["id_usuario"];
        $_SESSION["correo"] = $row["correo"];
        $_SESSION["estado"] = $row["estado"];
        $_SESSION["id_rol"] = intval($row["id_rol"]);
        $_SESSION["id_actor"] = intval($row["id_actor"]);
        $resultado = 1;
      }
      else{
        $resultado = 0;
      }
  } else {
    $resultado = -1;
  }

echo json_encode($resultado);

$conexion->close();
?>
