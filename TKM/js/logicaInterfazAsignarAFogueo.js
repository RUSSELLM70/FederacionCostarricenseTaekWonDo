var idFogueo = getParameterByName('id');
var listaAlumnosSeleccionados = [];
var listaLugaresSeleccionados = [];
var listaPatrocinadoresSeleccionados = [];
var listaOrganizacionesSeleccionadas = [];

cargaInicial();
document.querySelector('#btnAsignarLugar').addEventListener('click', asignarLugar);
document.querySelector('#btnAsignarPatrocinador').addEventListener('click', asignarPatrocinador);
document.querySelector('#btnAsignarOrganizacion').addEventListener('click', asignarOrganizacion);
document.querySelector('#btnAsignarAlumnos').addEventListener('click', asignarAlumno);
document.querySelector('#btnFinalizarAsignar').addEventListener('click', finalizarAsignar);

function cargaInicial() {
  cargarAlumnos();
  cargarLugares();
  cargarPatrocinadores();
  cargarOrganizaciones();
  llenarConInfoBD();
}

function cargarAlumnos() {
  var listaAlumnos = getListaAlumnos();
  var opcion = document.createElement("option");
  opcion.value = "";
  opcion.text = "- Seleccione alumnos -";
  selectAlumnos.appendChild(opcion);
  for (var i = 0; i < listaAlumnos.length; i++) {
    var opcion = document.createElement("option");
    opcion.value = listaAlumnos[i].id_alumno;
    opcion.text = listaAlumnos[i].nombre;
    selectAlumnos.appendChild(opcion);
  }
}

function cargarLugares() {
  var listaLugares = getListaLugares();
  var opcion = document.createElement("option");
  opcion.value = "";
  opcion.text = "- Seleccione un lugar -";
  selectLugar.appendChild(opcion);
  for (var i = 0; i < listaLugares.length; i++) {
    var opcion = document.createElement("option");
    opcion.value = listaLugares[i].id_lugar;
    opcion.text = listaLugares[i].nombre_lugar;
    selectLugar.appendChild(opcion);
  }
}

function cargarPatrocinadores() {
  var listaPatrocinadores = getListaPatrocinadores();
  var opcion = document.createElement("option");
  opcion.value = "";
  opcion.text = "- Seleccione patrocinadores -";
  selectPatrocinador.appendChild(opcion);
  for (var i = 0; i < listaPatrocinadores.length; i++) {
    var opcion = document.createElement("option");
    opcion.value = listaPatrocinadores[i].id_patrocinador;
    opcion.text = listaPatrocinadores[i].nombre_patrocinador;
    selectPatrocinador.appendChild(opcion);
  }
}

function cargarOrganizaciones() {
  var listaOrganizacion = getListaOrganizaciones();
  var opcion = document.createElement("option");
  opcion.value = "";
  opcion.text = "- Seleccione una Organizacion -";
  selectOrganizacion.appendChild(opcion);
  for (var i = 0; i < listaOrganizacion.length; i++) {
    var opcion = document.createElement("option");
    opcion.value = listaOrganizacion[i].id_organizacion;
    opcion.text = listaOrganizacion[i].nombre;
    selectOrganizacion.appendChild(opcion);
  }
}

//FIN CARGAR DATOS DE LOS SELECT

//--------------------INICIO ASIGNAR ALUMNO -----------------------
function asignarAlumno() {
  var nIdAlumno = document.querySelector("#selectAlumnos").value;
  if (nIdAlumno != "") {
    if (listaAlumnosSeleccionados.length < 5) {
      if (validarSeleccionAlumno(nIdAlumno) != true) {
        listaAlumnosSeleccionados.push(nIdAlumno);
        crearTablaAlumnosSeleccionados();
      } else {
        alertify.error("No puede asignar un Alumno repetido.")
      }
    } else {
      alertify.error("Debe asignar como máximo 5 Alumnos.");
    }
  } else {
    alertify.error("Primero debe seleccionar un Alumno.");
  }

}

