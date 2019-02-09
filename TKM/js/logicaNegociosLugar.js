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
  if (validar()) {
    var ListaLugares = obtenerListaLugares();
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
        'ptelefono': pinfoLug[3],
        'pcorreo': pinfoLug[4],
        'pdireccion': pinfoLug[5],
        'pcx': pinfoLug[6],
        'pcy': pinfoLug[7],

        // 'pestado': pinfoLug[8],




      },
      success: function(respuesta) {
        console.log('Se registro satisfactoriamente');
      },
      error: function(respuesta, error) {
        console.log(respuesta + 'error: ' + error);

      }
    });
  }
}

function actualizarLugares(pLugNuevo) {
  var peticion = $.ajax({
    url: 'services/modificar_lugar.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pnombre_lugar': pLugNuevo.sNombreLug,
      'pnombre_encargado': pLugNuevo.sNombreEncarg,
      'pcapacidad': pLugNuevo.sCapacidad,
      'pdireccion': pLugNuevo.sDireccion,
      'ptelefono': pLugNuevo.sTelefono,
      'pcorreo': pLugNuevo.sCorreo,

      'pcx':pLugNuevo.sCordenadaX,
      'pcy':pLugNuevo.sCordenadaY,
      'pid': pLugNuevo.nId,
    


    },
    success: function(respuesta) {
      alertify.success("Su modificación se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}


// function getDatosOrganizacionPorId(pid) {
//   var aListaOrganizaciones = [];
//   var peticion = $.ajax({
//     url: "services/pa_datos_organizacion_por_id.php",
//     type: "get",
//     data: {
//       'id': pid
//     },
//     contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
//     dataType: 'json',
//     async: false,
//
//     success: function(respuesta) {
//
//       aListaOrganizaciones = respuesta;
//
//     },
//     error: function(request, error) {
//       aListaOrganizaciones = [];
//     }
//   });
//   return aListaOrganizaciones;
// }
//



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
