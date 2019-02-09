function agregarFogueo(pFogueoNuevo) {
  var peticion = $.ajax({
    url: 'services/pa_registrar_fogueo.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pnombre': pFogueoNuevo.sNombre,
      'pfecha_inicio': pFogueoNuevo.sFechaInicio,
      'pfecha_fin': pFogueoNuevo.sFechaFin,
      'pprecio_entrada': pFogueoNuevo.nPrecioEntradas,
      'pestado' : pFogueoNuevo.nEstado
    },
      success: function(respuesta) {
        alertify.success("Su registro se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}



function obtenerNombreFogueoXId(pId) {
  var aListaFogueos = [];
  var peticion = $.ajax({
    url: 'services/pa_nombre_fogueo_x_id.php',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pid': pId
    },
    success: function(respuesta) {
      aListaFogueos = respuesta;
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);
      aListaFogueos = [];
    }
  });
  return aListaFogueos;
}

function actualizarFogueo(pFogueoNueva) {
  var peticion = $.ajax({
    url: 'services/pa_modificar_fogueo.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pnombre': pFogueoNueva.sNombre,
      'pfecha_inicio': pFogueoNueva.sFechaInicio,
      'pfecha_fin': pFogueoNueva.sFechaFin,
      'pinvitado': pFogueoNueva.sInvitado,
      'pprecio_entrada': pFogueoNueva.nPrecioEntradas,
      'pestado': pFogueoNueva.nEstado,
      'pid': pFogueoNueva.nId

    },
    success: function(respuesta) {
      alertify.success("Su modificacion se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}