function validarSeleccionAlumno(pId) {
  var bEncontrado = false;
  for (var i = 0; i < listaAlumnosSeleccionados.length; i++) {
    if (listaAlumnosSeleccionados[i] == pId) {
      bEncontrado = true;
    }
  }
  return bEncontrado;
}

function crearTablaAlumnosSeleccionados() {
  var tbody = document.querySelector('#tblListaAlumnosAgregados tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < listaAlumnosSeleccionados.length; i++) {
    var datosAlumno = getDatosAlumnoPorId(listaAlumnosSeleccionados[i]);
    var fila = tbody.insertRow(i);

    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = datosAlumno[0].nombre;

    var celdaButtonEliminar = fila.insertCell();
    var buttonEliminar = document.createElement("button");
    buttonEliminar.innerHTML = "Eliminar";
    buttonEliminar.id = datosAlumno[0].id_alumno;
    celdaButtonEliminar.appendChild(buttonEliminar);
    buttonEliminar.addEventListener("click", function() {
      eliminarAlumnoSeleccionado(datosAlumno[0].id_alumno);
    });
  }
}

function eliminarAlumnoSeleccionado(pId) {
  for (var i = 0; i < listaAlumnosSeleccionados.length; i++) {
    if (listaAlumnosSeleccionados[i] == pId) {
      listaAlumnosSeleccionados.splice(i, 1);
      break;
    }
  }
  crearTablaAlumnosSeleccionados();
}

//--------------FIN ASIGNAR ALUMNO ----------------------------

//---------------INICIO ASIGNAR ORGANIZACION ------------------
function asignarOrganizacion() {
  var nIdOrganizacion = document.querySelector("#selectOrganizacion").value;
  if (nIdOrganizacion != "") {
    if (listaOrganizacionesSeleccionadas.length < 1) { //validarSeleccionOrganizacion(nIdOrganizacion) creo que ya no se necesita
      listaOrganizacionesSeleccionadas.push(nIdOrganizacion);
      crearTablaOrganizacionesSeleccionadas();
    } else {
      alertify.error("Solo puede asignar una Organización.");
    }
  } else {
    alertify.error("Primero debe seleccionar una Organización.");
  }
}

// function validarSeleccionOrganizacion(pId) {
//   var bEncontrado = false;
//   for (var i = 0; i < listaOrganizacionesSeleccionadas.length; i++) {
//     if (listaOrganizacionesSeleccionadas[i] == pId) {
//       bEncontrado = true;
//     }
//   }
//   return bEncontrado;
// }

function eliminarOrganizacionSeleccionada(pId) {
  for (var i = 0; i < listaOrganizacionesSeleccionadas.length; i++) {
    if (listaOrganizacionesSeleccionadas[i] == pId) {
      listaOrganizacionesSeleccionadas.splice(i, 1);
      break;
    }
  }
  crearTablaOrganizacionesSeleccionadas();
}

function crearTablaOrganizacionesSeleccionadas() {
  var tbody = document.querySelector('#tblListaOrganizacionesAgregadas tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < listaOrganizacionesSeleccionadas.length; i++) {
    var datosOrganizacion = getDatosOrganizacionPorId(listaOrganizacionesSeleccionadas[i]);
    var fila = tbody.insertRow(i);

    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = datosOrganizacion[0].nombre;

    var celdaButtonEliminar = fila.insertCell();
    var buttonEliminar = document.createElement("button");
    buttonEliminar.innerHTML = "Eliminar";
    buttonEliminar.id = datosOrganizacion[0].id_organizacion;
    celdaButtonEliminar.appendChild(buttonEliminar);
    buttonEliminar.addEventListener("click", function() {
      eliminarOrganizacionSeleccionada(datosOrganizacion[0].id_organizacion);
    });
  }
}
//---------------FIN ASIGNAR ORGANIZACION ------------------

