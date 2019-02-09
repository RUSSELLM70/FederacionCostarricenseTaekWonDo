listaAlumnosAproximacion();
document.querySelector('#filtro').addEventListener('onkeyup', listaAlumnosAproximacion);

// function listaAlumnos() {
//   var listaAlumnos = getListaAlumnos();
//
//   var tbody = document.querySelector('#tblListar tbody');
//   tbody.innerHTML = '';
//   for (var i = 0; i < listaAlumnos.length; i++) {
//     var fila = tbody.insertRow(i);
//
//     var celdaAcademia = fila.insertCell();
//     celdaAcademia.innerHTML = listaAlumnos[i].academia;
//
//     var celdaProfesor = fila.insertCell();
//     celdaProfesor.innerHTML = listaAlumnos[i].profesor;
//
//     var celdaNombre = fila.insertCell();
//     celdaNombre.innerHTML = listaAlumnos[i].nombre;
//
//     var celdaPApellido = fila.insertCell();
//     celdaPApellido.innerHTML = listaAlumnos[i].apellido1;
//
//     var celdaSApellido = fila.insertCell();
//     celdaSApellido.innerHTML = listaAlumnos[i].apellido2;
//
//     var celdaCorreoElectrónico = fila.insertCell();
//     celdaCorreoElectrónico.innerHTML = listaAlumnos[i].correo;
//
//     var celdaCedula = fila.insertCell();
//     celdaCedula.innerHTML = listaAlumnos[i].cedula;
//
//     var celdaTelefono = fila.insertCell();
//     celdaTelefono.innerHTML = listaAlumnos[i].telefono;
//
//     var celdaEdad = fila.insertCell();
//     celdaEdad.innerHTML = listaAlumnos[i].edad;
//
//     var celdaGenero = fila.insertCell();
//     celdaGenero.innerHTML = listaAlumnos[i].genero;
//
//     var celdaFN = fila.insertCell();
//     var fechaNacimiento = new Date(listaAlumnos[i].fecha_nacimiento);
//     var dia = Number(fechaNacimiento.getDate() + 1);
//     var mes = Number(fechaNacimiento.getMonth() + 1);
//     var anno = fechaNacimiento.getFullYear();
//     if (dia < 10) {
//       dia = '0' + dia;
//     }
//     if (mes < 10) {
//       mes = '0' + mes;
//     }
//     celdaFN.innerHTML = dia + '-' + mes + '-' + anno;
//
//
//
//     // var celdaFN = fila.insertCell();
//     // celdaFN.innerHTML = listaAlumnos[i].fecha_nacimiento;
//
//     var celdaPeso = fila.insertCell();
//     celdaPeso.innerHTML = listaAlumnos[i].peso;
//
//     var celdaAltura = fila.insertCell();
//     celdaAltura.innerHTML = listaAlumnos[i].altura;
//
//     var celdaGrado = fila.insertCell();
//     celdaGrado.innerHTML = listaAlumnos[i].grado;
//
//     var celdaCategoriaEdad = fila.insertCell();
//     celdaCategoriaEdad.innerHTML = listaAlumnos[i].categoria_edad;
//
//     var celdaCategoriaPeso = fila.insertCell();
//     celdaCategoriaPeso.innerHTML = listaAlumnos[i].categoria_peso;
//
//     var celdaCTP = fila.insertCell();
//     celdaCTP.innerHTML = listaAlumnos[i].torneos_participados;
//
//     var celdaCTG = fila.insertCell();
//     celdaCTG.innerHTML = listaAlumnos[i].torneos_ganados;
//
//     var celdaCEP = fila.insertCell();
//     celdaCEP.innerHTML = listaAlumnos[i].exhibiciones_participadas;
//
//     var celdaDireccion = fila.insertCell();
//     celdaDireccion.innerHTML = listaAlumnos[i].direccion;
//
//     var celdaButtonModificar = fila.insertCell();
//     //var celdaButtonActivar = fila.insertCell();
//     //var celdaButtonDesactivar = fila.insertCell();
//     var buttonModificar = document.createElement("button");
//     buttonModificar.innerHTML = "Modificar";
//     buttonModificar.id = i;
//     buttonModificar.style = 'background-color:#2b3c4d; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
//     buttonModificar.addEventListener("click", function() {
//       modificarAlumno(listaAlumnos[this.id].id_alumno);
//     });
//     celdaButtonModificar.appendChild(buttonModificar);

// var buttonActivar = document.createElement("button");
// buttonActivar.innerHTML = "Activar";
// buttonActivar.style = 'background-color:#66b0cd; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
// buttonActivar.addEventListener("click", function() {
//   activarAlumno(listaAlumnos[indice]);
// });
// celdaButtonActivar.appendChild(buttonActivar);
//
// var buttonDesactivar = document.createElement("button");
// buttonDesactivar.innerHTML = "Desactivar";
// buttonDesactivar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
// buttonDesactivar.addEventListener("click", function() {
//   desactivarAlumno(listaAlumnos[indice]);
// });
// celdaButtonDesactivar.appendChild(buttonDesactivar);

