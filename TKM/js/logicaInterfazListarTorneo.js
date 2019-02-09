// alertify.confirm("Si o no", function(e) {
//   if (e) {
//     alertify.success("Ok");
//   } else {
//     alertify.success("Np");
//   }
// });
imprimirTablaConFiltro();
verificarAsignacion();

document.querySelector('#filtro').addEventListener('keyup', imprimirTablaConFiltro);

function obtenerDatosRegistro() {
  var sNombre = '';
  var sFechaInicio = '';
  var sFechaFin = '';
  var sLugarEvento = '';
  var sPrecioEntradas = '';
  var infoTorneo = [];

  sNombre = document.querySelector('#txtNombre').value;
  sFechaInicio = document.querySelector('#txtFechaInicio').value;
  sFechaFin = document.querySelector('#txtFechaFin').value;
  sLugarEvento = document.querySelector('#selectLugar').value;
  sPrecioEntradas = document.querySelector('#txtPrecioEntrada').value;


  infoTorneo.push(sNombre, sFechaInicio, sFechaFin, sLugarEvento, sPrecioEntradas);
  registrarTorneo(infoTorneo);
  // imprimirTablaLug();
}

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
  var ListaTorneo = obtenerListaTorneoAproximacion(sFiltro);


  var tbody = document.querySelector('#tblListar tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < ListaTorneo.length; i++) {

    var fila = tbody.insertRow(i);

    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = ListaTorneo[i]['nombre'];

    var celdaFechaInicio = fila.insertCell();
    celdaFechaInicio.innerHTML = ListaTorneo[i]['fecha_inicio'];

    var celdaFechaFin = fila.insertCell();
    celdaFechaFin.innerHTML = ListaTorneo[i]['fecha_fin'];


    var celdaPrecioEntradas = fila.insertCell();
    celdaPrecioEntradas.innerHTML = ListaTorneo[i]['precio_entrada'];
    var nombreLugar = getIdLugarXTorneo(ListaTorneo[i].id_torneo);
    var celdaLugar = fila.insertCell();
    if (nombreLugar.length == 1) {
      nombreLugar = getDatosLugarPorId(nombreLugar[0].id_lugar);
      celdaLugar.innerHTML = nombreLugar[0].nombre_lugar;
    } else {
      celdaLugar.innerHTML = "Sin asignar";
    }

    var celdaOrganizacion = fila.insertCell();
    var nombreOrganizacion = getIdOrganizacionXTorneo(ListaTorneo[i].id_torneo);
    if (nombreOrganizacion.length == 1) {
      nombreOrganizacion = getDatosOrganizacionPorId(nombreOrganizacion[0].id_organizacion);
      celdaOrganizacion.innerHTML = nombreOrganizacion[0].nombre;
    } else {
      celdaOrganizacion.innerHTML = "Sin asignar";
    }

    var celdaPatrocinadores = fila.insertCell();
    var idsPatrocinadores = getIdPatrocinadoresXTorneo(ListaTorneo[i].id_torneo);
    if (idsPatrocinadores.length > 0) {

      for (var j = 0; j < idsPatrocinadores.length; j++) {
        var nombrePatrocinadores = getDatosPatrocinadorPorId(idsPatrocinadores[j].id_patrocinador);
        celdaPatrocinadores.innerHTML = celdaPatrocinadores.innerHTML + nombrePatrocinadores[0].nombre_patrocinador + "<br>";
      }
    } else {
      celdaPatrocinadores.innerHTML = "Sin asignar";
    }

    var celdaAlumnos = fila.insertCell();
    var idsAlumnos = getIdAlumnosXTorneo(ListaTorneo[i].id_torneo)
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
      asignarATorneo(ListaTorneo[this.id].id_torneo);
    });
    celdaButtonAsignar.appendChild(buttonAsignar);

    var celdaButtonModificar = fila.insertCell();
    var buttonModificar = document.createElement("button");
    buttonModificar.innerHTML = "Modificar";
    buttonModificar.id = i;
    buttonModificar.style = 'background-color:#2b3c4d;border:none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px;';
    buttonModificar.addEventListener("click", function() {
      modificarTorneo(ListaTorneo[this.id].id_torneo);
    });
    celdaButtonModificar.appendChild(buttonModificar);

    var celdaButtonCancelar = fila.insertCell();
    var buttonCancelar = document.createElement("button");
    buttonCancelar.innerHTML = "Cancelar";
    buttonCancelar.id = i;
    buttonCancelar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px;';
    buttonCancelar.addEventListener("click", function() {
      cancelarTorneo(ListaTorneo[this.id].id_torneo);
    });
    celdaButtonCancelar.appendChild(buttonCancelar);

  }

}

function modificarTorneo(pId) {
  location.href = 'ingresarTorneo.html?id' + '=' + pId;
}

function cancelarTorneo(pId) {
  alertify.confirm("¡Si cancela el evento no se volverá a mostrar en esta lista! <br><br> ¿Desea continuar? <br><br><br><br>", function(e) {
    if (e) {
      cancelarTorneo2(pId);
      imprimirTablaConFiltro();
    } else {
      alertify.success("Sin cambios");
    }
  });
}

function asignarATorneo(pId) {
  location.href = 'asginarATorneo.html?id' + '=' + pId;
}

function verificarAsignacion() {
  var idTorneo = getParameterByName('id');
  if (idTorneo != "") {
    var nombreTorneo = obtenerNombreTorneoXId(idTorneo);
    alertify.success("Asignacion para " + nombreTorneo[0].nombre + " realizada exitosamente.");
  }
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