//---------------INICIO ASIGNAR LUGAR ------------------
function asignarLugar() {
  var nIdLugar = document.querySelector("#selectLugar").value;
  if (nIdLugar != "") {
    if (listaLugaresSeleccionados.length < 1) { //validarSeleccionLugar(nIdLugar) Creo que ya no se ocupa
      listaLugaresSeleccionados.push(nIdLugar);
      crearTablaLugaresSeleccionados();
    } else {
      alertify.error('Solo uno puede asignar un Lugar.');
    }
  } else {
    alertify.error("Primero debe seleccionar un Lugar.");
  }

}

// function validarSeleccionLugar(pId) {
//   var bEncontrado = false;
//   for (var i = 0; i < listaLugaresSeleccionados.length; i++) {
//     if (listaLugaresSeleccionados[i] == pId) {
//       bEncontrado = true;
//     }
//   }
//   return bEncontrado;
// }

function eliminarLugarSeleccionado(pId) {
  for (var i = 0; i < listaLugaresSeleccionados.length; i++) {
    if (listaLugaresSeleccionados[i] == pId) {
      listaLugaresSeleccionados.splice(i, 1);
      break;
    }
  }
  crearTablaLugaresSeleccionados();
}

function crearTablaLugaresSeleccionados() {
  var tbody = document.querySelector('#tblListaLugaresAgregados tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < listaLugaresSeleccionados.length; i++) {
    var datosLugar = getDatosLugarPorId(listaLugaresSeleccionados[i]);
    var fila = tbody.insertRow(i);

    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = datosLugar[0].nombre_lugar;

    var celdaButtonEliminar = fila.insertCell();
    var buttonEliminar = document.createElement("button");
    buttonEliminar.innerHTML = "Eliminar";
    buttonEliminar.id = datosLugar[0].id_lugar;
    celdaButtonEliminar.appendChild(buttonEliminar);
    buttonEliminar.addEventListener("click", function() {
      eliminarLugarSeleccionado(datosLugar[0].id_lugar);
    });
  }
}

//---------------FIN ASIGNAR LUGAR ------------------

//---------------INICIO ASIGNAR PATROCINADOR ------------------
function asignarPatrocinador() {
  var nIdPatrocinador = document.querySelector("#selectPatrocinador").value;
  if (nIdPatrocinador != "") {
    if (validarSeleccionPatrocinador(nIdPatrocinador) != true) {
      listaPatrocinadoresSeleccionados.push(nIdPatrocinador);
      crearTablaPatrocinadoresSeleccionados();
    } else {
      alertify.error("No puede asignar un Patrocinador repetido.");
    }
  } else {
    alertify.error("Primero debe seleccionar un Patrocinador.");
  }

}

function validarSeleccionPatrocinador(pId) {
  var bEncontrado = false;
  for (var i = 0; i < listaPatrocinadoresSeleccionados.length; i++) {
    if (listaPatrocinadoresSeleccionados[i] == pId) {
      bEncontrado = true;
    }
  }
  return bEncontrado;
}

function eliminarPatrocinadorSeleccionado(pId) {
  for (var i = 0; i < listaPatrocinadoresSeleccionados.length; i++) {
    if (listaPatrocinadoresSeleccionados[i] == pId) {
      listaPatrocinadoresSeleccionados.splice(i, 1);
      break;
    }
  }
  crearTablaPatrocinadoresSeleccionados();
}

function crearTablaPatrocinadoresSeleccionados() {
  var tbody = document.querySelector('#tblListaPatrocinadoresAgregados tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < listaPatrocinadoresSeleccionados.length; i++) {
    var datosPatrocinador = getDatosPatrocinadorPorId(listaPatrocinadoresSeleccionados[i]);
    var fila = tbody.insertRow(i);

    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = datosPatrocinador[0].nombre_patrocinador;

    var celdaButtonEliminar = fila.insertCell();
    var buttonEliminar = document.createElement("button");
    buttonEliminar.innerHTML = "Eliminar";
    buttonEliminar.id = datosPatrocinador[0].id_patrocinador;
    celdaButtonEliminar.appendChild(buttonEliminar);
    buttonEliminar.addEventListener("click", function() {
      eliminarPatrocinadorSeleccionado(datosPatrocinador[0].id_patrocinador);
    });
  }
}
//---------------FIN ASIGNAR PATROCINADOR ------------------

