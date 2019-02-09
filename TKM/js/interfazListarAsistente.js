imprimirTablaAsistentes();
document.querySelector('#txtAproximacion').addEventListener('keyup', imprimirTablaConFiltro);

function obtenerDatosRegistro() {
  var sCedula = '';
  var sNombre = '';
  var sApellidoUno = '';
  var sApellidoDos = '';
  var sCorreo = '';
  var nTelefono = '';
  var sGenero = '';
  var nFechaNacimiento = '';
  var infoAsistente = [];

  sCedula = document.querySelector('#txtCedulaAsistente').value,
    sNombre = document.querySelector('#txtNombreAsistente').value,
    sApellidoUno = document.querySelector('#txtApellidoUnoAsistente').value,
    sApellidoDos = document.querySelector('#txtApellidoDosAsistente').value,
    sCorreo = document.querySelector('#txtCorreoAsistente').value,
    nTelefono = document.querySelector('#txtTelefonoAsistente').value,
    sGenero = document.querySelector('#sltGenero').value,
    nFechaNacimiento = document.querySelector('#txtFechaAsistente').value,

    infoAsistente.push(sCedula, sNombre, sApellidoUno, sApellidoDos, sCorreo, nTelefono, sGenero, nFechaNacimiento);
  registrarAsistente(infoAsistente);
  imprimirTablaAsistentes();
}

function imprimirTablaConFiltro() {
  var sFiltro = document.querySelector('#txtAproximacion').value;
  var listaAsistentes = obtenerListaAsistentesAproximacion(sFiltro);

  var tbody = document.querySelector('#tblListar tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < listaAsistentes.length; i++) {
    var fila = tbody.insertRow(i);

    var celdaCedula = fila.insertCell();
    celdaCedula.innerHTML = listaAsistentes[i]['cedula'];

    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = listaAsistentes[i]['nombre'];

    var celdaPrimerApellido = fila.insertCell();
    celdaPrimerApellido.innerHTML = listaAsistentes[i]['apellido1'];

    var celdaSegundoApellido = fila.insertCell();
    celdaSegundoApellido.innerHTML = listaAsistentes[i]['apellido2'];

    var celdaCorreo = fila.insertCell();
    celdaCorreo.innerHTML = listaAsistentes[i]['correo'];

    var celdaTelefono = fila.insertCell();
    celdaTelefono.innerHTML = listaAsistentes[i]['telefono'];

    var celdaGenero = fila.insertCell();
    celdaGenero.innerHTML = listaAsistentes[i]['genero'];

    var celdaFechaNacimiento = fila.insertCell();
    var fechaNacimiento = new
    Date(listaAsistentes[i]['fecha_nacimiento']);
    var dia = Number(fechaNacimiento.getDate() + 1);
    var mes = Number(fechaNacimiento.getMonth() + 1);
    var anno = fechaNacimiento.getFullYear();
    if (dia < 10) {
      dia = '0' + dia;
    }
    if (mes < 10) {
      mes = '0' + mes;
    }
    celdaFechaNacimiento.innerHTML = dia + '-' + mes + '-' + anno;

  }
}

function imprimirTablaAsistentes() {
  var listaAsistentes = obtenerListaAsistentes();

  var tbody = document.querySelector('#tblListar tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < listaAsistentes.length; i++) {
    var fila = tbody.insertRow(i);

    var celdaCedula = fila.insertCell();
    celdaCedula.innerHTML = listaAsistentes[i]['cedula'];

    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = listaAsistentes[i]['nombre'];

    var celdaPrimerApellido = fila.insertCell();
    celdaPrimerApellido.innerHTML = listaAsistentes[i]['apellido1'];

    var celdaSegundoApellido = fila.insertCell();
    celdaSegundoApellido.innerHTML = listaAsistentes[i]['apellido2'];

    var celdaCorreo = fila.insertCell();
    celdaCorreo.innerHTML = listaAsistentes[i]['correo'];

    var celdaTelefono = fila.insertCell();
    celdaTelefono.innerHTML = listaAsistentes[i]['telefono'];

    var celdaGenero = fila.insertCell();
    celdaGenero.innerHTML = listaAsistentes[i]['genero'];

    var celdaFechaNacimiento = fila.insertCell();
    var fechaNacimiento = new
    Date(listaAsistentes[i]['fecha_nacimiento']);
    var dia = Number(fechaNacimiento.getDate() + 1);
    var mes = Number(fechaNacimiento.getMonth() + 1);
    var anno = fechaNacimiento.getFullYear();
    if (dia < 10) {
      dia = '0' + dia;
    }
    if (mes < 10) {
      mes = '0' + mes;
    }
    celdaFechaNacimiento.innerHTML = dia + '-' + mes + '-' + anno;

  }
}

