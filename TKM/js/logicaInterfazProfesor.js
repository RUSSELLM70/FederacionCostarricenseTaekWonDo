construirPagina(verificarSesion());
document.querySelector('#btnRegistrarProfesor').addEventListener('click', registrarProfesor);
verificarModificar();
cargarAcademias();

function registrarProfesor() {
  if (validar()) {
    var aProfesor = {
      sAcademia: document.querySelector('#selectAcademia').value,
      sNombre1: document.querySelector('#txtNombre').value,
      sNombre2: document.querySelector('#txtNombre2').value,
      sApellido1: document.querySelector('#txtApellido1').value,
      sApellido2: document.querySelector('#txtApellido2').value,
      sTelefono: document.querySelector('#txtTelefono').value,
      sCedula: document.querySelector('#txtCedula').value,
      sCorreo: document.querySelector('#txtCorreo').value,
      sGenero: document.querySelector('#sltGenero').value,
      sFecha: document.querySelector('#txtFecha').value,
      nEstado: 1
    };
    agregarProfesor(aProfesor);
    var aUsuario = {
      sNombre: aProfesor.sNombre1,
      sCorreo: aProfesor.sCorreo,
      sContrasenna: "temporal",
      nEstado: 1,
      nRol: 2
    };
    agregarUsuario(aUsuario);
    limpiarCampos();
  } else {
    alertify.error("¡Se deben de llenar todos los campos o verificar los datos introducidos!");
  }

}

function cargarDatosModificarProfesor(pDatosProfesor) {
  //cargarAcademias();
  //document.querySelector('#txtAcademia').value = pDatosProfesor.id_academia;
  document.querySelector('#txtNombre').value = pDatosProfesor.nombre1;
  document.querySelector('#txtNombre2').value = pDatosProfesor.nombre2;
  document.querySelector('#txtApellido1').value = pDatosProfesor.apellido1;
  document.querySelector('#txtApellido2').value = pDatosProfesor.apellido2;
  document.querySelector('#txtTelefono').value = pDatosProfesor.cedula;
  document.querySelector('#txtCedula').value = pDatosProfesor.telefono;
  document.querySelector('#txtCorreo').value = pDatosProfesor.correo;
  document.querySelector('#sltGenero').value = pDatosProfesor.genero;
  document.querySelector('#txtFecha').value = pDatosProfesor.fecha;

  document.querySelector('#btnRegistrarProfesor').removeEventListener("click", registrarProfesor);
  document.querySelector('#btnRegistrarProfesor').addEventListener('click', modificarProfesor);
  var buttonRegistrar = document.querySelector('#btnRegistrarProfesor');

  var h2Titulo = document.querySelector('#h2Titulo');
  buttonRegistrar.value = "Modificar";
  h2Titulo.innerHTML = "Modificar Profesor";


}

function modificarProfesor() {
  if (validar()) {
    var aProfesor = {
      sAcademia: document.querySelector('#selectAcademia').value,
      sNombre1: document.querySelector('#txtNombre').value,
      sNombre2: document.querySelector('#txtNombre2').value,
      sApellido1: document.querySelector('#txtApellido1').value,
      sApellido2: document.querySelector('#txtApellido2').value,
      sTelefono: document.querySelector('#txtTelefono').value,
      sCedula: document.querySelector('#txtCedula').value,
      sCorreo: document.querySelector('#txtCorreo').value,
      sGenero: document.querySelector('#sltGenero').value,
      sFecha: document.querySelector('#txtFecha').value,
      id_profesor: getParameterByName('id')
    };
    document.querySelector('#btnRegistrarProfesor').removeEventListener("click", modificarProfesor);
    document.querySelector('#btnRegistrarProfesor').addEventListener('click', registrarProfesor);
    actualizarProfesor(aProfesor);
    limpiarCampos();

  } else {
    alertify.error("¡Se deben de llenar todos los campos o verificar los datos introducidos!");
  }
}

function limpiarCampos() {
  //document.querySelector('#txtAcademia').value = "";
  document.querySelector('#selectAcademia').value = "";
  document.querySelector('#txtNombre').value = "";
  document.querySelector('#txtNombre2').value = "";
  document.querySelector('#txtApellido1').value = "";
  document.querySelector('#txtApellido2').value = "";
  document.querySelector('#txtTelefono').value = "";
  document.querySelector('#txtCedula').value = "";
  document.querySelector('#txtCorreo').value = "";
  document.querySelector('#sltGenero').value = "";
  document.querySelector('#txtFecha').value = "";
}

