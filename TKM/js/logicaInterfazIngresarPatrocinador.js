document.querySelector('#btnRegistrarP').addEventListener('click', registrarPatrocinador);
verificarModificar();

function registrarPatrocinador() {
  if (validar()) {
    var aPatrocinador = {
      sNombre: document.querySelector('#txtNombre').value,
      sNombreSociedadAnonima: document.querySelector('#txtSocA').value,
      sCorreoElectrónico: document.querySelector('#txtCorreo').value,
      nTelefon: document.querySelector('#txtTel').value,
      sTipoDePatrocinio: document.querySelector('#sltTipo').value,
      //sTipoDeMoneda = document.querySelector('input[type=radio]:checked').value;
      sDescripcionProducto: document.querySelector('#txtDesc').value,
      nMonto: document.querySelector('#txtMonto').value,
      nEstado: 1
    };
    agregarPatrocinador(aPatrocinador);
    limpiarCampos();
  } else {
    alertify.error("¡Se deben de llenar todos los campos o verificar los datos introducidos!");
  }
}

function cargarDatosModificarPatrocinador(pDatosPatrocinador) {
  document.querySelector('#txtNombre').value = pDatosPatrocinador.nombre_patrocinador;
  document.querySelector('#txtSocA').value = pDatosPatrocinador.nombre_sociedad_anonima;
  document.querySelector('#txtCorreo').value = pDatosPatrocinador.correo;
  document.querySelector('#txtTel').value = pDatosPatrocinador.telefono;
  document.querySelector('#sltTipo').value = pDatosPatrocinador.tipo_patrocinio;
  //document.querySelector('#txtDireccion').value = datos.sTipoDeMoneda;
  document.querySelector('#txtDesc').value = pDatosPatrocinador.descripcion_producto;
  document.querySelector('#txtMonto').value = pDatosPatrocinador.monto;

  document.querySelector('#btnRegistrarP').removeEventListener("click", registrarPatrocinador);
  document.querySelector('#btnRegistrarP').addEventListener('click', modificarPatrocinador);
  var buttonRegistrar = document.querySelector('#btnRegistrarP');

  var h2Titulo = document.querySelector('#h2Titulo');
  buttonRegistrar.value = "Modificar";
  h2Titulo.innerHTML = "Modificar Registro";

}

function modificarPatrocinador() {
  if (validar()) {
    var aPatrocinador = {
      sNombre: document.querySelector('#txtNombre').value,
      sNombreSociedadAnonima: document.querySelector('#txtSocA').value,
      sCorreoElectrónico: document.querySelector('#txtCorreo').value,
      nTelefon: document.querySelector('#txtTel').value,
      sTipoDePatrocinio: document.querySelector('#sltTipo').value,
      sDescripcionProducto: document.querySelector('#txtDesc').value,
      nMonto: document.querySelector('#txtMonto').value,
      id_patrocinador: getParameterByName('id')
    };
    document.querySelector('#btnRegistrarP').removeEventListener("click", modificarPatrocinador);
    document.querySelector('#btnRegistrarP').addEventListener('click', registrarPatrocinador);
    actualizarPatrocinador(aPatrocinador);
    limpiarCampos();
  } else {
    alertify.error("¡Se deben de llenar todos los campos o verificar los datos introducidos!");
  }
}

function limpiarCampos() {
  document.querySelector('#txtNombre').value = "";
  document.querySelector('#txtSocA').value = "";
  document.querySelector('#txtCorreo').value = "";
  document.querySelector('#txtTel').value = "";
  document.querySelector('#sltTipo').value = "";
  document.querySelector('#txtDesc').value = "";
  document.querySelector('#txtMonto').value = "";
  document.querySelector('#txtID').value = "";
}

function verificarModificar() {
  var listaPatrocinadores = getListaPatrocinadores();
  var prueba = getParameterByName('id');
  for (var i = 0; i < listaPatrocinadores.length; i++) {
    if (listaPatrocinadores[i].id_patrocinador == prueba) {
      cargarDatosModificarPatrocinador(listaPatrocinadores[i]);
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
  var inputNombre = document.querySelector('#txtNombre')
  var inputSocAnon = document.querySelector('#txtSocA')
  var inputCorreo = document.querySelector('#txtCorreo')
  var inputTel = document.querySelector('#txtTel')
  var inputTipo = document.querySelector('#sltTipo')
  var inputDesc = document.querySelector('#txtDesc')
  var inputMonto = document.querySelector('#txtMonto')

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

  if (inputNombre.value == '') {
    inputNombre.classList.add('error');
    bError = false;
  } else {
    inputNombre.classList.remove('error');
  }

  if (inputSocAnon.value == '') {
    inputSocAnon.classList.add('error');
    bError = false;
  } else {
    inputSocAnon.classList.remove('error');
  }

  if (inputCorreo.value == '') {
    inputCorreo.classList.add('error');
    bError = false;
  } else {
    inputCorreo.classList.remove('error');
  }

  if (inputTel.value == '') {
    inputTel.classList.add('error');
    bError = false;
  } else {
    inputTel.classList.remove('error');
  }


  if (inputTipo.value == '') {
    inputTipo.classList.add('error');
    bError = false;
  } else {
    inputTipo.classList.remove('error');
  }

  if (inputDesc.value == '') {
    inputDesc.classList.add('error');
    bError = false;
  } else {
    inputDesc.classList.remove('error');
  }

  if (inputMonto.value == '') {
    inputMonto.classList.add('error');
    bError = false;
  } else {
    inputMonto.classList.remove('error');
  }
  return bError;
}
