construirPagina(verificarSesion());
listaProfesoresAproximacion();
// document.querySelector('#btnlistar').addEventListener('click', mostrarProfesores);
document.querySelector('#txtFiltro').addEventListener('onkeyup', listaProfesoresAproximacion);

function modificarProfesor(pid) {
  location.href = 'ingresarProfesor.html?id' + '=' + pid;
}

function desactivarProfesor(pid) {
  desactivar(pid);
  listaProfesoresAproximacion();
}

function activarProfesor(pid) {
  activar(pid);
  listaProfesoresAproximacion();
}

function listaProfesoresAproximacion() {
  var sFiltro = document.querySelector('#txtFiltro').value;
  var listaProfesores = getListaProfesoresAproximacion(sFiltro);


  var tbody = document.querySelector('#tblListar tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < listaProfesores.length; i++) {
    var fila = tbody.insertRow(i);
    var celdaAcademia = fila.insertCell();
    celdaAcademia.innerHTML = listaProfesores[i].nombre;

    var celdaPrimerNombre = fila.insertCell();
    celdaPrimerNombre.innerHTML = listaProfesores[i].nombre1;

    var celdaSegundoNombre = fila.insertCell();
    celdaSegundoNombre.innerHTML = listaProfesores[i].nombre2;

    var celdaPrimerApellido = fila.insertCell();
    celdaPrimerApellido.innerHTML = listaProfesores[i].apellido1;

    var celdaSegundoApellido = fila.insertCell();
    celdaSegundoApellido.innerHTML = listaProfesores[i].apellido2;

    var celdaCedula = fila.insertCell();
    celdaCedula.innerHTML = listaProfesores[i].cedula;

    var celdaTelefono = fila.insertCell();
    celdaTelefono.innerHTML = listaProfesores[i].telefono;

    var celdaCorreo = fila.insertCell();
    celdaCorreo.innerHTML = listaProfesores[i].correo;

    var celdaGenero = fila.insertCell();
    celdaGenero.innerHTML = listaProfesores[i].genero;

    var celdaNacimiento = fila.insertCell();
    var fechaNacimiento = new Date(listaProfesores[i].fecha);
    var dia = Number(fechaNacimiento.getDate() + 1);
    var mes = Number(fechaNacimiento.getMonth() + 1);
    var anno = fechaNacimiento.getFullYear();
    if (dia < 10) {
      dia = '0' + dia;
    }
    if (mes < 10) {
      mes = '0' + mes;
    }
    celdaNacimiento.innerHTML = dia + '-' + mes + '-' + anno;

    var celdaEstado = fila.insertCell();
    var celdaButtonActivarDesactivar = fila.insertCell(); //Para insertar el botoon luego
    var buttonActivarDesactivar = document.createElement("button"); //El botton de activar y desactivar\
    celdaButtonActivarDesactivar.appendChild(buttonActivarDesactivar); //lo annado a la celda
    if (listaProfesores[i].estado == 1) {
      celdaEstado.innerHTML = "Activo";
      buttonActivarDesactivar.innerHTML = "Desactivar";
      buttonActivarDesactivar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
      buttonActivarDesactivar.id = i;
      buttonActivarDesactivar.addEventListener("click", function() {
        desactivarProfesor(listaProfesores[this.id].id_profesor);
      });

    } else {
      celdaEstado.innerHTML = "Desactivado";
      buttonActivarDesactivar.innerHTML = "Activar";
      buttonActivarDesactivar.style = 'background-color:#66b0cd; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
      buttonActivarDesactivar.id = i;
      buttonActivarDesactivar.addEventListener("click", function() {
        activarProfesor(listaProfesores[this.id].id_profesor);
      });
    }
    var celdaButtonModificar = fila.insertCell();
    var buttonModificar = document.createElement("button");
    buttonModificar.innerHTML = "Modificar";
    buttonModificar.id = i;
    buttonModificar.style = 'background-color:#2b3c4d; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
    buttonModificar.addEventListener("click", function() {
      modificarProfesor(listaProfesores[this.id].id_profesor);
    });
    celdaButtonModificar.appendChild(buttonModificar);
  }
}

function construirPagina(pRol) {
  switch (pRol) {
    case -1:
      destruirSesion();
      window.location = 'login.html?id' + '=' + -1;
      break;
    case 0:
      break;
    case 1:
      break;
    case 2:
      destruirSesion();
      window.location = 'login.html?id' + '=' + -2;
      break;
    case '3':
      destruirSesion();
      window.location = 'login.html?id' + '=' + -2;
      break;
  }
}
