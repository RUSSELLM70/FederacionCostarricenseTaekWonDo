function obtenerListaExhibicion() {
  var aListaExhibicion = [];
  var peticion = $.ajax({
    url: "services/pa_listar_exhibicion.php",
    type: "get",
    data: {


      //aqui se ponen los parametros que se envian al php
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaExhibicion = respuesta;

    },
    error: function(request, error) {
      aListaExhibicion = [];
    }
  });
  return aListaExhibicion;
}

function obtenerListaExhibicionAproximacion(psFiltro) {
  var ListaExhibicion = [];
  var peticion = $.ajax({
    url: 'services/filtroExhibicion.php',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'filtro': psFiltro
    },
    success: function(respuesta) {
      ListaExhibicion = respuesta;
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);
      ListaExhibicion = [];
    }
  });
  return ListaExhibicion;
}

function obtenerNombreExhibicionXId(pId) {
  var ListaExhibicion = [];
  var peticion = $.ajax({
    url: 'services/pa_nombre_exhibicion_x_id.php',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pid': pId
    },
    success: function(respuesta) {
      ListaExhibicion = respuesta;
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);
      ListaExhibicion = [];
    }
  });
  return ListaExhibicion;
}

function cancelarExhibicion2(pId) {
  var peticion = $.ajax({
    url: 'services/pa_cancelar_exhibicion.php',
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