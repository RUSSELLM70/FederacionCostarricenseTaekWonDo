/*********************************************************************/
/*******************LOGICA DE LOS USUARIOS****************************/
/*********************************************************************/

function agregarUsuario(pUsuarioNuevo) {
  var listaUsuarios = getListaUsuarios();
  listaUsuarios.push(pUsuarioNuevo);
  localStorage.setItem('listaUsuariosLS', JSON.stringify(listaUsuarios));
}

function getListaUsuarios() {
  var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));
  if (listaUsuarios == null) {
    listaUsuarios = [];
  }
  return listaUsuarios;
}

function activarSessionUsuario(pUsuarioSession) {
  var sessionUsuario = JSON.parse(sessionStorage.getItem('sessionUsuario'));
  if (sessionStorage == null) {
    sessionStorage.setItem('sessionUsuario', JSON.stringify(pUsuarioSession));
  } else {
    // en caso que exista la limpio y vuelvo a ingresar una nueva, se puede realizar varias modificaciones aqui
    sessionStorage.clear();
    sessionStorage.setItem('sessionUsuario', JSON.stringify(pUsuarioSession));
  }
}

function verificarSessionActiva() {
  var sessionUsuario = JSON.parse(sessionStorage.getItem('sessionUsuario'));
  var aUsuario = {
    sCorreo: "",
    nRol: "",
    bEstado: false
  };
  if (sessionUsuario == null) {
    aUsuario.bEstado = false;
  } else {
    aUsuario.sCorreo = sessionUsuario.usuario;
    aUsuario.nRol = sessionUsuario.rol;
    aUsuario.bEstado = true;
  }
  return aUsuario;
}

function eliminarDatosSession() {
  sessionStorage.clear();
}
