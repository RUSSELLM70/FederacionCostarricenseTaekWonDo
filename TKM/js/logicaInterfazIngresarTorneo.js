construirPagina(verificarSesion());
document.querySelector('#btnRegistrarTorneo').addEventListener('click', registrarTorneo);
verificarModificar();

function registrarTorneo() {
  if (validar()) {
    var aTorneo = {
      sNombre: document.querySelector('#txtNombre').value,
      sFechaInicio: document.querySelector('#txtFechaInicio').value,
      sFechaFin: document.querySelector('#txtFechaFin').value,
      nPrecioEntrada: document.querySelector('#txtPrecioEntrada').value,
      nEstado: 1
    };
    agregarTorneo(aTorneo);
  } else {
    alertify.error("¡Se deben de llenar todos los campos o verificar los datos introducidos!");
  }

}


function validar() {
  var bError = true;
  var expSoloNumeros = new RegExp('[0-9]');
  var expAlfaNumerico = new RegExp('[a-zA-Z0-9_]');
  //var aElementosInput = [];
  //aElementosInput = document.querySelectorAll('input[type=text],input[type=number]');
  var inputNombre = document.querySelector('#txtNombre');
  var inputFechaInicio = document.querySelector('#txtFechaInicio');
  var inputFechaFin = document.querySelector('#txtFechaFin');

  var inputPrecio = document.querySelector('#txtPrecioEntrada');


  if (inputNombre.value == '') {
    inputNombre.classList.add('error');
    bError = false;
  } else {
    inputNombre.classList.remove('error');
  }

  if (inputFechaInicio.value == '') {
    inputFechaInicio.classList.add('error');
    bError = false;
  } else {
    inputFechaInicio.classList.remove('error');
  }

  if (inputFechaFin.value == '') {
    inputFechaFin.classList.add('error');
    bError = false;
  } else {
    inputFechaFin.classList.remove('error');
  }


  if (expSoloNumeros.test(inputPrecio.value) == false) {
    bError = false;
    inputPrecio.classList.add('error');
  } else {
    inputPrecio.classList.remove('error');
  }
  return bError;
}

function verificarModificar() {
  var listaTorneo = obtenerListaTorneo();
  var prueba = getParameterByName('id');
  for (var i = 0; i < listaTorneo.length; i++) {
    if (listaTorneo[i].id_torneo == prueba) {
      cargarDatosModificarTorneo(listaTorneo[i]);
      break;
    }
  }
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function cargarDatosModificarTorneo(pDatosTorneo) {

  document.querySelector('#txtNombre').value = pDatosTorneo.nombre;
  document.querySelector('#txtFechaInicio').value = pDatosTorneo.fecha_inicio;
  document.querySelector('#txtFechaFin').value = pDatosTorneo.fecha_fin;
  document.querySelector('#txtPrecioEntrada').value = pDatosTorneo.precio_entrada;


  document.querySelector('#btnRegistrarTorneo').removeEventListener('click', registrarTorneo);
  document.querySelector('#btnRegistrarTorneo').addEventListener('click', modificarTorneo); // le agrego un nuevo evento con una nueva funcion llamada modificarAcademia
  var buttonRegistrar = document.querySelector('#btnRegistrarTorneo');
  var h2Titulo = document.querySelector('#h2Titulo'); //Aqui tomo los 2 bottones del registar (tiene como texto la informacion de registar y ....)
  buttonRegistrar.value = "Modificar"; // Aqui se modifica esa informacion por la de modificar, es decir para que sea consistente lo que dice la pagina con lo que va a hacer y el usuario no se confunda
  h2Titulo.innerHTML = "Modificar Torneo";
}

function modificarTorneo() {
  if (validar()) {
    var aTorneo = {
      sNombre: document.querySelector('#txtNombre').value,
      sFechaInicio: document.querySelector('#txtFechaInicio').value,
      sFechaFin: document.querySelector('#txtFechaFin').value,
      nPrecioEntrada: document.querySelector('#txtPrecioEntrada').value,
      nId: getParameterByName('id')
    };
    actualizarTorneo(aTorneo);
    document.querySelector('#btnRegistrarTorneo').removeEventListener('click', modificarTorneo);
    document.querySelector('#btnRegistrarTorneo').addEventListener('click', registrarTorneo);
    limpiarCampos();
  } else {
    alertify.error("¡Se deben de llenar todos los campos o verificar los datos introducidos!");
  }

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