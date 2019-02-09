document.querySelector('#btnRegistraLug').addEventListener('click', obtenerDatosRegistro);
verificarModificar();

function obtenerDatosRegistro() {
  if (validar()) {

    var sNombreLugar = '';
    var sNombreEncargado = '';
    var sCapacidad = '';
    var sCorreo = '';
    var sTelefono = '';
    var sDireccion = '';
    var infoLug = [];

    sNombreLugar = document.querySelector('#txtLugar').value;
    sNombreEncargado = document.querySelector('#txtNomEncar').value;
    sCapacidad = document.querySelector('#txtCapacid').value;
    sDireccion = document.querySelector('#txtDirec').value;
    sTelefono = document.querySelector('#txtTelef').value;
    sCorreo = document.querySelector('#txtCorreo').value;
    sCordenadaX = document.querySelector('#cx').value;
    sCordenadaY = document.querySelector('#cy').value;
    nEstado: 1



    infoLug.push(sNombreLugar, sNombreEncargado, sCapacidad, sDireccion,sTelefono ,sCorreo,sCordenadaX, sCordenadaY);



    registrarLug(infoLug);
    alertify.success("Su registro se a realizado exitosamente");
    limpiarCampos();
  } else {
    alertify.error("Se deben de llenar todos los campos o Verificar datos introducidos!");
  }
}

function cargarDatosModificarLugar(datos) {

  document.querySelector('#txtLugar').value = datos.nombre_lugar;
  document.querySelector('#txtNomEncar').value = datos.nombre_encargado;
  document.querySelector('#txtCapacid').value = datos.capacidad;
  document.querySelector('#txtDirec').value = datos.direccion;
  document.querySelector('#txtTelef').value = datos.telefono;
  document.querySelector('#txtCorreo').value = datos.correo;
  document.querySelector('#cx').value = datos.cx;
  document.querySelector('#cy').value = datos.cy;

  document.querySelector('#btnRegistraLug').removeEventListener("click", obtenerDatosRegistro);
  document.querySelector('#btnRegistraLug').addEventListener('click', modificarLugar);
  var buttonRegistrar = document.querySelector('#btnRegistraLug');
  var h2Titulo = document.querySelector('#h2Titulo'); //Aqui tomo los 2 bottones del registar (tiene como texto la informacion de registar y ....)
  buttonRegistrar.value = "Modificar"; // Aqui se modifica esa informacion por la de modificar, es decir para que sea consistente lo que dice la pagina con lo que va a hacer y el usuario no se confunda
  h2Titulo.innerHTML = "Modificar Lugar";


}

function modificarLugar() {

  if (validar()) {
    var aLug = {
      sNombreLug: document.querySelector('#txtLugar').value,
      sNombreEncarg: document.querySelector('#txtNomEncar').value,
      sDireccion: document.querySelector('#txtDirec').value,
      sCorreo: document.querySelector('#txtCorreo').value,
      sTelefono: document.querySelector('#txtTelef').value,
      sCapacidad: document.querySelector('#txtCapacid').value,
      sCordenadaX: document.querySelector('#cx').value,
      sCordenadaY:  document.querySelector('#cy').value,


      nId: getParameterByName('id')






    };
    document.querySelector('#btnRegistraLug').removeEventListener('click', modificarLugar);
    document.querySelector('#btnRegistraLug').addEventListener('click', obtenerDatosRegistro);

    actualizarLugares(aLug); // con esto envio al localstorage los nuevos datos para que los actualice
    limpiarCampos();

  } else {
    alertify.error("Se deben de llenar todos los campos o verificar los datos introducidos!");
  }


}

function verificarModificar() {
  var ListaLugares = obtenerListaLugares(); //Aqui obtengo la lista de todas las academias anterior mente registradas
  var idObj = getParameterByName('id'); //Esto es una expresion regular, la uso para obtener el id (es un numero) para  verificar si me estan mandando un usuario que exita en la lista de academias del localstorage
  for (var i = 0; i < ListaLugares.length; i++) { //Lo recorreo para verificar que exista, sino pues no modifica nada y puede registarar a un usuario
    if (ListaLugares[i].id_lugar == idObj) {
      cargarDatosModificarLugar(ListaLugares[i]); //si el dato es correcto lo envio por parametro para comenzar a editarlo
      break;
    }
  }
}

function limpiarCampos() {
  document.querySelector('#txtLugar').value = "";
  document.querySelector('#txtNomEncar').value = "";
  document.querySelector('#txtCapacid').value = "";
  document.querySelector('#txtCorreo').value = "";
  document.querySelector('#txtTelef').value = "";
  document.querySelector('#txtDirec').value = "";
  document.querySelector('#txtCorreo').value = "";;
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
  var inputNombreLug = document.querySelector('#txtLugar');
  var inputNombreEncarg = document.querySelector('#txtNomEncar');
  var inputCapacid = document.querySelector('#txtCapacid');
  var inputTlef = document.querySelector('#txtTelef');
  var inputDirec = document.querySelector('#txtDirec');
  var inputCorreo = document.querySelector('#txtCorreo');


  //For que valida los campos input numericos y texto

  if (isValidEmail(inputCorreo.value) == false) {
    bError = false;
    inputCorreo.classList.add('error');
  } else {
    inputCorreo.classList.remove('error');
  }
  if (inputNombreLug.value == '') {
    inputNombreLug.classList.add('error');
    bError = false;
  } else {
    inputNombreLug.classList.remove('error');
  }

  if (inputNombreEncarg.value == '') {
    inputNombreEncarg.classList.add('error');
    bError = false;
  } else {
    inputNombreEncarg.classList.remove('error');
  }



  if (expSoloNumeros.test(inputTlef.value) == false) {
    bError = false;
    inputTlef.classList.add('error');
  } else {
    inputTlef.classList.remove('error');
  }
  if (expSoloNumeros.test(inputCapacid.value) == false) {
    bError = false;
    inputCapacid.classList.add('error');
  } else {
    inputCapacid.classList.remove('error');
  }

  if (expAlfaNumerico.test(inputDirec.value) == false) {
    bError = false;
    inputDirec.classList.add('error');
  } else {
    inputDirec.classList.remove('error');
  }
  return bError;
}
