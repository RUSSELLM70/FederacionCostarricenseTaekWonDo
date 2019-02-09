listaPatrocinadoresAproximacion();
document.querySelector('#filtro').addEventListener('onkeyup', listaPatrocinadoresAproximacion);



function modificarPatrocinador(id) {
  location.href = 'ingresarPatrocinador.html?id' + '=' + id;

}

function desactivarPatrocinador(pid) {
  desactivar(pid);
  listaPatrocinadoresAproximacion();
}

function activarPatrocinador(pid) {
  activar(pid);
  listaPatrocinadoresAproximacion();
}

function listaPatrocinadoresAproximacion() {
  var sFiltro = document.querySelector('#filtro').value;
  var listaPatrocinadores = getListaPatrocinadoresAproximacion(sFiltro);

  var tbody = document.querySelector('#tblListar tbody');
  tbody.innerHTML = '';

  for (var i = 0; i < listaPatrocinadores.length; i++) {
    var fila = tbody.insertRow(i);

    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = listaPatrocinadores[i].nombre_patrocinador;

    var celdaNombreSociedadAnonima = fila.insertCell();
    celdaNombreSociedadAnonima.innerHTML = listaPatrocinadores[i].nombre_sociedad_anonima;

    var celdaCorreo = fila.insertCell();
    celdaCorreo.innerHTML = listaPatrocinadores[i].correo;

    var celdaTelefono = fila.insertCell();
    celdaTelefono.innerHTML = listaPatrocinadores[i].tipo_patrocinio;

    var celdaTipoDePatrocinio = fila.insertCell();
    celdaTipoDePatrocinio.innerHTML = listaPatrocinadores[i].telefono;

    var celdaMonto = fila.insertCell();
    celdaMonto.innerHTML = listaPatrocinadores[i].monto;

    var celdaDescripcionPatrocinador = fila.insertCell();
    celdaDescripcionPatrocinador.innerHTML = listaPatrocinadores[i].descripcion_producto;

    var celdaEstado = fila.insertCell();
    var celdaButtonActivarDesactivar = fila.insertCell(); //Para insertar el botoon luego
    var buttonActivarDesactivar = document.createElement("button"); //El botton de activar y desactivar\
    celdaButtonActivarDesactivar.appendChild(buttonActivarDesactivar); //lo annado a la celda
    if (listaPatrocinadores[i].estado == 1) {

      celdaEstado.innerHTML = "Activo";
      buttonActivarDesactivar.innerHTML = "Desactivar";
      buttonActivarDesactivar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
      buttonActivarDesactivar.id = i;
      buttonActivarDesactivar.addEventListener("click", function() {
        desactivarPatrocinador(listaPatrocinadores[this.id].id_patrocinador);
      });

    } else {
      celdaEstado.innerHTML = "Desactivado";
      buttonActivarDesactivar.innerHTML = "Activar";
      buttonActivarDesactivar.style = 'background-color:#66b0cd; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
      buttonActivarDesactivar.id = i;
      buttonActivarDesactivar.addEventListener("click", function() {
        activarPatrocinador(listaPatrocinadores[this.id].id_patrocinador);
      });
    }
    var celdaButtonModificar = fila.insertCell();
    var buttonModificar = document.createElement("button");
    buttonModificar.innerHTML = "Modificar";
    buttonModificar.id = i;
    buttonModificar.style = 'background-color:#2b3c4d; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
    buttonModificar.addEventListener("click", function() {
      modificarPatrocinador(listaPatrocinadores[this.id].id_patrocinador);
    });
    celdaButtonModificar.appendChild(buttonModificar);
  }
}