//********************************************************************************************************************************************************
//********************************************************************************************************************************************************
//**************************************************************CODIGO CON LOCALSTORAGE*****************************************************************
//********************************************************************************************************************************************************
//********************************************************************************************************************************************************



// verificarNotificacion();
// mostrarAsistentes();
// document.querySelector('#btnlistar').addEventListener('click', mostrarAsistentes);
// document.querySelector('#filtro').addEventListener('onkeyup', filtrar);
//
// function mostrarAsistentes() {
//   var listaAsistentes = getListaAsistentes();
//   var cantAsistentes = listaAsistentes.length;
//   var tbody = document.querySelector('#tblListar tbody');
//   tbody.innerHTML = '';
//   for (var i = 0; i < cantAsistentes; i++) {
//     // var objeto = listaAsistentes[i];
//     var fila = tbody.insertRow(i);
//     var celdaCedula = fila.insertCell();
//     var celdaNombre = fila.insertCell();
//     var celdaPrimerApellido = fila.insertCell();
//     var celdaSegundoApellido = fila.insertCell();
//     var celdaCorreo = fila.insertCell();
//     var celdaTelefono = fila.insertCell();
//     var celdaGenero = fila.insertCell();
//     var celdaFechaNacimiento = fila.insertCell();
//     var celdaCodigoOculto = fila.insertCell();
//     var celdaButtonModificar = fila.insertCell();
//     var celdaButtonActivar = fila.insertCell();
//     var celdaButtonDesactivar = fila.insertCell();
//     var buttonModificar = document.createElement("button");
//     buttonModificar.innerHTML = "Modificar";
//     buttonModificar.id = i;
//     buttonModificar.style = 'background-color:#2b3c4d; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
//     buttonModificar.addEventListener("click", function() {
//       modificarAsistente(listaAsistentes[this.id]);
//     });
//     celdaButtonModificar.appendChild(buttonModificar);
//
//
//     var buttonActivar = document.createElement("button");
//     buttonActivar.innerHTML = "Activar";
//     buttonActivar.id = i;
//     buttonActivar.style = 'background-color:#66b0cd; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
//     buttonActivar.addEventListener("click", function() {
//       activarAsistente(listaAsistentes[this.id]);
//
//     });
//     celdaButtonActivar.appendChild(buttonActivar);
//
//     var buttonDesactivar = document.createElement("button");
//     buttonDesactivar.innerHTML = "Desactivar";
//     buttonDesactivar.id = i;
//     buttonDesactivar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
//     buttonDesactivar.addEventListener("click", function() {
//       desactivarAsistente(listaAsistentes[this.id]);
//     });
//     celdaButtonActivar.appendChild(buttonDesactivar);
//
//     celdaCedula.innerHTML = listaAsistentes[i].sCedula;
//     celdaNombre.innerHTML = listaAsistentes[i].sNombre;
//     celdaPrimerApellido.innerHTML = listaAsistentes[i].sApellidoUno;
//     celdaSegundoApellido.innerHTML = listaAsistentes[i].sApellidoDos;
//     celdaCorreo.innerHTML = listaAsistentes[i].sCorreo;
//     celdaTelefono.innerHTML = listaAsistentes[i].nTelefono;
//     celdaGenero.innerHTML = listaAsistentes[i].sGenero;
//     celdaFechaNacimiento.innerHTML = listaAsistentes[i].nFechaNacimiento;
//     celdaCodigoOculto.innerHTML = listaAsistentes[i].nCodigo;
//     celdaCodigoOculto.style.display = 'none';
//   }
// }
//
// function modificarAsistente(id) {
//   location.href = 'asistente.html?id' + '=' + id.nCodigo;
// }
//
// // function ordenarAsistentesPorNombre() {
// //   var listaAsistentes = getListaAsistentes();
// //   for (var i = 0; i < listaAsistentes.length; i++) {
// //     for (var j = 0; j < listaAsistentes.length - 1; j++) {
// //       var a = listaAsistentes[j].sNombre;
// //       var b = listaAsistentes[j + 1].sNombre;
// //       var n = a.localeCompare(b);
// //       if (n == 1) {
// //         var tempCodigo = listaAsistentes[j].nCodigo;
// //         listaAsistentes[j].nCodigo = listaAsistentes[j + 1].nCodigo;
// //         listaAsistentes[j + 1].nCodigo = tempCodigo;
// //         var temp = listaAsistentes[j];
// //         listaAsistentes[j] = listaAsistentes[j];
// //         listaAsistentes[j] = listaAsistentes[j + 1];
// //         listaAsistentes[j + 1] = temp;
// //       }
// //     }
// //   }
// //   actualizarAsistentes(listaAsistentes);
// //   mostrarAsistentes();
// // }
//
// function activarAsistente(id) {
//   var listaAsistentes = getListaAsistentes();
//   var listaAsistentesDesactivados = getListaDesactivarAsistentes();
//   var zEncontrada = false;
//   var indice = 0;
//   for (var i = 0; i <= listaAsistentes.length; i++) {
//     if (listaAsistentesDesactivados[i] == id.nCodigo) {
//       zEncontrada = true;
//       indice = i;
//       break;
//     }
//   }
//   if (zEncontrada == true) {
//     alert("Asistente activado");
//   } else {
//     agregarDesactivarAsistente(id.nCodigo);
//     alert("Error: Este asistente ya esta activado");
//   }
// }
//
// function desactivarAsistente(id) {
//   var listaAsistentes = getListaAsistentes();
//   var listaAsistentesDesactivados = getListaDesactivarAsistentes();
//   var zEncontrada = false;
//   for (var i = 0; i <= listaAsistentes.length; i++) {
//     if (listaAsistentesDesactivados[i] === id.nCodigo) {
//       zEncontrada = true;
//       break;
//     }
//   }
//   if (zEncontrada == true) {
//     alert("Error: Asistente ya se encuentra desactivado");
//   } else {
//     agregarDesactivarProfesor(id.nCodigo);
//     alert("Se ha desactivado esta academia");
//   }
// }
//
// function filtrar() {
//   var columna = document.getElementById("sltColumna").value;
//   var sEscrito = ((document.getElementById("filtro")).value).toUpperCase();
//   var filas = (document.getElementById("tblListar")).getElementsByTagName("tr");
//
//   for (i = 0; i < filas.length; i++) {
//     td = filas[i].getElementsByTagName("td")[columna];
//     if (td) {
//       if (td.innerHTML.toUpperCase().indexOf(sEscrito) != -1) {
//         filas[i].style.display = "";
//       } else {
//         filas[i].style.display = "none";
//       }
//     }
//   }
//
// }
//
// function verificarNotificacion() {
//   var listaAsistentes = getListaAsistentes();
//   var prueba = getParameterByName('id');
//   if (1 == prueba) {
//     alertify.success("Su modificacion se ha realizado exitosamente");
//   }
// }
//
// function getParameterByName(name) {
//   name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//   var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//     results = regex.exec(location.search);
//   return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
// }
