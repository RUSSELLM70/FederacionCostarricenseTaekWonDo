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
  var listaActores = [];
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
      listaActores = respuesta;
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);
      listaActores = [];
    }
  });
  return listaActores;
}

function registrarOrg(pinfoOrg) {
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
      console.log('Se registro satisfactoriamente');
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
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
