document.querySelector('#btnRegistrarAcademia').addEventListener('click',obtenerDatosRegistro);
verificarModificar();

function obtenerDatosRegistro() {

if(validar()){

  var sNombre = '';
  var sCorreo = '';
  var sTelefono = '';
  var sDireccion = '';
  var infoAcademia = [];

  sNombre = document.querySelector('#txtNombre').value;
  sCorreo = document.querySelector('#txtCorreo').value;
  sTelefono = document.querySelector('#txtTelefono').value;
  sDireccion = document.querySelector('#txtDireccion').value;


  infoAcademia.push(sNombre,sTelefono,sCorreo,sDireccion);
  registrarAcademia(infoAcademia);

  alertify.success("Su registro se a realizado exitosamente");

limpiarCampos();
}else {
    alertify.error("Se deben de llenar todos los campos o Verificar datos introducidos!");
  }
 } 

function cargarDatosModificarAcademia(datos) {

  document.querySelector('#txtNombre').value = datos.nombre;
  document.querySelector('#txtCorreo').value = datos.correo;
  document.querySelector('#txtTelefono').value = datos.telefono;
  document.querySelector('#txtDireccion').value = datos.direccion;
  

  document.querySelector('#btnRegistrarAcademia').removeEventListener('click', obtenerDatosRegistro);
  document.querySelector('#btnRegistrarAcademia').addEventListener('click', modificarAcademia); // le agrego un nuevo evento con una nueva funcion llamada modificarAcademia
  var buttonRegistrar = document.querySelector('#btnRegistrarAcademia');
  var h2Titulo = document.querySelector('#h2Titulo'); //Aqui tomo los 2 bottones del registar (tiene como texto la informacion de registar y ....)
  buttonRegistrar.value = "Modificar"; // Aqui se modifica esa informacion por la de modificar, es decir para que sea consistente lo que dice la pagina con lo que va a hacer y el usuario no se confunda
  h2Titulo.innerHTML = "Modificar academia";
}

function modificarAcademia() {
  if (validar()) {
    var aAcademia = {
      sNombre: document.querySelector('#txtNombre').value,
      sCorreo: document.querySelector('#txtCorreo').value,
      sTelefono: document.querySelector('#txtTelefono').value,
      sDireccion: document.querySelector('#txtDireccion').value,
      nId: getParameterByName('id')
    };
    document.querySelector('#btnRegistrarAcademia').removeEventListener('click', modificarAcademia);
    document.querySelector('#btnRegistrarAcademia').addEventListener('click', obtenerDatosRegistro);
    actualizarAcademia(aAcademia);
    limpiarCampos();

  } else {
    alertify.error("¡Se deben de llenar todos los campos o verificar los datos introducidos!");
  }
}


function verificarModificar() {
  var ListaAcademia = obtenerListaAcademia(); //Aqui obtengo la lista de todas las academias anterior mente registradas
  var idObj = getParameterByName('id'); //Esto es una expresion regular, la uso para obtener el id (es un numero) para  verificar si me estan mandando un usuario que exita en la lista de academias del localstorage
  for (var i = 0; i < ListaAcademia.length; i++) { //Lo recorreo para verificar que exista, sino pues no modifica nada y puede registarar a un usuario
    if (ListaAcademia[i].id_academia == idObj) {
      cargarDatosModificarAcademia(ListaAcademia[i]); //si el dato es correcto lo envio por parametro para comenzar a editarlo
      break;
    }
  }
}


function limpiarCampos() {
  document.querySelector('#txtNombre').value = "";
  document.querySelector('#txtCorreo').value = "";
  document.querySelector('#txtTelefono').value = "";
  document.querySelector('#txtDireccion').value = "";
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
  var inputNombre = document.querySelector('#txtNombre');
  var inputCorreo = document.querySelector('#txtCorreo');
  var inputTelefono = document.querySelector('#txtTelefono');
  var inputDireccion = document.querySelector('#txtDireccion');

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

  if (expSoloNumeros.test(inputTelefono.value) == false) {
    bError = false;
    inputTelefono.classList.add('error');
  } else {
    inputTelefono.classList.remove('error');
  }

  if (isValidEmail(inputCorreo.value) == false) {
    inputCorreo.classList.add('error');
    bError = false;
  } else {
    inputCorreo.classList.remove('error');
  }

  if (inputDireccion.value == '') {
    inputDireccion.classList.add('error');
    bError = false;
  } else {
    inputDireccion.classList.remove('error');
  }
  return bError;
}