//INICIO FINALIZAR ASIGANR
function finalizarAsignar() {
  if (true) { //Para alumnos
    limpiarAlumnosNoSeleccionadosEnBD(); // va a limpiar la BD de los alumnos no asigandos
    for (var i = 0; i < listaAlumnosSeleccionados.length; i++) { //Recorre los alumnos seleccionados
      if (validarAlumnosEnBD(listaAlumnosSeleccionados[i]) != true) { //valida si existen ya en la BD antes de enviar el registro en la BD
        asignarAlumnoFogueo(listaAlumnosSeleccionados[i], idFogueo);
      }
    }
  }

  if (true) { //Para lugares
    limpiarLugaresNoSeleccionadosEnBD_YAsignarLugarFogueo();
  }

  if (true) { //Para patrocinadores
    limpiarPatrocinadoresNoSeleccionadosEnBD();
    for (var i = 0; i < listaPatrocinadoresSeleccionados.length; i++) { //Recorre los alumnos seleccionados
      if (validarPatrocinadorEnBD(listaPatrocinadoresSeleccionados[i]) != true) { //valida si existen ya en la BD antes de enviar el registro en la BD
        asignarPatrocinadorFogueo(listaPatrocinadoresSeleccionados[i], idFogueo);
      }
    }
  }

  if (true) { //Para Organizaciones
    limpiarOrganizacionesNoSeleccionadosEnBD_YAsignarOrganizacionFogueo();
  }
  location.href = 'listarFogueo.html?id' + '=' + idFogueo;
}

//-----------Inicio Para alumnos  BD--------------------
function limpiarAlumnosNoSeleccionadosEnBD() { // va a limpiar la BD de los alumnos no asigandos
  var aAlumnosEnBD = getIdAlumnosXFogueo(idFogueo);
  var bEncontrado = false;
  for (var i = 0; i < aAlumnosEnBD.length; i++) {
    if (validarAlumnoSeleccionado(aAlumnosEnBD[i].id_alumno) != true) {
      eliminarAlumnoEnBD(aAlumnosEnBD[i].id_alumno, idFogueo);
    }
  }
}

function validarAlumnoSeleccionado(idAlumnoEnBD) { //Veirifica los id en la lista de alumnos seleccioandos
  var bEncontrado = false;
  for (var i = 0; i < listaAlumnosSeleccionados.length; i++) {
    if (listaAlumnosSeleccionados[i] == idAlumnoEnBD) {
      bEncontrado = true;
    }
  }
  return bEncontrado; //devuelve true si lo encuentra
}

function validarAlumnosEnBD(pIdAlumno) {
  var aAlumnosEnBD = getIdAlumnosXFogueo(idFogueo);
  var bEncontrado = false;
  for (var i = 0; i < aAlumnosEnBD.length; i++) {
    if (aAlumnosEnBD[i].id_alumno == pIdAlumno) {
      bEncontrado = true;
      break;
    }
  }
  return bEncontrado;
}
//----------Fin Para Alumnos  BD  ------------------

//----------Inicio Para Lugar BD  ----------------------
function limpiarLugaresNoSeleccionadosEnBD_YAsignarLugarFogueo() {
  var aLugarEnBD = getIdLugarXFogueo(idFogueo);
  if (aLugarEnBD.length != 0) {
    if (aLugarEnBD[0].id_lugar != listaLugaresSeleccionados[0]) {
      eliminarLugarEnBD(aLugarEnBD[0].id_lugar, idFogueo);
      asignarLugarFogueo(listaLugaresSeleccionados[0], idFogueo);
    }
  } else if (listaLugaresSeleccionados.length != 0) {
    asignarLugarFogueo(listaLugaresSeleccionados[0], idFogueo);
  }
}
//----------Fin Para Lugar BD  ------------------

