document.querySelector('#btnRegistrarExhibicion').addEventListener('click', registrarExhibicion);
verificarModificar();
function registrarExhibicion() {
  if(validar()){
    var aExhibicion = {
      sNombre: document.querySelector("#txtNombre").value,
      sFechaInicio: document.querySelector("#txtFechaInicio").value,
      sInvitado: document.querySelector('#txtInvitado').value,
      sFechaFin: document.querySelector("#txtFechaFin").value,
      nPrecioEntradas: document.querySelector("#txtPrecioEntrada").value,
      nEstado: 1
    };
    agregarExhibicion(aExhibicion);
    limpiarCampos();
  }else {
    alertify.error("¡Se deben de llenar todos los campos o verificar los datos introducidos!");
  }
}
function cargarDatosModificarExhibicion(pDatosExhibicion) {
      document.querySelector("#txtNombre").value = pDatosExhibicion.nombre;
      document.querySelector("#txtFechaInicio").value = pDatosExhibicion.fecha_inicio;
      document.querySelector('#txtInvitado').value = pDatosExhibicion.invitado;
      document.querySelector("#txtFechaFin").value = pDatosExhibicion.fecha_fin;
      document.querySelector("#txtPrecioEntrada").value = pDatosExhibicion.precio_entrada;

  document.querySelector('#btnRegistrarExhibicion').removeEventListener("click", registrarExhibicion);
  document.querySelector('#btnRegistrarExhibicion').addEventListener('click', modificarExhibicion);
  var buttonRegistrar = document.querySelector('#btnRegistrarExhibicion');

  var h2Titulo = document.querySelector('#h2Titulo');
  buttonRegistrar.value = "Modificar";
  h2Titulo.innerHTML = "Modificar exhibición";
}


function modificarExhibicion() {
  if (validar()) {
    var aExhibicion = {
      sNombre: document.querySelector("#txtNombre").value,
      sFechaInicio: document.querySelector("#txtFechaInicio").value,
      sInvitado: document.querySelector('#txtInvitado').value,
      sFechaFin: document.querySelector("#txtFechaFin").value,
      nPrecioEntradas: document.querySelector("#txtPrecioEntrada").value,
      nId: getParameterByName('id')
    };
    document.querySelector('#btnRegistrarExhibicion').removeEventListener("click", modificarExhibicion);
    document.querySelector('#btnRegistrarExhibicion').addEventListener('click', registrarExhibicion);
    actualizarExhibicion(aExhibicion);
    limpiarCampos();

  } else {
    alertify.error("Se deben de llenar todos los campos o verificar los datos introducidos");
  }
}
function limpiarCampos() {
  document.querySelector('#txtNombre').value = "";
  document.querySelector('#txtFechaInicio').value = "";
  document.querySelector('#txtInvitado').value="";
  document.querySelector('#txtFechaFin').value = "";
  document.querySelector('#txtPrecioEntrada').value = "";
}

function verificarModificar() {
  var listaExhibicion = getListaExhibicionAproximacion('');
  var prueba = getParameterByName('id');
  for (var i = 0; i < listaExhibicion.length; i++) {
    if (listaExhibicion[i].id_exhibicion == prueba) {
      cargarDatosModificarExhibicion(listaExhibicion[i]);
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

function validar(){
  var bError = true;
  var expSoloNumeros = new RegExp('[0-9]');
  var expAlfaNumerico = new RegExp('[a-zA-Z0-9_]');
  var aElementosInput = [];
  aElementosInput =  document.querySelectorAll('input[type=text],input[type=number]');
  var inputNombre= document.querySelector('#txtNombre');
  var inputPrecioEntradas= document.querySelector('#txtPrecioEntrada');
  var inputFechaInicio= document.querySelector('#txtFechaInicio');
  var inputFechaFin= document.querySelector('#txtFechaFin');
  var inputInvitado = document.querySelector('#txtInvitado');

  for(var i = 0; i < aElementosInput.length; i++){
    if(aElementosInput[i].id !== 'txtID'){
      if(aElementosInput[i].value == ''){
        aElementosInput[i].classList.add('error');
        bError = false;
      }else{
        aElementosInput[i].classList.remove('error');
      }
    }
  }

  if(inputNombre.value ==''){
    inputNombre.classList.add('error');
    bError = false;
  }else{
    inputNombre.classList.remove('error');
  }
  if(inputFechaInicio.value ==''){
    inputFechaInicio.classList.add('error');
    bError = false;

  }else{
    inputFechaInicio.classList.remove('error');
  }

  if(inputFechaFin.value ==''){
    inputFechaFin.classList.add('error');
    bError = false;
  }else{
    inputFechaFin.classList.remove('error');
  }

  if(inputInvitado.value ==''){
    inputInvitado.classList.add('error');
    bError = false;
  }else{
    inputInvitado.classList.remove('error');
  }

  if(expSoloNumeros.test(inputPrecioEntradas.value) == false || (inputPrecioEntradas.value == '')){
    bError = false;
    inputPrecioEntradas.classList.add('error');
    bError = false;
  }else{
    inputPrecioEntradas.classList.remove('error');
  }
   return bError;
}
