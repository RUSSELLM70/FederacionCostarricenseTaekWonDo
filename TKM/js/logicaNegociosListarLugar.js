function obtenerListaLugares() {
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

function obtenerListaLugaresAproximacion(psFiltro) {
  var ListaLugares = [];
  var peticion = $.ajax({
    url: 'services/aproximacion_nombreLug.php',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'filtro': psFiltro
    },
    success: function(respuesta) {
      ListaLugares = respuesta;
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);
      ListaLugares = [];
    }
  });
  return ListaLugares;
}

function registrarLug(pinfoLug) {
  var peticion = $.ajax({
    url: 'services/registrar_lugar.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pnombre_lugar': pinfoLug[0],
      'pnombre_encargado': pinfoLug[1],
      'pcapacidad': pinfoLug[2],
      'pdireccion': pinfoLug[3],
      'ptelefono': pinfoLug[4],
      'pcorreo': pinfoLug[5],


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
    url: "services/pa_activar_lugar.php",
    type: "post",
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pid': pId
    },

    success: //function(respuesta){
      alertify.success("Lugar activado exitosamente"),
    //},
    error: function(request, error) {}
  });
}

function desactivar(pId) {
  var peticion = $.ajax({
    url: "services/pa_desactivar_lugar.php",
    type: "post",
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pid': pId
    },

    success: //function(respuesta){
      alertify.success("Lugar desactivado exitosamente"),
    //},
    error: function(request, error) {}
  });
}
