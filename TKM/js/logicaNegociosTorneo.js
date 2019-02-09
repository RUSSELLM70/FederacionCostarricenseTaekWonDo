function getListaLugares() {
  var aListaLugares = [];
  var peticion = $.ajax({
    url: "services/almacenar_lista.php",
    type: "get",
    data: {


      //aqui se ponen los parametros que se envian al php
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaLugares = respuesta;

    },
    error: function(request, error) {
      aListaLugares = [];
    }
  });
  return aListaLugares;
}

function agregarTorneo(pTorneo) {
  var peticion = $.ajax({
    url: 'services/registrar_torneo.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pnombre': pTorneo.sNombre,
      'pfecha_inicio': pTorneo.sFechaInicio,
      'pfecha_fin': pTorneo.sFechaFin,
      'pprecio_entrada': pTorneo.nPrecioEntrada,
      'pestado': pTorneo.nEstado
    },
    success: function(respuesta) {
      console.log('Se registro satisfactoriamente');
      alertify.success("Su registro se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}

function actualizarTorneo(pTorneo) {
  var peticion = $.ajax({
    url: 'services/modificar_torneo.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pnombre': pTorneo.sNombre,
      'pfecha_inicio': pTorneo.sFechaInicio,
      'pfecha_fin': pTorneo.sFechaFin,
      'pprecio_entrada': pTorneo.nPrecioEntrada,
      'pid': pTorneo.nId
    },
    success: function(respuesta) {
      console.log('Se modificó satisfactoriamente');
      alertify.success("Su registro se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}
