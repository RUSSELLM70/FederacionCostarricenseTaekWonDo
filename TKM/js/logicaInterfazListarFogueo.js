
/*con falla*/
imprimirTablaConFiltro();
verificarAsignacion();

document.querySelector('#filtro').addEventListener('keyup', imprimirTablaConFiltro);
// document.querySelector('#btnRegistraLug').addEventListener('click', obtenerDatosRegistro);

// function obtenerDatosRegistro() {
//   var sNombre = '';
//   var sFechaInicio = '';
//   var sFechaFin = '';
//   var sLugarEvento = '';
//   var sPrecioEntradas = '';
//   var infoFogueo = [];

//   sNombre = document.querySelector('#txtNombre').value;
//   sFechaInicio = document.querySelector('#txtFechaInicio').value;
//   sFechaFin = document.querySelector('#txtFechaFin').value;
//   sLugarEvento = document.querySelector('#selectLugar').value;
//   sPrecioEntradas = document.querySelector('#txtPrecioEntrada').value;


//   infoFogueo.push(sNombre, sFechaInicio, sFechaFin, sLugarEvento, sPrecioEntradas);
//   registrarFogueo(infoFogueo);
//   // imprimirTablaLug();
// }

// function desactivarAcademia(pid) {
//   desactivar(pid);
//   imprimirTablaConFiltro();
// }

// function activarAcademia(pid) {
//   activar(pid);
//   imprimirTablaConFiltro();
// }

function imprimirTablaConFiltro() {

  var sFiltro = document.querySelector('#filtro').value;
  var ListaFogueos = getListaFogueosAproximacion(sFiltro);

  var tbody = document.querySelector('#tblListar tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < ListaFogueos.length; i++) {
      var fila = tbody.insertRow(i);

      var celdaNombre = fila.insertCell();
      celdaNombre.innerHTML = ListaFogueos[i]['nombre'];

      var celdaFechaInicio = fila.insertCell();
      celdaFechaInicio.innerHTML = ListaFogueos[i]['fecha_inicio'];

      var celdaFechaFin = fila.insertCell();
      celdaFechaFin.innerHTML = ListaFogueos[i]['fecha_fin'];


      var celdaPrecioEntradas = fila.insertCell();
      celdaPrecioEntradas.innerHTML = ListaFogueos[i]['precio_entrada'];

      var nombreLugar = getIdLugarXFogueo(ListaFogueos[i].id_fogueo);
      var celdaLugar = fila.insertCell();
      if (nombreLugar.length == 1) {
        nombreLugar = getDatosLugarPorId(nombreLugar[0].id_lugar);
        celdaLugar.innerHTML = nombreLugar[0].nombre_lugar;
      } else {
        celdaLugar.innerHTML = "Sin asignar";
      }

      var celdaOrganizacion = fila.insertCell();
      var nombreOrganizacion = getIdOrganizacionXFogueo(ListaFogueos[i].id_fogueo);
      if (nombreOrganizacion.length == 1) {
        nombreOrganizacion = getDatosOrganizacionPorId(nombreOrganizacion[0].id_organizacion);
        celdaOrganizacion.innerHTML = nombreOrganizacion[0].nombre;
      } else {
        celdaOrganizacion.innerHTML = "Sin asignar";
      }

      var celdaPatrocinadores = fila.insertCell();
      var idsPatrocinadores = getIdPatrocinadoresXFogueo(ListaFogueos[i].id_fogueo);
      if (idsPatrocinadores.length > 0) {

        for (var j = 0; j < idsPatrocinadores.length; j++) {
          var nombrePatrocinadores = getDatosPatrocinadorPorId(idsPatrocinadores[j].id_patrocinador);
          celdaPatrocinadores.innerHTML = celdaPatrocinadores.innerHTML + nombrePatrocinadores[0].nombre_patrocinador + "<br>";
        }
      } else {
        celdaPatrocinadores.innerHTML = "Sin asignar";
      }

      var celdaAlumnos = fila.insertCell();
      var idsAlumnos = getIdAlumnosXFogueo(ListaFogueos[i].id_fogueo)
      if (idsAlumnos.length > 0) {
        for (var j = 0; j < idsAlumnos.length; j++) {
          var nombreAlumnos = getDatosAlumnoPorId(idsAlumnos[j].id_alumno)
          celdaAlumnos.innerHTML = celdaAlumnos.innerHTML + nombreAlumnos[0].nombre + "<br>";
        }
      } else {
        celdaAlumnos.innerHTML = "Sin asignar";
      }


    var celdaButtonAsignar = fila.insertCell();
    var buttonAsignar = document.createElement("button");
    buttonAsignar.innerHTML = "Asignar";
    buttonAsignar.id = i;
    buttonAsignar.style = 'background-color:#66b0cd; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px;';
    buttonAsignar.addEventListener("click", function() {
      asignarAFogueo(ListaFogueos[this.id].id_fogueo);
    });
    celdaButtonAsignar.appendChild(buttonAsignar);

    var celdaButtonModificar = fila.insertCell();
    var buttonModificar = document.createElement("button");
    buttonModificar.innerHTML = "Modificar";
    buttonModificar.id = i;
    buttonModificar.style = 'background-color:#2b3c4d;border:none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px;';
    buttonModificar.addEventListener("click", function() {
      modificarFogueo(ListaFogueos[this.id].id_fogueo);
    });
    celdaButtonModificar.appendChild(buttonModificar);

    var celdaButtonCancelar = fila.insertCell();
    var buttonCancelar = document.createElement("button");
    buttonCancelar.innerHTML = "Cancelar";
    buttonCancelar.id = i;
    buttonCancelar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px;';
    buttonCancelar.addEventListener("click", function() {
      cancelarFogueo(ListaFogueos[this.id].id_fogueo);
    });
    celdaButtonCancelar.appendChild(buttonCancelar);
    }
}


