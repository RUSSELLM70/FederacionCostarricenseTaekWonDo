function obtenerListaFogueo() {
  var aListaFogueos = [];
  var peticion = $.ajax({
    url: "services/pa_listar_fogueo.php",
    type: "get",
    data: {

      //aqui se ponen los parametros que se envian al php
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaFogueos = respuesta;

    },
    error: function(request, error) {
      aListaFogueos = [];
    }
  });
  return aListaFogueos;
}

function getListaFogueosAproximacion(psFiltro) {
  var ListaFogueos = [];
  var peticion = $.ajax({
    url: 'services/pa_filtrar_aproximacion_fogueo.php',
      type: 'get',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'filtro': psFiltro
    },    
    success: function(respuesta) {
    
      ListaFogueos = respuesta;
    },
    error: function(request, error) {
    console.log(respuesta + 'error: ' + error);
      ListaFogueos = [];
    }
  });
  return ListaFogueos;
}

function cancelarFogueo2(pId) {
  var peticion = $.ajax({
    url: 'services/pa_cancelar_fogueo.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'id': pId,
    },
    success: function(respuesta) {
      console.log('Se registro satisfactoriamente');
      alertify.success("Fogueo Cancelado");
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}