//}
//}

function modificarAlumno(id) {
  location.href = 'ingresarAlumno.html?id' + '=' + id;

}

function desactivarAlumno(pid) {
  desactivar(pid);
  listaAlumnosAproximacion();
}

function activarAlumno(pid) {
  activar(pid);
  listaAlumnosAproximacion();
}

function listaAlumnosAproximacion() {
  var sFiltro = document.querySelector('#filtro').value;
  var listaAlumnos = getListaAlumnosAproximacion(sFiltro);


  var tbody = document.querySelector('#tblListar tbody');
  tbody.innerHTML = '';

  for (var i = 0; i < listaAlumnos.length; i++) {
    var fila = tbody.insertRow(i);

    var celdaAcademia = fila.insertCell();
    celdaAcademia.innerHTML = listaAlumnos[i].nombre_academia;

    var celdaProfesor = fila.insertCell();
    celdaProfesor.innerHTML = listaAlumnos[i].nombre_profesor;

    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = listaAlumnos[i].nombre;

    var celdaPApellido = fila.insertCell();
    celdaPApellido.innerHTML = listaAlumnos[i].apellido1;

    var celdaSApellido = fila.insertCell();
    celdaSApellido.innerHTML = listaAlumnos[i].apellido2;

    var celdaCorreoElectrónico = fila.insertCell();
    celdaCorreoElectrónico.innerHTML = listaAlumnos[i].correo;

    var celdaCedula = fila.insertCell();
    celdaCedula.innerHTML = listaAlumnos[i].cedula;

    var celdaTelefono = fila.insertCell();
    celdaTelefono.innerHTML = listaAlumnos[i].telefono;

    var celdaEdad = fila.insertCell();
    celdaEdad.innerHTML = listaAlumnos[i].edad;

    var celdaGenero = fila.insertCell();
    celdaGenero.innerHTML = listaAlumnos[i].genero;

    var celdaFN = fila.insertCell();
    celdaFN.innerHTML = listaAlumnos[i].fecha_nacimiento;

    var celdaPeso = fila.insertCell();
    celdaPeso.innerHTML = listaAlumnos[i].peso;

    var celdaAltura = fila.insertCell();
    celdaAltura.innerHTML = listaAlumnos[i].altura;

    var celdaGrado = fila.insertCell();
    celdaGrado.innerHTML = listaAlumnos[i].grado;

    var celdaCategoriaEdad = fila.insertCell();
    celdaCategoriaEdad.innerHTML = listaAlumnos[i].categoria_edad;

    var celdaCategoriaPeso = fila.insertCell();
    celdaCategoriaPeso.innerHTML = listaAlumnos[i].categoria_peso;

    var celdaCTP = fila.insertCell();
    celdaCTP.innerHTML = listaAlumnos[i].torneos_participados;

    var celdaCTG = fila.insertCell();
    celdaCTG.innerHTML = listaAlumnos[i].torneos_ganados;

    var celdaCEP = fila.insertCell();
    celdaCEP.innerHTML = listaAlumnos[i].exhibiciones_participadas;

    var celdaDireccion = fila.insertCell();
    celdaDireccion.innerHTML = listaAlumnos[i].direccion;

    var celdaEstado = fila.insertCell();
    var celdaButtonActivarDesactivar = fila.insertCell(); //Para insertar el botoon luego
    var buttonActivarDesactivar = document.createElement("button"); //El botton de activar y desactivar\
    celdaButtonActivarDesactivar.appendChild(buttonActivarDesactivar); //lo annado a la celda
    if (listaAlumnos[i].estado == 1) {

      celdaEstado.innerHTML = "Activo";
      buttonActivarDesactivar.innerHTML = "Desactivar";
      buttonActivarDesactivar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
      buttonActivarDesactivar.id = i;
      buttonActivarDesactivar.addEventListener("click", function() {
        desactivarAlumno(listaAlumnos[this.id].id_alumno);
      });
    } else {
      celdaEstado.innerHTML = "Desactivado";
      buttonActivarDesactivar.innerHTML = "Activar";
      buttonActivarDesactivar.style = 'background-color:#66b0cd; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
      buttonActivarDesactivar.id = i;
      buttonActivarDesactivar.addEventListener("click", function() {
        activarAlumno(listaAlumnos[this.id].id_alumno);
      });
    }
    var celdaButtonModificar = fila.insertCell();
    var buttonModificar = document.createElement("button");
    buttonModificar.innerHTML = "Modificar";
    buttonModificar.id = i;
    buttonModificar.style = 'background-color:#2b3c4d; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
    buttonModificar.addEventListener("click", function() {
      modificarAlumno(listaAlumnos[this.id].id_alumno);
    });
    celdaButtonModificar.appendChild(buttonModificar);

  }
}