//----------Inicio Para Organizacion BD  ----------------------
function limpiarOrganizacionesNoSeleccionadosEnBD_YAsignarOrganizacionFogueo() {
  var aOrganizacionEnBD = getIdOrganizacionXFogueo(idFogueo);
  if (aOrganizacionEnBD.length != 0) {
    if (aOrganizacionEnBD[0].id_organizacion != listaOrganizacionesSeleccionadas[0]) {
      eliminarOrganizacionEnBD(aOrganizacionEnBD[0].id_organizacion, idFogueo);
      asignarOrganizacionFogueo(listaOrganizacionesSeleccionadas[0], idFogueo);
    }
  } else if (listaOrganizacionesSeleccionadas.length != 0) {
    asignarOrganizacionFogueo(listaOrganizacionesSeleccionadas[0], idFogueo);
  }
}
//----------Fin Para Organizacion BD  ----------------------

//-----------Inicio Para patrocinadores  BD--------------------
function limpiarPatrocinadoresNoSeleccionadosEnBD() { // va a limpiar la BD de los patrocinadores no asigandos
  var aPatrocinadoresEnBD = getIdPatrocinadoresXFogueo(idFogueo);
  var bEncontrado = false;
  for (var i = 0; i < aPatrocinadoresEnBD.length; i++) {
    if (validarPatrocinadorSeleccionado(aPatrocinadoresEnBD[i].id_patrocinador) != true) {
      eliminarPatrocinadorEnBD(aPatrocinadoresEnBD[i].id_patrocinador, idFogueo);
    }
  }
}

  function validarPatrocinadorSeleccionado(idPatrocinadorEnBD) { //Veirifica los id en la lista de patrocinadores seleccioandos
  var bEncontrado = false;
  for (var i = 0; i < listaPatrocinadoresSeleccionados.length; i++) {
    if (listaPatrocinadoresSeleccionados[i] == idPatrocinadorEnBD) {
      bEncontrado = true;
    }
  }
  return bEncontrado; //devuelve true si lo encuentra
}

function validarPatrocinadorEnBD(pIdPatrocinador) {
  var aPatrocinadoresEnBD = getIdPatrocinadoresXFogueo(idFogueo);
  var bEncontrado = false;
  for (var i = 0; i < aPatrocinadoresEnBD.length; i++) {
    if (aPatrocinadoresEnBD[i].id_patrocinador == pIdPatrocinador) {
      bEncontrado = true;
      break;
    }
  }
  return bEncontrado;
}
//----------Fin Para Patrocinadores  BD  -----------------------

function llenarConInfoBD() {
  var aAlumnosEnBD = getIdAlumnosXFogueo(idFogueo);
  var aLugarEnBD = getIdLugarXFogueo(idFogueo);
  var aOrganizacionEnBD = getIdOrganizacionXFogueo(idFogueo);
  var aPatrocinadoresEnBD = getIdPatrocinadoresXFogueo(idFogueo);

  for (var i = 0; i < aAlumnosEnBD.length; i++) {
    listaAlumnosSeleccionados.push(aAlumnosEnBD[i].id_alumno);
  }
  crearTablaAlumnosSeleccionados();

  if (aLugarEnBD.length == 1) {
      listaLugaresSeleccionados.push(aLugarEnBD[0].id_lugar);
    }
    crearTablaLugaresSeleccionados();

  if (aOrganizacionEnBD.length == 1) {
    listaOrganizacionesSeleccionadas.push(aOrganizacionEnBD[0].id_organizacion);
  }
  crearTablaOrganizacionesSeleccionadas();

  for (var i = 0; i < aPatrocinadoresEnBD.length; i++) {
    listaPatrocinadoresSeleccionados.push(aPatrocinadoresEnBD[i].id_patrocinador);
  }
  crearTablaPatrocinadoresSeleccionados();
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}