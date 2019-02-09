document.querySelector('#btnRegistrarAsistente').addEventListener('click', registrarAsistente);
verificarModificar();

function registrarAsistente() {
  if (validar()) {
    var aAsistente = {
      sCedula: document.querySelector('#txtCedulaAsistente').value,
      sNombre: document.querySelector('#txtNombreAsistente').value,
      sApellido1: document.querySelector('#txtApellidoUnoAsistente').value,
      sApellido2: document.querySelector('#txtApellidoDosAsistente').value,
      sCorreo: document.querySelector('#txtCorreoAsistente').value,
      sTelefono: document.querySelector('#txtTelefonoAsistente').value,
      sGenero: document.querySelector('#sltGenero').value,
      sFecha: document.querySelector('#txtFechaAsistente').value,
      nEstado: 1
    };
    agregarAsistente(aAsistente);
    limpiarCampos();
  } else {
    alertify.error("Se deben de llenar todos los campos o verificar los datos introducidos");
  }
}


function cargarDatosModificarAsistente(pDatosAsistente) {
  document.querySelector('#txtCedulaAsistente').value = pDatosAsistente.cedula;
  document.querySelector('#txtNombreAsistente').value = pDatosAsistente.nombre;
  document.querySelector('#txtApellidoUnoAsistente').value = pDatosAsistente.apellido1;
  document.querySelector('#txtApellidoDosAsistente').value = pDatosAsistente.apellido2;
  document.querySelector('#txtCorreoAsistente').value = pDatosAsistente.correo;
  document.querySelector('#txtTelefonoAsistente').value = pDatosAsistente.telefono;
  document.querySelector('#sltGenero').value = pDatosAsistente.genero;
  document.querySelector('#txtFechaAsistente').value = pDatosAsistente.fecha_nacimiento;

  document.querySelector('#btnRegistrarAsistente').removeEventListener("click", registrarAsistente);
  document.querySelector('#btnRegistrarAsistente').addEventListener('click', modificarAsistente);
  var buttonRegistrar = document.querySelector('#btnRegistrarAsistente');

  var h2Titulo = document.querySelector('#h2Titulo');
  buttonRegistrar.value = "Modificar";
  h2Titulo.innerHTML = "Modificar Asistente";
}


function modificarAsistente() {
  if (validar()) {
    var aAsistente = {
      sCedula: document.querySelector('#txtCedulaAsistente').value,
      sNombre: document.querySelector('#txtNombreAsistente').value,
      sApellido1: document.querySelector('#txtApellidoUnoAsistente').value,
      sApellido2: document.querySelector('#txtApellidoDosAsistente').value,
      sCorreo: document.querySelector('#txtCorreoAsistente').value,
      sTelefono: document.querySelector('#txtTelefonoAsistente').value,
      sGenero: document.querySelector('#sltGenero').value,
      sFecha: document.querySelector('#txtFechaAsistente').value,
      id_asistente: getParameterByName('id')
    };
    document.querySelector('#btnRegistrarAsistente').removeEventListener("click", modificarAsistente);
    document.querySelector('#btnRegistrarAsistente').addEventListener('click', registrarAsistente);
    actualizarAsistente(aAsistente);
    limpiarCampos();

  } else {
    alertify.error("Se deben de llenar todos los campos o verificar los datos introducidos");
  }
}

function limpiarCampos() {
  document.querySelector('#txtCedulaAsistente').value = "";
  document.querySelector('#txtNombreAsistente').value = "";
  document.querySelector('#txtApellidoUnoAsistente').value = "";
  document.querySelector('#txtApellidoDosAsistente').value = "";
  document.querySelector('#txtCorreoAsistente').value = "";
  document.querySelector('#txtTelefonoAsistente').value = "";
  document.querySelector('#sltGenero').value = "";
  document.querySelector('#txtFechaAsistente').value = "";
}

function verificarModificar() {
  var listaAsistentes = getListaAsistentes();
  var prueba = getParameterByName('id');
  for (var i = 0; i < listaAsistentes.length; i++) {
    if (listaAsistentes[i].id_asistente == prueba) {
      cargarDatosModificarAsistente(listaAsistentes[i]);
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

function isValidEmail(mail) {
  return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
}

function validar() {
  var bError = true;
  var expSoloNumeros = new RegExp('[0-9]');
  var expAlfaNumerico = new RegExp('[a-zA-Z0-9_]');
  var aElementosInput = [];
  aElementosInput = document.querySelectorAll('input[type=text],input[type=number]');
  var inputCedula = document.querySelector('#txtCedulaAsistente');
  var inputNombre = document.querySelector('#txtNombreAsistente');
  var inputPrimerApi = document.querySelector('#txtApellidoUnoAsistente');
  var inputSegundoApi = document.querySelector('#txtApellidoDosAsistente');
  var inputCorreo = document.querySelector('#txtCorreoAsistente');
  var inputTelefono = document.querySelector('#txtTelefonoAsistente');
  var inputGenero = document.querySelector('#sltGenero');
  var inputFechaNacim = document.querySelector('#txtFechaAsistente')

  for (var i = 0; i < aElementosInput.length; i++) {
    if (aElementosInput[i].id !== 'txtID') {
      if (aElementosInput[i].value == '') {
        aElementosInput[i].classList.add('error');
        bError = false;
      } else {
        aElementosInput[i].classList.remove('error');

      }
    }
  }
  if (expSoloNumeros.test(inputCedula.value) == false) {
    bError = false;
    inputCedula.classList.add('error');
  } else {
    inputCedula.classList.remove('error');
  }

  if (inputNombre.value == '') {
    inputNombre.classList.add('error');
    bError = false;
  } else {
    inputNombre.classList.remove('error');
  }

  if (inputPrimerApi.value == '') {
    inputPrimerApi.classList.add('error');
    bError = false;
  } else {
    inputPrimerApi.classList.remove('error');
  }

  if (inputSegundoApi.value == '') {
    inputSegundoApi.classList.add('error');
    bError = false;
  } else {
    inputSegundoApi.classList.remove('error');
  }

  if (isValidEmail(inputCorreo.value) == false) {
    bError = false;
    inputCorreo.classList.add('error');
  } else {
    inputCorreo.classList.remove('error');
  }

  if (expSoloNumeros.test(inputTelefono.value) == false) {
    bError = false;
    inputTelefono.classList.add('error');
  } else {
    inputTelefono.classList.remove('error');
  }

  if (inputGenero.value == '') {
    inputGenero.classList.add('error');
    bError = false;
  } else {
    inputGenero.classList.remove('error');
  }

  if (inputFechaNacim.value == '') {
    inputFechaNacim.classList.add('error');
    bError = false;
  } else {
    inputFechaNacim.classList.remove('error');
  }
  return bError;
}
