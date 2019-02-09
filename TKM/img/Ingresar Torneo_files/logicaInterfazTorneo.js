// verificarModificar();

document.querySelector('#btnEvento').addEventListener('click', registrarTorneo);

function registrarTorneo() {


   var aTorneo = {
      // nCodigo: listaAcademias.length + 1, // crearle un index para saber que modificar
      sNombre: document.querySelector('#nomEvento').value,
      nPrecios: document.querySelector('#precioEntradas').value,
      // nFechaInicio: document.querySelector('#fechaInicio').value,
      // nFechaFin: document.querySelector('#fechaFin').value,
      // sLugarEvento: document.querySelector('#lugarTorneo').value,
      sOrganizacion: document.querySelector('#orgTorneo').value,
      sPatrocinadores: document.querySelector('#patrocinadorTorneo').value,
      nRol: 4
    };

  // var aUsuario = {
  //     sCorreo: aTorneo.sCorreo,
  //     sClave: "temporal",
  //     nRol: aTorneo.nRol,
  //   };
    // agregarUsuario(aUsuario);
    agregarTorneo(aTorneo);
    limpiarCampos();

}

  // } else {
  //   alert(resultado.sMensaje);
  // }

function verificarModificar() {
  var listaTorneo = getListaTorneo(); //Aqui obtengo la lista de todas las academias anterior mente registradas
  var prueba = getParameterByName('id'); //Esto es una expresion regular, la uso para obtener el id (es un numero) para  verificar si me estan mandando un usuario que exita en la lista de academias del localstorage
  for (var i = 0; i < listaTorneo.length; i++) { //Lo recorreo para verificar que exista, sino pues no modifica nada y puede registarar a un usuario
    if (listaTorneo[i].nNombre == prueba) {
      cargarDatosModificarTorneo(listaTorneo[i]); //si el dato es correcto lo envio por parametro para comenzar a editarlo
      break;
    }
  }
}

function cargarDatosModificarTorneo(datos) {
  document.querySelector('#btnEvento').removeEventListener("click", registrarTorneo); //Le quito el evento del botton para que no se dupliquen funciones
  document.querySelector('#btnEvento').addEventListener('click', modificarTorneo); // le agrego un nuevo evento con una nueva funcion llamada modificarAcademia
  var buttonRegistrar = document.querySelector('#btnEvento');
  var h2Titulo = document.querySelector('#h2Titulo'); //Aqui tomo los 2 bottones del registar (tiene como texto la informacion de registar y ....)
  buttonRegistrar.value = "Modificar"; // Aqui se modifica esa informacion por la de modificar, es decir para que sea consistente lo que dice la pagina con lo que va a hacer y el usuario no se confunda
  h2Titulo.innerHTML = "Modificar Registro";


  document.querySelector('#nomEvento').value = datos.sNombre; // con esto cargo los datos del usuario en los input, para que pueda ver que quiera cambiar
  document.querySelector('#precioEntradas').value = datos.nPrecioEntradas;
  document.querySelector('#fechaInicio').value = datos.nFechaInicio;
  document.querySelector('#fechaFin').value = datos.nFechaFin;
  // document.querySelector('#lugarTorneo').value = datos.sLugarEvento;
  document.querySelector('#orgTorneo').value = datos.sOrganizacion;
  document.querySelector('#sPatrocinadores').value = datos.patrocinadorTorneo;

}

