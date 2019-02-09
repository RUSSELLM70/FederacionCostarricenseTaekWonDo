imprimirTablaConFiltro();
document.querySelector('#txtAproximacion').addEventListener('keyup', imprimirTablaConFiltro);

function modificarLugar(id) {
  location.href = 'http://localhost/ingresar_General/indexLugar.html?id' + '=' + id;

}

function desactivarLugar(pid) {
  desactivar(pid);
  imprimirTablaConFiltro();
}

function activarLugar(pid) {
  activar(pid);
  imprimirTablaConFiltro();
}


function imprimirTablaConFiltro() {
  var sFiltro = document.querySelector('#txtAproximacion').value;
  var ListaLugares = obtenerListaLugaresAproximacion(sFiltro);



  var tbody = document.querySelector('#tblLug tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < ListaLugares.length; i++) {
    var fila = tbody.insertRow(i);

    var celdaNombre_lugar = fila.insertCell();
    celdaNombre_lugar.innerHTML = ListaLugares[i]['nombre_lugar'];

    var celdaNombre_encargado = fila.insertCell();
    celdaNombre_encargado.innerHTML = ListaLugares[i]['nombre_encargado'];

    var celdaCapacidad = fila.insertCell();
    celdaCapacidad.innerHTML = ListaLugares[i]['capacidad'];


    var celdaDireccion = fila.insertCell();
    celdaDireccion.innerHTML = ListaLugares[i]['direccion'];


    var celdaTelef = fila.insertCell();
    celdaTelef.innerHTML = ListaLugares[i]['telefono'];

    var celdaCorreo = fila.insertCell();
    celdaCorreo.innerHTML = ListaLugares[i]['correo'];









    var celdaEstado = fila.insertCell();
    var celdaButtonActivarDesactivar = fila.insertCell(); //Para insertar el botoon luego
    var buttonActivarDesactivar = document.createElement("button"); //El botton de activar y desactivar\
    celdaButtonActivarDesactivar.appendChild(buttonActivarDesactivar); //lo annado a la celda

    if (ListaLugares[i].estado == 1) {

      celdaEstado.innerHTML = "Activo";
      buttonActivarDesactivar.innerHTML = "Desactivar";
      buttonActivarDesactivar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
      buttonActivarDesactivar.id = i;
      buttonActivarDesactivar.addEventListener("click", function() {
        desactivarLugar(ListaLugares[this.id].id_lugar);
      });
    } else {
      celdaEstado.innerHTML = "Desactivado";
      buttonActivarDesactivar.innerHTML = "Activar";
      buttonActivarDesactivar.style = 'background-color:#66b0cd; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
      buttonActivarDesactivar.id = i;
      buttonActivarDesactivar.addEventListener("click", function() {
        activarLugar(ListaLugares[this.id].id_lugar);
      });
    }

    var celdaButtonModificar = fila.insertCell();
    var buttonModificar = document.createElement("button");
    buttonModificar.innerHTML = "Modificar";
    buttonModificar.id = i;
    buttonModificar.style = 'background-color:#2b3c4d; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
    buttonModificar.addEventListener("click", function() {
      modificarLugar(ListaLugares[this.id].id_lugar);
    });
    celdaButtonModificar.appendChild(buttonModificar);
  }
}



//
// function imprimirTablaLug() {
//   var ListaLugares = obtenerListaLugares();
//
//
//   var tbody = document.querySelector('#tblLug tbody');
//   tbody.innerHTML = '';
//   for (var i = 0; i < ListaLugares.length; i++) {
//     var fila = tbody.insertRow(i);
//
//     var celdaNombre_lugar = fila.insertCell();
//     celdaNombre_lugar.innerHTML = ListaLugares[i]['nombre_lugar'];
//
//     var celdaNombre_encargado = fila.insertCell();
//     celdaNombre_encargado.innerHTML = ListaLugares[i]['nombre_encargado'];
//
//     var celdaDireccion = fila.insertCell();
//     celdaDireccion.innerHTML = ListaLugares[i]['direccion'];
//
//
//     var celdaTelef = fila.insertCell();
//     celdaTelef.innerHTML = ListaLugares[i]['telefono'];
//
//     var celdaCorreo = fila.insertCell();
//     celdaCorreo.innerHTML = ListaLugares[i]['correo'];
//
//
//
//     var celdaCapacidad = fila.insertCell();
//     celdaCapacidad.innerHTML = ListaLugares[i]['capacidad'];
//
//
//     var celdaEstado = fila.insertCell();
//     var celdaButtonActivarDesactivar = fila.insertCell(); //Para insertar el botoon luego
//     var buttonActivarDesactivar = document.createElement("button"); //El botton de activar y desactivar\
//     celdaButtonActivarDesactivar.appendChild(buttonActivarDesactivar); //lo annado a la celda
//
//     if (ListaLugares[i].estado == 1) {
//
//       celdaEstado.innerHTML = "Activo";
//       buttonActivarDesactivar.innerHTML = "Desactivar";
//       buttonActivarDesactivar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
//       buttonActivarDesactivar.id = i;
//       buttonActivarDesactivar.addEventListener("click", function() {
//         desactivarLugar(ListaLugares[this.id].id_lugar);
//       });
//     } else {
//       celdaEstado.innerHTML = "Desactivado";
//       buttonActivarDesactivar.innerHTML = "Activar";
//       buttonActivarDesactivar.style = 'background-color:#66b0cd; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
//       buttonActivarDesactivar.id = i;
//       buttonActivarDesactivar.addEventListener("click", function() {
//         activarLugar(ListaLugares[this.id].id_lugar);
//       });
//     }
//
//     var celdaButtonModificar = fila.insertCell();
//     var buttonModificar = document.createElement("button");
//     buttonModificar.innerHTML = "Modificar";
//     buttonModificar.id = i;
//     buttonModificar.style = 'background-color:#2b3c4d; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
//     buttonModificar.addEventListener("click", function() {
//       modificarLugar(ListaLugares[this.id].id_lugar);
//     });
//     celdaButtonModificar.appendChild(buttonModificar);
//   }
// }
