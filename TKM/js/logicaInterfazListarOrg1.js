imprimirTablaOrg();
document.querySelector('#txtAproximacion').addEventListener('keyup', imprimirTablaConFiltro);


function modificarOrganizaciones(id) {
  location.href = 'http://localhost/ingresar_General/indexOrganizacion.html?id' + '=' + id;

}

function desactivarOrganizacion(pid) {
  desactivar(pid);
  imprimirTablaConFiltro();
}

function activarOrganizacion(pid) {
  activar(pid);
  imprimirTablaConFiltro();
}




function imprimirTablaConFiltro() {
  var sFiltro = document.querySelector('#txtAproximacion').value;
  var ListaOrganizaciones = obtenerListaOrganizacionesAproximacion(sFiltro);


  var tbody = document.querySelector('#tblOrg tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < ListaOrganizaciones.length; i++) {
    var fila = tbody.insertRow(i);

    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = ListaOrganizaciones[i]['nombre'];

    var celdaTipo = fila.insertCell();
    celdaTipo.innerHTML = ListaOrganizaciones[i]['tipo'];

    var celdaDirec = fila.insertCell();
    celdaDirec.innerHTML = ListaOrganizaciones[i]['direccion'];

    var celdaTelef = fila.insertCell();
    celdaTelef.innerHTML = ListaOrganizaciones[i]['telefono'];

    var celdaCorreo = fila.insertCell();
    celdaCorreo.innerHTML = ListaOrganizaciones[i]['correo'];


    var celdaEstado = fila.insertCell();
    var celdaButtonActivarDesactivar = fila.insertCell(); //Para insertar el botoon luego
    var buttonActivarDesactivar = document.createElement("button"); //El botton de activar y desactivar\
    celdaButtonActivarDesactivar.appendChild(buttonActivarDesactivar); //lo annado a la celda

    if (ListaOrganizaciones[i].estado == 1) {

      celdaEstado.innerHTML = "Activo";
      buttonActivarDesactivar.innerHTML = "Desactivar";
      buttonActivarDesactivar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
      buttonActivarDesactivar.id = i;
      buttonActivarDesactivar.addEventListener("click", function() {
        desactivarOrganizacion(ListaOrganizaciones[this.id].id_organizacion);
      });
    } else {
      celdaEstado.innerHTML = "Desactivado";
      buttonActivarDesactivar.innerHTML = "Activar";
      buttonActivarDesactivar.style = 'background-color:#66b0cd; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
      buttonActivarDesactivar.id = i;
      buttonActivarDesactivar.addEventListener("click", function() {
        activarOrganizacion(ListaOrganizaciones[this.id].id_organizacion);
      });
    }

    var celdaButtonModificar = fila.insertCell();
    var buttonModificar = document.createElement("button");
    buttonModificar.innerHTML = "Modificar";
    buttonModificar.id = i;
    buttonModificar.style = 'background-color:#2b3c4d; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
    buttonModificar.addEventListener("click", function() {
      modificarOrganizaciones(ListaOrganizaciones[this.id].id_organizacion);
    });
    celdaButtonModificar.appendChild(buttonModificar);
  }
}



function imprimirTablaOrg() {
  var ListaOrganizaciones = obtenerListaOrganizaciones();


  var tbody = document.querySelector('#tblOrg tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < ListaOrganizaciones.length; i++) {
    var fila = tbody.insertRow(i);


    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = ListaOrganizaciones[i]['nombre'];

    var celdaTipo = fila.insertCell();
    celdaTipo.innerHTML = ListaOrganizaciones[i]['tipo'];

    var celdaDirec = fila.insertCell();
    celdaDirec.innerHTML = ListaOrganizaciones[i]['direccion'];

    var celdaTelef = fila.insertCell();
    celdaTelef.innerHTML = ListaOrganizaciones[i]['telefono'];

    var celdaCorreo = fila.insertCell();
    celdaCorreo.innerHTML = ListaOrganizaciones[i]['correo'];


    var celdaEstado = fila.insertCell();
    var celdaButtonActivarDesactivar = fila.insertCell(); //Para insertar el botoon luego
    var buttonActivarDesactivar = document.createElement("button"); //El botton de activar y desactivar\
    celdaButtonActivarDesactivar.appendChild(buttonActivarDesactivar); //lo annado a la celda


    if (ListaOrganizaciones[i].estado == 1) {

      celdaEstado.innerHTML = "Activo";
      buttonActivarDesactivar.innerHTML = "Desactivar";
      buttonActivarDesactivar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
      buttonActivarDesactivar.id = i;
      buttonActivarDesactivar.addEventListener("click", function() {
        desactivarOrganizacion(ListaOrganizaciones[this.id].id_organizacion);
      });
    } else {
      celdaEstado.innerHTML = "Desactivado";
      buttonActivarDesactivar.innerHTML = "Activar";
      buttonActivarDesactivar.style = 'background-color:#66b0cd; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
      buttonActivarDesactivar.id = i;
      buttonActivarDesactivar.addEventListener("click", function() {
        activarOrganizacion(ListaOrganizaciones[this.id].id_organizacion);
      });
    }

    var celdaButtonModificar = fila.insertCell();
    var buttonModificar = document.createElement("button");
    buttonModificar.innerHTML = "Modificar";
    buttonModificar.id = i;
    buttonModificar.style = 'background-color:#2b3c4d;border:none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px;';
    buttonModificar.addEventListener("click", function() {
      modificarOrganizaciones(ListaOrganizaciones[this.id].id_organizacion);
    });
    celdaButtonModificar.appendChild(buttonModificar);



  }

}


// codigo para ocultar lista
// $(document).on("ready", function() {
//   //VARIABLE DE FORMULARIO
//   var formulario = $("#formulario");
//
//
//   google.maps.event.addListener(mapa, "click", function(event) {
//
//
//     //VIDEO 15
//     $("#collapseOne").collapse('show');
//     $("#collapseTwo").collapse('hide');
//
//
//
//   });
//
// });
