construirPagina(verificarSesion());
document.querySelector('#btnModificarPerfil').addEventListener('click', habilitarModificarPerfil);
document.querySelector('#btnEnviarModificarPerfil').addEventListener('click', enviarModificacionesPerfil);
document.querySelector('.menuSesion').addEventListener('click', cerrarSesion);
function habilitarModificarPerfil() {
  var pUsuario = verificarSesion();
  var lblNombre = document.querySelector('#lblNombre');
  // var lblNombre2 = document.querySelector('#lblNombre2');
  var lblPrimerApellido = document.querySelector('#lblPrimerApellido');
  // var lblSegundoApellido = document.querySelector('#lblSegundoApellido');
  var lblCedula = document.querySelector('#lblCedula');
  var lblCorreo = document.querySelector('#lblCorreo');
  var lblTelefono = document.querySelector('#lblTelefono');
  var btnNombre = document.querySelector('#btnNombre');
  // var btnNombre2 = document.querySelector('#btnNombre2');
  var btnPrimerApellido = document.querySelector('#btnPrimerApellido');
  // var btnSegundoApellido = document.querySelector('#btnSegundoApellido');
  var btnCedula = document.querySelector('#btnCedula');
  var btnCorreo = document.querySelector('#btnCorreo');
  var btnTelefono = document.querySelector('#btnTelefono');
  var btnEnviarModificarPerfil = document.querySelector('#btnEnviarModificarPerfil');
  var btnModificarPerfil = document.querySelector('#btnModificarPerfil');

  lblNombre.classList.add("hidden");
  //lblNombre2.classList.add("hidden");
  lblPrimerApellido.classList.add("hidden");
  //lblSegundoApellido.classList.add("hidden");
  lblCedula.classList.add("hidden");
  lblCorreo.classList.add("hidden");
  lblTelefono.classList.add("hidden");
  btnNombre.classList.remove("hidden");
  //btnNombre2.classList.remove("hidden");
  btnPrimerApellido.classList.remove("hidden");
  //btnSegundoApellido.classList.remove("hidden");
  btnCedula.classList.remove("hidden");
  btnCorreo.classList.remove("hidden");
  btnTelefono.classList.remove("hidden");
  btnEnviarModificarPerfil.classList.remove("hidden");
  btnModificarPerfil.classList.add("hidden");
  btnNombre.value = pUsuario.nombre;
 // btnNombre2.value = pUsuario.nombre2;
  btnPrimerApellido.value = pUsuario.apellido1;
 // btnSegundoApellido.value = pUsuario.apellido2;
  btnCedula.value = pUsuario.cedula;
  btnCorreo.value = pUsuario.correo;
  btnTelefono.value = pUsuario.telefono;
}

function enviarModificacionesPerfil() {
  var pUsuario = verificarSesion();
  var lblNombre = document.querySelector('#lblNombre');
  //var lblNombre2 = document.querySelector('#lblNombre2');
  var lblPrimerApellido = document.querySelector('#lblPrimerApellido');
 // var lblSegundoApellido = document.querySelector('#lblSegundoApellido');
  var lblCedula = document.querySelector('#lblCedula');
  var lblCorreo = document.querySelector('#lblCorreo');
  var lblTelefono = document.querySelector('#lblTelefono');
  var btnNombre = document.querySelector('#btnNombre');
  //var btnNombre2 = document.querySelector('#btnNombre2');
  var btnPrimerApellido = document.querySelector('#btnPrimerApellido');
 // var btnSegundoApellido = document.querySelector('#btnSegundoApellido');
  var btnCedula = document.querySelector('#btnCedula');
  var btnCorreo = document.querySelector('#btnCorreo');
  var btnTelefono = document.querySelector('#btnTelefono');
  var btnEnviarModificarPerfil = document.querySelector('#btnEnviarModificarPerfil');
  var btnModificarPerfil = document.querySelector('#btnModificarPerfil');
  var aUsuario = {
    sNombre: btnNombre.value,
    sNombre2: "brayan2",
    apellido1: btnPrimerApellido.value,
    apellido2: "Saborio",
    cedula: btnCedula.value,
    telefono: btnTelefono.value,
    pId: pUsuario.id_actor
  };
  actualizarAdmin(aUsuario);
  pUsuario = verificarSesion();
  llenarPerfil(pUsuario);
  btnNombre.classList.add("hidden");
 // btnNombre2.classList.add("hidden");
  btnPrimerApellido.classList.add("hidden");
  //btnSegundoApellido.classList.add("hidden");
  btnCedula.classList.add("hidden");
  btnCorreo.classList.add("hidden");
  btnTelefono.classList.add("hidden");
  lblNombre.classList.remove("hidden");
  //lblNombre2.classList.remove("hidden");
  lblPrimerApellido.classList.remove("hidden");
  //lblSegundoApellido.classList.remove("hidden");
  lblCedula.classList.remove("hidden");
  lblCorreo.classList.remove("hidden");
  lblTelefono.classList.remove("hidden");
  btnEnviarModificarPerfil.classList.remove("hidden");
  btnModificarPerfil.classList.add("hidden");

}

function construirPagina(pUsuario) {
  switch (pUsuario.id_rol) {
    case -1:
      destruirSesion();
      window.location = 'landingPage.html?id' + '=' + -1;
      break;
    case 0:
      llenarPerfil(pUsuario);
      document.querySelector('#lblNombre').readOnly = false;
      break;
    case 1:
      break;
    case 2:
      destruirSesion();
      window.location = 'landingPage.html?id' + '=' + -2;
      break;
    case 3:
      destruirSesion();
      window.location = 'landingPage.html?id' + '=' + -2;
      break;
  }
}

function llenarPerfil(pUsuario) {
  var nombre = document.querySelector('#lblNombre');
  nombre.innerHTML = '';
  nombre.innerHTML = pUsuario.nombre;

  // var nombre2 = document.querySelector('#lblNombre2');
  // nombre2.innerHTML = '';
  // nombre2.innerHTML = pUsuario.nombre2;

  var apellido1 = document.querySelector('#lblPrimerApellido');
  apellido1.innerHTML = '';
  apellido1.innerHTML = pUsuario.apellido1;

  // var apellido2 = document.querySelector('#lblSegundoApellido');
  // apellido2.innerHTML = '';
  // apellido2.innerHTML = pUsuario.apellido2;

  var cedula = document.querySelector('#lblCedula');
  cedula.innerHTML = '';
  cedula.innerHTML = pUsuario.cedula;

  var correo = document.querySelector('#lblCorreo');
  correo.innerHTML = '';
  correo.innerHTML = pUsuario.correo;

  var telefono = document.querySelector('#lblTelefono');
  telefono.innerHTML = '';
  telefono.innerHTML = pUsuario.telefono;

  var admin = document.querySelector('#lblAdmin');
  admin.innerHTML = '';
  admin.innerHTML = pUsuario.nombre;

}
function cerrarSesion() {
  destruirSesion();
}
