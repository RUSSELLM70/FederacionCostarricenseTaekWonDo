imprimirTablaConFiltro();


document.querySelector('#txtAproximacion').addEventListener('keyup', imprimirTablaConFiltro);
// document.querySelector('#btnRegistraLug').addEventListener('click', obtenerDatosRegistro);

function obtenerDatosRegistro() {
  var sNombre = '';
  var sCorreo = '';
  var sTelefono = '';
  var sDireccion = '';
  var infoAcademia = [];

  sNombre = document.querySelector('#txtNombre').value;
  sCorreo = document.querySelector('#txtCorreo').value;
  sTelefono = document.querySelector('#txtTelefono').value;
  sDireccion = document.querySelector('#txtDireccion').value;


  infoAcademia.push(sNombre,sCorreo,sTelefono,sDireccion);
  registrarAcademia(infoAcademia);
  // imprimirTablaLug();
}

function desactivarAcademia(pid) {
  desactivar(pid);
  imprimirTablaConFiltro();
}

function activarAcademia(pid) {
  activar(pid);
  imprimirTablaConFiltro();
}


function imprimirTablaConFiltro() {
  var sFiltro = document.querySelector('#txtAproximacion').value;
  var ListaAcademia = obtenerListaAcademiaAproximacion(sFiltro);


  var tbody = document.querySelector('#tblListar tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < ListaAcademia.length; i++) {
    var fila = tbody.insertRow(i);

    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = ListaAcademia[i]['nombre'];

    var celdaCorreo = fila.insertCell();
    celdaCorreo.innerHTML = ListaAcademia[i]['correo'];

       var celdaTelefono = fila.insertCell();
    celdaTelefono.innerHTML = ListaAcademia[i]['telefono'];

    var celdaDireccion = fila.insertCell();
    celdaDireccion.innerHTML = ListaAcademia[i]['direccion'];

     var celdaEstado = fila.insertCell();
    var celdaButtonActivarDesactivar = fila.insertCell(); //Para insertar el botoon luego
    var buttonActivarDesactivar = document.createElement("button"); //El botton de activar y desactivar\
    celdaButtonActivarDesactivar.appendChild(buttonActivarDesactivar); //lo annado a la celda
    if (ListaAcademia[i].estado == 1) {
      celdaEstado.innerHTML = "Activo";
      buttonActivarDesactivar.innerHTML = "Desactivar";
      buttonActivarDesactivar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
      buttonActivarDesactivar.id = i;
      buttonActivarDesactivar.addEventListener("click", function() {
        desactivarAcademia(ListaAcademia[this.id].id_academia);
      });

    } else {
      celdaEstado.innerHTML = "Desactivado";
      buttonActivarDesactivar.innerHTML = "Activar";
      buttonActivarDesactivar.style = 'background-color:#66b0cd; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
      buttonActivarDesactivar.id = i;
      buttonActivarDesactivar.addEventListener("click", function() {
        activarAcademia(ListaAcademia[this.id].id_academia);
      });
    }

       var celdaButtonModificar = fila.insertCell();
    var buttonModificar = document.createElement("button");
    buttonModificar.innerHTML = "Modificar";
    buttonModificar.id = i;
    buttonModificar.style = 'background-color:#2b3c4d;border:none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px;';
    buttonModificar.addEventListener("click", function() {
      modificarAcademias(ListaAcademia[this.id].id_academia);
    });
    celdaButtonModificar.appendChild(buttonModificar);
  }
}
//
// function imprimirTablaAcademia() {
//   var ListaAcademia = obtenerListaAcademia();
//
//
//   var tbody = document.querySelector('#tblListar tbody');
//   tbody.innerHTML = '';
//   for (var i = 0; i < ListaAcademia.length; i++) {
//     var fila = tbody.insertRow(i);
//
//
//      var celdaNombre = fila.insertCell();
//     celdaNombre.innerHTML = ListaAcademia[i]['nombre'];
//
//     var celdaCorreo = fila.insertCell();
//     celdaCorreo.innerHTML = ListaAcademia[i]['correo'];
//
//      var celdaTelefono = fila.insertCell();
//     celdaTelefono.innerHTML = ListaAcademia[i]['telefono'];
//
//
//     var celdaDireccion = fila.insertCell();
//     celdaDireccion.innerHTML = ListaAcademia[i]['direccion'];
//
//
//
//          var celdaEstado = fila.insertCell();
//     var celdaButtonActivarDesactivar = fila.insertCell(); //Para insertar el botoon luego
//     var buttonActivarDesactivar = document.createElement("button"); //El botton de activar y desactivar\
//     celdaButtonActivarDesactivar.appendChild(buttonActivarDesactivar); //lo annado a la celda
//     if (ListaAcademia[i].estado == 1) {
//       celdaEstado.innerHTML = "Activo";
//       buttonActivarDesactivar.innerHTML = "Desactivar";
//       buttonActivarDesactivar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
//       buttonActivarDesactivar.id = i;
//       buttonActivarDesactivar.addEventListener("click", function() {
//         desactivarAcademia(ListaAcademia[this.id].id_academia);
//       });
//
//     } else {
//       celdaEstado.innerHTML = "Desactivado";
//       buttonActivarDesactivar.innerHTML = "Activar";
//       buttonActivarDesactivar.style = 'background-color:#66b0cd; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
//       buttonActivarDesactivar.id = i;
//       buttonActivarDesactivar.addEventListener("click", function() {
//         activarAcademia(ListaAcademia[this.id].id_academia);
//       });
//     }
//
//        var celdaButtonModificar = fila.insertCell();
//     var buttonModificar = document.createElement("button");
//     buttonModificar.innerHTML = "Modificar";
//     buttonModificar.id = i;
//     buttonModificar.style = 'background-color:#2b3c4d;border:none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px;';
//     buttonModificar.addEventListener("click", function() {
//       modificarAcademias(ListaAcademia[this.id].id_academia);
//     });
//     celdaButtonModificar.appendChild(buttonModificar);
//
//
//   }
// }

function modificarAcademias(id) {
  location.href = 'ingresarAcademia.html?id' + '=' + id;

}
