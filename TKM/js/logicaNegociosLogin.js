function verificarUsuario(paUsuario){
  var responde = [];
  var peticion = $.ajax({
      url: "services/validarLogin.php",
      type: "post",
      data: {
        'pUsuario': paUsuario.sUsuario,
        'pContrasenna': paUsuario.sContrasenna
      },
      contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
      dataType: 'json',
      async:false,

      success: function(respuesta){
        responde = respuesta;
      },
      error: function(request, error) {
        console.log(error);
      }
  });
  return responde;
}
