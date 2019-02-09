document.querySelector('#btnRegistrar').addEventListener('click', obtenerDatosRegistro);
verificarModificar();

function obtenerDatosRegistro() {
  if (validar()) {

    var sNombre = '';
    var sTipo = '';
    var sDireccion = '';
    var sTelefono = '';
    var sCorreo = '';
    var infoOrg = [];

    sNombre = document.querySelector('#txtNombreOrg').value;
    sTipo = document.querySelector('#txtTipo').value;
    sDireccion = document.querySelector('#txtDirec').value;
    sTelefono = document.querySelector('#txtTelef').value;
    sCorreo = document.querySelector('#txtCorreo').value;
    nEstado: 1

    infoOrg.push(sNombre, sTipo, sDireccion, sTelefono, sCorreo);
    registrarOrg(infoOrg);


    limpiarCampos();
  } else {
    alertify.error("Se deben de llenar todos los campos o Verificar datos introducidos!");
  }


}

function cargarDatosModificarOrganizacion(datos) {

  document.querySelector('#txtNombreOrg').value = datos.nombre;
  document.querySelector('#txtTipo').value = datos.tipo;
  document.querySelector('#txtTelef').value = datos.telefono;
  document.querySelector('#txtCorreo').value = datos.correo;
  document.querySelector('#txtDirec').value = datos.direccion;

  document.querySelector('#btnRegistrar').removeEventListener('click', obtenerDatosRegistro);
  document.querySelector('#btnRegistrar').addEventListener('click', modificarOrganizaciones); // le agrego un nuevo evento con una nueva funcion llamada modificarAcademia
  var buttonRegistrar = document.querySelector('#btnRegistrar');
  var h2Titulo = document.querySelector('#h2Titulo'); //Aqui tomo los 2 bottones del registar (tiene como texto la informacion de registar y ....)
  buttonRegistrar.value = "Modificar"; // Aqui se modifica esa informacion por la de modificar, es decir para que sea consistente lo que dice la pagina con lo que va a hacer y el usuario no se confunda
  h2Titulo.innerHTML = "Modificar organizacion";

}

function modificarOrganizaciones() {
  if (validar()) {
    var aOrg = {
      sNombre: document.querySelector('#txtNombreOrg').value,
      sTipo: document.querySelector('#txtTipo').value,
      sTelefono: document.querySelector('#txtTelef').value,
      sCorreo: document.querySelector('#txtCorreo').value,
      sDireccion: document.querySelector('#txtDirec').value,
      nId: getParameterByName('id')
    };
    document.querySelector('#btnRegistrar').removeEventListener('click', modificarOrganizaciones);
    document.querySelector('#btnRegistrar').addEventListener('click', obtenerDatosRegistro);
    actualizarpOrga(aOrg);
    limpiarCampos();

  } else {
    alertify.error("¡Se deben de llenar todos los campos o verificar los datos introducidos!");
  }
}

function verificarModificar() {
  var listaOrganizaciones = obtenerListaOrganizaciones(); //Aqui obtengo la lista de todas las academias anterior mente registradas
  var idObj = getParameterByName('id'); //Esto es una expresion regular, la uso para obtener el id (es un numero) para  verificar si me estan mandando un usuario que exita en la lista de academias del localstorage
  for (var i = 0; i < listaOrganizaciones.length; i++) { //Lo recorreo para verificar que exista, sino pues no modifica nada y puede registarar a un usuario
    if (listaOrganizaciones[i].id_organizacion == idObj) {
      cargarDatosModificarOrganizacion(listaOrganizaciones[i]); //si el dato es correcto lo envio por parametro para comenzar a editarlo
      break;
    }
  }
}


function limpiarCampos() {
  document.querySelector('#txtNombreOrg').value = "";
  document.querySelector('#txtTipo').value = "";
  document.querySelector('#txtTelef').value = "";
  document.querySelector('#txtCorreo').value = "";
  document.querySelector('#txtDirec').value = "";
  // document.querySelector('#txtID').value = "";
}

function isValidEmail(mail) {
  return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
}


function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function validar() {
  var bError = true;
  var expSoloNumeros = new RegExp('[0-9]');
  var expAlfaNumerico = new RegExp('[a-zA-Z0-9_]');
  var aElementosInput = [];
  aElementosInput = document.querySelectorAll('input[type=text],input[type=number]');
  var inputNombre = document.querySelector('#txtNombreOrg');
  var inputTipo = document.querySelector('#txtTipo');
  var inputCorreo = document.querySelector('#txtCorreo');
  var inputTlef = document.querySelector('#txtTelef');
  var inputDirec = document.querySelector('#txtDirec');

  //For que valida los campos input numericos y texto
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

  if (inputTipo.value == '') {
    inputTipo.classList.add('error');
    bError = false;
  } else {
    inputTipo.classList.remove('error');
  }

  if (expSoloNumeros.test(inputTlef.value) == false) {
    bError = false;
    inputTlef.classList.add('error');
  } else {
    inputTlef.classList.remove('error');
  }

  if (isValidEmail(inputCorreo.value) == false) {
    bError = false;
    inputCorreo.classList.add('error');
  } else {
    inputCorreo.classList.remove('error');
  }

  if (expAlfaNumerico.test(inputDirec.value) == false) {
    bError = false;
    inputDirec.classList.add('error');
  } else {
    inputDirec.classList.remove('error');
  }




  return bError;
}
