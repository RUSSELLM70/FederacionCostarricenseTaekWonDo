function verificarSesion() {
  var responde = [];
  var peticion = $.ajax({
    url: "services/validarSesion.php",
    type: "get",
    data: {},
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {
      responde = respuesta;
    },
    error: function(request, error) {
      console.log(error);
    }
  });
  return responde;
}

function destruirSesion() {
  var peticion = $.ajax({
    url: "services/logout.php",
    type: "get",
    data: {},
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

    },
    error: function(request, error) {}
  });
}
