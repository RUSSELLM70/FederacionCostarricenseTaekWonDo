function obtenerListaOrganizaciones() {
  var aListaOrganizaciones = [];
  var peticion = $.ajax({
    url: "services/almacenar_listaOrg.php",
    type: "get",
    data: {


      //aqui se ponen los parametros que se envian al php
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaOrganizaciones = respuesta;

    },
    error: function(request, error) {
      aListaOrganizaciones = [];
    }
  });
  return aListaOrganizaciones;
}

function obtenerListaOrganizacionesAproximacion(psFiltro) {
  var listaOrg = [];
  var peticion = $.ajax({
    url: 'services/aproximacion_nombreOrg.php',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'filtro': psFiltro
    },
    success: function(respuesta) {
      listaOrg = respuesta;
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);
      listaOrg = [];
    }
  });
  return listaOrg;
}

function registrarOrg(pinfoOrg) {
  if (validar()) {
    var ListaOrganizaciones = obtenerListaOrganizaciones();

    var peticion = $.ajax({
      url: 'services/registrar_organizacion.php',
      type: 'post',
      contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
      dataType: 'json',
      async: false,
      data: {
        'pnombre': pinfoOrg[0],
        'ptipo': pinfoOrg[1],
        'pdireccion': pinfoOrg[2],
        'ptelefono': pinfoOrg[3],
        'pcorreo': pinfoOrg[4]

      },

      success: function(respuesta) {
        alertify.success("Su registro se a realizado exitosamente");
      },
      error: function(respuesta, error) {
        console.log(respuesta + 'error: ' + error);

      }
    });
  }
}

function actualizarpOrga(pOrgNuevo) {
  var peticion = $.ajax({
    url: 'services/modificar_organizacion.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pnombre': pOrgNuevo.sNombre,
      'ptipo': pOrgNuevo.sTipo,
      'pdireccion': pOrgNuevo.sDireccion,
      'ptelefono': pOrgNuevo.sTelefono,
      'pcorreo': pOrgNuevo.sCorreo,
      'pid': pOrgNuevo.nId


    },
    success: function(respuesta) {
      alertify.success("Su modificación se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}



function getDatosOrganizacionPorId(pid) {
  var aListaOrganizaciones = [];
  var peticion = $.ajax({
    url: "services/pa_datos_organizacion_por_id.php",
    type: "get",
    data: {
      'id': pid
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaOrganizaciones = respuesta;

    },
    error: function(request, error) {
      aListaOrganizaciones = [];
    }
  });
  return aListaOrganizaciones;
}



function activar(pId) {
  //alertify.success("Profesor activado exitosamente")
  var peticion = $.ajax({
    url: "services/pa_activar_organizacion.php",
    type: "post",
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pid': pId
    },

    success: //function(respuesta){
      alertify.success("Organización activada exitosamente"),
    //},
    error: function(request, error) {}
  });
}

function desactivar(pId) {
  var peticion = $.ajax({
    url: "services/pa_desactivar_organizacion.php",
    type: "post",
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pid': pId
    },

    success: //function(respuesta){
      alertify.success("Organización desactivada exitosamente"),
    //},
    error: function(request, error) {}
  });
}
