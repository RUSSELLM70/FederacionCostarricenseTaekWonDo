<?php
session_start();
$_SESSION['detalle'] = array();

require_once 'Config/conexion.php';
require_once 'Model/Producto.php';

$objProducto = new Producto();
$resultado_producto = $objProducto->get();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Reservar entradas</title>

    <!-- Bootstrap -->
    <link href="libs/css/bootstrap.css" rel="stylesheet">
    <link rel="icon" href="./img/logo.jpg">

    <script src="libs/js/jquery.js"></script>
    <script src="libs/js/jquery-1.8.3.min.js"></script>
    <script src="libs/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">

    <script type="text/javascript" src="libs/ajax.js"></script>

	 <!-- Alertity -->
    <link rel="stylesheet" href="libs/js/alertify/themes/alertify.core.css" />
	<!-- <link rel="stylesheet" href="libs/js/alertify/themes/alertify.bootstrap.css" id="toggleCSS" /> -->
    <script src="libs/js/alertify/lib/alertify.min.js"></script>
    <link rel="stylesheet" href="css/alertify.core.css" />
    <link rel="stylesheet" href="css/alertify.default.css" />
  </head>
  <style>
body{
  background-color: #f3f3f3;
}
  .flecha i,span{
    color: #636363;
    font-size: 28px;
  }
  #txt_cantidad,#cbo_producto {
width: 200px;
  	border: 0px;
  	border-radius: 2px;

  	background-color: white;
  	box-shadow: 1px 1px 1px 1px #e5e5e5;
  }
#cbo_producto{

    margin-bottom: 30px;

}
button{
    margin-left: 181px;

}
.panel-info{
  margin-top: 30px;
}




  .flecha span:hover{
    color: #00bbd5;
  }
  .flecha i:hover{
    color: #00bbd5;
  }
  #cant{
    font-size: 20px;
  }
  #entr{
      font-size: 20px;
  }
  </style>


  <div class="container">
    <a href="landingPage.html" class="flecha">
     <i class="fa fa-arrow-left" aria-hidden="true"> <span>Regresar</span></i>
   </a>
  </div>
  <body>
 	<div class="container">

 		<div class="page-header">
			<h1>Reservar entradas</h1>
		</div>

 		<div class="row">
			<div class="col-md-4">
				<div id="entr">Entrada
				<select name="cbo_producto" id="cbo_producto" class="col-md-2 form-control">
					<option value="0">Seleccione evento</option>
					<?php foreach($resultado_producto as $producto):?>
						<option value="<?php echo $producto['id']?>"><?php echo $producto['descripcion']?></option>
					<?php endforeach;?>
				</select>
        <div class="col-md-2">
          <!-- aca esta en btn -->
          <div id="btn">
          <button type="button" class="btn btn-success btn-agregar-producto">Comprar</button>
          </div>
        </div>
				</div>
			</div>
			<div class="col-md-2">
				<div id="cant">Cantidad
				  <input id="txt_cantidad" name="txt_cantidad" type="number" class="col-md-2 form-control" placeholder="" autocomplete="off" />
				</div>
			</div>




		</div>

		<br>
		<div class="panel panel-info">
			 <div class="panel-heading">
		        <h3 class="panel-title">Entradas</h3>
		      </div>
			<div class="panel-body detalle-producto">
				<?php if(count($_SESSION['detalle'])>0){?>
					<table class="table">
					    <thead>
					        <tr>
					            <th>Descripci&oacute;n</th>
					            <th>Cantidad</th>
					            <th>Precio</th>
					            <th>Subtotal</th>
					            <th></th>
					        </tr>
					    </thead>
					    <tbody>
					    	<?php
					    	foreach($_SESSION['detalle'] as $k => $detalle){
					    	?>
					        <tr>
					        	<td><?php echo $detalle['producto'];?></td>
					            <td><?php echo $detalle['cantidad'];?></td>
					            <td><?php echo $detalle['precio'];?></td>
					            <td><?php echo $detalle['subtotal'];?></td>
					            <td><button type="button" class="btn btn-sm btn-danger eliminar-producto" id="<?php echo $detalle['id'];?>">Eliminar</button></td>
					        </tr>
					        <?php }?>
					    </tbody>
					</table>
				<?php }else{?>
				<div class="panel-body"> No hay compras agregadas</div>
				<?php }?>
			</div>
		</div>
 	</div>
  </body>
</html>
