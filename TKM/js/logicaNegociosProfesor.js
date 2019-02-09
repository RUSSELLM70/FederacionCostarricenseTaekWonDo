/*********************************************************************/
/*******************LOGICA DEL PROFESOR ****************************/
/*********************************************************************/

function agregarProfesor(pProfesorNuevo) {
  var peticion = $.ajax({
    url: 'services/registrar_profesor.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pid_academia': pProfesorNuevo.sAcademia,
      'pnombre1': pProfesorNuevo.sNombre1,
      'pnombre2': pProfesorNuevo.sNombre2,
      'papellido1': pProfesorNuevo.sApellido1,
      'papellido2': pProfesorNuevo.sApellido2,
      'pcedula': pProfesorNuevo.sTelefono,
      'ptelefono': pProfesorNuevo.sCedula,
      'pcorreo': pProfesorNuevo.sCorreo,
      'pgenero': pProfesorNuevo.sGenero,
      'pfecha': pProfesorNuevo.sFecha,
      'pestado': pProfesorNuevo.nEstado
    },
    success: function(respuesta) {
      console.log('Se registro satisfactoriamente');
      alertify.success("Su registro se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}

function actualizarProfesor(pDatosProfesor) {
  var peticion = $.ajax({
    url: 'services/modificar_profesor.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pid_academia': pDatosProfesor.sAcademia,
      'pnombre1': pDatosProfesor.sNombre1,
      'pnombre2': pDatosProfesor.sNombre2,
      'papellido1': pDatosProfesor.sApellido1,
      'papellido2': pDatosProfesor.sApellido2,
      'pcedula': pDatosProfesor.sTelefono,
      'ptelefono': pDatosProfesor.sCedula,
      'pcorreo': pDatosProfesor.sCorreo,
      'pgenero': pDatosProfesor.sGenero,
      'pfecha': pDatosProfesor.sFecha,
      'pid': pDatosProfesor.id_profesor
    },
    success: function(respuesta) {
      alertify.success("Su modificacion se a realizado exitosamente")
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}

function getListaProfesores() {
  var aListaProfesores = [];
  var peticion = $.ajax({
    url: "services/pa_listar_profesores.php",
    type: "get",
    data: {
      //aqui se ponen los parametros que se envian al php
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaProfesores = respuesta;

    },
    error: function(request, error) {
      aListaProfesores = [];
    }
  });
  return aListaProfesores;
}

function getListaProfesoresAproximacion(psFiltro) {
  var aListaProfesores = [];
  var peticion = $.ajax({
    url: "services/pa_listar_profesores_por_aproximacion_nombre.php",
    type: "get",
    data: {
      'filtro': psFiltro
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaProfesores = respuesta;

    },
    error: function(request, error) {
      aListaProfesores = [];
    }
  });
  return aListaProfesores;
}

function getDatosProfesorPorId(pid) {
  var aListaProfesores = [];
  var peticion = $.ajax({
    url: "services/pa_datos_profesor_por_id.php",
    type: "get",
    data: {
      'id': pid
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {

      aListaProfesores = respuesta;

    },
    error: function(request, error) {
      aListaProfesores = [];
    }
  });
  return aListaProfesores;
}


function getListarAcademias() {
  var aListaAcademias = [];
  var peticion = $.ajax({
    url: "services/listarAcademia.php",
    type: "get",
    data: {
      //aqui se ponen los parametros que se envian al php
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',
    async: false,

    success: function(respuesta) {
      aListaAcademias = respuesta;

    },
    error: function(request, error) {
      aListaAcademias = [];
    }
  });
  return aListaAcademias;
}


function activar(pId) {
  //alertify.success("Profesor activado exitosamente")
  var peticion = $.ajax({
    url: "services/pa_activar_profesor.php",
    type: "post",
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pid': pId
    },

    success: //function(respuesta){
      alertify.success("Profesor activado exitosamente"),
    //},
    error: function(request, error) {}
  });
}

function desactivar(pId) {
  var peticion = $.ajax({
    url: "services/pa_desactivar_profesor.php",
    type: "post",
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pid': pId
    },

    success: //function(respuesta){
      alertify.success("Profesor desactivado exitosamente"),
    //},
    error: function(request, error) {}
  });
}

function agregarUsuario(pUsuarioNuevo) {
  var peticion = $.ajax({
    url: 'services/registrar_usuario.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType: 'json',
    async: false,
    data: {
      'pnombre': pUsuarioNuevo.sNombre,
      'pcorreo': pUsuarioNuevo.sCorreo,
      'pcontrasenna': pUsuarioNuevo.sContrasenna,
      'pestado': pUsuarioNuevo.nEstado,
      'prol': pUsuarioNuevo.nRol,
    },
    success: function(respuesta) {
      console.log('Se registro satisfactoriamente');
    },
    error: function(respuesta, error) {
      console.log(respuesta + 'error: ' + error);

    }
  });
}

function verificarCorreoExistente(pCorreo) {
  var encontrado = false;
  var peticion = $.ajax({
    url: "services/validar_correo_existente.php",
    type: "get",
    dataType: 'json',
    async: false,
    data: {
      'pcorreo': pCorreo
    },
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",


    success: function(respuesta) {
      if (respuesta != '') {
        document.querySelector('#txtForCorreo').classList.remove('hidden');
        encontrado = true;
      }
      if (respuesta == '') {
        document.querySelector('#txtForCorreo').classList.add('hidden');
      }

    },
    error: function(request, error) {}
  });
  return encontrado;
}