function modificarFogueo(id) {
  location.href = 'asginarAFogueo.html?id' + '=' + id;

}

function cancelarFogueo(pId) {
  alertify.confirm("¡Si cancela el evento no se volverá a mostrar en esta lista! <br><br> ¿Desea continuar? <br><br><br><br>", function(e) {
    if (e) {
      cancelarFogueo2(pId);
      imprimirTablaConFiltro();
    } else {
      alertify.success("Sin cambios");
    }
  });
}

function asignarAFogueo(pId) {
  location.href = 'asginarAFogueo.html?id' + '=' + pId;
}

function verificarAsignacion() {
  var idFogueo = getParameterByName('id');
  if (idFogueo != "") {
    var nombreFogueo = obtenerNombreFogueoXId(idFogueo);
    alertify.success("Asignacion para " + nombreFogueo[0].nombre + " realizada exitosamente.");
  }
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}




















/*antiguo
listaFogueoAproximacion();

document.querySelector('#filtro').addEventListener('keyup', listaFogueoAproximacion);
// document.querySelector('#btnRegistraLug').addEventListener('click', obtenerDatosRegistro);

function listaFogueoAproximacion() {
  var sFiltro = document.querySelector('#filtro').value;
  var listaFogueos = getListaFogueosAproximacion(sFiltro);

  var tbody = document.querySelector('#tblListar tbody');
  tbody.innerHTML = '';

  for (var i = 0; i < listaFogueos.length; i++) {
    var fila = tbody.insertRow(i);

    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = listaFogueos[i].nombre;

    // var celdaFechaInicio = fila.insertCell();
    // celdaFechaInicio.innerHTML = listaFogueos[i].fecha_inicio;


      var celdaFechaInicio = fila.insertCell();
      var fechaInicio = new Date(listaFogueos[i].fecha_inicio);
      var dia = Number(fechaInicio.getDate() + 1);
      var mes = Number(fechaInicio.getMonth() + 1);
      var anno = fechaInicio.getFullYear();
      if (dia < 10) {
        dia = '0' + dia;
      }
      if (mes < 10) {
        mes = '0' + mes;
      }
      celdaFechaInicio.innerHTML = dia + '-' + mes + '-' + anno;

    // var celdaFechaFin = fila.insertCell();
    // celdaFechaFin.innerHTML = listaFogueos[i].fecha_fin;

      var celdaFechaFin = fila.insertCell();
      var fechaFin = new Date(listaFogueos[i].fecha_fin);
      var dia = Number(fechaFin.getDate() + 1);
      var mes = Number(fechaFin.getMonth() + 1);
      var anno = fechaFin.getFullYear();
      if (dia < 10) {
        dia = '0' + dia;
      }
      if (mes < 10) {
        mes = '0' + mes;
      }
      celdaFechaFin.innerHTML = dia + '-' + mes + '-' + anno;



    var celdaPrecio = fila.insertCell();
    celdaPrecio.innerHTML = listaFogueos[i].precio_entrada;

    var celdaButtonAsignar = fila.insertCell();
    var buttonAsignar = document.createElement("button");
    buttonAsignar.innerHTML = "Asignar";
    buttonAsignar.id = i;
    buttonAsignar.style = 'background-color:#66b0cd; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px;';
    buttonAsignar.addEventListener("click", function() {
      asignarATorneo(listaFogueos[this.id].id_fogueo);
    });
    celdaButtonAsignar.appendChild(buttonAsignar);

    var celdaButtonModificar = fila.insertCell();
    var buttonModificar = document.createElement("button");
    buttonModificar.innerHTML = "Modificar";
    buttonModificar.id = i;
    buttonModificar.style = 'background-color:#2b3c4d;border:none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px;';
    buttonModificar.addEventListener("click", function() {
      modificarTorneo(listaFogueos[this.id].id_fogueo);
    });
    celdaButtonModificar.appendChild(buttonModificar);

    var celdaButtonCancelar = fila.insertCell();
    var buttonCancelar = document.createElement("button");
    buttonCancelar.innerHTML = "Cancelar";
    buttonCancelar.id = i;
    buttonCancelar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px;';
    buttonCancelar.addEventListener("click", function() {
      cancelarTorneo(listaFogueos[this.id].id_fogueo);
    });
    celdaButtonCancelar.appendChild(buttonCancelar);
  }
}

function modificarFogueo(id) {
  location.href = 'ingresarFogueo.html?id' + '=' + id;

}
function asignarATorneo(pId) {
  location.href = 'asginarATorneo.html?id' + '=' + pId;
}

*/