function modificarTorneo() {
  var listaTorneo = getListaTorneo(); //Este es el evento neuvo del boton.
  for (var i = 0; i < listaTorneo.length; i++) {
    if (listaTorneo[i].nCodigo == document.querySelector('#nomEvento').value) { // lo que hace es buscar el indice y verificarlo con el valor de la tabla(esta tiene el nCodigo y no se muestra al usuario porq tiene un display:none ya que no debe ver esto)
      listaTorneo[i].sNombre = document.querySelector('#precioEntradas').value; // verificando el indice para modificar al objeto correcto
      listaTorneo[i].sTelefono = document.querySelector('#fechaInicio').value;
      listaTorneo[i].sCorreo = document.querySelector('#fechaFin').value;
      // listaTorneo[i].sDireccion = document.querySelector('#lugarTorneo').value;
      listaTorneo[i].sDireccion = document.querySelector('#orgTorneo').value;
      listaTorneo[i].sDireccion = document.querySelector('#sPatrocinadores').value;
      break;
    }
  }
  btnActualizarTorneo(listaTorneo); // con esto envio al localstorage los nuevos datos para que los actualice
  limpiarCampos(); //funcion para que los input no tengan texto una vez el usuario le de a modificar
  var buttonRegistrar = document.querySelector('#btnEvento'); //ahora tomo los botones nuevamente y los vuelvo a como estaban antes
  var h2Titulo = document.querySelector('#h2Titulo');
  buttonRegistrar.value = "Registrar";
  h2Titulo.innerHTML = "Registro de Torneos";
  document.querySelector('#btnEvento').removeEventListener("click", modificarTorneo); // remuevo el evento modificar y lo restauro a como estaba antes
  document.querySelector('#btnEvento').addEventListener('click', registrarTorneo);
}

//function ordenarAcademiasPorNombre() { ////////////////Omitase esto, es un idea en proceso.
//  var listaAcademias = getListaAcademias();
//  for (var i = 0; i < listaAcademias.length; i++) {
//    for (var j = 0; j < listaAcademias.length - 1; j++) {
//      var a = listaAcademias[j].sNombre;
//      var b = listaAcademias[j + 1].sNombre;
//      var n = a.localeCompare(b);
//      if (n == 1) { // b tiene que ir primero
//        var temp = listaAcademias[j];
//        listaAcademias[j] = listaAcademias[j + 1];
//        listaAcademias[j + 1] = temp;
//      }
//    }
//  }
//  actualizarAcademias(listaAcademias);
//  limpiarCampos();
//  mostrarAcademias();
//}

function limpiarCampos() {
  document.querySelector('#nomEvento').value = "";
  document.querySelector('#precioEntradas').value = "";
  document.querySelector('#fechaInicio').value = "";
  document.querySelector('#fechaFin').value = "";
  // document.querySelector('#lugarTorneo').value = "";
  document.querySelector('#orgTorneo').value = "";
  document.querySelector('#patrocinadorTorneo').value = "";
}


/*Si se retorna false, hay error, si es true todo esta correcto */
function validarCampos() {
  var resultado = {
    zValidacion: true,
    sMensaje: 'Correcto',
    zErrorOcurrido: false
  };
  if (resultado.zErrorOcurrido == false && document.querySelector('#nomEvento').value == '') {
    resultado.zValidacion = false;
    resultado.sMensaje = "El nombre no puede estar vacio";
    resultado.zErrorOcurrido = true;
  }
  if (resultado.zErrorOcurrido == false && document.querySelector('#precioEntradas').value == '') {
    resultado.zValidacion = false;
    resultado.sMensaje = "El precio no puede estar vacio";
    resultado.zErrorOcurrido = true;
  }
  if (resultado.zErrorOcurrido == false && document.querySelector('#fechaInicio').value == '') {
    resultado.zValidacion = false;
    resultado.sMensaje = "La fecha no puede estar vacio";
    resultado.zErrorOcurrido = true;
  }
  if (resultado.zErrorOcurrido == false && isValidEmail(document.querySelector('#lugarTorneo').value) == false) {
    resultado.zValidacion = false;
    resultado.sMensaje = "La fecha no puede estar vacio";
    resultado.zErrorOcurrido = true;
  }
  if (resultado.zErrorOcurrido == false && document.querySelector('#orgTorneo').value == '') {
    resultado.zValidacion = false;
    resultado.sMensaje = "la sOrganizacion no puede estar vacio";
    resultado.zErrorOcurrido = true;
  }
   if (resultado.zErrorOcurrido == false && document.querySelector('#patrocinadorTorneo').value == '') {
    resultado.zValidacion = false;
    resultado.sMensaje = "el patrocinador no puede estar vacio";
    resultado.zErrorOcurrido = true;
  }
  return resultado;
}


