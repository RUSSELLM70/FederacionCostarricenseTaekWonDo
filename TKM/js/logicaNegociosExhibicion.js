function agregarExhibicion(pExhibicionNuevo) {
  var peticion = $.ajax({
    url: 'services/pa_registrar_exhibicion.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pnombre': pExhibicionNuevo.sNombre,
      'pfecha_inicio': pExhibicionNuevo.sFechaInicio,
      'pfecha_fin': pExhibicionNuevo.sFechaFin,
      'pinvitado': pExhibicionNuevo.sInvitado,
      'pprecio_entrada': pExhibicionNuevo.nPrecioEntradas,
      'pestado': pExhibicionNuevo.nEstado
    },
      success: function(respuesta) {
        alertify.success("Su registro se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}

function getListaExhibicionAproximacion(psFiltro) {
  var aListaExhibicion = [];
  var peticion = $.ajax({
    url: 'services/pa_filtrar_aproximacion_exhibicion.php',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'filtro': psFiltro
    },    
    success: function(respuesta) {

      aListaExhibicion = respuesta;
    },
    error: function(request, error) {

      aListaExhibicion = [];
    }
  });
  return aListaExhibicion;
}

function actualizarExhibicion(pExhibicionNueva) {
  var peticion = $.ajax({
    url: 'services/modificar_exhibicion.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pnombre': pExhibicionNueva.sNombre,
      'pfecha_inicio': pExhibicionNueva.sFechaInicio,
      'pfecha_fin': pExhibicionNueva.sFechaFin,
      'pinvitado': pExhibicionNueva.sInvitado,
      'pprecio_entrada': pExhibicionNueva.nPrecioEntradas,
      'pid': pExhibicionNueva.nId

    },
    success: function(respuesta) {
      alertify.success("Su modificacion se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}