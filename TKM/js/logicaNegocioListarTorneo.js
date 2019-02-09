function obtenerListaTorneo() {
  var aListaTorneo = [];
  var peticion = $.ajax({
    url: "services/listarTorneos.php",
    type: "get",
    data: {


      //aqui se ponen los parametros que se envian al php
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaTorneo = respuesta;

    },
    error: function(request, error) {
      aListaTorneo = [];
    }
  });
  return aListaTorneo;
}

function obtenerListaTorneoAproximacion(psFiltro) {
  var ListaTorneo = [];
  var peticion = $.ajax({
    url: 'services/filtroTorneo.php',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'filtro': psFiltro
    },
    success: function(respuesta) {
      ListaTorneo = respuesta;
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);
      ListaTorneo = [];
    }
  });
  return ListaTorneo;
}

function obtenerNombreTorneoXId(pId) {
  var ListaTorneo = [];
  var peticion = $.ajax({
    url: 'services/pa_nombre_torneo_x_id.php',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pid': pId
    },
    success: function(respuesta) {
      ListaTorneo = respuesta;
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);
      ListaTorneo = [];
    }
  });
  return ListaTorneo;
}

function cancelarTorneo2(pId) {
  var peticion = $.ajax({
    url: 'services/pa_cancelar_evento.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'id': pId,
    },
    success: function(respuesta) {
      console.log('Se registro satisfactoriamente');
      alertify.success("Torneo Cancelado");
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}
