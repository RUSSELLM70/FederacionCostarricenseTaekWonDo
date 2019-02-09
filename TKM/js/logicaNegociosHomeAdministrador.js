function actualizarAdmin(pDatosAdmin) {
  var peticion = $.ajax({
    url: 'services/modificar_administrador.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pnombre': pDatosAdmin.sNombre,
      'pnombre2': pDatosAdmin.sNombre2,
      'papellido1': pDatosAdmin.apellido1,
      'papellido2': pDatosAdmin.apellido2,
      'pcedula': pDatosAdmin.cedula,
      'ptelefono': pDatosAdmin.telefono,
      'pid': pDatosAdmin.pId
    },
    success: function(respuesta) {
      alertify.success("Su modificacion se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}
