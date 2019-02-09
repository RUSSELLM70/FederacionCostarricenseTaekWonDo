function obtenerListaAcademia() {
  var aListaAcademia = [];
  var peticion = $.ajax({
    url: "services/listarAcademia.php",
    type: "get",
    data: {


      //aqui se ponen los parametros que se envian al php
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaAcademia = respuesta;

    },
    error: function(request, error) {
      aListaAcademia = [];
    }
  });
  return aListaAcademia;
}

function obtenerListaAcademiaAproximacion(psFiltro) {
  var ListaAcademia = [];
  var peticion = $.ajax({
    url: 'services/flitroAcademia.php',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'filtro': psFiltro
    },
    success: function(respuesta) {
      ListaAcademia = respuesta;
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);
      ListaAcademia = [];
    }
  });
  return ListaAcademia;
}

function registrarAcademia(pinfoAcademia) {

if(validar()){
   var ListaAcademia = obtenerListaAcademia();

  var peticion = $.ajax({
    url: 'services/registrar_academia1.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {

      'pnombre': pinfoAcademia[0],
      'pcorreo': pinfoAcademia[1],
      'ptelefono': pinfoAcademia[2],
      'pdireccion': pinfoAcademia[3]

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

function actualizarAcademia(pAcademiaNueva) {
  var peticion = $.ajax({
    url: 'services/modificarAcademia.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pnombre': pAcademiaNueva.sNombre,
      'pcorreo': pAcademiaNueva.sCorreo,
      'ptelefono': pAcademiaNueva.sTelefono,
      'pdireccion': pAcademiaNueva.sDireccion,
      'pid': pAcademiaNueva.nId

    },
    success: function(respuesta) {
      alertify.success("Su modificacion se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}

