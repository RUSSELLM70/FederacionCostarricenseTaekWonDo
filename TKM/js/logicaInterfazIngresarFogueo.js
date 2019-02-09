document.querySelector('#btnRegistrarFogueo').addEventListener('click', registrarFogueo);

function registrarFogueo() {
  if(validar()){
    var aFogueo = {
      sNombre: document.querySelector("#txtNombre").value,
      sFechaInicio: document.querySelector("#txtFechaInicio").value,
      sFechaFin: document.querySelector("#txtFechaFin").value,
      nPrecioEntradas: document.querySelector("#txtPrecioEntrada").value,
      nEstado: 1
    };
    agregarFogueo(aFogueo);
    limpiarCampos();
  }else {
    alertify.error("¡Se deben de llenar todos los campos o verificar los datos introducidos!");
  }

}

function limpiarCampos() {
  document.querySelector('#txtNombre').value = "";
  document.querySelector('#txtFechaInicio').value = "";
  document.querySelector('#txtFechaFin').value = "";
  document.querySelector('#txtPrecioEntrada').value = "";
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
  var inputFechaFin= document.querySelector('#txtFechaFin')

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
  if(expSoloNumeros.test(inputPrecioEntradas.value) == false || (inputPrecioEntradas.value == '')){
    bError = false;
    inputPrecioEntradas.classList.add('error');
    bError = false;
  }else{
    inputPrecioEntradas.classList.remove('error');
  }
   return bError;
}