/*EXPRESIÓN REGULAR VALIDACIÓN EMAIL, esta en su mayoria tomada de intenet, solo le cambie algunos &,?,/*/
function isValidEmail(mail) {
  return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
 }

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);

  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}






















// var botonEvento = document.querySelector('#btnEvento');
// // var botonActualizar = document.querySelector('#btnActualizarTorneo');

// // btnActualizarTorneo.classList.add('ocultar');

// botonEvento.addEventListener('click', obtenerDatosTorneo);
// // btnActualizarTorneo.addEventListener('click', obtenerDatosModificacion);


// llenarListaTorneo()
// llenarTabla();

// function obtenerDatosTorneo(){
//   //declaración de las variables

//   var sNombreEvento = '';
//   var nPrecioEntradas = '';
//   var sFechaInicio = '';
//   var sFechaFin = "";
//   var sLugarEvento = "";
//   var sOrganizacion = "";
//   var sPatrocinadores = "";
//   var aInfoTorneo = [];

//   //lectura de las variables

//   sNombreEvento = document.querySelector('#nomEvento').value;
//   nPrecioEntradas = document.querySelector('#precioEntradas').value;
//   sFechaInicio = document.querySelector('#fechaInicio').value;
//   sFechaFin = document.querySelector('#fechaFin').value;
//   sLugarEvento = document.querySelector('#lugarTorneo').value;
//   sOrganizacion = document.querySelector('#orgTorneo').value;
//   sPatrocinadores = document.querySelector('#patrocinadorTorneo').value;


//   //Agregar las variables llenas, al arreglo de información

//   aInfoTorneo.push( sNombreEvento,nPrecioEntradas,sFechaInicio,sFechaFin,sLugarEvento,sOrganizacion,sPatrocinadores);

//   agregarTorneo(aInfoTorneo);
//   llenarTabla();
//   // limpiarFormulario();

// }

// function llenarTabla(){
//   var listaTorneo = obtenerListaTorneo();
//   var nCantTorneo = listaTorneo.length;
//   var tbody = document.querySelector('#tblTorneo tbody');

//   tbody.innerHTML = '';

//   for(var i = 0; i < nCantTorneo; i++){
//     var fila = tbody.insertRow(i);

//     var celdaNombre = fila.insertCell();
//     var celdaPrecio = fila.insertCell();
//     var celdaFechaInicio = fila.insertCell();
//     var celdaFechaFin = fila.insertCell();
//     var celdaLugarEvento = fila.insertCell();
//     var celdaOrg = fila.insertCell();
//     var celdaPatrocinador = fila.insertCell();

//     celdaNombre.innerHTML = listaTorneo[i][0];
//     celdaPrecio.innerHTML = listaTorneo[i][1];
//     celdaFechaInicio.innerHTML = listaTorneo[i][2];
//     celdaFechaFin.innerHTML = listaTorneo[i][3];
//     celdaLugarEvento.innerHTML = listaTorneo[i][4];
//     celdaOrg.innerHTML = listaTorneo[i][5];
//     celdaPatrocinador.innerHTML = listaTorneo[i][6];

//     botonEditar = document.createElement('input');
//     botonEditar.type ='button';
//     botonEditar.value = 'editar';
//     botonEditar.name = listaTorneo [i] [1];

//     // botonEditar.addEventListener('click', llenarFormulario);


//     // celdaEditar.appendChild(botonEditar);
//   }
// }


// function llenarListaTorneo(){

//   var listaTorneo = obtenerListaTorneo();
//   // var select = document.querySelector('#sltEmpresa');

//   // var opcion = document.createElement ('option');
//   //   opcion.value = '';
//   //   opcion.text = '--Seleccione una empresa-- ';
//   //   select.appendChild(opcion);

//   for(var i=0; i < listaTorneo.length; i++){
//     var opcion = document.createElement ('option');
//     opcion.value = listaTorneo [i][0];
//     opcion.text = listaTorneo[i][1];
//     // select.appendChild(opcion);

//   }

// }
