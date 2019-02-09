document.querySelector('#btnIngresar').addEventListener('click', ingresar);
verificarParametro();

function ingresar() {
  var aUsuario = {
    sUsuario: document.querySelector('#txtUsuario').value,
    sContrasenna: document.querySelector('#txtContrasenna').value
  };
  iniciarSesion(verificarUsuario(aUsuario));
}

function iniciarSesion(pEstado) {
  switch (pEstado) {
    case 1:
      window.location = "homeAdministrador.html"; //Aqui ponemos la pagina index
      break;

    case -1:
      alertify.error("Usuario o ontraseña incorrectos");
      break;

    case 0:
      alertify.error("No puede ingresar, contacte administrador");
      break;

    default:
      alertify.error("Algo salió mal. Contacte administrador");
      break;
  }
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function verificarParametro() {
  // if (getParameterByName('id') == -1) { //Si es -1 es porque es redirigida desde otra pagina y el validarSesion detecto que aun no habia iniciado sesion
  //   alertify.error("Primero debe iniciar sesion");
  // }
  if (getParameterByName('id') == -2) { //si es 0 es porque esta intentando acceder a una pagina donde no tiene permisos
    alertify.error("¡No tiene permisos para ingresar a esa página!");
  }
}
