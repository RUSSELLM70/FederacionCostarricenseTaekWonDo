function agregarAsistente(pAsistenteNuevo) {
	var peticion = $.ajax({
		url:'services/registrar_asistentes.php',
		type: 'post',
		contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
		dataType: 'json',
		async: false,
		data:{
			'pcedula': pAsistenteNuevo.sCedula,
			'pnombre': pAsistenteNuevo.sNombre,
			'papellido1': pAsistenteNuevo.sApellido1,
			'papellido2': pAsistenteNuevo.sApellido2,
			'pcorreo': pAsistenteNuevo.sCorreo,
			'ptelefono': pAsistenteNuevo.sTelefono,
			'pgenero': pAsistenteNuevo.sGenero,
			'pfechanacim': pAsistenteNuevo.sFecha,
			'pEstado': pAsistenteNuevo.nEstado
		},
		success: function(respuesta){
			console.log('Asistente registrado');
			alertify.success("Asistente registrado exitosamente")
		},
		error: function(respuesta, error){
			console.log(respuesta + 'error: ' + error);
		}
	});
}

function actualizarAsistente(pDatosAsistente){
	var peticion = $.ajax({
		url: 'services/modificar_asistente.php',
		type:'post',
		contentType:'application/x-www-form-urlencoded;charset=ISO-8859-15',
		dataType: 'json',
		async: false,
		data: {
			'pcedula': pDatosAsistente.sCedula,
			'pnombre': pDatosAsistente.sNombre,
			'papellido1': pDatosAsistente.sApellido1,
			'papellido2': pDatosAsistente.sApellido2,
			'pcorreo': pDatosAsistente.sCorreo,
			'ptelefono': pDatosAsistente.sTelefono,
			'pgenero': pDatosAsistente.sGenero,
			'pfechanacim': pDatosAsistente.sFecha,
			'pid': pDatosAsistente.id_asistente
		},
		success: function(respuesta) {
			alertify.success("Asistente modificado exitosamente");
		},
		error: function(respuesta,error){
			console.log(respuesta + 'error' + error);
		}
	});
}

function getListaAsistentes(){
	var aListaAsistentes = [];
	var peticion = $.ajax({
		url: "services/listar_asistentes.php",
		type: "get",
		data:{

		},
		contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
		dataType: 'json',
		async: false,

		success: function(respuesta){
			aListaAsistentes = respuesta;
		},
		error: function(request, error){
			aListaAsistentes = [];
		}
	});
	return aListaAsistentes;
}

function getListaAsistentesAproximacion(psFiltro){
	var aListaAsistentes = [];
	var peticion = $.ajax({
		url: "services/listar_asistentes_por_aproximacion.php",
		type: "get",
		data:{
			'filtro': psFiltro
		},
		contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
		dataType: 'json',
		async: false,

		success: function(respuesta){
			aListaAsistentes = respuesta;
		},

		error: function(request, error){
			aListaAsistentes = [];
		}
	});
	return aListaAsistentes;
}

function activar(pId){
	var peticion = $.ajax({
		url: "services/pa_activar_asistente.php",
		type: "post",
		contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
		dataType: 'json',
		async: false,
		data: {
			'pid': pId
		},
		success://function (respuesta){
			alertify.success("Asistente activado exitosamente"),
		//},
		error: function(request, error){}
	});
}
function desactivar(pId){
	var peticion = $.ajax({
		url: "services/pa_desactivar_asistente.php",
		type:"post",
		contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
		dataType: 'json',
		async: false,
		data:{
			'pid': pId
		},
		success: //function(respuesta){
			alertify.success("Asistente desactivado exitosamente"),
			//},
		error: function(request, error){}
	});
}