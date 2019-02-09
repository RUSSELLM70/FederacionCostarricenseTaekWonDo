imprimirTablaConFiltro();
verificarAsignacion();

document.querySelector('#filtro').addEventListener('keyup', imprimirTablaConFiltro);

function obtenerDatosRegistro() {
  var sNombre = '';
  var sFechaInicio = '';
  var sFechaFin = '';
  var sLugarEvento = '';
  var sPrecioEntradas = '';
  var sInvitado = '';
  var infoExhibicion = [];

  sNombre = document.querySelector('#txtNombre').value;
  sFechaInicio = document.querySelector('#txtFechaInicio').value;
  sFechaFin = document.querySelector('#txtFechaFin').value;
  sLugarEvento = document.querySelector('#selectLugar').value;
  sPrecioEntradas = document.querySelector('#txtPrecioEntrada').value;
  sInvitado = document.querySelector('#txtInvitado').value;


  infoExhibicion.push(sNombre, sFechaInicio, sFechaFin, sLugarEvento, sPrecioEntradas, sInvitado);
  registrarExhibicion(infoExhibicion);
  // imprimirTablaLug();
}
// document.querySelector('#btnRegistraLug').addEventListener('click', obtenerDatosRegistro);

function imprimirTablaConFiltro() {
  var sFiltro = document.querySelector('#filtro').value;
  var ListaExhibicion = obtenerListaExhibicionAproximacion(sFiltro);

  var tbody = document.querySelector('#tblListar tbody');
  tbody.innerHTML = '';

  for (var i = 0; i < ListaExhibicion.length; i++) {

    var fila = tbody.insertRow(i);

    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = ListaExhibicion[i].nombre;

    // var celdaFechaInicio = fila.insertCell();
    // celdaFechaInicio.innerHTML = listaFogueos[i].fecha_inicio;


      var celdaFechaInicio = fila.insertCell();
      var fechaInicio = new Date(ListaExhibicion[i].fecha_inicio);
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
      var fechaFin = new Date(ListaExhibicion[i].fecha_fin);
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
      celdaPrecio.innerHTML = ListaExhibicion[i].precio_entrada;

      var celdaInvitado = fila.insertCell();
      celdaInvitado.innerHTML = ListaExhibicion[i].invitado;

 var nombreLugar = getIdLugarXExhibicion(ListaExhibicion[i].id_exhibicion);
      var celdaLugar = fila.insertCell();
      if (nombreLugar.length == 1) {
        nombreLugar = getDatosLugarPorId(nombreLugar[0].id_lugar);
        celdaLugar.innerHTML = nombreLugar[0].nombre_lugar;
      } else {
        celdaLugar.innerHTML = "Sin asignar";
      }
 var celdaOrganizacion = fila.insertCell();
      var nombreOrganizacion = getIdOrganizacionXExhibicion(ListaExhibicion[i].id_exhibicion);
      if (nombreOrganizacion.length == 1) {
        nombreOrganizacion = getDatosOrganizacionPorId(nombreOrganizacion[0].id_organizacion);
        celdaOrganizacion.innerHTML = nombreOrganizacion[0].nombre;
      } else {
        celdaOrganizacion.innerHTML = "Sin asignar";
      }

      var celdaPatrocinadores = fila.insertCell();
      var idsPatrocinadores = getIdPatrocinadoresXExhibicion(ListaExhibicion[i].id_exhibicion);
      if (idsPatrocinadores.length > 0) {

        for (var j = 0; j < idsPatrocinadores.length; j++) {
          var nombrePatrocinadores = getDatosPatrocinadorPorId(idsPatrocinadores[j].id_patrocinador);
          celdaPatrocinadores.innerHTML = celdaPatrocinadores.innerHTML + nombrePatrocinadores[0].nombre_patrocinador + "<br>";
        }
      } else {
        celdaPatrocinadores.innerHTML = "Sin asignar";
      }

      var celdaAlumnos = fila.insertCell();
      var idsAlumnos = getIdAlumnosXExhibicion(ListaExhibicion[i].id_exhibicion)
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
        asignarAExhibicion(ListaExhibicion[this.id].id_exhibicion);
      });
      celdaButtonAsignar.appendChild(buttonAsignar);

      var celdaButtonModificar = fila.insertCell();
      var buttonModificar = document.createElement("button");
      buttonModificar.innerHTML = "Modificar";
      buttonModificar.id = i;
      buttonModificar.style = 'background-color:#2b3c4d;border:none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px;';
      buttonModificar.addEventListener("click", function() {
        modificarExhibicion(ListaExhibicion[this.id].id_exhibicion);
      });
      celdaButtonModificar.appendChild(buttonModificar);

      var celdaButtonCancelar = fila.insertCell();
      var buttonCancelar = document.createElement("button");
      buttonCancelar.innerHTML = "Cancelar";
      buttonCancelar.id = i;
      buttonCancelar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px;';
      buttonCancelar.addEventListener("click", function() {
        cancelarExhibicion(ListaExhibicion[this.id].id_exhibicion);
      });
      celdaButtonCancelar.appendChild(buttonCancelar);

  }

}

function modificarExhibicion(pId) {
  location.href = 'ingresarExhibicion.html?id' + '=' + pId;
}

function cancelarExhibicion(pId) {
  alertify.confirm("¡Si cancela el evento no se volverá a mostrar en esta lista! <br><br> ¿Desea continuar? <br><br><br><br>", function(e) {
    if (e) {
      cancelarExhibicion2(pId);
      imprimirTablaConFiltro();
    } else {
      alertify.success("Sin cambios");
    }
  });
}

function asignarAExhibicion(pId) {
  location.href = 'asignarAExhibicion.html?id' + '=' + pId;
}

function verificarAsignacion() {
  var idExhibicion = getParameterByName('id');
  if (idExhibicion != "") {
    var nombreExhibicion = obtenerNombreExhibicionXId(idExhibicion);
    alertify.success("Asignacion para " + nombreExhibicion[0].nombre + " realizada exitosamente.");
  }
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
