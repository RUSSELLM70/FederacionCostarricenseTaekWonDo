listaAsistentesAproximacion();

document.querySelector('#txtAproximacion').addEventListener('onkeyup', listaAsistentesAproximacion);

function modificarAsistente(pid){
	location.href = 'registrarAsistente.html?id' + '=' + pid;
}

function desactivarAsistente(pid){
	desactivar(pid);
	listaAsistentesAproximacion();
}
function activarAsistente(pid){
	activar(pid);
	listaAsistentesAproximacion();
}
function listaAsistentesAproximacion(){
	var sFiltro = document.querySelector('#txtAproximacion').value;
	var listaAsistentes = getListaAsistentesAproximacion(sFiltro);

	var tbody = document.querySelector('#tblListar tbody');
	tbody.innerHTML = '';
	for (var i = 0; i < listaAsistentes.length; i++){
		var fila = tbody. insertRow(i);

		var celdaCedula = fila.insertCell();
		celdaCedula.innerHTML = listaAsistentes[i].cedula;

		var celdaNombre = fila.insertCell();
		celdaNombre.innerHTML = listaAsistentes[i].nombre;

		var celdaApellido1 = fila.insertCell();
		celdaApellido1.innerHTML = listaAsistentes[i].apellido1;

		var celdaApellido2 = fila.insertCell();
		celdaApellido2.innerHTML = listaAsistentes[i].apellido2;

		var celdaCorreo = fila.insertCell();
		celdaCorreo.innerHTML = listaAsistentes[i].correo;

		var celdaTelefono = fila.insertCell();
		celdaTelefono.innerHTML = listaAsistentes[i].telefono;

		var celdaGenero = fila.insertCell();
		celdaGenero.innerHTML = listaAsistentes[i].genero;

		var celdaFecha = fila.insertCell();
		var fechaNacimiento = new Date (listaAsistentes[i].fecha_nacimiento);
		var dia = Number(fechaNacimiento.getDate() + 1);
		var mes = Number(fechaNacimiento.getMonth() + 1);
		var anno = fechaNacimiento.getFullYear();

		if (dia < 10) {
			dia = '0' + dia;
		}
		if (mes < 10) {
			mes = '0' + mes;
		}
		celdaFecha.innerHTML = dia + '-' + mes + '-' + anno;

	var celdaEstado = fila.insertCell();
	var celdaButtonActivarDesactivar = fila.insertCell();
	var buttonActivarDesactivar = document.createElement("button");
	celdaButtonActivarDesactivar.appendChild(buttonActivarDesactivar);
	if(listaAsistentes[i].estado == 1){
		celdaEstado.innerHTML = "Activo";
		buttonActivarDesactivar.innerHTML = "Desactivar";
		buttonActivarDesactivar.style = 'background-color:#f24046; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
		buttonActivarDesactivar.id = i;
		buttonActivarDesactivar.addEventListener("click", function() {
			desactivarAsistente(listaAsistentes[this.id].id_asistente);
		});
	}else{

		celdaEstado.innerHTML = "Desactivado";
		buttonActivarDesactivar.innerHTML = "Activar";
		buttonActivarDesactivar.style = 'background-color:#66b0cd; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
		buttonActivarDesactivar.id = i;
		buttonActivarDesactivar.addEventListener("click", function() {
			activarAsistente(listaAsistentes[this.id].id_asistente);
		});
	}
	var celdaButtonModificar = fila.insertCell();
    var buttonModificar = document.createElement("button");
    buttonModificar.innerHTML = "Modificar";
    buttonModificar.id = i;
    buttonModificar.style = 'background-color:#2b3c4d; border: none; border-radius: 3px; color: white; width: 90px; padding: 3px 0px';
    buttonModificar.addEventListener("click", function() {
    	modificarAsistente(listaAsistentes[this.id].id_asistente);
    });
    celdaButtonModificar.appendChild(buttonModificar);
    }
}
