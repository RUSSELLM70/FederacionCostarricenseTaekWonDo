function agregarPatrocinador(pPatrocinadorNuevo) {
  var peticion = $.ajax({
    url: 'services/pa_registar_patrocinador.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pnombre_patrocinador': pPatrocinadorNuevo.sNombre,
      'pnombre_sociedad_anonima': pPatrocinadorNuevo.sNombreSociedadAnonima,
      'pcorreo': pPatrocinadorNuevo.sCorreoElectrónico,
      'ptipo_patrocinio': pPatrocinadorNuevo.sTipoDePatrocinio,
      'ptelefono': pPatrocinadorNuevo.nTelefon,
      'pmonto': pPatrocinadorNuevo.nMonto,
      'pdescripcion_producto': pPatrocinadorNuevo.sDescripcionProducto
    },
    success: function(respuesta) {
      alertify.success("Su registro se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}

function actualizarPatrocinador(pDatosPatrocinador) {
  var peticion = $.ajax({
    url: 'services/pa_modicar_patrocinador.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pnombre_patrocinador': pDatosPatrocinador.sNombre,
      'pnombre_sociedad_anonima': pDatosPatrocinador.sNombreSociedadAnonima,
      'pcorreo': pDatosPatrocinador.sCorreoElectrónico,
      'ptipo_patrocinio': pDatosPatrocinador.sTipoDePatrocinio,
      'ptelefono': pDatosPatrocinador.nTelefon,
      'pmonto': pDatosPatrocinador.nMonto,
      'pdescripcion_producto': pDatosPatrocinador.sDescripcionProducto,
      'pid': pDatosPatrocinador.id_patrocinador
    },
    success: function(respuesta) {
      alertify.success("Su modificación se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}

function getListaPatrocinadores() {
  var aListaPatrocinadores = [];
  var peticion = $.ajax({
    url: 'services/pa_listar_patrocinador.php',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {

    },
    success: function(respuesta) {
      aListaPatrocinadores = respuesta;
    },
    error: function(request, error) {
      aListaPatrocinadores = [];
    }
  });
  return aListaPatrocinadores;
}

function getListaPatrocinadoresAproximacion(psFiltro) {
  var aListaPatrocinadores = [];
  var peticion = $.ajax({
    url: 'services/pa_filtrar_aproximacion_patrocinador.php',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'filtro': psFiltro
    },
    success: function(respuesta) {

      aListaPatrocinadores = respuesta;
    },
    error: function(request, error) {

      aListaPatrocinadores = [];
    }
  });
  return aListaPatrocinadores;
}

function getDatosPatrocinadorPorId(pid) {
  var aListaPatrocinadores = [];
  var peticion = $.ajax({
    url: "services/pa_datos_patrocinador_por_id.php",
    type: "get",
    data: {
      'id': pid
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaPatrocinadores = respuesta;

    },
    error: function(request, error) {
      aListaPatrocinadores = [];
    }
  });
  return aListaPatrocinadores;
}

function activar(pId) {
  //alertify.success("Profesor activado exitosamente")
  var peticion = $.ajax({
    url: "services/pa_activar_patrocinador.php",
    type: "post",
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pid': pId
    },

    success: //function(respuesta){
      alertify.success("Patrocinador activado exitosamente"),
    //},
    error: function(request, error) {}
  });
}

function desactivar(pId) {
  var peticion = $.ajax({
    url: "services/pa_desactivar_patrocinador.php",
    type: "post",
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pid': pId
    },

    success: //function(respuesta){
      alertify.success("Patrocinador desactivado exitosamente"),
    //},
    error: function(request, error) {}
  });
}