function verificarModificar() {
  var listaProfesores = getListaProfesores(); //Aqui obtengo la lista de todas las academias anterior mente registradas
  var prueba = getParameterByName('id'); //Esto es una expresion regular, la uso para obtener el id (es un numero) para  verificar si me estan mandando un usuario que exita en la lista de academias del localstorage
  for (var i = 0; i < listaProfesores.length; i++) { //Lo recorreo para verificar que exista, sino pues no modifica nada y puede registarar a un usuario
    if (listaProfesores[i].id_profesor == prueba) {
      cargarDatosModificarProfesor(listaProfesores[i]); //si el dato es correcto lo envio por parametro para comenzar a editarlo
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
  var inputAcademia = document.querySelector('#selectAcademia')
  var inputNombre = document.querySelector('#txtNombre')
  var inputApellido1 = document.querySelector('#txtApellido1')
  var inputApellido2 = document.querySelector('#txtApellido2')
  var inputTelefono = document.querySelector('#txtTelefono')
  var inputCedula = document.querySelector('#txtCedula')
  var inputCorreo = document.querySelector('#txtCorreo')
  var inputGenero = document.querySelector('#sltGenero')
  var inputFecha = document.querySelector('#txtFecha')

  for (var i = 0; i < aElementosInput.length; i++) {
    if (aElementosInput[i].id !== 'txtNombre2') {
      if (aElementosInput[i].value == '') {
        aElementosInput[i].classList.add('error');
        bError = false;
      } else {
        aElementosInput[i].classList.remove('error');

      }
    }
  }

  if (inputAcademia.value == '') {
    inputAcademia.classList.add('error');
    bError = false;
  } else {
    inputAcademia.classList.remove('error');
  }

  if (inputNombre.value == '') {
    inputNombre.classList.add('error');
    bError = false;
  } else {
    inputNombre.classList.remove('error');
  }

  if (inputApellido1.value == '') {
    inputApellido1.classList.add('error');
    bError = false;
  } else {
    inputApellido1.classList.remove('error');
  }

  if (inputApellido2.value == '') {
    inputApellido2.classList.add('error');
    bError = false;
  } else {
    inputApellido2.classList.remove('error');
  }

  if (expSoloNumeros.test(inputTelefono.value) == false) {
    bError = false;
    inputTelefono.classList.add('error');
  } else {
    inputTelefono.classList.remove('error');
  }

  if (expSoloNumeros.test(inputCedula.value) == false) {
    bError = false;
    inputCedula.classList.add('error');
  } else {
    inputCedula.classList.remove('error');
  }

  if (isValidEmail(inputCorreo.value) == false) {
    bError = false;
    inputCorreo.classList.add('error');
  } else {
    inputCorreo.classList.remove('error');
  }
  var correo = verificarCorreoExistente(inputCorreo.value);
  if (correo == true) {
    bError = false;
    inputCorreo.classList.add('error');
  } else {
    inputCorreo.classList.remove('error');
  }

  if (inputGenero.value == '') {
    inputGenero.classList.add('error');
    bError = false;
  } else {
    inputGenero.classList.remove('error');
  }

  if (expSoloNumeros.test(inputFecha.value) == false) {
    bError = false;
    inputFecha.classList.add('error');
  } else {
    inputFecha.classList.remove('error');
  }
  return bError;
}

function cargarAcademias() {
  var idAcademiaProfesor = encontrarIdAcademiaProfesor();
  var listaLugares = getListarAcademias();
  var opcion = document.createElement("option");
  opcion.value = "";
  opcion.text = "Seleccione una Academia";
  selectAcademia.appendChild(opcion);
  for (var i = 0; i < listaLugares.length; i++) { //Recorre las veces como cantidad de lugares exitan en el lcoalsotage
    var opcion = document.createElement("option");
    opcion.value = listaLugares[i].id_academia;
    opcion.text = listaLugares[i].nombre;
    if (listaLugares[i].id_academia == idAcademiaProfesor) {
      opcion.setAttribute("selected", "true");
    }
    selectAcademia.appendChild(opcion); //Crea los option del selec con el nombre y codigo de los lugares previamente annadidos al localstorage
  }
}

function encontrarIdAcademiaProfesor() {
  var listaProfesores = getListaProfesores();
  var id = 0;
  for (var i = 0; i < listaProfesores.length; i++) {
    if (getParameterByName('id') == listaProfesores[i].id_profesor) {
      id = listaProfesores[i].id_academia;
      break;
    }
  }
  return id;
}

function construirPagina(pRol) {
  switch (pRol) {
    case -1:
      destruirSesion();
      window.location = 'login.html?id' + '=' + -1;
      break;
    case 0:
      break;
    case 1:
      break;
    case 2:
      destruirSesion();
      window.location = 'login.html?id' + '=' + -2;
      break;
    case 3:
      destruirSesion();
      window.location = 'login.html?id' + '=' + -2;
      break;
  }
}
